let lobbies = ['11111asd', 'asdasdasd', '213sada', 'asd123123', '000asd'];

// let lobby = {
//   id: '11111asd',
//   users: ['123', '132', '1123', '223', '123999'],
//   state: "lobby" || "game" || "voting",
//   playingTime: "12m",
//   state === lobby ? countdown: "eg.12s" : countdown: null
// }

export default {
  addLobby(lobbyId) {
    // check if lobby doesn't exists
    lobbies.includes(lobbyId)
      ? console.log('lobby already exists')
      : lobbies.push(lobbyId);

    console.log(lobbies);
  },

  returnLobbies() {
    return lobbies;
  }
};
