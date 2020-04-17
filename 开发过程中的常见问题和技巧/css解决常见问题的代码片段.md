- **css 实现字体平滑设置**

  ```css
    -webkit-font-smoothing: antialiased;
  ```

- **css 实现图片的垂直水平居中**

     background-contain 的效果

    ```css
    .bg-img{
      background-image: url(./logo.png);
      background-size: cover; //contain
    }
    ```

    img标签后实现自适应效果

    ```
    img{
    	background-color: black;
    	object-fit: cover; //contain fill scale-down
    }
    ```

- **table 实现隔行变色**

    ```css
    tr:nth-child(odd){
    	background:#F4F4F4;
    }
    tr:nth-child(even){
    	background:#040404;
    }
    ```

- **css 实现首字母大写**

    ```css
    text-transform: capitalize;
    ```

- **css 设置`width: 100px !important`代码不生效**

    ```css
    min-width: 150px;
    /*css中如果设置的了max- 或者min- 如果比max- 大，比 min- 小，即使优先级高的也不会生效*/
    ```

- **多行省略**

  ```css
  .ellipsis{
  	width:300px;    
  	overflow: hidden;    
  	text-overflow:ellipsis;    
  	whitewhite-space: nowrap;
  }
  .line-clamp{
      display: -webkit-box;    
      -webkit-box-orient: vertical;    
      -webkit-line-clamp: 3;    
      overflow: hidden;
  }
  ```

  

- **移动端0.5px的设置**

  ```css
  .border-1px{
      position: relative;
  }
  .border-1px::after{
      position: absolute;
      content: ' ';
      pointer-events: none; /* 防止点击触发 */
      box-sizing: border-box;
      width: 200%;
      height: 200%;
      transform: scale(0.5);
  }
  .border-1px-t::after{
      border-top: 1px solid #666;
  }
  .border-1px-b::after{
      border-bottom: 1px solid #666;
  }
  .border-1px-l::after{
      border-left: 1px solid #666;
  }
  .border-1px-r::after{
      border-right: 1px solid #666;
  }
  .border-1px-radius::after{
      border: 1px solid #666;
      border-radius: 1px solid #666;
  }
  ```

  部分手机浏览器由于性能较低，可能部分0.5px的边框无法显示

  ```
  transform: translateZ(-3ch);
  ```

  

- **页面默认滚动条的设置**

  ```css
  ::-webkit-scrollbar {
      width: 6px;
  } /* 这是针对缺省样式 (必须的) */
  ::-webkit-scrollbar-track {
      background-color: transparent;
  } /* 滚动条的滑轨背景颜色 */
  ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2); 
  } /* 滑块颜色 */
  
  ::-webkit-scrollbar-button {
      background-color: #7c2929;
  } /* 滑轨两头的监听按钮颜色 */
  ::-webkit-scrollbar-corner {
      background-color: black;
  } /* 横向滚动条和纵向滚动条相交处尖角的颜色 */
  
  ```

  

- **placeholder的内容样式设置**

  ```css
  input::placeholder, textarea::placeholder{
      color: #666;
  }
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
      color:    #666;
  }
  input:-moz-placeholder, textarea:-moz-placeholder { 
      color:    #666;
  }
  input::-moz-placeholder, textarea::-moz-placeholder { 
      color:    #666;
  }
  input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
      color:    #666;
  }
  ```

  

- **清除浮动**

  ```css
  .clearfix::after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  ```

- **滚动不流畅的问题**

  `-webkit-overflow-scrolling: touch;`