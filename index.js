"use strict";

// npm install --sqve request
// npm start


const me = this;

const logger = require('./logger');
const config = require('config');
const request = require('request');


const request_uri = "http://requestbin.fullcontact.com/xxxxxx";

module.exports.get_post_001 = () => {
    me.get_query();
    me.post_body();
    me.post_form();
    me.post_json();
};

//https://stackoverflow.com/questions/16903476/node-js-http-get-request-with-query-string-parameters



module.exports.get_query = () => {
    const options =
        {
            uri: request_uri,
            qs: {
                UsernameOrEmailAddress: "value1",
                Password: "value2"
            }
        };

    request.get(options,
        function (err, response, body) {
            if (err) {
                console.log('error:', error);
                return;
            }
            if (response && body) {
                console.log('status Code:', response && response.statusCode);
                console.log(body);
            }
        }
    );
};


module.exports.post_body = () => {
    const options =
        {
            uri: request_uri,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: 'UsernameOrEmailAddress=' + 'value1' + '&Password=' + 'value2',
        };

    request.post(options,
        function (err, response, body) {
            if (err) {
                console.log('error:', error);
                return;
            }
            if (response && body) {
                console.log('status Code:', response && response.statusCode);
                console.log(body);
            }
        }
    );
};

module.exports.post_form = () => {

    const options =
        {
            uri: request_uri,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            // body: 'UsernameOrEmailAddress=' + userid + '&Password=' + password,
            form: {
                UsernameOrEmailAddress: "value1",
                Password: "value2"
            },
        };

    request.post(options,
        function (err, response, body) {
            if (err) {
                console.log('error:', error);
                return;
            }
            if (response && body) {
                console.log('status Code:', response && response.statusCode);
                console.log(body);
            }
        }
    );
};


module.exports.post_json = () => {

    const options =
        {
            uri: request_uri,
            // body: 'UsernameOrEmailAddress=' + userid + '&Password=' + password,
            json: {
                UsernameOrEmailAddress: "value1",
                Password: "value2"
            },
        };

    request.post(options,
        function (err, response, body) {
            if (err) {
                console.log('error:', error);
                return;
            }
            if (response && body) {
                console.log('status Code:', response && response.statusCode);
                console.log(body);
            }
        }
    );
};


me.get_post_001();