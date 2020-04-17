### html 实现走马灯（文字滚动）

```html
<marquee class="noticeText ng-binding" direction="left" behavior="alternate" scrollamount="100" scrolldelay="1000" loop="5" width="100%" onmouseover="this.stop();" onmouseout="this.start();"  style="width: 100%;">升级公告： 。。。。。XXXXXXX</marquee>
```

- **loop** 控制循环的次数，-1为无限滚动
- **behavior**控制滚动的方式
- **direction** 控制滚动的方向
- **scrollamount** 控制文本每次移动的距离
- **scrolldelay** 设置滚动的时间间隔

#### 兼容性

firefox低于65版本不支持，其他的浏览器都支持