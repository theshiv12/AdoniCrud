import AdminRepository from "App/Repository/AdminRepository"

export default class AdminServices {
   public async getAllProfilewithPagination(request) {
      const Admininstance = new AdminRepository()
      return await Admininstance.getAllProfilewithPagination(request)
   }

   public async getSingleUserProfile() {
      const Admininstance = new AdminRepository()
      return await Admininstance.getSingleUserProfile()
   }
   
   public async deleteSingleUserProfile(params) {
      const Admininstance = new AdminRepository()
      return await Admininstance.deleteSingleUserProfile(params);
   }
   public async assignUserRole(request) {
      const Admininstance = new AdminRepository()
      return await Admininstance.assignUserRole(request);
   }
}
