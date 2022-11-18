const Student = require('../models/Student');

exports.getAllLessons = (req, res) => {
  res.render('index', {
    page_name: "index"
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about', {
    page_name: "about"
  });
};

exports.getContactPage = (req, res) => {
  res.render('contact', {
    page_name: "contact"
  });
};

exports.getLoginPage = (req, res) => {
  res.render('login');
};

exports.getRegisterPage = (req, res) => {
  res.render('register');
};

exports.getCoursesPage = (req, res) => {
  res.render('courses');
};

exports.getCoursePage = (req, res) => {
  res.render('course');
};

exports.getDashboardPage = (req, res) => {
  res.render('dashboard');
};

