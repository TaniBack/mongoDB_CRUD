const mongo = require('mongodb');
const MongoClient = mongo.MongoClient; //la constante puede variar de nombre pero .MongoClient es fijo 

const mydb = "Empresa";  //Nombre de la BD 
const coleccion = "Clientes"; //Nombre de la coleccion 

const coleccion2 = "ColeccionParaBorrar"

const url = "mongodb://localhost:27017/"; //Se mantine la URL a menos que sea otro dominio 

//Creacion de una BD 
// MongoClient.connect(url+mydb, function(err, db) {
//     if (err) throw err;
//     console.log("Base de datos creada");
//     db.close();
//   });
  
//   Creacion de una coleccion dentro de una BD
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.createCollection(coleccion2, function(err, res) {
//       if (err) throw err;
//       console.log("Colección creada");
//       db.close();
//     });
//   });

//   const myobj = { "nombre": "Ana", "direccion": "C/Alcalá 1" }; //Se declara el objeto para poder insertarlo en al coleción 
//   const myobjone = { "nombre": "Tani", "direccion": "C/Pellers 3" }; //Se declara el objeto para poder insertarlo en al coleción 
//   const myobjtwo = { "nombre": "Pedro", "direccion": "C/Santana 3" }; //Se declara el objeto para poder insertarlo en al coleción 

//   //Insertar dentro de una coleccion de una BD
//     MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
    
//     dbo.collection(coleccion).insertOne(myobjtwo, function(err, res) {
//       if (err) throw err;
//       console.log("Documento insertado");
//       db.close();
//     });
//   });


//Obtener datos del primer elemento dentro de una coleccion
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.collection("Clientes").findOne({}, function(err, result) {
//       if (err) throw err;
//       console.log(result); //Se indica el parametro que queremos mostra. sino, solo mantenemos result 
//       db.close();
//     });
//   }); 


//Ver todos 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     dbo.collection(coleccion).find({}).toArray(function(err, result) { //Obtiene todos los resultados y los pasa a un Array
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });


//Query simple  
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     var query = { "direccion": "C/Santana 3" }; //Especificamos que queremos buscar 
//     dbo.collection(coleccion).find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

//Sort por un criterio (campo)
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     var mysort = { "nombre": 1 };
//     dbo.collection(coleccion).find().sort(mysort).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   }); 


//Busquedas paginadas
    //   MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db(mydb);
    //     dbo.collection(coleccion).find().limit(3).toArray(function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //       db.close();
    //     });
    //   });

//Borrar  
    //   MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db(mydb);
    //     var myquery = { "direccion": 'C/Alcalá 1' };
    //     dbo.collection(coleccion).deleteOne(myquery, function(err, obj) {
    //     if (err) throw err;
    //     console.log("Documento borrado");
    //     db.close();
    //     });
    // });

//Borrar coleccion
    // MongoClient.connect(url, function(err, db) {
    // if (err) throw err;
    // var dbo = db.db(mydb);
    // dbo.collection(coleccion2).drop(function(err, delOK) {
    //     if (err) throw err;
    //     if (delOK) console.log("Coleccion borrada");
    //     db.close();
    // });
    // });

// Actualizaciones
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(mydb);
//     var myquery = { "direccion": "C/Alcalá 1" };
//     var newvalues = { $set: {"nombre": "Pedro SL", "direccion": "C/Serrano" } };
//     dbo.collection(coleccion).updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//     });
// });