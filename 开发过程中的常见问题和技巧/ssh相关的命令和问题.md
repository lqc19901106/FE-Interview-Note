生成ssh的密钥

````shell
ssh-keygen
````

ssh 配置文件的位置 `/etc/ssh/sshd_config`

ssh 相关文件的权限说明



ssh 配置免密登录

````shell
touch ~/.ssh/authorized_keys
ssh-copy-id -i id_rsa.pub  user@192.168.110.4
````

