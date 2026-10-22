FROM node:26.12.1-alpine AS build

WORKDIR /app

RUN npm install --global pnpm@11.5.2

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG SITE_URL=https://chronark.com
ENV SITE_URL=$SITE_URL
RUN pnpm build

FROM caddy:alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 8080
