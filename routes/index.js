var express = require('express');
var router = express.Router();
var jsonData = require('fs');

function readJSONFile(filename, callback) {
    jsonData.readFile(filename, function (err, data) {
        if (err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch (exception) {
            callback(exception);
        }
    });
}
;
/* GET home page. */
//router.get('/', function (req, res, next) {
//    res.render('index', {
//        titulo: 'Delikia Touch Screen'
//    });
//});
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/producto/:id', function (req, res, next) {
    res.locals = {productoId: req.params.id};
    next();
}, function (req, res) {
    res.render('producto');
});

router.get('/menu', function (req, res) {
    readJSONFile('public/data.json', function (err, json) {
        if (err) {
            throw err;
        }
        res.render('menu', {
            titulo: 'Lista de todos los productos',
            dataJSON: json
        });
    });
});
//router.get('/json', function (req, res) {
//    res.download('public/data.json');
//
//});
//router.get('/producto/:productoId', function (req, res) {
//    // res.render('producto', {title: 'res vs app render'});
//    console.log('req.params.productoId -> ' + req.params.productoId);
//    res.locals = {
//        productoId: req.params.productoId
//    };
//    res.render('producto');
////    res.render('producto', {
////        productoId : req.params.productoId
////    });
////    res.render('producto', {
////        productoId: req.productoId
////    });
////    readJSONFile('public/data.json', function (err, json) {
////        if (err) {
////            throw err;
////        }
////        //console.log(json);
////        res.render('test', {
////            titulo: 'Lista de todos los productos',
////            dataJSON: json
////        });
////    });
//});

module.exports = router;