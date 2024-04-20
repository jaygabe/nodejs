const fs = require ('fs');

const logContent = (err, data) => {
    if(err) throw err;
    console.log(data);
}

fs.readFile("example.txt", "utf8", logContent);