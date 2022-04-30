import { Room, Client } from 'colyseus'
import { State } from './schema/State'
import { Player } from './schema/Player'

interface IMovement {
  id: string
  move: string
}

interface IPosition {
  xPos: number
  yPos: number
}

export class Bar extends Room<State> {
  onCreate() {
    this.setState(new State())
    this.onMessage<IMovement>('clientMovePlayer', (client, message) => this.serverMovePlayer(client, message))
    this.onMessage<IPosition>('clientDeliverPlayerPosition', (client, message) => {
      const player = this.state.players.get(client.id)
      player.xPos = message.xPos
      player.yPos = message.yPos
    })

    console.log('Bar room created!')
  }

  onJoin(client: Client) {
    this.state.players.set(
      client.sessionId,
      new Player().assign({
        id: client.sessionId,
        xPos: 0,
        yPos: 0,
      })
    )

    this.clients.forEach((value) => {
      value.send('serverRequestPlayerPosition')
    })

    // if (this.state.players.size === 10) {
    //   // lock this room for new users
    //   this.lock()
    // }

    console.log('Player ' + client.id + ' joined Bar room.')
  }

  serverMovePlayer(client: Client, data: IMovement) {
    if (data.move === 'moveUp') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'moveUp' })
    } else if (data.move === 'moveRight') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'moveRight' })
    } else if (data.move === 'moveDown') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'moveDown' })
    } else if (data.move === 'moveLeft') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'moveLeft' })
    } else if (data.move === 'idleUp') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'idleUp' })
    } else if (data.move === 'idleRight') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'idleRight' })
    } else if (data.move === 'idleDown') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'idleDown' })
    } else if (data.move === 'idleLeft') {
      this.broadcast('serverMovePlayer', { id: data.id, move: 'idleLeft' })
    }
  }

  onLeave(client: Client) {
    this.broadcast('playerLeaveRoom', { id: client.sessionId })
    this.state.players.delete(client.sessionId)

    console.log('Player ' + client.id + ' leaved Bar room.')
  }
}
