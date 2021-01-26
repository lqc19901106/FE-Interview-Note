# meta常用标签及其作用
---------

申明编码

    <meta charset='utf-8' />

优先使用 IE 最新版本和 Chrome

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- 关于X-UA-Compatible -->
    <meta http-equiv="X-UA-Compatible" content="IE=6" ><!-- 使用IE6 -->
    <meta http-equiv="X-UA-Compatible" content="IE=7" ><!-- 使用IE7 -->
    <meta http-equiv="X-UA-Compatible" content="IE=8" ><!-- 使用IE8 -->

忽略数字自动识别为电话号码

    <meta content="telephone=no" name="format-detection" />

忽略识别邮箱

    <meta content="email=no" name="format-detection" />

viewport：能优化移动浏览器的显示。如果不是响应式网站，不要使用initial-scale或者禁用缩放。
> 大部分4.7-5寸设备的viewport宽设为360px；5.5寸设备设为400px；iphone6设为375px；ipone6 plus设为414px。

    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
    <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  -->

> width：宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素）

> height：高度（数值 / device-height）（范围从223 到10,000）

> initial-scale：初始的缩放比例 （范围从>0 到10）

> minimum-scale：允许用户缩放到的最小比例

> maximum-scale：允许用户缩放到的最大比例

> user-scalable：用户是否可以手动缩 (no,yes)

> minimal-ui：可以在页面加载时最小化上下状态栏。（已弃用）

> 注意，很多人使用initial-scale=1到非响应式网站上，这会让网站以100%宽度渲染，用户需要手动移动页面或者缩放。如果和initial-scale=1同时使用user-scalable=no或maximum-scale=1，则用户将不能放大/缩小网页来看到全部的内容。


添加到主屏后的标题

    <meta name="apple-mobile-web-app-title" content="标题">

转码申明：用百度打开网页可能会对其进行转码（比如贴广告），避免转码可添加如下meta

    <meta http-equiv="Cache-Control" content="no-siteapp" />

其他

    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
