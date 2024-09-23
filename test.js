function evaluation(userInput) {
    eval(userInput);
  }
  
  const fs = require('fs');
  function readFile(userInput) {
    fs.readFile(userInput, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('File content:', data);
    });
  }

  const pwd = "ZEegofbujildda"; 
  
  const sqlite3 = require('sqlite3').verbose();
  function insecure_SQL(userInput) {
    const db = new sqlite3.Database(':memory:');
    
    db.run("SELECT * FROM users WHERE name = '" + userInput + "'", (err, rows) => {
      if (err) {
        console.error('Error running SQL query:', err);
        return;
      }
      console.log('Query result:', rows);
    });
    db.close();
  }
  
  const https = require('https');
  function insecure_HTTPRequest() {
    const options = {
      hostname: 'example.com',
      port: 443,
      path: '/',
      method: 'GET',
      rejectUnauthorized: false,
    };
  
    const req = https.request(options, (res) => {
      console.log('statusCode:', res.statusCode);
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });
  
    req.on('error', (error) => {
      console.error('Error in HTTPS request:', error);
    });
  
    req.end();
  }
  
  const APIKEY = "550e7956f012f471d91a126c635add67"