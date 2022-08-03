import { DateTime } from 'luxon'
import { BaseModel,belongsTo, BelongsTo,column } from '@ioc:Adonis/Lucid/Orm'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number


  @column()
  public name: string
  
  @column()
  public gender: string

  @column()
  public date: Date
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
