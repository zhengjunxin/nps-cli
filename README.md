# nps-cli

Easily ls/set/remove package.json's scripts field in cli.

可查看[中文文档](https://github.com/zhengjunxin/nps-cli/blob/master/README_zh-CN.md)

## Why

Opening package.json and then find the scripts field and then add/remove script and then close the file became annoying.

## Installation

```bash
npm install -g nps-cli
```

## DESCRIPTION

nps-cli provides 3 commands to manage the scripts field:

- `nps ls` - list current scripts field.

- `nps set <key=value>` - set specified key value pair in scripts field.

- `nps remove <key>` - remove specified key in scripts field.

## Example

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

## Contributing

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.

## LICENSE

MIT
