# Stage 1: Install dependencies
FROM node:20-alpine3.21 AS deps
RUN apk upgrade --no-cache && apk add --no-cache libc6-compat
WORKDIR /app

# Copy dependency specifications
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Build the application
FROM node:20-alpine3.21 AS builder
WORKDIR /app
RUN apk upgrade --no-cache
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Stage 3: Production runner stage
FROM node:20-alpine3.21 AS runner
WORKDIR /app
RUN apk upgrade --no-cache

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-privileged system user for running application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set up runtime directories and correct ownership
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the standalone build artifacts from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
