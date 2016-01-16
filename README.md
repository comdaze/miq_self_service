# miq_self_service 汉化说明
1.修改Index.html欢迎页面的词语：
/var/www/miq/vmdb/spa_ui/self_service/client/app/states/_states.sass

2.修改登录页面上的提示信息：”BitCloud 自助服务“,全局title字段：“docTitle：'BitCloud: '”
/var/www/miq/vmdb/spa_ui/self_service/client/app/skin/skin.module.js


3.修改login.html的login页面的Username,Password和其他信息：
/var/www/miq/vmdb/spa_ui/self_service/client/app/states/login/login.html

4.修改退出Logout按钮：
/var/www/miq/vmdb/spa_ui/self_service/client/app/components/navigation/header-nav.html
 5.修改侧边四个Tab的文字：
/var/www/miq/vmdb/spa_ui/self_service/client/app/config/navigation.config.js

6.修改“我的服务”的菜单页面，下拉选项
/var/www/miq/vmdb/spa_ui/self_service/client/app/states/services/list
list.html  list.stat.js
7.修改“我的申请”的菜单页面，下拉选项
/var/www/miq/vmdb/spa_ui/self_service/client/app/states/services/list
list.html  list.stat.js
8.修改“服务目录”的菜单页面，下拉选项
/var/www/miq/vmdb/spa_ui/self_service/client/app/states/marketplace/list
list.html  list.stat.js

9.修改“我的服务”的排序条件默认值：“名称”
/var/www/miq/vmdb/spa_ui/self_service/client/app/services
services-state.service.js
 service.sort = {
      isAscending: true,
      currentField: { id: 'name', title:  '名称', sortType: 'alpha' }
    };
10.修改“我的申请”的排序条件默认值：“申请日期”
/var/www/miq/vmdb/spa_ui/self_service/client/app/services
requests-state.service.js
  service.sort = {
      isAscending: false,
      currentField: { id: 'requested', title: '申请日期', sortType: 'numeric' }
    };

修改完成后在/var/www/miq/vmdb/spa_ui/self_service下执行：
gulp build
重新构建
