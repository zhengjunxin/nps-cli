# nps-cli

在命令行就可以完成 package.json scripts 字段的列出、设置、删除。

## 原因

打开 package.json 文件，找到 scripts 字段，增加或者删除 script，最后再关闭文件是十分麻烦的操作。而且，怎么体现前端er的逼格？nps-cli 让你在命令行就可以轻松的完成这一系列操作。

## 下载

```bash
npm install -g nps-cli
```

## 描述

nps-cli 提供 3 个命令：

- `nps ls` - 列出 package.json 中的 scripts 字段

- `nps set <key=value>` - 根据指定的键值对，设置 scripts 字段

- `nps remove <key>` - 根据指定的键值，删除 scripts 字段

## 例子

```bash
$ nps ls
{
  "test": "echo \"Error: no test specified\" && exit 1"
}
$ nps set test=ava coverage='nyc ava'
{
  "test": "ava",
  "coverage": "nyc ava"
}
$ nps remove coverage
{
  "test": "ava"
}
```

## 贡献

- 欢迎☆ Star。你的支持是我持续开源的动力！
- 有任何问题或者功能改进，欢迎提 issue

## 许可证

MIT
