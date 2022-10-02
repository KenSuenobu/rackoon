/**
 * Rackoon
 */

import { OpenDCController } from "../src/api";
import { OpenDCRouter } from "../src/routes/OpenDCRouter";
import pgPromise from "pg-promise";
import { MembersAPIDelegateImpl } from "../src/impl/MembersAPIDelegateImpl";
import { OwnersAPIDelegateImpl } from "../src/impl/OwnersAPIDelegateImpl";
import { RacksAPIDelegateImpl } from "../src/impl/RacksAPIDelegateImpl";
import { RackAssetsAPIDelegateImpl } from "../src/impl/RackAssetsAPIDelegateImpl";
import { RackAssetServicesAPIDelegateImpl } from "../src/impl/RackAssetServicesAPIDelegateImpl";

(async () => {
  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  const pgp = pgPromise();
  const db = pgp({
    host: "localhost",
    port: 5432,
  });

  app.use(bodyParser.json());

  const port = 3001;
  const controller: OpenDCController = new OpenDCController();

  controller.membersDelegateImpl = new MembersAPIDelegateImpl(db);
  controller.ownersDelegateImpl = new OwnersAPIDelegateImpl(db);
  controller.racksDelegateImpl = new RacksAPIDelegateImpl(db);
  controller.rackAssetsDelegateImpl = new RackAssetsAPIDelegateImpl(db);
  controller.rackAssetServicesDelegateImpl =
    new RackAssetServicesAPIDelegateImpl(db);
  OpenDCRouter.registerAll(app, controller);

  app.listen(port, () => {
    console.log(`Accepting connections on: http://localhost:${port}/`);
  });
})();
