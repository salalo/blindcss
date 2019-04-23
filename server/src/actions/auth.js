import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import keys from '../config/keys.js';
import User from '../config/user-model.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.secret,
      callbackURL: '/auth/google/cb'
    },
    (token, tokenSecret, profile, done) => {
      User.findOne({ googleID: profile.id })
        .then(currentUser => {
          currentUser
            ? done(null, currentUser)
            : new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleID: profile.id
              })
                .save()
                .then(newUser => done(null, newUser))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.fb.clientID,
      clientSecret: keys.fb.secret,
      callbackURL: '/auth/facebook/cb'
    },
    (token, tokenSecret, profile, done) => {
      User.findOne({ facebookID: profile.id })
        .then(currentUser => {
          currentUser
            ? done(null, currentUser)
            : new User({
                name: profile.displayName,
                email: profile.email || 'email not found',
                facebookID: profile.id
              })
                .save()
                .then(newUser => done(null, newUser))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
  )
);
