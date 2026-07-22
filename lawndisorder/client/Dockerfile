FROM docker.io/nginx:stable
EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./out/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
# dsx move daemon off to config file
