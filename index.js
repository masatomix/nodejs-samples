"use strict";

// npm install --save config log4js
// npm start
const me = this;

const logger = require('./logger');
const config = require('config');


module.exports.execute001 = () => {
    const host = config.host;
    const port = config.port;
    const secure = config.secure;
    const auth = config.auth;

    logger.main1.debug(config);

    logger.main.debug(host);
    logger.main.debug(port);
    logger.main.debug(secure);
    logger.main.debug(auth);

    logger.main1.info(host);
    logger.main1.info(port);
    logger.main1.info(secure);
    logger.main1.info(auth.user);
    logger.main1.info(auth.pass);

};


me.execute001();

