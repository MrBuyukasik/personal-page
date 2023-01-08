FROM --platform=linux/amd64 node:18.12.0-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi


# Rebuild the source code only when needed
FROM --platform=linux/amd64 node:18.12.0-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]


# # Production image, copy all the files and run next
# FROM node:18.12.0-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

# # RUN addgroup --system --gid 1001 nodejs
# # RUN adduser --system --uid 1001 nextjs

# COPY --from=builder /app/public ./public

# COPY --from=builder  /app/.next/standalone ./
# COPY --from=builder  /app/.next/static ./.next/static

# EXPOSE 3000

# ENV PORT 3000

# CMD ["node", "server.js"]