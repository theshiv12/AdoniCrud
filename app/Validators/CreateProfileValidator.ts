import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

        name: schema.string(),
        gender: schema.string()
       
    })
  
  public messages: CustomMessages = {
    required: 'The {{ field }} is required to create a new account',
    'name.unique': 'name not available'
  
  }
}
