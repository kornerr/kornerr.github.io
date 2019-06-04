Title: SSL prevents durability
Slug: 2019-06-04_ssl
Lang: en
Date: 2019-06-04 12:50
Category: digital-feudalism

When I was researching durable applications, I found out that SSL has a big problem: SSL prevents durability by always injecting newer and newer requirements. For example, you can't open GitHub, BitBucket, or SourceForge on Windows 2000 running Firefox 12:

![W2K SSL][w2k-ssl]

Someone may argue that SSL makes Internet safer. That's highly questionable because each year we are attacked by news stories of leaked data. You can't argue that SSL prevents durability and thus accessibility.

After all, if you're just providing a read-only information, why would you use SSL? You know what, you can use the newest SSL cyphers to prevent people from accessing your web site. I'm using plain HTTP without SSL so that anyone can access my web site.

[w2k-ssl]: ../../img/2019-06-04_w2k-ssl.png
