
## Install your SSL certificate in Nginx

DO NOT use the certs files in ~/.acme.sh/ folder, they are for internal use only, the folder structure may change in the future

Create a folder to store your certs in production

```bash
mkdir -p /etc/nginx/acme.sh/seesee.space
```

Then use the command –install-cert to copy your certs with acme.sh :

### RSA certs

```bash
acme.sh --install-cert -d seesee.space \
--cert-file /etc/nginx/acme.sh/seesee.space/cert.pem \
--key-file /etc/nginx/acme.sh/seesee.space/key.pem \
--fullchain-file /etc/nginx/acme.sh/seesee.space/fullchain.pem \
--reloadcmd "systemctl reload nginx.service"
```

### ECDSA certs

```bash
acme.sh --install-cert -d seesee.space --ecc \
--cert-file /etc/nginx/acme.sh/seesee.space/cert.pem \
--key-file /etc/nginx/acme.sh/seesee.space/key.pem \
--fullchain-file /etc/nginx/acme.sh/seesee.space/fullchain.pem \
--reloadcmd "systemctl reload nginx.service"
```

Then you just have to add the certificates in your nginx configuration.
Create two files, the first one to add your SSL certificate with the following content :

```bash
/var/www/seesee.space/conf/nginx/ssl.conf
```

```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
ssl on;
ssl_certificate /etc/nginx/acme.sh/seesee.space/fullchain.pem;
ssl_certificate_key /etc/nginx/acme.sh/seesee.space/key.pem;
ssl_trusted_certificate /etc/nginx/acme.sh/seesee.space/cert.pem;
```

And the another one for the redirection from http to https :

```bash
/etc/nginx/conf.d/forcessl-seesee-space.conf
```

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name www.seesee.space seesee.space;
  return 301 https://seesee.space$request_uri;
}
```
<br>

## Certificates Renewal
All the certs will be renewed automatically every 60 days. But you can also force renewal using the following commands :

### RSA certs

```bash
acme.sh --renew -d seesee.space --force
```

### ECDSA certs

```bash
acme.sh --renew -d seesee.space --force --ecc
```

### Method 1  
Use the same folder to validate all acme challenges.
At first create a new file acme.conf in the folder /etc/nginx/common/ with the following content :

```nginx
location /.well-known/acme-challenge/ {
  alias /var/www/html/.well-known/acme-challenge/;
}
```

Then set www-data as owner of the folder /var/www/html :

```bash
chown -R www-data:www-data /var/www/html
```

The last step is to include acme.conf in your nginx vhost, by adding the following line :

```bash
include common/acme.conf;
```

Reload nginx with the command service nginx reload and you can now issue your first cert with acme.sh :

#### domain

```bash
acme.sh  --issue  -d example.com  -w /var/www/html 
```

#### domain + www

```bash
acme.sh  --issue  -d example.com  -d www.example.com -w /var/www/html 
```

#### SAN mode

```bash
acme.sh  --issue  -d example.com  -d www.example.com -d dev.example.com -w /var/www/html 
```

#### ECDSA Certificates (384 Bits)

```bash
acme.sh --issue -d yourdomain.tld -d www.yourdomain.tld -d blog.yourdomain.tld --keylength ec-384 -w /var/www/html  
```