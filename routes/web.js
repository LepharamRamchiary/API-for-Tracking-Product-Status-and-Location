const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
function initRoutes(app) {
    // Home page
    app.get("/", homeController().index)

    // cart page
    app.get("/cart", cartController().index)

    // login page
    app.get("/login", authController().login)

    // Register page
    app.get("/register", authController().register)
}


module.exports = initRoutes;