### css 实现表单验证提交的效果

> 通过input 的`pattern`和css的`:invalid`两个新特性实现

```css
input[type="text"]:invalid ~ input[type="submit"] { 
  display: none 
}
```

 

```html
<div class="form-css">
	<input type="text"name="tel"placeholder="输入手机号码"pattern="^1[3456789]\d{9}$" required><br> 	<input type="text"name="smscode"placeholder="输入验证码"pattern="\d{4}"required><br>
	<input type="submit"></input>
</div>
```


#### 兼容性问题

:valid 可以正常使用，pattern在safri 10 版本以下部分支持（使用时可以http://afarkas.github.io/webshim/demos/ 使用这个polyfill）



