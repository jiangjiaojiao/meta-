import Vue from 'vue'
import Router from 'vue-router'

import main from '../components/main'
import contentNav from '../components/content/contentNav'
import userManage from '../components/content/userManage'
import content from '../components/content/content'
import addNew from '../components/content/addNew'

/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {
          path:'/contentNav',
          name:'contentNav',
          component:contentNav
        },{
          path:'/userManage',
          name:'userManage',
          component:userManage
        },{
          path:'/content',
          name:'content',
          component:content
        },{
          path:'/addNew',
          name:'addNew',
          component:addNew
        }
      ]
    } 
  ]
})*/
const routers = [
    {
        path: '/',
        name:'main',
        meta: {
            title: '000'
        },
        component: main,
        children:[
          {
            path: '/contentNav',
            name:'/contentNav',
            meta: {
                  title: '111'
            },
            component:contentNav
          },
          {
            path: '/userManage',
            name:'/userManage',
            meta: {
                  title: '222'
            },
            component:userManage
          },
          {
            path: '/content',
            name:'/content',
            meta: {
                  title: '333'
            },
            component:content
          },
          {
            path: '/addNew',
            name:'/addNew',
            meta: {
                  title: '444'
            },
            component:addNew
          }
        ]
    }
];
export default routers;
