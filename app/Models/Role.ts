import { DateTime } from 'luxon'
import { BaseModel, column , belongsTo , BelongsTo } from '@ioc:Adonis/Lucid/Orm'


export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  

  @column({ isPrimary: true })
  public user_id: number
  
  @column()
  public role: string
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}