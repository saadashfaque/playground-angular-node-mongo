# Test

A repository which conatins a Node(Express) server interacting with MongoDB to provide data to an Angular frontend application.

## Installation and usage

### Prerequisites

Make sure you've got `node` installed, preferably a newer version which supports ES6 (ECMAScript 2015). The version used in my system is 12.18.2

To run the app (while in development, not in production), `nodemon` is required which will automatically restart
your app when you change the source. To install it, run (from a terminal):

<pre>
npm install -g nodemon
</pre>

The start scripts (in `package.json`) are configured to use `nodemon`.

Next, make sure you also have MongoDB installed. In order to populate data in your collection, Connect to the test db. And import the data.csv using the following command:

<pre>
mongoimport --collection Products --file data.csv --type csv --headerline
</pre>

### Installing the modules

Run the following command to download and install the node_modules in backend folder to install dependencies:

<pre>
npm install
</pre>

### Running the app

Run the following command in your terminal while in backend folder

<pre>
npm start
</pre>

Watch the logs in the terminal to see if the app starts up successfully, and connects to your local database.
Open your browser, and open localhost:3000, or if there is any other port logged on the terminal then use that port.
