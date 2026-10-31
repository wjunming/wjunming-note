# curl用法

**curl**，全称*CommandLine URL*，指在命令行方式下工作，利用*URL*的语法进行数据和文件的传输

不带任何参数时，curl发送的就是GET请求

``` bash
curl https://www.example.com
```


## --help

curl的帮助文档

``` bash
curl --help
```

## -A

指定客户端的用户代理请求头，即`User-Agent`。curl默认的用户代理请求头是`curl/{version}`

``` bash
curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' https://www.example.com

# 移除User-Agent标头
curl -A '' https://www.example.com
```

## -b

向服务器发送 `Cookie`

``` bash
curl -b 'foo1=bar1;foo2=bar2' https://www.example.com
```

## -c

将服务器设置的 `Cookie` 写入一个文件

``` bash
curl -c cookies.txt https://www.example.com
```

上面命令会将服务器HTTP响应所设置的 `Cookie`写入文本文件 `cookies.txt`

## -d

发送 `POST`请求的数据体

``` bash
curl -d 'user=root&passwd=1234' https://www.example.com
curl -d 'user=root' -d 'passwd=1234' https://www.example.com
```

使用`-d`参数后，HTTP请求会自动加上请求头`Content-Type: application/x-www-form-urlencoded`，并且会自动将请求转为`POST`方法，因此可省略`-X POST`参数

发放JSON格式参数的`POST`请求

``` bash
curl -H 'Content-Type: application/json' -d '{"user": "root", "passwd": "1234", "details": [{"detailId": 1}]}' https://www.example.com
```

`-d`可以读取本地的文件的数据，向服务器发送

``` bash
curl -d '@data.txt' https://www.example.com
```

## --data-urlencode

`--data-urlencode`参数等同于`-d`参数，发送`POST`请求的请求体，区别在于会自动将发送的数据进行URL编码

``` bash
curl --data-urlencode 'comment=hello world' https://www.example.com
```

上面的命令中，发送的数据`hello world`中有一个空格，会自动将空格进行URL编码

## -e

设置HTTP的请求头`Referer`，表示请求来源

``` bash
curl -e 'https://www.baidu.com' https://www.example.com
```

`-H`参数也可以直接添加请求头`Referer`，达到同样的效果

``` bash
curl -H 'Referer: https://www.baidu.com' https://www.example.com
```

## -F

用来向服务器上传二进制文件

``` bash
curl -F 'file=@cat.png' https://www.example.com
```

上面的命令会给HTTP请求添加请求头`Content-Type: multipart/form-data`，然后将文件`cat.png`作为`file`字段上传

`-F`参数也可以指定MIME类型

``` bash
curl -F 'file=@cat.png;type=image/png' https://www.example.com
```

上面的命令会指定MIME类型为`image/png`，否则curl会将MIME类型设为`application/octet-stream`

`-F`参数也可以指定文件名

``` bash
curl -F 'file=@cat.png;filename=bluecat.png' https://www.example.com
```

上面的命令中，原始的文件名为`cat.png`，但是服务器收到的文件名为`bluecat.png`

## -G

构造URL的查询字符串

``` bash
curl -G -d 'pageNo=1' -d 'pageSize=10' https://www.example.com
```

上面的命令会发送一个`GET`请求，实际请求的URL为`https://www.example.com?pageNo=1&pageSize=10`。如果省略`-G`参数，会发送一个`POST`请求

如果需要URL编码，可以结合`--data-urlencode`参数

``` bash
curl -G --data-urlencode -d 'comment=hello world' https://www.example.com
```

## -H

添加HTTP请求的请求头

``` bash
curl -H 'Content-Type: application/json' -H 'Connection: keep-alive' https://www.example.com
```

## -i

打印服务器响应的HTTP响应头和响应体

``` bash
curl -i https://www.example.com
```

## -I

向服务器发送`HEAD`请求，只打印服务器响应的HTTP响应头

``` bash
curl -I https://www.example.com
```

`--head`参数等同于`-I`参数

``` bash
curl --head https://www.example.com
```

## -k

指定跳过SSL检测，不去检查服务器的SSL证书是否正确

``` bash
curl -k https://www.example.com
```

## -L

会让HTTP请求跟随服务器的重定向。curl默认不跟随服务器的重定向

``` bash
curl -L https://www.example.com
```

## --limit-rate

用来限制HTTP请求和响应的带宽，模拟慢网速的环境

``` bash
curl --limit-rate 200k https://www.example.com
```

上面命令将带宽限制在每秒200K字节

## -o

将服务器的响应保存成文件，等同于`wget`命令

``` bash
curl -o example.html https://www.example.com
```

上面命令将`https://www.example.com`的网站内容保存成`example.html`文件

## -O

将服务器的响应保存成文件，并将URL的最后部分当作文件名

``` bash
curl -O https://www.example.com/foo/bar.html
```

上面命令将`https://www.example.com/foo/bar.html`的网站内容保存成文件，并将文件命名为`bar.html`

## -s

不输出错误和进度信息

``` bash
curl -s https://www.example.com
```

上面的命令一旦发生错误，不会显示错误信息。不发生错误的话，会正常显示运行效果

如果想让curl不产生任何输出，可以使用下面的命令

``` bash
curl -s -o /dev/null https://www.example.com
```

## -S

指定只输出错误信息

``` bash
curl -S https://www.example.com
```

## -u

用来设置服务器认证的用户名和密码

``` bash
curl -u 'root:1234' https://www.example.com
```

上面的命令设置用户名为`root`，密码为`1234`，然后将其转为请求头`Authorization: Basic Ym9iOjEyMzQ1`

curl能够识别URL里面的用户名和密码

``` bash
curl https://root:1234@example.com/login
```

只设置用户名的话，执行命令后，curl会提示输入密码

``` bash
curl -u 'root' https://www.example.com/login
```

## -v

输出整个通信过程，便于调试

``` bash
curl -v https://www.example.com
```

`--trace`参数也可用于调试，还会输出原始的二进制数据

``` bash
curl --trace https://www.example.com
```

## -V

显示curl的版本信息

``` bash
curl -V
```

## -x

指定HTTP请求的代理

``` bash
curl -x socks5://james:cats@myproxy.com:8080 https://www.example.com
```

上面命令指定 HTTP 请求通过`myproxy.com:8080`的 socks5 代理发出

如果没有指定代理协议，默认为HTTP

``` bash
curl -x james:cats@myproxy.com:8080 https://www.example.com
```

## -X

指定HTTP请求的方法

``` bash
curl -X POST https://www.example.com
```