
-- set env vars
ngx.var.client_url = os.getenv('CLIENT_URL')
ngx.var.jwt_secret = os.getenv('JWT_SECRET')
