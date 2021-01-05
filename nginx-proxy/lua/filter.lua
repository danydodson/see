
-- arg[1] contains a chunk of response content

local resp_body = string.sub(ngx.arg[1], 1, 1000)

ngx.log(ngx.CRIT, 'Got body as ' .. resp_body)

ngx.ctx.buffered = string.sub((ngx.ctx.buffered or '') .. resp_body, 1, 1000)

-- arg[2] is true if this is the last chunk

if ngx.arg[2] then
  ngx.var.response_body = ngx.ctx.buffered
end