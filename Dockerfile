# build
FROM node:20.11.0 as build

WORKDIR /app

ADD package*.json .
RUN npm ci
ADD . .
RUN npm run postinstall
RUN npm run build


# runtime
FROM node:20.11.0

WORKDIR /app

COPY --from=build /app/.output .

ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]
