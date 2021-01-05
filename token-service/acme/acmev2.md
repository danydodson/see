## Install Acme.sh

You can install acme.sh with the following command :  

```bash
wget -O -  https://get.acme.sh | sh
```

After the installation, you can use sudo source .bashrc or just close/open your session to enable acme.sh bash completion.

## Issue a wildcard SSL certificate

### Manual DNS mode
Wildcard certificates can only be issued using DNS validation. In Manual DNS mode, acme.sh will display the DNS records to add to your domain, then after few seconds to make sure DNS propagation is done, it will verify if validation DNS records exists and issue the certificate if everything is okay.

To issue your wildcard cert, the command without optional settings is :

```bash
acme.sh --issue -d yourdomain.tld -d *.yourdomain.tld --dns 
```

But you can add additional settings to the previous command. For example, if you want to use ECDSA certificate with 384 bits keys, you can use :

```bash
acme.sh --issue -d yourdomain.tld -d *.yourdomain.tld --dns -k ec-384 
```

Acme.sh will generate the private key and the CSR, then it will display the two DNS records used to validate certificate issuance.

```bash
root@vps:~# acme.sh --issue -d yourdomain.tld -d *.yourdomain.tld --dns -k ec-384
[lundi 19 mars 2018, 14:23:22 (UTC+0100)] Domains have changed.
[lundi 19 mars 2018, 14:23:22 (UTC+0100)] Multi domain='DNS:yourdomain.tld,DNS:*.yourdomain.tld'
[lundi 19 mars 2018, 14:23:23 (UTC+0100)] Getting domain auth token for each domain
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Getting webroot for domain='yourdomain.tld'
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Getting webroot for domain='*.yourdomain.tld'
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Add the following TXT record:
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Domain: '_acme-challenge.yourdomain.tld'
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] TXT value: 'TkcYtkbkvagdGG78YzLEdJF_JkV9GXtH8x-9f6nsM'
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Please be aware that you prepend _acme-challenge. before your domain
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] so the resulting subdomain will be: _acme-challenge.yourdomain.tld
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Add the following TXT record:
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Domain: '_acme-challenge.yourdomain.tld'
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] TXT value: '39boLncIG-2GWXx4GG8f6kgzDZAQrk_F7FwohnTE3Zo'
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Please be aware that you prepend _acme-challenge. before your domain
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] so the resulting subdomain will be: _acme-challenge.yourdomain.tld
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Please add the TXT records to the domains, and re-run with --renew.
[lundi 19 mars 2018, 14:23:24 (UTC+0100)] Please check log file for more details: /root/.acme.sh/acme.sh.log</pre></code>
```

When you have added the two DNS records on your domain, you can launch the acme-challenge verification with the following command :

```bash
acme.sh --renew -d yourdomain.tld --ecc
```

The --ecc flag is only needed if you have used --keylength to issue an ECDSA certificate previously.
If the DNS validation is okay, acme.sh will issue your wildcard cert and display your certificate and private-key path :

```bash
root@vps:~# acme.sh --renew --ecc -d yourdomain.tld
[lundi 19 mars 2018, 14:27:45 (UTC+0100)] Renew: 'yourdomain.tld'
[lundi 19 mars 2018, 14:27:45 (UTC+0100)] Skip, Next renewal time is: mardi 1 mai 2018, 11:54:03 (UTC+0000)
[lundi 19 mars 2018, 14:27:45 (UTC+0100)] Add '--force' to force to renew.
root@nginx:~# acme.sh --renew --ecc -d yourdomain.tld --force
[lundi 19 mars 2018, 14:27:59 (UTC+0100)] Renew: 'yourdomain.tld'
[lundi 19 mars 2018, 14:28:00 (UTC+0100)] Multi domain='DNS:yourdomain.tld,DNS:*.yourdomain.tld'
[lundi 19 mars 2018, 14:28:00 (UTC+0100)] Getting domain auth token for each domain
[lundi 19 mars 2018, 14:28:00 (UTC+0100)] Verifying:yourdomain.tld
[lundi 19 mars 2018, 14:28:03 (UTC+0100)] Success
[lundi 19 mars 2018, 14:28:03 (UTC+0100)] Verifying:*.yourdomain.tld
[lundi 19 mars 2018, 14:28:06 (UTC+0100)] Success
[lundi 19 mars 2018, 14:28:06 (UTC+0100)] Verify finished, start to sign.
[lundi 19 mars 2018, 14:28:08 (UTC+0100)] Cert success.
[lundi 19 mars 2018, 14:28:08 (UTC+0100)] Your cert is in  /root/.acme.sh/certs/yourdomain.tld_ecc/yourdomain.tld.cer
[lundi 19 mars 2018, 14:28:08 (UTC+0100)] Your cert key is in  /root/.acme.sh/certs/yourdomain.tld_ecc/yourdomain.tld.key
[lundi 19 mars 2018, 14:28:08 (UTC+0100)] The intermediate CA cert is in  /root/.acme.sh/certs/yourdomain.tld_ecc/ca.cer
[lundi 19 mars 2018, 14:28:08 (UTC+0100)] And the full chain certs is there:  /root/.acme.sh/certs/yourdomain.tld_ecc/fullchain.cer
```

