FROM node:24.11.1-alpine AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache gcompat

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.ts ./
COPY tsconfig.json ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./
COPY tailwind.config.ts ./
COPY components.json ./
COPY next-env.d.ts ./

COPY app ./app
COPY components ./components
COPY config ./config
COPY lib ./lib
COPY public ./public
COPY types ./types

RUN npm run build

FROM node:24.11.1-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

RUN apk add --no-cache gcompat wget

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["node", "server.js"]
