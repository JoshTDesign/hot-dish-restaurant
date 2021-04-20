// Require/import the HTTP module
const http = require('http');

// Call npm packages
const express = require('express');
const path = require('path');

// Define the port
const PORT = 8080;

// Test function
// const handleRequest = (request, response) => {
//     // Post string to page
//     response.end(`We ball!!`);
// };


// Route to the home page
const displayHome = (res) => {
    const myHTML = `
    <html>
    <body>
    <h1>Home Page</h1>
    <a href='/'>Home</a>
    <a href='/reserve'>Reservations</a>
    <a href='/table'>Waitlist</a>
    </body>
    </html>`;

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};

//Page for active reservations
const displayReserves = (res) => {
    const myHTML = `
    <html>
    <body>
    <h1>Reservations</h1>
    <a href='/'>Home</a>
    <a href='/reserve'>Reservations</a>
    <a href='/table'>Waitlist</a>
    </body>
    </html>`;

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};

//Page for waitlist
const displayWait = (res) => {
    const myHTML = `
    <html>
    <body>
    <h1>Waitlist</h1>
    <a href='/'>Home</a>
    <a href='/reserve'>Reservations</a>
    <a href='/table'>Waitlist</a>
    </body>
    </html>`;

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};

// 404 page for if user tries to navigate to a nonexistent page
const display404 = (url, res) => {
    const myHTML = `
    <html>
    <body>
    <h1>404 Not Found </h1>
    <p>The page you were looking for: ${url} can not be found</p>
    </body>
    </html>`;

    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};

// Create handleRequest file to navigate between pages
const handleRequest = (req, res) => {
    // Grab request url
    const path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {
        case '/':
            return displayHome(res);

        case '/reserve':
            return displayReserves(res);

        case '/table':
            return displayWait(res);

        default:
            return display404(path, res);
    }
};

// Create server with node http
// Pass the handleRequest function to add functionality
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});




// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'make.html'))); //doublecheck html names
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));  //doublecheck html names


const tables = [];
const waitlist = [];

app.get('/api/tables', (req, res) => res.json(tables));

app.post('/api/tables', (req, res) => {
    const newReservation = req.body;
    console.log('New reservation made');
    console.log(newReservation);
  
    characters.push(newReservation);
    res.json(newReservation);
  });




