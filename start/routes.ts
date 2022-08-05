import Route from '@ioc:Adonis/Core/Route'
//user route 
Route.group(() => {
    Route.get('viewprofile' , 'ProfileController.view')
    Route.post('AddOrUpdateprofile' , 'ProfileController.createOrUpdate')
    Route.delete('deleteProfile' , 'ProfileController.delete')
  }).middleware("auth").prefix('/user')

Route.post('register' ,"AuthController.register")
Route.post('login' ,"AuthController.login")
Route.post('logout' , 'AuthController.logout')

//admin route
Route.group(() => {
  Route.get('getProfile/:profile_id' , 'AdminController.getSingleUserProfile')
  Route.get('getAllProfile' , 'AdminController.getAllProfilewithPagination')
  Route.delete('deleteProfile/:profile_id' , 'AdminController.deleteSingleUserProfile')
  Route.post('assignRole' , 'AdminController.assignUserRole')
}).middleware(["auth" , "adminauth"]).prefix('/admin')  