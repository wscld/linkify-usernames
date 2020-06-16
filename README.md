# linkify-usernames
convert @usernames in links

**Install:**

     $ npm install @wscld/linkify-usernames@1.0.0

**Usage:**

    const linkify = require('@wscld/linkify-usernames');
    var text =  "hello world @wscld!!!"
    var attr = {
       class:  "username"
    }
    console.log(linkify.convert(text, "https://github.com",attr))
output: >> hello world <a class="username" href="https://github.com/wscld">@wscld</a>!!!