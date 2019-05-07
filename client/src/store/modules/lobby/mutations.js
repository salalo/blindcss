export const ADD_PLAYER_TO_LOBBY = (state, userID) => {
  state.users.includes(userID)
    ? console.log('Already in lobby.')
    : state.users.push(userID);
};

export const REMOVE_PLAYER_FROM_LOBBY = (state, userID) => {
  const usrIndex = state.users.indexOf(userID);
  state.users.includes(userID) ? state.users.splice(usrIndex, 1) : null;
};
