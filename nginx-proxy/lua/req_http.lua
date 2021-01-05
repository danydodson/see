

local args, err = ngx.req.get_uri_args()

local res = ngx.location.capture('/auth',
  {
    method = ngx.HTTP_POST,
    body = args.data
  }
)

if 200 ~= res.status then
  ngx.say('valid request')
else
  ngx.say('invalid request')
end

-- if args.key == res.body then
--   ngx.say('valid request')
-- else
--   ngx.say('invalid request')
-- end