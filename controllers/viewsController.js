exports.getHomePage = (req, res) => {
  res.render('index', { pageTitle: 'Home' });
};
