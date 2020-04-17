```
docker pull mongo
```

创建映射文件夹

```
sudo mkdir -p /data/mongo/data #数据存储

sudo mkdir -p /data/mongo/dump #备份目录

chmod 777 -R /data/mongo/data

chmod 777 -R /data/mongo/dump
```

镜像运行

```
docker run --name mongodb -p 27017:27017 --restart=always -v /data/mongo/data:/data/db -v /data/mongo/dump:/var/dump -d mongo:latest --auth
```

进入容器

```shell
docker exec -it mongodb  /bin/bash

mongo #进入mongo操作

use admin # 切换数据库
```



```shell
db.createUser({
    user:"root",
    pwd:"root",
    roles:[{
        role:'root',
        db:'admin'
    }]
})
exit
```

退出容器：

```shell
mongo 127.0.0.1/admin -u root -p
```

mongodb://127.0.0.1:27017

mongodb://user:pass@127.0.0.1:27017/dbname