/* global use, db */

// Select the database to use.
use('viagens');
db.getCollection('destinos');

db.getCollection('destinos').insertMany([
 { 'cidade': 'Juiz de Fora'},
 { 'cidade': 'Cabo Frio'},
 { 'cidade': 'Rio de Janeiro'},
 { 'cidade': 'Ouro Preto'},
 { 'cidade': 'Salvador'}]);

db.getCollection('destinos').insertOne(
  {'cidade': 'Petropolis'}
)
    
db.destinos.find({'cidade': 'Cabo Frio'});
db.destinos.updateOne({'cidade': 'Juiz de Fora'}, {$set: {'cidade': 'Juíz de Fora'}});
db.destinos.find();
db.destinos.updateMany({'cidade': 'Salvador'}, {$set: {'estado': 'BA'}});
db.destinos.updateMany({'cidade': 'Rio de Janeiro'}, {$set: {'estado': 'RJ'}});
db.destinos.updateMany({'cidade': 'Petropolis'}, {$set: {'estado': 'RJ'}});

db.destinos.find({$or: [{'estado': 'RJ'}, {'cidade': 'Juíz de Fora'}]}).sort({cidade:-1})
