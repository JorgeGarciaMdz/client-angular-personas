FROM node:alpine as build
RUN apk update
RUN apk add npm
WORKDIR /app 
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/client /usr/share/nginx/html
# add path_fuente path_destino_container
# docker build -t name-image . (. es el path donde estoy parado)