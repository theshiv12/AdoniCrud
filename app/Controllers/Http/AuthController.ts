import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from '@ioc:Adonis/Core/Event'
import AuthService from 'App/Services/AuthService'

export default class AuthController {
  //registration function
  public async register({ request }: HttpContextContract) {
    const serviceInstance = new AuthService()
    const registerUser = await serviceInstance.register(request) 
    Event.emit('new:user', {
      registerUser,
    })
    return registerUser
  }

  //login function
  public async login({ request, auth }: HttpContextContract) {
    const serviceInstance = new AuthService()
    const loginUser = await serviceInstance.login(request,auth) 
    return loginUser
  }

  //auth logout
  public async logout({ auth }: HttpContextContract) {
    return await auth.logout()
    
  }
}
