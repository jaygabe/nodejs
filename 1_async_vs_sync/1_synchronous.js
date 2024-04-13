const fs = require('fs');

try {
    const data = fs.readFileSync('example.txt', 'utf8');
    for (let i = 0; i < 100000; i++) {
        console.log(i);
    }
    console.log(data);
} catch (err) {
    console.error(err);
}