import Route from '@ioc:Adonis/Core/Route'
//user route 
Route.group(() => {
    Route.get('viewprofile' , 'ProfilesController.viewProfile')
    Route.post('AddOrUpdateprofile' , 'ProfilesController.createAndUpdateProfile')
    Route.delete('/deleteProfile' , 'ProfilesController.delProfile')
  }).middleware("auth").prefix('/user')

Route.post('register' ,"AuthController.register")
Route.post('login' ,"AuthController.login")
Route.post('logout' , 'AuthController.logout')

//admin route
Route.group(() => {
  Route.get('getProfile/:id' , 'AdminsController.getSingleUserProfile')
  Route.get('getAllProfile' , 'AdminsController.getAllProfilewithPagination')
  Route.delete('deleteProfile/:id' , 'AdminsController.deleteSingleUserProfile')
}).middleware(["auth" , "adminauth"]).prefix('/admin')  