FROM node:16-alpine as builder
WORKDIR /app

COPY package*.json /app/

RUN yarn install

COPY ./ /app/

ENV REACT_APP_SOCKET_URL=http://89.223.125.234/

RUN yarn build


FROM nginx:1.23.1-alpine as runner
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY server.conf /etc/nginx/conf.d/default.conf

