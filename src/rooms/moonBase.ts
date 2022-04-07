import { Room, Client } from 'colyseus'
import { State } from './schema/State'

export class MoonBase extends Room<State> {
  onCreate() {
    this.setState(new State())
    this.onMessage('clientMovePlayer', (client, message) => this.serverMovePlayer(client, message))
    console.log('Room Created!')
  }

  onJoin(client: Client) {
    this.state.players.set(client.sessionId, true)

    // if (this.state.players.size === 10) {
    //   // lock this room for new users
    //   this.lock()
    // }
  }

  serverMovePlayer(client: Client, data: any) {
    if (data === 'moveUp') {
      this.broadcast('serverMovePlayer', 'moveUp')
    } else if (data === 'moveRight') {
      this.broadcast('serverMovePlayer', 'moveRight')
    } else if (data === 'moveDown') {
      this.broadcast('serverMovePlayer', 'moveDown')
    } else if (data === 'moveLeft') {
      this.broadcast('serverMovePlayer', 'moveLeft')
    } else if (data === 'idleUp') {
      this.broadcast('serverMovePlayer', 'idleUp')
    } else if (data === 'idleRight') {
      this.broadcast('serverMovePlayer', 'idleRight')
    } else if (data === 'idleDown') {
      this.broadcast('serverMovePlayer', 'idleDown')
    } else if (data === 'idleLeft') {
      this.broadcast('serverMovePlayer', 'idleLeft')
    }
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId)
  }
}
