import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AdminRequest {
  public async handle({auth , response}: HttpContextContract, next: () => Promise<void>) {
    const role = await Database.from('role_users').where('user_id',auth.user.id).select("role_id")
    if(role[0].role_id==  1 || role[1].role_id== 1){
      await next()
    }
    else{
      return response.send("unauthrized admin route")
    }   
  }
}
