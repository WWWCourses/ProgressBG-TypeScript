function mul( x,y ){
    return ( x*y);
}
function taker( arg ){
    return function(){
        return arg;
    };
};
function addf( x ){
    return function( y ){
        return x + y;
    }
};
function applyf( f ){
    return function( x ){
        return function( z ){
            return f(x, z);
        }
    }
};


var taker = taker( 3 );
var addf = addf(3)(4);
var applyf = applyf(mul)(7)(6);

console.log( applyf );
