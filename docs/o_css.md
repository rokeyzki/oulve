### base
* display
    * block
    * inline
    * inline-block
    * flex
    * inline-flex
    * none
* visibility
    * visible
    * collapse
    * hidden
* opacity
    * [1, 0]
* !important

### flex
* align-content
    * stretch
    * flex-start
    * flex-end
    * center
    * space-between
    * space-around
* flex-direction
    * row
    * row-reverse
    * column
    * column-reverse
* flex-wrap
    * nowrap
    * wrap
    * wrap-reverse
* justify-content
    * flex-start
    * flex-end
    * center
    * space-between
    * space-around
* align-items
    * stretch
    * flex-start
    * flex-end
    * center
    * baseline
* order
    * number
* flex-grow
    * 0
    * [1, x]
* flex-shrink
    * 1
    * 0
* flex-basis
    * auto
* align-self
    * auto
    * stretch
    * flex-start
    * flex-end
    * center
    * baseline

### box
* max-width
* min-height
* border-width
    * px
    * em
    * %
    * auto
* border-style
    * solid
    * dashed
    * dotted
    * hidden
* border-color
    * hex
    * rgb
    * transparent
    * invert
* border-radius
* padding-left
* margin-right
    * px
    * em
    * %
    * auto
* box-sizing
    * content-box
    * border-box
* box-shadow
    * 水平位置
    * 垂直位置
    * 模糊距离
    * 阴影颜色

### position
* z-index
    * [2100000000, 0]
* position
    * static
    * relative
    * fixed
    * absolute
* top
* bottom
* left
* right
    * px
    * em
    * %
    * auto
* float
    * none
    * left
    * right
* clear
    * both

### background
* background-clip
    * content-box
    * border-box
* background-color
    * hex
    * rgb
    * transparent
    * invert
* background-image
    * url()
* background-size
    * cover
    * contain
* background-attachment
    * scroll
    * fixed
* background-repeat
    * repeat
    * repeat-x
    * repeat-y
    * no-repeat
* background-position
    * center
    * top
    * bottom
    * left
    * right
* background-origin
    * content-box
    * border-box

### space
* text-align
    * left
    * center
    * right
* text-indent
* line-height
* word-spacing
* letter-spacing
    * px
    * em
    * %
    * auto
* white-space
    * pre
    * nowrap
* list-style
    * 样式
        * dics
        * none
    * 位置
        * outside
        * inside
    * 图案
        * url()
* vertical-align
    * baseline
    * text-top
    * middle
    * text-bottom

### font
* font-family
    * sans-serif
* font-size
    * px
    * em
    * %
    * auto
* font-weight
    * [700, 100]
* font-style
    * normal
    * italic
    * oblique
* color
    * hex
    * rgb
    * transparent
    * invert
* text-decoration
    * none
    * overline
    * line-through
    * underline
* text-transform
    * none
    * capitalize
    * uppercase
    * lowercase
* text-shadow
    * 水平位置
    * 垂直位置
    * 模糊距离
    * 阴影颜色

### hint
* overflow-y
    * visible
    * hidden
    * scroll
    * auto
* clip
    * rect
* cursor
    * pointer
* word-wrap
    * break-word
* @media
    * @media (max-width: 760px){}
    * @media (min-width: 760px){}

### animation
* animation
    * 名称
        * foo
    * 时长
        * none
        * 1s
        * 2ms
    * 速度曲线
        * ease
        * linear
        * ease-out
        * ease-in
    * 延迟时长
        * none
        * 1s
        * 2ms
    * 播放次数
        * 8
        * infinite
    * 来回播放
        * normal
        * alternate
* @keyframes
    * @keyframes foo { 0%{} 100%{} }

### transform
* transform
    * rotate
    * skew
    * scale
    * translate
    * inherit
* transform-origin
    * x y

### circle
```css
#circle {
  width: 100px;
  height: 50px;
  background-color: #666;

  border-radius: 100px/50px 0 0 0;
  border-top: 10px solid red;
}
```

### square
```css
#square {
  width: 100px;
  height: 50px;
  background-color: #666;

  border-bottom: 50px solid transparent;
  border-left: 50px solid transparent;
  border-right: 50px solid red;
}
```

### center
```css
#center {
  max-width: 300px;
  background-color: #666;
  box-sizing: border-box;
  padding: 10px;
  margin: 0 auto;
}
```
