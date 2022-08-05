import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AdminServices from 'App/Services/AdminService';

export default class AdminController {
    public async getAllProfilewithPagination({ request }: HttpContextContract) {
        const serviceInstance = new AdminServices()
        const allProfile = await serviceInstance.getAllProfilewithPagination(request)
        return allProfile
    }

    public async getSingleUserProfile({ params}: HttpContextContract) {
        const serviceInstance = new AdminServices()
        const singleProfile = await serviceInstance.getSingleUserProfile(params)
        return singleProfile
     }

    public async deleteSingleUserProfile({ params }: HttpContextContract) {
        const serviceInstance = new AdminServices()
        const deletemessage =  await serviceInstance.deleteSingleUserProfile(params)
        return deletemessage
    }
    public async assignUserRole({ request }: HttpContextContract) {
        const serviceInstance = new AdminServices()
        const deletemessage =  await serviceInstance.assignUserRole(request)
        return deletemessage
    }
}
