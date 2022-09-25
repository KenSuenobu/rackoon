/**
 * Open-DCMon
 */

import {OpenDCController} from "../src/api";
import {OpenDCRouter} from "../src/routes/OpenDCRouter";
import {Loader} from "../src/rackoon-sql/Loader";

(async () => {

    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');

    app.use(bodyParser.json());

    const port = 3000;
    const controller: OpenDCController = new OpenDCController();

    Loader.loadSql('sql/main.sql', 'db/rackoon.db');
    OpenDCRouter.registerAll(app, controller);

    app.listen(port, () => {
        console.log(`Accepting connections on: http://localhost:${port}/`);
    });

})();
