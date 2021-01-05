
local cjson = require 'cjson'
local jwt = require 'resty.jwt'

if ngx.req.get_method() ~= 'POST' then
  ngx.say('googjob' + ngx.req.get_method())
elseif ngx.req.get_method() ~= 'GET' then
  -- get req body
  local data = ngx.req.get_body_data()
  -- clean it up
  local clean = cjson.decode(data)
  -- put it in a token
  local jwt_token = jwt:sign(
    -- use your secret
    os.getenv('JWT_SECRET'),
    {
      header={ typ='JWT', alg='HS256' },
      -- added the remote user's IP address as a custom claim in the JWT and verifying the request is coming from there.
      payload = {
        id = clean['_id'],
        sub = '1234567890',
        username = clean['username'],
        role = clean['role'],
        iss = 'http://www.seesee.space',
        iat = ngx.time(),
        exp = ngx.time() + 60 * 13,
      }
    }
  )
  -- store in variable
  ngx.var.payload = 'Bearer ' .. jwt_token
end
-- local res = ngx.location.capture("/go-go-go")