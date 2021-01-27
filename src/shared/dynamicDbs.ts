// const mongoose = require('mongoose');
// let CURRENT_DB_CONNECTION = "";

let getModelName = async (req, schema, modelName, defaultConnection) => {
    const hostName = req.headers.hostName || req.headers.hostname ? req.headers.hostName || req.headers.hostname : "";
    if (!hostName) {
        throw "Hostname is not provided!";
    }
    // -------------------SWITCHING BETWEEN DBS AND STORE CONNECTIONS TO CACHE-------------------------
    let CURRENT_DB_CONNECTION = defaultConnection.useDb(hostName, { useCache: true });
    //-----------------------------------------------
    console.log("*******Database switched to", hostName, "database", "*******************");
    let model = CURRENT_DB_CONNECTION['model'](modelName, schema);
    return model;
}

module.exports =
{
    getModelName
}