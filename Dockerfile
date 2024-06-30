FROM node:20-alpine as prebuild
WORKDIR /opt/app
COPY ./package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:20-alpine as build
WORKDIR /opt/app
COPY --from=prebuild /opt/app/build ./build

FROM nginx:stable-alpine
COPY --from=build /opt/app/build /usr/share/nginx/html
COPY ${NGINX_EXTERNAL_PATH_TO_CONFIG} ${NGINX_INTERNAL_PATH_TO_CONFIG}
EXPOSE ${NGINX_PORT}