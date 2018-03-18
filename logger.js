const log4js = require('log4js');

log4js.configure({
    appenders: {
        main: {type: 'file', filename: './logs/main.log', 'pattern': '-yyyy-MM-dd'},
        main1: {type: 'console', 'pattern': '-yyyy-MM-dd'}
    },
    categories: {
        default: {appenders: ['main'], level: 'trace'},
        main1: {appenders: ['main1'], level: 'trace'}
    }
});

const logger = exports = module.exports = {};
logger.main = log4js.getLogger('main');
logger.console = log4js.getLogger('main1');
