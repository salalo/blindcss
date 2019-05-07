export const addPlayer = ({ commit }, userID) => {
  commit('ADD_PLAYER_TO_LOBBY', userID);
};

export const removePlayer = ({ commit }, userID) => {
  commit('REMOVE_PLAYER_FROM_LOBBY', userID);
};
