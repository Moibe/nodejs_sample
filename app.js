const http = require('http');

const hostname = '127.0.0.1';
const port = 61824;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Moibe Deploybot Done Correctly! Node.js\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const axios = require('axios');
const testAuthentication = () => {
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    return axios
        .get(url, {
            headers: {
                pinata_api_key: 'c56ebc06628414410e5f',
                pinata_secret_api_key: '505b93f46c2bc646801d6de0df124e52c3621eab432b106546ec5ea130fc57c2'
            }
        })
        .then(function (response) {
            console.log(response);
            alert("Mint Done"); 
        })
        .catch(function (error) {
            console.log(response);
            alert("Not Done"); 
        });
};
