FROM openresty/openresty:alpine-fat

RUN apk add --no-cache git && \
  rm -rf /etc/nginx/* && \
  mkdir -p /var/log/nginx

COPY data/* /etc/nginx/
COPY certs/dhparam.pem /etc/ssl/certs/dhparam.pem
COPY certs/seesee.space.crt /etc/ssl/certs/seesee.space.crt
COPY certs/seesee.space.key /etc/ssl/certs/seesee.space.key
COPY lua/* /usr/local/openresty/nginx/lua/

RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-jwt
RUN /usr/local/openresty/luajit/bin/luarocks install lua-resty-cookie
RUN /usr/local/openresty/luajit/bin/luarocks install luajson

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stdout /var/log/nginx/error.log

EXPOSE 8080

ENTRYPOINT ["/usr/local/openresty/bin/openresty", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]