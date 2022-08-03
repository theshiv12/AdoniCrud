import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, hasOne ,HasOne, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'
import Role  from 'App/Models/Role'
import Profile  from 'App/Models/Profile'



export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //@hasOne(() => Role)
  //public roles: HasOne<typeof Role>
  @hasOne(() => Role, {
    foreignKey: 'user_id'
  })
  public roles: HasOne<typeof Role>
  

  @hasOne(() => Profile)
  public profiles: HasOne<typeof Profile>

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
