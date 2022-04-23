# Top-down shooter - Cocos Creator & Colyseus - Server

Top-down shooter demonstration project using [Colyseus 0.14.0](https://www.colyseus.io/) and
[Cocos Creator 3.4.2](https://www.cocos.com/en/creator).

Live demo: [acquati.itch.io/top-down-shooter-client](https://acquati.itch.io/top-down-shooter-client)

Move with "A,W,S,D" keyboard keys, with the on screen joystick or with a controller directional pad.

This project has been created using [⚔️ `create-colyseus-app`](https://github.com/colyseus/create-colyseus-app/) - an
npm init template for kick starting a Colyseus project in TypeScript.

[Documentation](http://docs.colyseus.io/)

## Running the server locally

```
git clone https://github.com/Hashish-Crypto/top-down-shooter-server.git
cd top-down-shooter-server
npm install
npm start
```

## Running the client locally

```
git clone https://github.com/Hashish-Crypto/top-down-shooter-client.git
cd top-down-shooter-client
npm install
```

Open Cocos Dashboard and add this project.

## Prerequisites for development

Install Cocos Creator [cocos.com/en/creator/download](https://www.cocos.com/en/creator/download)

Install Visual Studio Code: [code.visualstudio.com/download](https://code.visualstudio.com/download)

Install Git Bash: [git-scm.com/download/win](https://git-scm.com/download/win)

Install nvm-windows, choose nvm-setup.zip:
[github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

Open Git Bash as system administrator:

```bash
# Install Node and NPM
nvm install latest
nvm current
nvm use 18.0.0
node -v
npm -v
```

## Structure

- `index.ts`: main entry point, register an empty room handler and attach
  [`@colyseus/monitor`](https://github.com/colyseus/colyseus-monitor)
- `src/rooms/MyRoom.ts`: an empty room handler for you to implement your logic
- `src/rooms/schema/MyRoomState.ts`: an empty schema used on your room's state.
- `loadtest/example.ts`: scriptable client for the loadtest tool (see `npm run loadtest`)
- `package.json`:
  - `scripts`:
    - `npm start`: runs `ts-node-dev index.ts`
    - `npm test`: runs mocha test suite
    - `npm run loadtest`: runs the [`@colyseus/loadtest`](https://github.com/colyseus/colyseus-loadtest/) tool for
      testing the connection, using the `loadtest/example.ts` script.
- `tsconfig.json`: TypeScript configuration file

## License

MIT
