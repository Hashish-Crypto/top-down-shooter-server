import { type, Schema, MapSchema } from '@colyseus/schema'

export class State extends Schema {
  @type({ map: 'boolean' })
  players = new MapSchema<boolean>()
}
