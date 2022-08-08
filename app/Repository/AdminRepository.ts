import Profile from "App/Models/Profile"
import Database from "@ioc:Adonis/Lucid/Database"
import RoleUser from "App/Models/RoleUser"
import User from "App/Models/user"

export default class AdminRepository {
    public async getAllProfilewithPagination(request) {
        const page = request.input('page', 1)
        const limit = 10
        return await Database.from('users').innerJoin('profiles', 'users.id', 'profiles.user_id')
            .select("users.email", 'profiles.name', 'profiles.gender', 'profiles.user_id', 'profiles.id')
            .paginate(page, limit);
    }

    public async getSingleUserProfile() {
        return await Database.from('users').innerJoin('profiles', 'users.id', 'profiles.user_id')
            .select("users.email", 'profiles.name', 'profiles.gender', 'profiles.user_id', 'profiles.id');
    }

    public async deleteSingleUserProfile(params) {
        const profile = await Profile.findBy('id', params.profile_id)
        return await profile?.delete()
    }
    public async assignUserRole(request) {
        let user = await User.findBy('id', request.input('user_id'))
        if (user){
            const role = await Database.from('role_users').where('user_id', request.input('user_id')).select("role_id")
            if (role.length == 2) {
                if (request.input('role_id') == 2)
                    return await Database.rawQuery(`delete from role_users where user_id=${request.input('user_id')} and role_id=${1}`)
                else {
                    return;
                }
            }
            return await RoleUser.create({ role_id: 1, user_id: request.input('user_id') });
        }
        else
             throw new Error("user not exist");    
    }
}
