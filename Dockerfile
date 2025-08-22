# syntax=docker/dockerfile:1


# 1) Base image
FROM node:22-bookworm-slim AS base
ENV NODE_ENV=production \
NEXT_TELEMETRY_DISABLED=1


# 2) Deps layer — install only prod deps for runtime (smaller)
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
npm ci --omit=dev


# 3) Builder — needs dev deps to compile
FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
npm ci
# copy source code
COPY . .
# build Next.js
RUN npm run build


# 4) Runtime — copy standalone output only, fix cache perms
FROM base AS runner
WORKDIR /app
# create non-root user
RUN useradd -m -s /bin/bash nextjs
# pre-create cache dir and ensure writable
RUN mkdir -p /app/.next/cache && chown -R nextjs:nextjs /app/.next


# copy minimal server & assets with correct ownership
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public


EXPOSE 3004
ENV PORT=3004
# optional: move Next cache to /tmp (also writable)
# ENV NEXT_CACHE_DIR=/tmp/next-cache
# RUN mkdir -p /tmp/next-cache && chown -R nextjs:nextjs /tmp/next-cache


USER nextjs
CMD ["node", "server.js"]