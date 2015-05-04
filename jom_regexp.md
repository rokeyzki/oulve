# JOM 正则
正则表达式是一种表达文本模式的方法，常常用作按照给定模式匹配文本的工具
***

## 正则表达式的创建
> 说明：
* 新建正则表达式有两种方法：
* 一种是使用字面量，以斜杠表示开始和结束：`var regex = /xyz/;`
* 另一种是使用RegExp构造函数：`var regex = new RegExp("xyz");`

## 正则表达式的匹配规则
> ### 分组类 `()`
>> #### 基础字符：
* `(.)` 点字符，匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有单个字符
* `(^)` 首位字符，表示字符串的起首
* `($)` 末尾字符，表示字符串的行尾
* `(|)` 选择符，表示"或(OR)"的含义

>> #### 预定义字符：
* `(?:x)` 非捕获组，表示不返回该组匹配的内容
* `x(?=y)` 先行断言，表示x只有在y前面才匹配
* `x(?!y)` 后行断言，表示x只有不在y前面才匹配

> ### 字符类 `[]`
>> #### 基础字符：
* `[^]` 脱字符：表示除了字符类之中的字符，其他字符都可以匹配
* `[-]` 连字符：表示连续序列字符的简写形式，其连续范围的字符都可以匹配

>> #### 预定义字符：
* `\d` 匹配0-9之间的任一数字，相当于[0-9]
* `\D` 匹配所有0-9以外的字符，相当于[^0-9]
* `\w` 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]
* `\W` 匹配所有字母、数字和下划线以外的字符，相当于/[^A-Za-z0-9_]/
* `\s` 匹配空格（包括制表符、空格符、断行符等），相等于[\t\r\n\v\f]
* `\S` 匹配非空格的字符，相当于[^\t\r\n\v\f]

> ### 重复类 `{}`
>> #### 基础字符：
* `{n}` 表示重复n次
* `{n,}` 表示至少重复n次
* `{n,m}` 表示重复不少于n次，不多于m次

>> #### 预定义字符：
* `?` 表示某个模式出现1次或0次，等同于{0, 1}
* `+` 表示某个模式出现1次或多次，等同于 {1,}
* `*` 表示某个模式出现0次或多次，等同于 {0,}
* `+?` 表示某个模式出现1次或多次，匹配时采用非贪婪模式
* `*?` 表示某个模式出现0次或多次，匹配时采用非贪婪模式

> ### 工具类
>> #### 转义符：
* `\` 正则表达式中那些有特殊含义的字符，如果要匹配它们本身，就需要在它们前面要加上反斜杠
* 正则模式中，需要用斜杠转义的，一共有12个字符，分别为：`（`、`[`、`{`、`.`、`^`、`$`、`|`、`?`、`+`、`*`、`/`、`\`
* 如果使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次

>> #### 特定符：
* `\n` 匹配换行键
* `\r` 匹配回车键
* `\cX [\b] \t \v \f \0 \xhh \uhhhh // 不常用`

>> #### 修饰符：
* `/regexp/g` g修饰符：表示全局匹配
* `/regexp/i` i修饰符：表示不区分字母大小写的匹配
* `/regexp/m` m修饰符：表示忽略换行符的匹配
* `/regexp/gim` 修饰符可以多个一起使用

## 正则表达式的属性

## 正则表达式的方法
