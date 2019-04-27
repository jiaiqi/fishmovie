export default{
  path: '/mine',
  component:() => import('@/views/Mine'),
  children:[
    {
      path:'login',
      component:()=>import('@/components/Login')
    },
    {
      path:'register',
      component:()=>import('@/components/Register')
    },
    {
      path:'user',
      component:()=>import('@/components/UserInfo')
    },
    {
      path:'/mine',
      redirect:'login'
    }
  ]
}