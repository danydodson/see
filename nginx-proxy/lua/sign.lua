
local cjson = require 'cjson'
local jwt = require 'resty.jwt'

local data = ngx.req.get_body_data()
local json = cjson.decode(data)

local jwt_token = jwt:sign(
  os.getenv('JWT_SECRET'),
  {
    header={typ='JWT', alg='HS256'},
    payload = {
      sub = '1234567890',
      firstname = json['firstname'],
      lastname = json['lastname'],
      email = json['email'],
      username = json['username'],
      iss = 'http://www.seesee.space',
      iat = ngx.time(),
      exp = ngx.time() + 60 * 13,
    }
  }
)

ngx.req.set_header('Authorization', 'Bearer ' .. jwt_token)