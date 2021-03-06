title: 前端工程化知识要点回顾&思考
date: 2015-11-16 20:24:27
tags:
---

## 编程技术及生态发展的三个阶段

* 最初的时候人们忙着补全各种API，代表着他们拥有的东西还很匮乏，需要在语言跟基础设施上继续完善

* 然后就开始各种模式，标志他们做的东西逐渐变大变复杂，需要更好的组织了

* 然后就是各类分层MVC，MVP，MVVM之类，可视化开发，自动化测试，团队协同系统等等，说明重视生产效率了，也就是所谓工程化



## 前端工程是软件工程的一个子类别

软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。

<!-- more --> 

## 前端是一种GUI软件

> 从本质上讲，所有Web应用都是一种运行在网页浏览器中的软件，这些软件的图形用户界面（Graphical User Interface，简称GUI）即为前端。



前端又不同于传统的客户端软件／后端，因为前端应用具备“免安装”、“增量安装”等特性。也“得益”于这些特性，前端应用会遭遇客户端应用不可能碰到的资源管理问题，这也是前端最容易引起工程问题的点。



## 一个符合工程化要求的软件系统(前端)需要包含的要素

1. 开发规范

2. 模块化开发

3. 组件化开发

4. 组件仓库

5. 性能优化

6. 项目部署

7. 开发流程

8. 开发工具



1-3是技术业务相关的开发需求，4是技术沉淀及共享需求，5-8是工程优化需求

> 大部分时候我们谈的“工程化”其实只是“工具化”。



每一个单独的点或许都比较容易实现，但是把这8条串联起来则是一个很大的挑战，而且这8个点相互之间又互有联系

* 模块化开发涉及到性能优化，对构建工具有一定的配套实现要求，同时也会影响开发规范的制定

* 组件化开发应该基于模块化框架来加载其他依赖的组件，如果组件化框架自带模块管理功能，那么就可能导致工程的性能优化实现困难（我们可以直接使用ES6的module语法及loader）

* 组件库应该与组件化开发配套，组件仓库中的组件应该按照相同的标准实现

* 开发规范工具必须容易实现，如果部署上有特殊要求，工具是否能很容易的做出调整而不是修改规范

* 工具是否能提供接入公司已有流程的接口，是否能与公司的ci工具相互融合



## 为什么都说前端目前正遭遇前所未有的工程问题

1. 前端在第1、2阶段耗费了十多年的时间，然后近几年才井喷式的爆发

2. 由于整个生态的发展缓慢、门槛低、构建应用成本低，前端开发长时间停留在刀耕火种、茹毛饮血的阶段

3. 以前大部分前端工作都是切页面加特效，还不能算得上一个真正意义上的webapp，自然很少有公司能遭遇到工程化问题

4. 前端不同于 客户端／后端 的特性(比如增量安装)，导致遭遇的工程会很特殊，很难直接从别的领域套用已有的解决方案

5. 我们自己完全意识不到那是问题



## 工程化到底要解决哪些问题

1. 合理的开发流程及开发规范，包括代码规范、模块化组件化规范(分治)等（提高生产力）

2. 一套自动化代码质量检测方案（提高系统可靠性）

3. 一套自动化及高度适应性的项目 发布／部署 方案（提高系统的伸缩性及灵活性）

4. 极致的性能优化，包括减少冗余的接口请求及资源请求、提高缓存命中率等，简言之就是站点的打开及运行速度（更好的用户体验）



举三个案例：



1. 最基本的资源合并，我们应该采取哪种策略？全部打包成一个还是分开打包？如何最高效的利用缓存？如何在降低请求数的同时提高缓存利用率？移动终端又应该采取哪种策略？

2. 发布的时候我们到底是应该先部署页面还是静态资源？如何实现平滑升级？如果我还想玩个灰度发布呢？

3. 如果采用模块化按需加载的方式开发，每次发布资源文件都会有不同的md5值，如何在不影响开发体验的前提下确保能引用到正确的模块？



## 相关工具

1. 构建工具 gulp 

task-based的方式使得gulp无法(难以)处理资源嵌套的递归场景。如 a.js -> b.scss -> md5(d.img) -> md5(b.scss) -> md5(a.js)

2. 基于 资源表＋资源管理框架 策略的 [fis](https://github.com/fex-team/fis) 

其实已经能处理大部分场景了，但是侵入式代码实在是无法接受。因为它是一个框架。

3. 静态分析工具 webpack

webpack依赖其可配置的loader使其拥有强大的打包能力，但是依然无法实现动态按需加载的需求。类似：

```javascript

if(browser){

    require('browser.js');

} else {

    require('node.js');

}

```



## 出路

> *ES6 Module ＋ ES6 Module Loader ＋ HTTP2.0 ＋ Others*



ES6 Module提供了一个原生的模块化语法，ES6 Module Loader则能提供一个原生的模块加载器。对于前端工程而言，资源管理是最核心的问题，而资源管理中加载又是重点更是难点。



可是ES6 Module Loader从ES6草案中移除了现在由WHATWG组织还在维护制定标准，pending状态。。 现在有一个基于这个草案实现的api polyfill [Module Loader](https://github.com/ModuleLoader/es6-module-loader)。可是你不是规范我这种教条主义者是不会用的



## 总结

前端工程化相关问题是随之前端的发展越来越受到重视的问题，一套好的工程化解决方案能在提高开发效率(包括代码编写的舒适度及多人协作)的同时确保整个系统的伸缩性(各种不同的部署环境)及健壮性(安全)，同时在性能上又能有一个很优异的表现(主要上各种缓存策略加载策略等)，而且这套方案又应该是对工程师无感知(或感知很小)趋于自动化的一套方案。总知要达到这个目的前端工程化还有很长一段路要走。



## 拓展阅读

1. 国内工程化第一人系列文章 [https://github.com/fouber/blog/issues](https://github.com/fouber/blog/issues)

2. [大公司是如何部署前端代码的](https://github.com/fouber/blog/issues/6)

3. 相关工具

  * 百度：[fis](https://github.com/fex-team/fis) （资源表＋资源管理框架 策略）

  * UC：[scrat](https://github.com/scrat-team/scrat)

  * 腾讯：[mtjs](http://mtjs.github.io/) （可以实现字节增量发布）