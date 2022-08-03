import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class Adminrequest {
  public async handle({auth , response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const role = await Database. from('roles').where('user_id' , auth.user.id).select('role')
    if(role[0]){
      await next()
    }
    else{
      return response.send("unauthrized admin route")
    }   
  }
}
