import Profilerepos from "App/Repository/ProfileRepository"

export default class ProfileServices {
  public async viewProfile(auth) {
    const profile = new Profilerepos();
    return await profile.viewProfile(auth)
  }

  public async deleteProfile(auth) {
    const profile = new Profilerepos();
    const deleteProfile = await profile.deleteProfile(auth);
    return {
      success: !!deleteProfile,
    }
  }

  public async createOrUpdateProfile(request, auth) {
    const profile = new Profilerepos();
    return await profile.createOrUpdateProfile(auth, request);
  }
}
