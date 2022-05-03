import Arena from '@colyseus/arena'
import { monitor } from '@colyseus/monitor'

/**
 * Import your Room files
 */
import { MoonBase } from './rooms/MoonBase'
import { PoliceStation } from './rooms/PoliceStation'
import { Bar } from './rooms/Bar'
import { House } from './rooms/House'

export default Arena({
  getId: () => 'Your Colyseus App',

  initializeGameServer: (gameServer) => {
    /**
     * Define your room handlers:
     */
    gameServer.define('MoonBase', MoonBase)
    gameServer.define('PoliceStation', PoliceStation)
    gameServer.define('Bar', Bar)
    gameServer.define('House', House)
  },

  initializeExpress: (app) => {
    /**
     * Bind your custom express routes here:
     */
    app.get('/', (req, res) => {
      res.send("It's time to kick ass and chew bubblegum!")
    })

    /**
     * Bind @colyseus/monitor
     * It is recommended to protect this route with a password.
     * Read more: https://docs.colyseus.io/tools/monitor/
     */
    app.use('/colyseus', monitor())
  },

  beforeListen: () => {
    /**
     * Before before gameServer.listen() is called.
     */
  },
})
