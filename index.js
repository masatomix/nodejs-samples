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

// https://stackoverflow.com/questions/16903476/node-js-http-get-request-with-query-string-parameters


// Query StringをつけてGETするパタン
module.exports.get_query = () => {
    const options =
        {
            uri: request_uri,
            qs: {
                UsernameOrEmailAddress: "get_query",
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


// Formで Content-Type: application/x-www-form-urlencoded でPOSTするパタン(BODY文字列は自分で作成)
module.exports.post_body = () => {
    const options =
        {
            uri: request_uri,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: 'UsernameOrEmailAddress=' + 'post_body' + '&Password=' + 'value2',
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

// Formで Content-Type: application/x-www-form-urlencoded でPOSTするパタン(BODY文字列はJSONから自動生成してもらう)
module.exports.post_form = () => {

    const options =
        {
            uri: request_uri,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            form: {
                UsernameOrEmailAddress: "post_form",
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


// JSONを Content-Type: application/json でPOSTするパタン(BODYのJSON文字列は自動生成してもらう)
module.exports.post_json = () => {

    const options =
        {
            uri: request_uri,
            // body: 'UsernameOrEmailAddress=' + userid + '&Password=' + password,
            json: {
                UsernameOrEmailAddress: "post_json",
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