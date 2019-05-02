export const authenticate = state => {
  state.isLogged = true;
};

export const setUserData = (state, data) => {
  state.about.id = data._id;
  state.about.name = data.name;
  // state.about.
};

export const inLobby = (state, lobby_id) => {
  state.inLobby = true;
  state.about.currentLobbyId = lobby_id;
};
