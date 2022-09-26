const controller = require("../controllers/download.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/downloads",  
    [authJwt.verifyToken],
    controller.insertDownloadRequest
  );

  app.get("/api/downloads", [authJwt.verifyToken], controller.getDownloadRequestsForUser
  );
  
  app.post("/api/download-file", [authJwt.verifyToken], controller.downloadFile
  );
};
