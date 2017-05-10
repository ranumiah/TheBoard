(function (controllers) {

    var homeController = require("./homeController");
    var notesController = require("./notesController");

    // The app is coming from Express
    // the purpose of the init here is to initialise all the routes in each controller
    controllers.init = function (app) {
        homeController.init(app);
        notesController.init(app);
    };

})(module.exports);