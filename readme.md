#

```sh

docker run \
  --name nginx-proxy \
  -p 80:8081 \
  -v /nginx-proxy/data:/etc/nginx:ro \
  -v /nginx-proxy/lua:/usr/local/openresty/nginx/lua:ro \
  ghcr.io/danydodson/nginx-proxy

```