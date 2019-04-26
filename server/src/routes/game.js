import { Router } from 'express';

export default () => {
  const api = Router();

  // countdown only begins when lobby (players component) has 5 users
  api.get('/checkLobby', (req, res) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.append('Access-Control-Allow-Credentials', 'true');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');

    // check if lobby has 5 players
    res.json({ lobbyIsFull: true });
  });
  return api;
};
