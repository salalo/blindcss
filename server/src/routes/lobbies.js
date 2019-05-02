import { Router } from 'express';
import { returnLobbies } from '../actions/lobby.js';

export default () => {
  const api = Router();

  // Lobby.vue
  // countdown only begins when lobby (players component) has 5 users
  api.get('/checkLobby', (req, res) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.append('Access-Control-Allow-Credentials', 'true');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');

    // check if lobby has 5 players
    res.json({ lobbyIsFull: true });
  });

  // get all lobbies
  api.get('/', (req, res) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.append('Access-Control-Allow-Credentials', 'true');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.json(returnLobbies());
  });

  return api;
};
