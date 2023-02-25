const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

mongoose
  .set('strictQuery', true)
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_DATABASE}.091opmm.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...'));

// Define your models here
const filmSchema = new mongoose.Schema({
  title: String,
  duration: Number,
});
const Film = mongoose.model('Film', filmSchema);

const serialSchema = new mongoose.Schema({
  title: String,
  Serduration: Number,
  SeriesInSeason: Number,
  Seasons: Number,
});
const Serial = mongoose.model('Serial', serialSchema);

const bookSchema = new mongoose.Schema({
  title: String,
  pages: Number,
});
const Book = mongoose.model('Book', bookSchema);

const animeSchema = new mongoose.Schema({
  title: String,
  Serduration: Number,
  SeriesInSeason: Number,
  Seasons: Number,
});
const Anime = mongoose.model('Anime', animeSchema);

const manhuaSchema = new mongoose.Schema({
  title: String,
  Serduration: Number,
  chapters: Number,
});
const Manhua = mongoose.model('Manhua', animeSchema);

const consumedfilmSchema = new mongoose.Schema({
  title: String,
  duration: Number,
});
const consumedFilm = mongoose.model('consumedFilm', consumedfilmSchema);

const consumedserialSchema = new mongoose.Schema({
  title: String,
  Serduration: Number,
  SeriesInSeason: Number,
  Seasons: Number,
});
const consumedSerial = mongoose.model('consumedSerial', consumedserialSchema);

const consumedbookSchema = new mongoose.Schema({
  title: String,
  pages: Number,
});
const consumedBook = mongoose.model('consumedBook', consumedbookSchema);

const consumedanimeSchema = new mongoose.Schema({
  title: String,
  Serduration: Number,
  SeriesInSeason: Number,
  Seasons: Number,
});
const consumedAnime = mongoose.model('consumedAnime', consumedanimeSchema);

const consumedmanhuaSchema = new mongoose.Schema({
  title: String,
  chapters: Number,
});
const consumedManhua = mongoose.model('consumedManhua', consumedanimeSchema);
// Define your middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define your routes here
app.get('/api/films', async (req, res) => {
  const films = await Film.find().sort('title');
  res.send(films);
});

app.post('/api/films', async (req, res) => {
  const film = new Film({
    title: req.body.title,
    duration: req.body.duration,
  });
  await film.save();
  res.send(film);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
