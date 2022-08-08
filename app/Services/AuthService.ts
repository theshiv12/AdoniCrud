import AuthRepository from "App/Repository/AuthRepository";

export default class AuthService {
  public async register(request) {
    const registerUser = new AuthRepository()
    return await registerUser.register(request)
  }

  public async login(request, auth) {
    const loginUser = new AuthRepository()
    return await loginUser.login(request, auth)
  }
}
