import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/less/index.less';

import './api/mock.js'
import http from 'axios';
Vue.prototype.$http = http



// element ui
import {
    Button,
    Radio,
    Container,
    Main,
    Header,
    Aside,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Card,
    Table,
    TableColumn,
    Breadcrumb,
    BreadcrumbItem,
    Tag
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button).use(Radio).use(Container).use(Main).use(Header).use(Aside)
    .use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Dropdown)
    .use(DropdownMenu).use(DropdownItem).use(Row).use(Col).use(Card)
    .use(Table).use(TableColumn).use(Breadcrumb).use(BreadcrumbItem)
    .use(Tag);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')