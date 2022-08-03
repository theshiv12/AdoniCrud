import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user'
import Event from '@ioc:Adonis/Core/Event'
import userValid from 'App/Validators/CreateUserValidator'
import Database from '@ioc:Adonis/Lucid/Database'


export default class AuthController {
  //registration function
  public async register({ request, response }: HttpContextContract) {
    const data = await request.validate(userValid)
    const newUser = await User.create(data)
    Event.emit('new:user', {
      newUser,
    })
    return response.status(201).json({
      success: true,
      data: newUser,
      message: " "
    })
  }

  //login function
  public async login({ request, auth, response }: HttpContextContract) {

    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.attempt(email, password)
      return response.status(200).json({
        success: true,
        data: token,
        message: " "
      })
    } catch {
      return response.status(404).json({
        success: false,
        data: {},
        message: "Invalid credentials"
      })
    }
  }
  //auth logout
  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.status(200).json({
      success: true,
      data: {},
      message: "logout succesfully"
    })
  }

  //create manual admin
  public async admin({ auth, request }: HttpContextContract) {
    console.log(typeof(auth.user?.id))
    // return await Database
    // .table('roles')
    // .returning('id')
    // .insert({
    //   role:"admin",
    //   user_id:auth.user?.id

    // })
    return await Database.
      from("roles")
      .select('*')


  }

}




