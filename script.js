// 1)
    /*function name() {...};
    function name(a, b) {...}
    let name = function () {...};
    let name = () => 'Hello';
    let name = (a, b) => a * b;
    let name = (a, b) => {...}*/

// 2)
    /*function argsNumber(a, b, c, z, x, v) {
        return arguments.length;
    }
    console.log(argsNumber(3,2,4,5))*/

// 3)
    /*function result(a, b) {
        if (arguments[0] < arguments[1]) {
            return -1;
        } else if (arguments[0] === arguments[1]) {
            return 0;
        } else {
            return 1;
        }
    }

    console.log(result(1,5))*/

// 4)
    /*function factorial(number) { 
        let result = 1; 
        while(number){ 
            result *= number--; 
        } 
        return result; 
    }
    
    console.log(factorial(10))*/

// 5)
    /*function addNumbers(a, b, c) {
         return String(a) + String(b) + String(c)
    }

    console.log(addNumbers(5, 4, 3))*/ 

// 6)
    /*let area = (width, height) => {
        if (width != undefined && height != undefined ) {
            if (isNaN(width) == true && isNaN(height) == true) {
                return 'Невірно задані ширина та висота!'
            } else if (isNaN(width) == true && isNaN(height) == false) {
                return 'Невірно задані ширина!'
            } else if (isNaN(width) == false && isNaN(height) == true) {
                return 'Невірно задані висота!'
            } 
            return width * height
        } else if (width != undefined && height == undefined) {
            if (isNaN(width) == true) {
                return 'Невірно задана ширина!'
            }
            return width * 4;
        } else {
            return 'Значення не задані'
        }
    }

    console.log(area(5))*/

// 7)
    /*function reviewNum(number) {
        let result = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                result += i;
            }
        }

        if (result === number) {
            return 'Ідеальне число'
        } else {
            return 'Не ідеальне число'
        }
    
    }

    console.log(reviewNum(6))*/

// 8) 
    /*function reviewDiapazon(start, end) {
        for (let i = start; i < end; i++) {

            console.log(reviewNum(i))  
            
            function reviewNum() {
                let result = 0;
                for (let j = 1; j < i; j++) {
                    if (i % j === 0) {
                        result += j;
                    }
                }
    
                if (result === i) {
                    return i
                }
            }
        }
    }

    console.log(reviewDiapazon(1, 500))*/



       

    
