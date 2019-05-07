let lobbies = [
  {
    id: 'Lobby0',
    state: 'lobby',
    timeLeft: 8,
    users: [
      { id: 'asd', socketId: '123asd', owner: false },
      { id: 'dsa', socketId: 'dsa321', owner: false }
    ]
  },
  {
    id: 'Lobby1',
    state: 'lobby',
    timeLeft: 6,
    users: [
      { id: 'qwe', socketId: '123qwe', owner: false },
      { id: 'ewq', socketId: 'ewq321', owner: false }
    ]
  }
];

function contains(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return true;
  }
  return false;
}

export const createLobby = (lobbyId, userId, socketId) => {
  try {
    let newLobby = new Object({
      id: lobbyId,
      state: 'lobby',
      timeLeft: 10,
      users: [
        {
          id: userId,
          socketId: socketId,
          owner: true
        }
      ]
    });

    // check if lobby doesn't exist
    contains(lobbies, newLobby.id)
      ? console.log('Lobby already exists.')
      : lobbies.push(newLobby);
  } catch (err) {
    console.error(err);
  }
  console.log(JSON.stringify(lobbies, null, 4));
};

export const joinLobby = (lobbyId, userId, socketId) => {
  try {
    let lobbyToJoin = lobbies.find(obj => {
      return obj.id === lobbyId;
    });

    let newUser = new Object({
      id: userId,
      socketId: socketId,
      owner: false
    });

    contains(lobbyToJoin.users, newUser.id)
      ? console.log('User is already in the lobby.')
      : lobbyToJoin.users.push(newUser);
  } catch (err) {
    console.error(err);
  }
  console.log(JSON.stringify(lobbies, null, 4));
};

export const returnLobbies = () => {
  return lobbies;
};
