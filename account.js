var num = require('./randomNumber');
var conv = require('./convert');



var account = function(){
    var greeting = "Account Balance: \n";
    var balance = conv(num(100, 1000000));
    return (greeting + balance);
};

module.exports = account;

