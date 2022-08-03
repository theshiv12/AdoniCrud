import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from "App/Models/Profile";
import CreateProfileValidator from 'App/Validators/CreateProfileValidator';

export default class ProfilesController {
  //view own profile
  public async viewProfile({ auth, response }) {
    try {
      let profile = await Profile.findBy('user_id', auth.user.id)
      if (profile) {
        return response.status(201).json({
          success: true,
          data: profile,
          message: " "
        })
      }
      else {
        return response.status(404).json({
          success: false,
          data: {},
          message: "profile not created"
        })
      }
    } catch {
      return response.status(500).json({
        success: false,
        data: {},
        message: ""
      })
    }
  }

  //delete own profile
  public async delProfile({ auth, response }) {
    try {
      let profile = await Profile.findBy('user_id', auth.user?.id)
      
      await profile?.delete();
      return response.status(200).json({
        message: "deleted succesfully"
      })
    } catch {
      return response.status(404).json({
        success: true,
        data: {},
        message: "profile not found"
      })
    }
  }


  //crete  and update an profile
  public async createAndUpdateProfile({ request, auth, response }: HttpContextContract) {
    const data = await request.validate(CreateProfileValidator);
    console.log(data)
    let profile = await Profile.findBy("user_id", auth.user?.id)
    if (profile) {
      profile.name = request.input('name')
      profile.gender = request.input('gender')
      await profile.save()
      response.status(200).json({
        success: true,
        data: profile,
        message: "updated"
      })
    }
    else {
      Object.assign(data, { user_id: auth.user?.id });
      await Profile.create(data)
      response.status(200).json({
        success: true,
        data: data,
        message: "created"
      })
    }
  }
}