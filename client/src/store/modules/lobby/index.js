import * as mutations from './mutations';
import * as actions from './actions';

export const lobby = {
  namespaced: true,
  state: {
    id: '',
    users: [],
    timeLeft: '',
    state: 'none' || 'lobby' || 'game' || 'voting'
  },
  mutations,
  actions
};