## With Cloudflare DNS API
Manual DNS mode isn’t really hard to use, but it doesn’t provide the ability to renew automatically your certificates, and it’s not really the easiest/fastest way to issue a wildcard cert.
Acme.sh is compatible with the most part of popular DNS providers APIs such as Cloudflare, DigitalOcean, OVH or AWS Route 53, and you just have to add your API keys with acme.sh to use the automated dns validation.

In our example, we will use Cloudflare DNS API. To add your Cloudflare API keys (available in your cloudflare dashboard > My Profile) with acme.sh, you just need to run the following commands with your own informations :

```bash
export CF_Key="sdfsdfsdfljlbjkljlkjsdfoiwje"
export CF_Email="hi@acme.sh"
```

Then you can issue your wildcard certificate :

```bash
acme.sh --issue -d yourdomain.tld -d *.yourdomain.tld --dns dns_cf 
```

The same addtional settings can be used than with manual dns validation. For ECDSA certificate with 384 Bits keys, the command is :

```bash
acme.sh --issue -d yourdomain.tld -d *.yourdomain.tld --dns dns_cf -k ec-384 
```

This time, you will not have to add DNS records or to run another command to issue your certificate. Acme.sh will automatically add the DNS records needed for the acme-challenge, then it will wait 120 seconds before launching the validation. If everything is okay, acme.sh will issue your wildcard certificate and cleanup validation DNS records. It will also display your certificate and private-key path :

```bash
root@vps:~# acme.sh --issue -d yourdomain.tld -d *.yourdomain.tld --dns dns_cf -k ec-384
[lundi 19 mars 2018, 14:58:08 (UTC+0100)] Multi domain='DNS:yourdomain.tld,DNS:*.yourdomain.tld'
[lundi 19 mars 2018, 14:58:08 (UTC+0100)] Getting domain auth token for each domain
[lundi 19 mars 2018, 14:58:10 (UTC+0100)] Getting webroot for domain='yourdomain.tld'
[lundi 19 mars 2018, 14:58:10 (UTC+0100)] Getting webroot for domain='*.yourdomain.tld'
[lundi 19 mars 2018, 14:58:10 (UTC+0100)] Found domain api file: /root/.acme.sh/dnsapi/dns_cf.sh
[lundi 19 mars 2018, 14:58:12 (UTC+0100)] Adding record
[lundi 19 mars 2018, 14:58:12 (UTC+0100)] Added, OK
[lundi 19 mars 2018, 14:58:12 (UTC+0100)] Sleep 120 seconds for the txt records to take effect
[lundi 19 mars 2018, 15:00:14 (UTC+0100)] yourdomain.tld is already verified, skip dns-01.
[lundi 19 mars 2018, 15:00:14 (UTC+0100)] Verifying:*.yourdomain.tld
[lundi 19 mars 2018, 15:00:17 (UTC+0100)] Pending
[lundi 19 mars 2018, 15:00:19 (UTC+0100)] Success
[lundi 19 mars 2018, 15:00:19 (UTC+0100)] Removing DNS records.
[lundi 19 mars 2018, 15:00:20 (UTC+0100)] Verify finished, start to sign.
[lundi 19 mars 2018, 15:00:22 (UTC+0100)] Cert success.
[lundi 19 mars 2018, 15:00:22 (UTC+0100)] Your cert is in  /root/.acme.sh/yourdomain.tld_ecc/yourdomain.tld.cer
[lundi 19 mars 2018, 15:00:22 (UTC+0100)] Your cert key is in  /root/.acme.sh/yourdomain.tld_ecc/yourdomain.tld.key
[lundi 19 mars 2018, 15:00:22 (UTC+0100)] The intermediate CA cert is in  /root/.acme.sh/yourdomain.tld_ecc/ca.cer
[lundi 19 mars 2018, 15:00:22 (UTC+0100)] And the full chain certs is there:  /root/.acme.sh/yourdomain.tld_ecc/fullchain.cer
```

