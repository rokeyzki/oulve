### Node
* 父级属性
    * Node.prototype.parentNode
    * Node.prototype.parentElement
* 平级属性
    * Node.prototype.previousSibling
    * Node.prototype.previousElementSibling
    * Node.prototype.nextSibing
    * Node.prototype.nextElementSibling
* 子级属性
    * Node.prototype.childNodes
    * Node.prototype.children
    * Node.prototype.childElementCount
    * Node.prototype.firstChild
    * Node.prototype.firstElementChild
    * Node.prototype.lastChild
    * Node.prototype.lastElementChild

* 判断方法
    * Element.prototype.matches()
    * Node.prototype.hasChildNodes()
    * Node.prototype.isEqualNode()
    * Node.prototype.contains()
    * Node.prototype.compareDocumentPosition()
* 获取方法
    * Element.prototype.closest()
    * Element.prototype.querySelector()
    * Element.prototype.querySelectorAll()
    * document.getElementById()
    * document.getElementsByName()
    * Element.prototype.getElementsByTagName()
    * Element.prototype.getElementsByClassName()
* 遍历方法
    * document.creareNodeIterator()
    * document.createTreeWalker()
* 生成方法
    * document.createElement()
    * document.createAttribute()
    * document.createTextNode()
    * document.createDocumentFragment()
    * Node.prototype.cloneNode()
* 插入方法
    * Node.prototype.insertBefore()
    * Node.prototype.appendChild()
    * Element.prototype.insertAdjacentHTML()
* 替换方法
    * Node.prototype.replaceChild()
* 删除方法
    * Node.prototype.remove()
    * Node.prototype.removeChild()

* 基础选择器
    * select
    * `#select`
    * .select
    * .select.select
    * select, select
    * select + select
    * select ~ select
    * select > select
    * select select
* 属性选择器
    * [attr]
    * [attr = 'val']
    * [attr != 'val']
    * [attr $= 'val']
    * [attr *= 'val']
    * [attr ^= 'val']
    * [attr |= 'val']
    * [attr ~= 'val']
    * [attr][attr]

* 条件过滤器
    * :has()
    * :not()
* 内容过滤器
    * :contains()
    * :parent
    * :empty
* 索引过滤器
    * :first
    * :last
    * :eq(i)
    * :gt(i)
    * :lt(i)
    * :even
    * :odd
* 层级过滤器
    * p c:first-of-type
    * p c:last-of-type
    * p c:nth-of-type(i)
    * p c:nth-last-of-type(i)
    * p c:only-of-type
* 状态过滤器
    * :focus
    * :visible
    * :hidden
    * :enabled
    * :disabled
    * :target
    * :selected
    * :checked
    * :animated

### Element
* 属性
    * Element.prototype.innerHTML
    * Element.prototype.outerHTML
* 属性方法
    * Element.prototype.hasAttribute()
    * Element.prototype.getAttribute()
    * Element.prototype.setAttribute()
    * Element.prototype.removeAttribute()
* 类别方法
    * Element.prototype.classList.add()
    * Element.prototype.classList.remove()
    * Element.prototype.classList.toggle()
    * Element.prototype.classList.contains()
    * Element.prototype.classList.item(i)
    * Element.prototype.classList.toString()
* 样式方法
    * Element.prototype.style.setProperty()
    * Element.prototype.style.removeProperty()
    * getStyle

```javascript
function getStyle(obj, prop){
  if(obj.currentStyle){
    return obj.currentStyle[prop];
  }else{
    return window.getComputedStyle(obj, false)[prop];
  }
}
```

### Event
* 预备方法

```javascript
document.onreadystatechange = function(){
  if(this.readtState == "complete"){
    // todo
  }
};
```

* 监听方法
    * Element.prototype.addEventListener()
    * Element.prototype.removeEventListener()
    * Element.prototype.dispatchEvent()
* 中止方法
    * Event.prototype.stopPropagetion()
    * Event.prototype.stopImmediatePropagation()
    * Event.prototype.preventDefault()

* 网络类名称
    * 网址
        * hashchange
    * 页面
        * readystatechange
        * DOMContentLoaded
        * pageshow
        * beforeunload
    * 资源
        * loadstart
        * progress
        * load
        * error
        * canplay
* 文档类名称
    * 焦点
        * focus
        * blur
    * 表单
        * select
        * change
        * input
        * reset
        * submit
    * 剪贴
        * copy
        * paste
        * cut
* 外设类名称
    * 鼠标
        * click
        * dblclick
        * mousedown
        * mouseup
        * mouseover
        * mousemove
        * mouseout
        * contentmenu
    * 键盘
        * keydown
        * keypress
        * keyup
    * 触摸
        * touchstart
        * touchmove
        * touchend
* 动作类名称
    * 缩放
        * resize
    * 滚动
        * scroll
    * 拖拉
        * dragstart
        * drag
        * dragend
        * dragenter
        * dragover
        * dragleave
        * drop
