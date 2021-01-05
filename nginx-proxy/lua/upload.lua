-- # nginx.conf
-- http {
--     server {
--         listen 8888;
--         location = /upload {
--             content_by_lua_block {
--                 require('upload').handler()
--             }
--         }
--     }
-- }


local upload = require('resty.upload')
local multipart_parser = require('resty.multipart.parser')

local get_header = function(headers, name)
    local header = headers[name]
    if not header then
        return nil
    end
    if type(header) == 'table' then
        return header[1]
    end
    return header
end

local handler = function()
    -- return 405 if HTTP verb is not POST
    if ngx.req.get_method() ~= 'POST' then
        return ngx.exit(ngx.HTTP_NOT_ALLOWED)
    end
    local headers = ngx.req.get_headers()
    local content_type = get_header(headers, 'content-type')
    -- return 400 if the body is not a formdata
    if not content_type or not string.find(content_type, '^multipart/form%-data') then
        return ngx.exit(ngx.HTTP_BAD_REQUEST)
    end
    local transfer_encoding = get_header(headers, 'transfer-encoding')
    if transfer_encoding == 'chunked' then
        -- parse form using `lua-resty-multipart-parser`
        ngx.say('*** chunked')
        -- read the body, chunked encoding will be decoded by nginx
        ngx.req.read_body()
        local body = ngx.req.get_body_data()
        if not body then
            local filename = ngx.req.get_body_file()
            if not filename then
                return ngx.exit(ngx.HTTP_INTERNAL_SERVER_ERROR)
            end
            -- WARNING
            -- don't use this code in production, file I/O is blocking,
            -- you are going to block nginx event loop at this point!
            local fd = io.open(filename, 'rb')
            if not fd then
                return ngx.exit(ngx.HTTP_INTERNAL_SERVER_ERROR)
            end
            body = fd:read('*a')
        end
        local parser = multipart_parser.new(body, content_type)
        while true do
            local part = parser:parse_part()
            if not part then
                break
            end
            ngx.say('>>> ', part)
        end
    else
        -- parse form using `lua-resty-upload` (in a streaming fashion)
        ngx.say('*** not chunked')
        local chunk_size = 8 -- for demo purposes only, use 4096 or 8192
        local form = upload:new(chunk_size)
        while true do
            local typ, res = form:read()
            if typ == 'eof' then
                break
            elseif typ == 'body' then
                ngx.say('>>> ', res)
            end
        end
    end
end

-- return {
--     handler = handler
-- }

-- $ curl -X POST localhost:8888/upload -F file='binary file content'                             

-- *** not chunked
-- >>> binary f
-- >>> ile cont
-- >>> ent
-- As you can see, the body is read and processed chunk by chunk.

-- $ curl -X POST localhost:8888/upload -F file='binary file content' -H transfer-encoding:chunked

-- *** chunked
-- >>> binary file content
-- Here, conversely, the body is processed at once.