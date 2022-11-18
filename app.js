const express = require("express");
const app = express();
const ejs = require('ejs');
const Student = require('./models/Student');
const Teacher = require('./models/Teacher');
const Admin = require('./models/Admin');
const pageController = require('./controllers/pageController'); 

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

const port = 3000;

app.get('/', pageController.getAllLessons);
app.get('/register', pageController.getRegisterPage);
app.get('/login', pageController.getLoginPage);
app.get('/register', pageController.getRegisterPage);
app.get('/dashboard', pageController.getDashboardPage);
app.get('/course', pageController.getCoursePage);
app.get('/courses', pageController.getCoursesPage);
app.get('/contact', pageController.getContactPage);
app.get('/about', pageController.getAboutPage);

app.listen(port, () => {
  console.log("App started on port " + port);
});

