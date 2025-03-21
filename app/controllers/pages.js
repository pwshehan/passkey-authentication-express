class PagesController {
  welcome(req, res, next) {
    if (!req.user) return res.send("Hello World!");
    next();
  }
}

module.exports = new PagesController();
