import { Router } from 'express';
import passport from 'passport';

export default () => {
  const api = Router();

  api.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  api.get(
    '/google/cb',
    passport.authenticate('google', { session: true }),

    (req, res) => {
      res.redirect('http://localhost:8080');
    }
  );

  api.get('/facebook', passport.authenticate('facebook'));

  api.get(
    '/facebook/cb',
    passport.authenticate('facebook', { session: true }),

    (req, res) => {
      res.redirect('http://localhost:8080');
    }
  );

  api.get('/checkAuth', (req, res) => {
    console.log(req.isAuthenticated());
    // req.isAuthenticated() ? res.send(req.user) : res.send('unlogged');
  });

  api.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
  });

  return api;
};
