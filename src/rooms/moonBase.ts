import { Room, Client } from 'colyseus'
import { State } from './schema/State'

export class MoonBase extends Room<State> {
  onCreate() {
    this.setState(new State())
    console.log('Room Created!')
  }

  onJoin(client: Client) {
    this.state.players.set(client.sessionId, true)

    // if (this.state.players.size === 10) {
    //   // lock this room for new users
    //   this.lock()
    // }
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId)
  }
}
