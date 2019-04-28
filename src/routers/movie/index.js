export default{
  path: '/movie',
  component:() => import('@/views/Movie'),
  children:[
    {
      path:'city',
      component:()=>import('@/components/CityList')
    },
    {
      path:'nowplaying',
      component:()=>import('@/components/NowPlaying')
    },
    {
      path:'willplaying',
      component:()=>import('@/components/WillPlaying')
    },
    {
      path:'search',
      component:()=>import('@/components/Search')
    },
    {
      path:'/movie',
      redirect:'nowPlaying'
    }
  ]
}