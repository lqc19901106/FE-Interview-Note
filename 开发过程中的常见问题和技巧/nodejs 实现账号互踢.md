#### 需求

> 产品突然要求实现，一个账号只能在一个地方登录，如果账号已经在别处登录的话，原来的登录踢下去。

#### 实现原理：

> 账号的每次登录都会在`session`中存储该账号的登录信息，然后这些信息默认存储在请求的`sessionStore`中，只要保证该账号在登录时，在`session`中把所有的同名账号的数据干掉，就能保证一个账号只能在一处登录；`session`的存储格式如下：

```
console.log(request.sessionStore.sessions);
//result
{
	'dafjadfadfjlajdjgagggad': "{user: {username:'' }}"
}
```

#### 实现代码：

```js
let allSessions = req.sessionStore.sessions;
for (const key in allSessions) {
	let sessionData = JSON.parse(allSessions[key]);
	if(sessionData.user.username === username) {
		delete req.sessionStore.sessions[key];
	}
}
```

