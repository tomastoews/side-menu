FROM nginx:alpine

RUN mkdir usr/share/nginx/html/sidemenu
COPY /dist/ usr/share/nginx/html/sidemenu

EXPOSE 80