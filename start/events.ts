
import Event from '@ioc:Adonis/Core/Event'

Event.on('new:user', 'User.onNewUser')