import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register([
  () => import('@ioc:Adonis/Core/BodyParser')
])

Server.middleware.registerNamed({
  adminauth:() => import('App/Middleware/AdminRequest') ,
  auth: () => import('App/Middleware/Auth')
})
