FROM node:lts-alpine as prebuild
WORKDIR /opt/app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine as build
WORKDIR /opt/app
COPY --from=prebuild /opt/app/build ./build

FROM nginx:stable-alpine
COPY --from=build /opt/app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80