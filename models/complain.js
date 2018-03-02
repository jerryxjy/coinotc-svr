var mongoose = require('mongoose');

module.exports = mongoose.model('complain', {
    complainant: String,
    orderId: String,
    pleader: String,
    type: Number,
    content: String,
    status:Number,//1:hold on 2:in progess 3:completed
    support:String,
    date:Date
});
