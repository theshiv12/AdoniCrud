import Profile from "App/Models/Profile";
import ProfileCreateValidator from "App/Validators/ProfileCreateValidator";

export default class Profilerepos {
  public async viewProfile(auth) {
    return await Profile.findBy('user_id', auth.user.id);
  }

  public async deleteProfile(auth) {
    let profile = await Profile.findBy('user_id', auth.user?.id)
    return await profile?.delete();
  }

  public async createOrUpdateProfile(auth, request) {
    const data = await request.validate(ProfileCreateValidator);
    let profile = await Profile.findBy("user_id", auth.user?.id);
    if (profile) {
      await Profile.query().update({ name: data.name, gender: data.gender }).where("user_id", auth.user?.id);
      return await Profile.findBy("user_id", auth.user?.id);
    }
    else {
      Object.assign(data, { user_id: auth.user?.id });
      await Profile.create(data)
      return await Profile.findBy("user_id", auth.user?.id);
    }
  }
}

