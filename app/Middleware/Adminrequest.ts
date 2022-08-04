import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AdminRequest {
  public async handle({auth , response}: HttpContextContract, next: () => Promise<void>) {
    const role = await Database.from('roles').where('user_id',auth.user.id).select('role');
    if(role[0].role== 'admin'){
      await next()
    }
    else{
      return response.send("unauthrized admin route")
    }   
  }
}
