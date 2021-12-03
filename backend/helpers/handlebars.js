var Handlebars = require('hbs');

var truncate = function(str, len){
    if (str.length > len && str.length > 0) {
        var new_str = str + " ";
        new_str = str.substr (0, len);
        new_str = str.substr (0, new_str.lastIndexOf(" "));
        new_str = (new_str.length > 0) ? new_str : str.substr (0, len);

        return new Handlebars.SafeString ( new_str + '...' ); 
    }

    return str;
}

var ifEq = function(a, b, options) {

    console.log(a, b);
    if (a == b) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
};

var ifNotEq = function(a, b, options) {

    console.log(a, b);
    if (a != b) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
};


module.exports = {truncate, ifEq, ifNotEq}
