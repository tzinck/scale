import { watch, existsSync, readFileSync } from 'node:fs';
import express from 'express';

const app = express();
const port = 80;

let watchFile = './weight.txt';

if (process.argv.length > 2) {
    watchFile = process.argv[2];
}


let weight = readFileSync(watchFile, { encoding: 'utf8', flag: 'r' });

watch(watchFile, { encoding: 'utf8' }, (eventType, filename) => {
    console.log(weight);
});

app.get('/', (req, res) => {
    res.send(weight);
});

app.listen(port, () => {
    console.log(`Scale listening on port ${port}`);
});