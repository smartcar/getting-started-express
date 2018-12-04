This is the starter kit for Server-Side Rendering with Express and Smartcar.

This kit contains a simple web application that displays car information using Smartcar's Node SDK and Express.

## Instructions
Before we get started, create an application on Smartcar's Developer Dashboard to get your API keys.

**Note:** On the dashboard, you will want to set your `redirect_uri` as `http://localhost:8000/exchange`.

Then, we can set these as environment variables -
```bash
$ export CLIENT_ID=<your-client-id>
$ export CLIENT_SECRET=<your-client-secret>
$ export REDIRECT_URI=<your-redirect-uri>
```

Make sure you have cloned this repo -
```bash
$ git clone https://github.com/smartcar/getting-started-express.git
$ cd getting-started-express/app
```
To install the required dependencies and run this React app -
```bash
$ npm install
$ node index.js
```

Once your server is up and running, you can authenticate your vehicle at `http://localhost:8000/login` in your browser. In our current set up, we are using Smartcar's [test mode](https://smartcar.com), so you can log in with any username and password and you will see information of a simulated vehicle.
