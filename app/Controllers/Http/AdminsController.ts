import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import Profile from 'App/Models/Profile';

export default class AdminsController {

    public async getAllProfilewithPagination({ response, request }: HttpContextContract) {
        const page = request.input('page', 1)
        const limit = 10
        const profile = await Database.from('profiles').paginate(page, limit)
        return response.status(200).json({
            success: true,
            data: profile
        })
    }

    public async getSingleUserProfile({ params, response }: HttpContextContract) {
        const profile = await Profile.findBy('id', params.id)
        if (profile) {
            return response.status(200).json({
                success: true,
                data: profile,
                message: ""
            })
        }
        else {
            return response.status(404).json({
                success: false,
                data: {},
                message: "user not found"
            })

        }
    }

    public async deleteSingleUserProfile({ params, response }: HttpContextContract) {
        const profile = await Profile.findBy('id', params.id)
        if(profile){
        await profile?.delete();
        return response.status(200).json({
            success: true,
            data: {},
            message: "deleted a single user"
        })
    }
    else{
        return response.status(200).json({
            success: false,
            data: {},
            message: "user not found"
        })

    }
    }
}