## Install your Wildcard certificate with Nginx

As we already explained in our previous article about acme.sh, certificates with .cer extensions should not be used directly in your web server configuration. You have to use the --install flag with acme.sh to store your certificate and private key in the folder of your choice.

To store our certificate, we have chosen to use the same folder than certbot /etc/letsencrypt/live and to use a sub-folder for each certificate :

```bash
mkdir -p /etc/nginx/letsencrypt/live/yourdomain.tld
```

Then to install your certificate, use the following command :

```bash
acme.sh --install-cert -d yourdomain.tld --ecc \
--cert-file /etc/letsencrypt/live/yourdomain.tld/cert.pem \
--key-file /etc/letsencrypt/live/yourdomain.tld/key.pem \
--fullchain-file /etc/letsencrypt/live/yourdomain.tld/fullchain.pem \
--ca-file /etc/letsencrypt/live/yourdomain.tld/ca.pem \
--reloadcmd "systemctl restart nginx.service"
The --ecc flag is only needed for ECDSA certificates.
```

The last step is to add your wildcard certificate in your nginx configuration, by putting the following code directly in your vhost configuration, or in /var/www/yourdomain.tld/conf/nginx/ssl.conf if you use EasyEngine or WordOps.

```bash
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate /etc/letsencrypt/live/yourdomain.tld/fullchain.pem;
    ssl_certificate_key     /etc/letsencrypt/live/yourdomain.tld/key.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/yourdomain.tld/ca.pem;
```

Tips to issue and install certs with acme.sh
Use a variable for your domain
Because it can be painful to edit manually a command each time you want to issue a new certificate, you can easily replace yourdomain.tld by a variable to only have to set this variable before issuing a new cert.

To set your variable just enter :

```bash
DOMAIN_NAME=yourdomain.tld
```

Then you can use this variable in acme.sh commands :

# issue a wilcard certificate for yourdomain.tld

```bash
acme.sh --issue -d $DOMAIN_NAME -d *.$DOMAIN_NAME  --dns dns_cf -k ec-384 
```

Then create the folder to store your certificate :

```bash
mkdir -p /etc/letsencrypt/live/${DOMAIN_NAME}
```

And install your cert :

```bash
acme.sh --install-cert -d $DOMAIN_NAME --ecc \
--cert-file /etc/letsencrypt/live/$DOMAIN_NAME/cert.pem \
--key-file /etc/letsencrypt/live/$DOMAIN_NAME/key.pem \
--fullchain-file /etc/letsencrypt/live/$DOMAIN_NAME/fullchain.pem \
--ca-file /etc/letsencrypt/live/$DOMAIN_NAME/ca.pem \
--reloadcmd "systemctl restart nginx.service"
```

Last step, add the cert to your Nginx configuration :

```bash
cat <<EOF >/var/www/$DOMAIN_NAME/conf/nginx/ssl.conf
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate /etc/letsencrypt/live/$DOMAIN_NAME/fullchain.pem;
    ssl_certificate_key     /etc/letsencrypt/live/$DOMAIN_NAME/key.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/$DOMAIN_NAME/ca.pem;
EOF
```

# 

The new ACME v2 production endpoint is now available and wildcard certificates can be issued with the most part of acmev2 compatible clients. Our favorite acme client is always Acme.sh, and it already support automated wilcard certificates issuance with popular DNS API services like Cloudflare.
