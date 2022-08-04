import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProfileServices from 'App/Services/ProfileServices';

export default class ProfileController {
  //view own profile
  public async view({auth}) {
    let instanceProfile = new ProfileServices();
    const profile= await instanceProfile.viewProfile(auth)
    return profile
  }
  //delete own profile
  public async delete({ auth }) {
    let instanceProfile = new ProfileServices();
    const profile= await instanceProfile.deleteProfile(auth);
    return profile
  }
  //crete  and update an profile
  public async createOrUpdate({ request, auth }: HttpContextContract) {
    let instanceProfile = new ProfileServices();
    const profile= await instanceProfile.createOrUpdateProfile(request, auth );
    return profile
  }
}
