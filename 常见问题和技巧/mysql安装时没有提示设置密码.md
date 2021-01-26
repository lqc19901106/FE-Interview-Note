### mysql 5.7 安装过程中没有提示输入密码

```shell
sudo apt install mysql-server
```

？ ubuntu 18.04 sudo apt install mysql-server的过程中没有提示输入密码导致无法登录

mysql 5.7 安装的默认密码保存在/etc/mysql/debian.cnf

```
sudo cat /etc/mysql/debian.cnf
```

> [client]
> host     = localhost
> user     = debian-sys-maint
> password = Om9aX1bz0k8p8UJy
> socket   = /var/run/mysqld/mysqld.sock
> [mysql_upgrade]
> host     = localhost
> user     = debian-sys-maint
> password = Om9aX1bz0k8p8UJy
> socket   = /var/run/mysqld/mysqld.sock



用上面的账号密码登录修改root的密码

```
mysql -uroot -pOm9aX1bz0k8p8UJy
```



修改root账号密码的过程：

```mysql


use mysql;

update user set authentication_string=PASSWORD("123456") where user='root';

//mysql 5.7 没有password字段,密码存储在authentication_string字段中

update user set plugin="mysql_native_password";

flush privileges;

quit;
```



```
/etc/init.d/mysql restart
```

重启后重新登录