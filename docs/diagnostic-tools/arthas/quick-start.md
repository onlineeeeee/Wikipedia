---
sidebar_position: 1
sidebar_label: 快速入门
sidebar_class_name: green
---

# 安装
## 使用arthas-boot(官方推荐)
下载**_arthas-boot.jar_**，然后用**_java -jar_**的方式启动：
```shell
curl -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar
```
打印帮助信息: 使用-h打印帮助信息
```shell
java -jar arthas-boot.jar -h
```
如果下载速度比较慢，可以使用 aliyun 的镜像：
```shell
java -jar arthas-boot.jar --repo-mirror aliyun --use-http
```

## 使用as.sh
Arthas 支持在 Linux/Unix/Mac 等平台上一键安装，请复制以下内容，并粘贴到命令行中，敲 **_回车_** 执行即可：
```shell
curl -L https://arthas.aliyun.com/install.sh | sh
```
上述命令会下载启动脚本文件 as.sh 到当前目录，你可以放在任何地方或将其加入到 $PATH 中。

直接在 shell 下面执行./as.sh，就会进入交互界面。

也可以执行./as.sh -h来获取更多参数信息。

## 全量安装
[下载地址](https://arthas.aliyun.com/download/latest_version?mirror=aliyun)

解压后，使用方式与上述一样。

# 卸载
* 在 Linux/Unix/Mac 平台
```shell
rm -rf ~/.arthas/
rm -rf ~/logs/arthas
```
* Windows 平台直接删除 user home 下面的**_.arthas_** 和 **_logs/arthas_**目录