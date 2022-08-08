import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RoleUser from 'App/Models/RoleUser'

export default class AdminRequest {
  public async handle({auth , response}: HttpContextContract, next: () => Promise<void>) {
    const role = await RoleUser.query().where('user_id',auth.user.id).select("role_id")
    if(role[0].role_id==  1 || role[1].role_id== 1){
      await next()
    }
    else{
      return response.send("unauthrized admin route")
    }   
  }
}
