### 设置全局提交用户名和邮箱

`git config --global user.name 'liuqixxx'`

`git config --global user.email 'liuqixxx@xxx.com'`

### 设置`git pull`时`rebase`代码

`git config --bool pull.rebase true`

### 设置git 的默认编辑器

`git config --global core.editor 'vim'`

### 常见的设置别名的命令

```shell
git config --global alias.ci   commit
git config --global alias.cm   "commit --amend -C HEAD"
git config --global alias.co   checkout
git config --global alias.st   status
git config --global alias.sts  "status -s"
git config --global alias.br   branch
git config --global alias.re   remote
git config --global alias.di   diff
git config --global alias.type "cat-file -t"
git config --global alias.dump "cat-file -p"
git config --global alias.lo   "log --oneline"
git config --global alias.ll   "log --pretty=format:'%h %ad | %s%d [%Cgreen%an%Creset]' --graph --date=short"
git config --global alias.lg   "log --graph --pretty=format:'%Cred%h%Creset %ad |%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset [%Cgreen%an%Creset]' --abbrev-commit --date=short"
git config --global alias.alias "config --get-regexp ^alias\."
```

### 在命令环境下自动标示颜色

```shell
git config --global color.diff auto
git config --global color.status auto
git config --global color.branch auto
```

### git项目初始化流程

```shell
rm -rf .git
git init 
git remote add origin repourl
git add .
git commit -m 'xxx'
git push origin master -f
```

### 设置git pull rebase后，冲突解决流程

```shell
git pull origin dev
# 如果代码有冲突的化，解决代码的冲突然后执行下面的命令
git add .
git rebase --continue
git push origin dev
```

### tag 流程

```
git add .
git commit -m 'fix: xxx'
git push origin dev
git tag -a '0.0.1' -m 'fix: xxx'
git push origin 0.0.1
```



