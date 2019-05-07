import axios from 'axios';
import { router } from '@/router/index.js';

export const login = async ({ commit }) => {
  axios.defaults.withCredentials = true;

  try {
    const res = await axios.get('http://localhost:8081/auth');
    res.data === true ? commit('AUTH_USER') : null;
  } catch (err) {
    console.error(err);
  }
};

export const getUserData = async ({ commit }) => {
  axios.defaults.withCredentials = true;

  try {
    const res = await axios.get('http://localhost:8081/auth/getUser');
    commit('SET_USER_DATA', res.data);
  } catch (err) {
    console.log(err);
  }
};

export const joinLobby = ({ commit }, lobby_id) => {
  commit('JOIN_LOBBY', lobby_id);
  router.push('/lobby?' + lobby_id);
};

export const leaveLobby = ({ commit }) => {
  commit('LEAVE_LOBBY');
  router.push('/');
};
