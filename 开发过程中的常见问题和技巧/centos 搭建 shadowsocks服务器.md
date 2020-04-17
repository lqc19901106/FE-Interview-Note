1. 检查python的版本

   ```shell
   python -version
   ```

2. 安装m2crypto和python-setuptools

   ```shell
   yum install m2crypto python-setuptools
   ```

3. 安装pip

   ```shell
   easy_install pip
   ```

4. 安装ss

   ```shell
   pip install shadowsocks
   ```

5. 配置ss服务的参数

   > 通过vi或者vim创建配置文件` vi /etc/shadowsocks.json`

   ```json
   {                                  
       "server":"my_server_ip",          //服务器的IP地址
       "server_port":7711,              //服务器的端口
       "local_address": "127.0.0.1",       //本机IP地址
       "local_port":1080,               //本机端口
       "password":"mypassword",        //自己设定的密码
       "timeout":300,                  //超出时间
       "method":"rc4-md5",          //加密方法，推荐使用"aes-256-cfb" rc4-md5比前面的速度更快
       "fast_open": false                //true 或 false}
   }
   ```

   如果是多用户模式将上面server_port和password 合并为“port_password”

   ```json
   "port_password":{
   	"1234": "qichao1234",
   	"5678": "qichao5678"
   }
   ```

   ```json
   {                                  
       "server":"176.122.133.201",                      
       "local_address": "127.0.0.1",     
       "local_port":1080,
       "port_password":{
           "1234": "qichao1234",
           "5678": "qichao5678"
        },
       "timeout":500,
       "method":"rc4-md5",
       "fast_open": false
   }
   ```

   

6. 安装gevent

   Gevent 可以用来提高ss的性能

   ```shell
   yum install -y libevent
   pip install greenlet
   pip install gevent
   ```

7. 配置防火墙（非必须）

   安装配置防火墙

   ```
   yum install -y firewalld
   systemctl start firewalld
   firewall-cmd --permanent --zone=public --add-port=1234/tcp
   firewall-cmd –reload
   ```

   

8. 运行服务

   ```shell
   ssserver -c /etc/shadowsocks.json
   ```

如果需要ss一直在后台运行

```shell
nohup ssserver -c /etc/shadowsocks.json > /dev/null 2>&1 &
```