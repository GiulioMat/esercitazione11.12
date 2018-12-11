function fun(stringa){
    if(isNaN(stringa)){
        var lunghezza = stringa.length;
        var quadrato = (lunghezza*lunghezza);
        return quadrato
    }
    return -1;
}
module.exports = fun;