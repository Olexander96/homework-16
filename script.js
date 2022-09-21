//Мінімум
// 1)Напиши всі можливі варіанти створення функцій
    /*function name() {...};
    function name(a, b) {...}
    let name = function () {...};
    let name = () => 'Hello';
    let name = (a, b) => a * b;
    let name = (a, b) => {...}*/

// 2) Створи функцію, яка буде виводити кількість переданих їй аргументів.
    function argsNumber() {
        return arguments.length;
    }
    console.log(argsNumber(3,2,4,5))

// 3)Напиши функцію, яка приймає 2 числа і повертає :
    //-1, якщо перше число менше, ніж друге; 
    //1 - якщо перше число більше, ніж друге; 
    //0 - якщо числа рівні.
    function result(a, b) {
        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    }

    console.log(result(1,5))

// 4) Напиши функцію, яка обчислює факторіал переданого їй числа.
    function factorial(number) { 
        let result = 1; 
        while(number){ 
            result *= number--; 
        } 
        return result; 
    }
    
    console.log(factorial(10))

// 5) Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: 
    //цифри 1, 4, 9 перетворяться в число 149.
    function addNumbers(a, b, c) {
         return String(a) + String(b) + String(c)
    }

    console.log(addNumbers(5, 4, 3)) 

// 6) Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 
    // 1 параметр, то вона обчислює площу квадрата.
    let area = (width, height) => {
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
            return width ** 2;
        } else {
            return 'Значення не задані'
        }
    }

    console.log(area(5, 10))

//Норма
// 7) Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, 
    //яке дорівнює сумі всіх своїх дільників.
    function reviewNum(number) {
        let result = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                result += i;
            }
        }

        if (result === number) {
            return 'Досконале число'
        } else {
            return 'Не досконале число'
        }
    
    }

    console.log(reviewNum(10))
    console.log(reviewNum(6))

// 8) Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа 
    //з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
    function reviewDiapazon(start, end) {
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

    console.log(reviewDiapazon(1, 500))



       

    
