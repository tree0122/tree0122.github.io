# location
```
Syntax: location [ = | ~ | ~* | ^~ ] uri { ... }
  location @name { ... }
Default: —
Context: server, location
```
优先级:
1. 精确匹配(=)
1. 特殊的最长前缀匹配(^~)
1. 正则首次匹配（~*, ~）
1. 最长前缀匹配
```shell
location = / {
 [ configuration A ]
}

location / {
 [ configuration B ]
}

location /documents/ {
 [ configuration C ]
}

location ^~ /images/ {
 [ configuration D ]
}

location ~* \.(gif|jpg|jpeg)$ {
 [ configuration E ]
}
```
- /，匹配 A
- /index.html，匹配B
- /documents/document.html，匹配C
- /images/1.gif，匹配D
- /documents/1.jpg 匹配E

以字符(/)结尾的loation，且有proxy_pass，需注意：
1. 请求未以字符(/)结尾，除此外精确匹配uri，本次请求将301永久重定向到此uri(带/结尾的uri)
```shell
location /user/ {
 proxy_pass http://user.example.com;
}
```
- /user, 重定向 /user/

# proxy_pass
```
Syntax: proxy_pass URL;
Default: —
Context: location, if in location, limit_except
```
> URL 包括协议(http、https)，地址(ip、域名 或者 端口)，或者 uri
> server group的优先级高于域名

- proxy_pass有uri，匹配的uri完全被替换，使用URL的uri访问服务器
- proxy_pass无uri，使用配匹的uri访问服务器
- 正则匹配的location，proxy_pass不能有uri

# rewrite
```
Syntax: rewrite regex replacement [flag];
Default: —
Context: server, location, if
```
> rewrite指令，按其在config中的位置，顺序执行，直到遇到特定的flag。
> 如果replacement 是以 http,https,$scheme开头，则停止且重定向给client
可选参数flag的值：
1. last，停止当前的ngx_http_rewrite_module指令集，开始新的location匹配
2. break，停止当前的ngx_http_rewrite_module指令集，以break指令的方式（location中继续执行非此指令集）
3. redirect，302的临时重定向，用于 replacement 不以http、https、$scheme开头
4. permanent，301的永久重定向