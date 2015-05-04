console.log('Loading restify server...');

var _       = require('lodash');
var Promise = require("bluebird");
var restify = require('restify');
// var redisServer   = require("redis");
// var redis  = redisServer.createClient();
// // redis.on("error", function (err)
// {
//     console.error("Resis Error:", err);
// });
// redis.set("string key", "string val", redis.print);
var api     = restify.createServer({name: 'angular-1-starter-api'});

api.listen(2146, function () {
    console.log('%s listening at %s', api.name, api.url)
});

api.pre(restify.CORS({
    origins: ['*'],
    credentials: false,
    headers: ['X-Requested-With', 'Authorization']
}));
api.pre(restify.fullResponse());

api.use(restify.bodyParser());

api.get('/ping', function (req, res, next) {
    console.log("ping called");
    res.send(200, {response: true});
});

api.get('/testmongo', function(req, res, next)
{
    console.log("testing MongoClient...");
    testMongo();
    res.send(200, {response: true});
});

function testMongo()
{
    try
    {
        return;
        var MongoClient = require('mongodb').MongoClient
          , assert = require('assert');
         
        // Connection URL 
        var url = 'mongodb://localhost:27017/mydb';
        // Use connect method to connect to the Server 
        MongoClient.connect(url, function(err, db) {
            console.log("MongoClient connect");
          assert.equal(null, err);
          console.log("Connected correctly to server");
         
         insertDocuments(db, function() {
            updateDocument(db, function() {
              removeDocument(db, function() {
                findDocuments(db, function() {
                  db.close();
                });
              });
            });
          });
        });

        var insertDocuments = function(db, callback) {
          // Get the documents collection 
          var collection = db.collection('documents');
          // Insert some documents 
          collection.insert([
            {a : 1}, {a : 2}, {a : 3}
          ], function(err, result) {
            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the document collection");
            callback(result);
          });
        };

        var updateDocument = function(db, callback) {
          // Get the documents collection 
          var collection = db.collection('documents');
          // Update document where a is 2, set b equal to 1 
          collection.update({ a : 2 }
            , { $set: { b : 1 } }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
          });  
        };

        var removeDocument = function(db, callback) {
          // Get the documents collection 
          var collection = db.collection('documents');
          // Insert some documents 
          collection.remove({ a : 3 }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Removed the document with the field a equal to 3");
            callback(result);
          });    
        };

        var findDocuments = function(db, callback) {
          // Get the documents collection 
          var collection = db.collection('documents');
          // Find some documents 
          collection.find({}).toArray(function(err, docs) {
            assert.equal(err, null);
            assert.equal(2, docs.length);
            console.log("Found the following records");
            console.dir(docs)
            callback(docs);
          });      
        };


    }
    catch(e)
    {
        console.error("Failed to boot up Mongo in Restify API.");
        console.error(e);
    }
}

module.exports = api;