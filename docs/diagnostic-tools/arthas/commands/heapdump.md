---
sidebar_position: 3
sidebar_label: heapdump
sidebar_class_name: green
---

# Dump Heap

> 提示
>
> dump java heap, 类似 jmap 命令的 heap dump 功能。

## 使用参考
### dump 到指定文件
```shell
[arthas@58205]$ heapdump arthas-output/dump.hprof
Dumping heap to arthas-output/dump.hprof ...
Heap dump file created
```

> 提示
>
>生成文件在arthas-output目录，可以通过浏览器下载： http://localhost:8563/arthas-output/

### 只 dump live 对象
```shell
[arthas@58205]$ heapdump --live /tmp/dump.hprof
Dumping heap to /tmp/dump.hprof ...
Heap dump file created
```

## dump 到临时文件
```shell
[arthas@58205]$ heapdump
Dumping heap to /var/folders/my/wy7c9w9j5732xbkcyt1mb4g40000gp/T/heapdump2019-09-03-16-385121018449645518991.hprof...
Heap dump file created
```