const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3012;

app.use(express.static(path.resolve(__dirname, 'prod')));

const data = [
  {
    id: 1,
    unique: 'unique1',
    name: 'name1',
  },
  {
    id: 2,
    unique: 'unique2',
    name: 'name2',
  },
  {
    id: 3,
    unique: 'unique3',
    name: 'name3',
  },
  {
    id: 4,
    unique: 'unique4',
    name: 'name4',
  },
];

app.get('/api/data', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.send(data);
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`API starded in http://localhost:${port}/ .......`);
});
