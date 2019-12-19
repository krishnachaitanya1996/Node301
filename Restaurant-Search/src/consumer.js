var q = 'tasks/kc2';

// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

var open = require('amqplib').connect('amqp://test:test@mt.nodesense.ai');
 console.log("getting started");
// Consumer
open.then(function(conn) {
 return conn.createChannel();
}).then(function(ch) {
 return ch.assertQueue(q).then(function(ok) {
   return ch.consume(q, function(msg) {
     if (msg !== null) {
       console.log(msg.content.toString());
       ch.ack(msg);
     }
   });
 });
}).catch(console.warn); 