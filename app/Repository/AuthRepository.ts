import User from 'App/Models/user';
import RoleUser from 'App/Models/RoleUser';
import Role from 'App/Models/Role';
import UserCreateValidator from 'App/Validators/UserCreateValidator'

export default class AuthRepository {
    public async register(request) {
        const data = await request.validate(UserCreateValidator);
        let userData = await User.create(data);
        let roleData = await Role.create({ role: "basic", user_id: userData.id });
        await RoleUser.create({ role_id: roleData.id, user_id: userData.id });
        return userData;
    }
    
    public async login(request, auth) {
        const email = request.input('email')
        const password = request.input('password')
        return await auth.attempt(email, password)
    }
}
