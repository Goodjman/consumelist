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
  chapters: Number,
});
const Manhua = mongoose.model('Manhua', manhuaSchema);

const wishlistedfilmSchema = new mongoose.Schema({
  title: String,
  duration: Number,
});
const wishlistedFilm = mongoose.model('wishlistedFilm', wishlistedfilmSchema);

const wishlistedserialSchema = new mongoose.Schema({
  title: String,
  Serduration: Number,
  SeriesInSeason: Number,
  Seasons: Number,
});
const wishlistedSerial = mongoose.model(
  'wishlistedSerial',
  wishlistedserialSchema
);

const wishlistedbookSchema = new mongoose.Schema({
  title: String,
  pages: Number,
});
const wishlistedBook = mongoose.model('wishlistedBook', wishlistedbookSchema);

const wishlistedanimeSchema = new mongoose.Schema({
  title: String,
  Serduration: Number,
  SeriesInSeason: Number,
  Seasons: Number,
});
const wishlistedAnime = mongoose.model(
  'wishlistedAnime',
  wishlistedanimeSchema
);

const wishlistedmanhuaSchema = new mongoose.Schema({
  title: String,
  chapters: Number,
});
const wishlistedManhua = mongoose.model(
  'wishlistedManhua',
  wishlistedmanhuaSchema
);

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

/*//inserting HEY INSERTING------------- STARTS-----------HERE------------------
Film.insertMany([
  { title: 'The Lord of the Rings', duration: 180 },
  { title: 'Pulp Fiction', duration: 80 },
  { title: 'Inception', duration: 140 },
  { title: 'Fight Club', duration: 110 },
  { title: 'Forrest Gump', duration: 115 },
  { title: 'Star Wars', duration: 100 },
  { title: 'The Green Mile', duration: 105 },
])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
wishlistedFilm
  .insertMany([
    { title: 'Liar Liar', duration: 80 },
    { title: 'Yes man', duration: 70 },
    { title: 'Django Unchained', duration: 140 },
    { title: 'Army of Thieves', duration: 110 },
    { title: 'Scarface', duration: 155 },
  ])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
Serial.insertMany([
  { title: 'Breakin Bad', Serduration: 45, SeriesInSeason: 10, Seasons: 5 },
  {
    title: 'Better Call Soul',
    Serduration: 45,
    SeriesInSeason: 12,
    Seasons: 6,
  },
  { title: 'Wednesday', Serduration: 60, SeriesInSeason: 10, Seasons: 1 },
  {
    title: 'The Walking Dead',
    Serduration: 45,
    SeriesInSeason: 15,
    Seasons: 8,
  },
  { title: 'Flash', Serduration: 45, SeriesInSeason: 15, Seasons: 6 },
  { title: 'Green Arrow', Serduration: 45, SeriesInSeason: 20, Seasons: 8 },
])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
wishlistedSerial
  .insertMany([
    {
      title: 'Rings of Power',
      Serduration: 60,
      SeriesInSeason: 10,
      Seasons: 1,
    },
    {
      title: 'Boba Fett',
      Serduration: 45,
      SeriesInSeason: 12,
      Seasons: 2,
    },
    { title: 'The Sandman', Serduration: 60, SeriesInSeason: 10, Seasons: 1 },
    {
      title: 'Brooklyn nine-nine',
      Serduration: 45,
      SeriesInSeason: 20,
      Seasons: 8,
    },
    {
      title: 'Peaky Blinders',
      Serduration: 45,
      SeriesInSeason: 10,
      Seasons: 5,
    },
  ])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
Book.insertMany([
  { title: 'The Hobbit', pages: 180 },
  { title: 'The Picture of Dorian Gray', pages: 90 },
  { title: 'The Importance of Being Earnest', pages: 45 },
  { title: 'The Happy Prince', pages: 40 },
  { title: 'The Witcher', pages: 1200 },
  { title: 'Salome', pages: 30 },
])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
wishlistedBook
  .insertMany([
    { title: 'Филипп Перри - Как не сойти с ума', pages: 280 },
    { title: 'Келли Макгонигал - Сила воли', pages: 270 },
    { title: 'Грег МакКеон - Эссенциализм', pages: 240 },
    { title: 'Филипп Зимбардо - Как побороть застенчивость', pages: 310 },
    { title: 'Джек Шафер - Включаем обаяние', pages: 155 },
    { title: 'Максим Ильяхов - Ясно Понятно', pages: 240 },
    { title: 'Максим Ильяхов - Пиши, сокращай', pages: 310 },
    {
      title: 'Роберт Энтони - Главные секреты абсолютной уверенности в себе',
      pages: 155,
    },
  ])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
Anime.insertMany([
  { title: 'Demon Slayer', Serduration: 25, SeriesInSeason: 20, Seasons: 3 },
  {
    title: 'Code Geass',
    Serduration: 25,
    SeriesInSeason: 24,
    Seasons: 3,
  },
  { title: 'Death Note', Serduration: 25, SeriesInSeason: 25, Seasons: 2 },
  {
    title: 'Re:Zero',
    Serduration: 25,
    SeriesInSeason: 20,
    Seasons: 4,
  },
  { title: 'HunterXHunter', Serduration: 25, SeriesInSeason: 200, Seasons: 2 },
  { title: 'Stein Gate', Serduration: 25, SeriesInSeason: 20, Seasons: 2 },
  { title: 'Lookism', Serduration: 25, SeriesInSeason: 10, Seasons: 1 },
])
  .then(function () {
    console.log('Data inserted');
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
wishlistedAnime
  .insertMany([
    {
      title: 'The Ancient Magus Bride',
      Serduration: 25,
      SeriesInSeason: 10,
      Seasons: 5,
    },
    {
      title: 'Land of the Lustrous',
      Serduration: 25,
      SeriesInSeason: 12,
      Seasons: 2,
    },
    {
      title: 'We Never Learn: Bokuben',
      Serduration: 25,
      SeriesInSeason: 10,
      Seasons: 1,
    },
    {
      title: 'Monthly Girls Nozaki-kun',
      Serduration: 25,
      SeriesInSeason: 15,
      Seasons: 2,
    },
    { title: 'SWORDGAI', Serduration: 25, SeriesInSeason: 15, Seasons: 2 },
    {
      title: 'Life Lessons with Uramichi-Oniisan',
      Serduration: 25,
      SeriesInSeason: 20,
      Seasons: 1,
    },
  ])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });

Manhua.insertMany([
  { title: 'Martial Pick', chapters: 3600 },
  { title: 'Solo Leveling', chapters: 186 },
  { title: 'Omnisciecnt Reader', chapters: 510 },
  { title: 'The Beginning After The End', chapters: 60 },
  { title: 'The World After The End', chapters: 150 },
  { title: 'I got a mythical class item', chapters: 35 },
  { title: 'A Player who can`t level up', chapters: 35 },
])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
wishlistedManhua
  .insertMany([
    { title: 'Boku no Hero Academia', chapters: 580 },
    { title: 'Tokyo Revengers', chapters: 170 },
    { title: 'Yao Shen Ji', chapters: 240 },
  ])
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });*/
