FROM node:24.11.1-alpine AS builder

WORKDIR /app

ARG NODE_ENV
ARG PORT
ARG NEXT_TELEMETRY_DISABLED

RUN apk add --no-cache gcompat

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.ts ./
COPY tsconfig.json ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./
COPY tailwind.config.ts ./
COPY components.json ./

COPY src ./src
COPY public ./public

RUN npm run build

FROM node:24.11.1-alpine AS runner

RUN apk add --no-cache gcompat wget

WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

RUN chown -R node:node /app
USER node

CMD ["node", "server.js"]
