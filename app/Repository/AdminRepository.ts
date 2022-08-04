import Profile from "App/Models/Profile"
import Database from "@ioc:Adonis/Lucid/Database"

export default class AdminRepository {
    public async getAllProfilewithPagination(request) {
        const page = request.input('page', 1)
        const limit = 10
        return await Database.from('users').innerJoin('profiles', 'users.id', 'profiles.user_id')
            .select("users.email", 'profiles.name', 'profiles.gender', 'profiles.user_id','profiles.id')
            .paginate(page, limit);
    }

    public async getSingleUserProfile(params) {
        let profile = await Profile.findBy('id', params.profile_id)
        return profile;
    }

    public async deleteSingleUserProfile(params) {
        const profile = await Profile.findBy('id', params.profile_id)
        return await profile?.delete()
    }
}
 