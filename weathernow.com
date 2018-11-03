server {
  listen 80 default_server;
  listen [::]:80 default_server;
  root /var/www/weathernow;

  #listen 443 ssl;
  #ssl on;
  #ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  #ssl_certificate /etc/letsencrypt/live/weathernow.prabhumurthy.com/fullchain.pem;
  #ssl_certificate_key /etc/letsencrypt/live/weathernow.prabhumurthy.com/privkey.pem;
  #server_name weathernow.prabhumurthy.com;

  
  #if ($scheme != "https") {
  #  return 301 https://$host$request_uri;
  #}

  index index.html;

  location / {
    try_files $uri $uri/ =404;
  }

  location ^~ /.well-known {
    allow all;
    alias /var/www/weathernow/.well-known;
    auth_basic off;
    default_type "text/plain";
    try_files $uri =404;
  }
}