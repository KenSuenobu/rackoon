/**
 * Rackoon
 */

import { OpenDCController } from "../src/api";
import { OpenDCRouter } from "../src/routes/OpenDCRouter";

(async () => {
  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");

  app.use(bodyParser.json());

  const port = 3001;
  const controller: OpenDCController = new OpenDCController();

  // controller.usersDelegateImpl = new UsersAPIDelegateImpl(sqliteInstance);
  // OpenDCRouter.registerAll(app, controller);
  //
  // app.listen(port, () => {
  //   console.log(`Accepting connections on: http://localhost:${port}/`);
  // });
  //
  // process.on("SIGTERM", () => {
  //   console.log("Shutting down.");
  //   sqliteInstance.close();
  // });
})();
