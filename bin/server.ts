/**
 * Open-DCMon
 */

import {OpenDCController} from "../src/api";
import {OpenDCRouter} from "../src/routes/OpenDCRouter";

(async () => {

    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const path = require("path");

    app.use(bodyParser.json());
    app.set('views', path.join(__dirname, '../pages/'));
    app.use(express.static(path.join(__dirname, '../pages/css')));
    app.use(express.static(path.join(__dirname, 'node_modules')));
    app.set('view engine', 'ejs');

    const port = 3000;
    const controller: OpenDCController = new OpenDCController();

    OpenDCRouter.registerAll(app, controller);

    const router = express.Router();

    router.get('/', (req, res) => {
        console.log('Request for home received');
        res.render('index');
    });

    router.get('/login', (req, res) => {
        console.log('Request for login received');
        res.render('login/index');
    });

    app.use('/', router);

    app.listen(port, () => {
        console.log(`Accepting connections on: http://localhost:${port}/`);
    });

})();
