# Names a server and declares the listening port
server {
	server_name electionintegrityforce.com data.electionintegrityforce.com;

    access_log /var/log/nginx/reverse-access.log;
    error_log /var/log/nginx/reverse-error.log;
	
    location / {
    	# Configures the publicly served root directory
    	# Configures the index file to be served
		root /var/www/data.electionintegrityforce.com/app/views;
		try_files $uri $uri/ /index.html
			index index.html index.htm;
	}
	
	# To serve api calls
	location /api {
		proxy_pass http://localhost:3000/api;
		proxy_set_header Host $host;
	}

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/data.electionintegrityforce.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/data.electionintegrityforce.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = data.electionintegrityforce.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

	server_name electionintegrityforce.com data.electionintegrityforce.com;
    listen 80;
    return 404; # managed by Certbot
}
