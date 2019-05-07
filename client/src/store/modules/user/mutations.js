import { lobby } from '../lobby/index.js';

export const AUTH_USER = state => {
  state.isLogged = true;
};

export const SET_USER_DATA = (state, data) => {
  state.about.id = data._id;
  state.about.name = data.name;
  // state.about.
};

export const JOIN_LOBBY = (state, lobby_id) => {
  state.inLobby = true;
  state.about.currentLobbyId = lobby_id;
  // set lobby id from another module
  lobby.state.id = lobby_id;
};

export const LEAVE_LOBBY = state => {
  state.inLobby = false;
  state.about.currentLobbyId = '';
  // set lobby id from another module
  lobby.state.id = '';
};
