# 
FROM node:12.18-alpine as client

WORKDIR /usr/src/app

COPY web-client/package*.json web-client/yarn.lock ./
RUN yarn --cwd web-client --pure-lockfile --silent
COPY web-client/ ./
RUN yarn build

# 
FROM openresty/openresty:alpine-fat

LABEL "com.datadoghq.ad.check_names"='["nginx"]'
LABEL "com.datadoghq.ad.init_configs"='[{}]'
LABEL "com.datadoghq.ad.instances"='[{"nginx_status_url": "http://%%host%%:%%port%%/nginx_status"}]'
LABEL "com.datadoghq.ad.logs"='[{"source": "nginx", "service": "webapp"}]'

RUN apk add --no-cache git && rm -rf /etc/nginx/* && mkdir -p /var/log/nginx

COPY nginx-proxy/data/* /etc/nginx/
COPY nginx-proxy/lua/* /usr/local/openresty/nginx/lua/
COPY --from=client /usr/src/app/build /usr/local/openresty/nginx/html

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt && /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie && /usr/local/openresty/luajit/bin/luarocks install luajson && ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stdout /var/log/nginx/error.log

EXPOSE 80

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
