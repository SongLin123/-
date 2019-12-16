<!--
 * @Author: your name
 * @Date: 2019-12-16 10:30:23
 * @LastEditTime: 2019-12-16 11:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\design.md
 -->
# 软件设计文档 


## 1. 钉钉微应用

### 1.1 父应用
> 手机端和pc端父应用是单独两个，分开部署，作为钉钉微应用的手机端入口和pc端入口

#### 1.1.1 技术选型及理由

**钉钉微应用**

   微应用即为单纯的网页，钉钉小程序功能有限，如没有视频组件，不支持直播协议，没有办法做多项目整合等等，故选择微应用


**qiankun**

   基于single-spa的微前端框架，可以整合多个前端项目，不受mvvm框架限制，开发多合一的微前端应用


#### 1.1.2 架构设计

**qiankun**

   An implementation of Micro Frontends, based on single-spa, but made it production-ready.

    因需要开发多个应用，单项目开发耦合性强开发不方便，多应用上架部署困难，故选择qiankun可以将多项目整合同一个应用，通过客户端访问【父应用--->子应用】的形式，实现一次上架多个项目的目的。

    父应用和子应用mvvm框架均可使用vue.js，和现有技术栈兼容，进行小部分改动即可接入。
    父应用上线后，只需发布子应用，和配置父应用路由菜单就可以实现新应用发布。


   示意图如下：

![框架图](http://assets.processon.com/chart_image/5df6ed41e4b0c4255e9c3abf.png?_=1576466494617)


#### 1.1.3 钉钉api整合

   根据业务逻辑，需要在钉钉客户端进入父应用，在父应用获取钉钉免登录权限，存储到页面全局，与后端交互获取子应用访问权限，决定子应用是否可用。
   子应用之间可以自由切换，免登code存储在全局，不需要重复调用钉钉api。
   子应用与后端交互各自执行，父应用不接管。
   
   钉钉进入应用逻辑如下：

   ![钉钉进入应用](http://assets.processon.com/chart_image/5df6eedde4b06c8b0bad6914.png?_=1576467266449)

   > 后期如果有只需调用一次的钉钉api接口，建议如上图由父应用操作。

