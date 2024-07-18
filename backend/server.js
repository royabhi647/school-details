const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'schoolDB',
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected');
  }
});

app.post('/addSchool', (req, res) => {
  const { name, address, city, state, contact, image, email_id } = req.body;

  const query = 'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, address, city, state, contact, image, email_id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error adding school');
    } else {
      res.status(200).send('School added successfully');
    }
  });
});

app.get('/schools', (req, res) => {
  const query = 'SELECT * FROM schools';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching schools');
    } else {
      res.status(200).json(results);
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
