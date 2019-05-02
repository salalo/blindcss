import axios from 'axios';
import { router } from '@/router/index.js';

export const login = async ({ commit }) => {
  axios.defaults.withCredentials = true;
};
