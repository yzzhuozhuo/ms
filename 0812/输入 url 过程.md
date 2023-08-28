## todo
- URL 和 URI 区别
  - URI Universal Resource Identifier 统一资源标志符，类似身份证ID
  - URL Universal Resource Locator 统一资源定位符，类似你的定位
  - URN = Universal Resource Name 统一资源名称
  - URI 包含 URL 和 URN
- http 常见状态码
  - 301 和 302 区别
    - 301: 旧地址A的资源不可访问了(永久移除), 重定向到网址B，搜索引擎会抓取网址B的内容，同时将网址保存为B网址。
      - 存在缓存
    - 302: 旧地址A的资源仍可访问，这个重定向只是临时从旧地址A跳转到B地址，这时搜索引擎会抓取B网址内容，但是会将网址保存为A的。
     - URL 劫持
  - 重定向发生条件
    - 域名改变
    - 资源位置改变
    
- 强缓存和协商缓存 https://zhuanlan.zhihu.com/p/58685072
  - 强缓存
    - Expires: 过期时间 （http1.0）
    - Cache-Control: max-age=300 （http1.1）
  - 协商缓存
    - ETag 和 If-None-Match
      - ETag：是对该资源的一种唯一标识，只要资源有变化，Etag就会重新生成，服务器会在response header里返回
      - If-None-Match 带着服务器上次返回的 ETag，请求服务器，在 request header 中
    - Last-Modified 和 If-Modified-Since
      - Last-Modifed：该资源文件最后一次更改时间,服务器会在response header里返回
      - If-Modified-Since 带着服务器上次返回的 Last-Modifed，请求服务器，在 request header 中
    - 由服务端判断是否过期
      - 过期 返回 200，新数据
      - 未过期，返回 304，浏览器从缓存中获取数据



