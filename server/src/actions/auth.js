import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import keys from '../config/keys.js';
import User from '../config/user-model.js';

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(null, false));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.secret,
      callbackURL: keys.google.cb
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await User.findOne({ googleID: profile.id });
        // user exists => login, else register
        if (user) done(null, user);
        else {
          try {
            let newUser = await new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleID: profile.id
            }).save();
            done(null, newUser);
          } catch (error) {
            console.error(error);
            done(error);
          }
        }
      } catch (err) {
        console.error(err);
        done(null, false);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.fb.clientID,
      clientSecret: keys.fb.secret,
      callbackURL: keys.fb.cb
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await User.findOne({ facebookID: profile.id });
        // user exists => login, else register
        if (user) done(null, user);
        else {
          try {
            let newUser = await new User({
              name: profile.displayName,
              email: profile.email || 'email not found',
              facebookID: profile.id
            }).save();
            done(null, newUser);
          } catch (error) {
            console.error(error);
            done(error);
          }
        }
      } catch (err) {
        console.error(err);
        done(null, false);
      }
    }
  )
);
