### Docker 安装和使用的相关问题

#### 问题一、docker 安装成功后 执行docker pull mongodb 报错

> Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.40/images/create?fromImage=mongodb&tag=latest: dial unix /var/run/docker.sock: connect: permission denied

原因：

docker 进程使用的是unix socket 不是tcp的端口，默认情况下unix socket属于root的用户，需要root权限操作访问。



- 使用sudo 获取管理员权限
- 添加docker用户组

docker守护进程启动的时候，会默认赋予名字为docker的用户组读写Unix socket的权限，因此只要创建docker用户组，并将当前用户加入到docker用户组中，那么当前用户就有权限访问Unix socket了，进而也就可以执行docker相关命令

```shell
sudo groupadd docker     #添加docker用户组
sudo gpasswd -a $USER docker     #将登陆用户加入到docker用户组中
newgrp docker     #更新用户组
docker ps    #测试docker命令是否可以使用sudo正常工作
```

##### 问题二、 docker 镜像加速的引发的问题

> docker: Error response from daemon: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers).
>
> docker 镜像默认使用国外的源，速度慢，不稳定

```shell
 vim /etc/docker/daemon.json
 
# {
#   "registry-mirrors": ["http://hub-mirror.c.163.com"]
# }

/etc/init.d/docker restart
```

#### 问题三、 docker 发布镜像的流程

```
docker login -p xxxx -u xxxx hub.docker.io

cd project && touch Dockerfile //对dockerfile 进行流程编辑

docker build -t hub.docker.io:{name} .

docker push hub.docker.io:{name}
```



