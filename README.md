# What's BlindCSS?

BlindCSS is a **currently abandoned** browser open source coding game, for those who want to check their CSS knowledge and imagination.

###### Looking forward to revive the project ASAP, may be in different stack.


#### Stack

The project uses MEVN stack but might be changed to MERN in the future. The authentication is provided by [passport.js](http://www.passportjs.org/) oAuth strategies. SocketIO for handling lobbies.
Vuex was used for handling app's state management.

---

## The game flow

The user joins lobby with other players and is given the image (usually some auto-generated shapes). Then the player has to convert the given image to HTML and CSS code in given period of time using the browser text editor. At the end the code is being rendered and the result is shown to all players. They later decide who was the closest to the actual result but no one knows which work is whose. After the voting period the winner is announced.

---

## Challenges and roadmap

- [x] The player can't go outside the browser while playing in case he want's to cheat and spy the result. --> **When out of focus detected, timeout starts.**
- [x] Find a decent browser based text editor or make one. --> **[CodeMirror](https://codemirror.net/)**
- [ ] Make the website RWD well and enable mobile use.
- [ ] Find a good way to count points and create a ranking list of players.
- [ ] Rendering the user results fast - find the most lightweight and efficient way.

---

## Installation

###### At that point the project is not hosted anywhere but you can run it locally.

1. Clone the repo `git clone https://github.com/WojciechSala/blindcss.git`
2. Install all libraries in package.json directories (both client and server) `npm install`
3. Run the client and backend server by `npm run dev`
   NOTE:

   - You have to provide keys.js used in app.js and actions/auth.js to enable passport authentication.
   - You will need MongoDB.
   - You will need nodemon installed to run backend or just `node start.js`

4. Make sure the mongo and mongod is running.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
