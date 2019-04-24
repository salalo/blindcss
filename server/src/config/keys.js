export default {
  mongodb: {
    DB: 'mongodb://localhost:27017/users'
  },

  cookie: {
    secret: 'sectrettochange'
  },

  google: {
    clientID:
      '1034667586163-g278lhp4bj5j4ce9mmkvahkd66k8r16q.apps.googleusercontent.com',
    secret: 'nPcjx_WnDTbLZFU42ErpaWR_',
    cb: '/auth/google/cb'
  },

  fb: {
    clientID: '304914400404505',
    secret: '6af0b93af4c69ce763af665a82987053',
    cb: '/auth/facebook/cb'
  }
};
