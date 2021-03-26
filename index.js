function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1);   
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x );   
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x*2);
}


function mapToSquare(sourceArray) {
    return sourceArray.map(x => x**2);
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((total, a) => total + a);
}

function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false)
}