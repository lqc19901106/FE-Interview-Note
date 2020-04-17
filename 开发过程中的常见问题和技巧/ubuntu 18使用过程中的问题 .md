## Nodejs 的安装

```shell
wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz

tar -xvf node-v10.16.3-linux-x64.tar.xz

sudo cp -r node-v10.16.3-linux-x64/bin/* /usr/local/bin

sudo cp -r node-v10.16.3-linux-x64/share/* /usr/local/share

sudo cp -r node-v10.16.3-linux-x64/lib/* /usr/local/lib

sudo cp -r node-v10.16.3-linux-x64/include/* /usr/local/include

sudo chmod 777 -R /usr/local/bin

node -v
```

## 