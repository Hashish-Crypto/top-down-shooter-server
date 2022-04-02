# Top-down shooter - Cocos Creator & Colyseus - Server

Top-down shooter demonstration project using [Colyseus 0.14.0](https://www.colyseus.io/) and
[Cocos Creator 3.4.2](https://www.cocos.com/en/creator).

This project has been created using [⚔️ `create-colyseus-app`](https://github.com/colyseus/create-colyseus-app/) - an
npm init template for kick starting a Colyseus project in TypeScript.

[Documentation](http://docs.colyseus.io/)

## Running the server locally

```
git clone https://github.com/Hashish-Crypto/top-down-shooter-server.git
cd top-down-shooter-server
yarn install
yarn start
```

## Running the client locally

```
git clone https://github.com/Hashish-Crypto/top-down-shooter-client.git
cd top-down-shooter-client
yarn install
```

Open Cocos Dashboard and add this project.

## Structure

- `index.ts`: main entry point, register an empty room handler and attach
  [`@colyseus/monitor`](https://github.com/colyseus/colyseus-monitor)
- `src/rooms/MyRoom.ts`: an empty room handler for you to implement your logic
- `src/rooms/schema/MyRoomState.ts`: an empty schema used on your room's state.
- `loadtest/example.ts`: scriptable client for the loadtest tool (see `yarn run loadtest`)
- `package.json`:
  - `scripts`:
    - `yarn start`: runs `ts-node-dev index.ts`
    - `yarn run loadtest`: runs the [`@colyseus/loadtest`](https://github.com/colyseus/colyseus-loadtest/) tool for
      testing the connection, using the `loadtest/example.ts` script.
- `tsconfig.json`: TypeScript configuration file

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
nvm use 17.6.0
node -v
npm -v

# Install Yarn
npm install -g yarn
yarn -v
```

## License

MIT
