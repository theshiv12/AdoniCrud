import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/user'


export default class AuthController {
    //registration function
    public async register({request}:HttpContextContract){
    const validate = 
    {schema:schema.create({
        email: schema.string([
            rules.email()
          ]),
          password: schema.string([
            rules.confirmed(),
            rules.minLength(4)
          ])
    }),
    messages: {
      required: 'The {{ field }} is required to create a new account',
      'email.unique': 'email not available'
    }
  }
    
    const data  = await request.validate(validate)
    const user = await User.create(data)
    return user

    }

    //login function
    public async login({request ,auth , response}:HttpContextContract){
     
        const email = request.input('email')
        const password = request.input('password')

  try {
     const token = await auth.attempt(email, password)
     return token.toJSON()
  } catch {
    return response.unauthorized('Invalid credentials')
  }


    }
   //auth logout
    public async logout({ auth, response }: HttpContextContract) {
      await auth.logout()
      return response.status(200)
    }
}
