// Написать функцию, которая принимает 2 числа и возвра-щает -1, если первое меньше, чем второе; 1 – если первоебольше, чем второе; и 0 – если числа равны.
function Compare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else if (a == b) {
        return 0;
    }
    else {
        return 'Вы ошиблись при вводе чисел';
    }
}
var x = +prompt('Введите первое число для сравнения');
var y = +prompt('Введите второе число для сравнения');
alert(Compare(x, y));
// Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n) {
    var n1 = 1;
    while (n > 0) {
        n1 = n1 * n;
        n--;
    }
    return n1;
}
var range_boundary = +prompt('введите число, факториал которого нужно найти');
alert(factorial(range_boundary));
//Написать функцию, которая принимает три отдельныецифры и превращает их в одно число. Например: цифры1, 4, 9 превратятся в число 149.
function turnsInto(n1, n2, n3) {
    if (n1 != 0) {
        var a = String(n1);
        var b = String(n2);
        var c = String(n3);
        return a + b + c;
    }
    else if (n2 != 0) {
        var a = String(n1);
        var b = String(n2);
        var c = String(n3);
        return b + c + a;
    }
    else if (n3 != 0) {
        var a = String(n1);
        var b = String(n2);
        var c = String(n3);
        return c + a + b;
    }
    else {
        return n1;
    }
}
var figure1 = +prompt('введите первую цифру для превращения в число');
var figure2 = +prompt('введите вторую цифру для превращения в число');
var figure3 = +prompt('введите третью цифру для превращения в число');
alert(turnsInto(figure1, figure2, figure3));
//Написать функцию, которая принимает длину и ширинупрямоугольника и вычисляет его площадь. Если в функциюпередали 1 параметр, то она вычисляет площадь квадрата.
function the_area_of_the_figure(a, b) {
    if (a == 0) {
        return 'Площадь квадрата: ' + b * b;
    }
    else if (b == 0) {
        return 'Площадь квадрата: ' + a * a;
    }
    else {
        return 'Площадь прямоугольника: ' + a * b;
    }
}
var side_length1 = +prompt('введите длину одной стороны прямоугольника или квадрата');
var side_length2 = +prompt('введите длину второй стороны прямоугольника, для квадрата вводить не обязательно');
alert(the_area_of_the_figure(side_length1, side_length2));
//Написать функцию, которая проверяет, является ли пере-данное ей число совершенным. Совершенное число – эточисло, равное сумме всех своих собственных делителей. 
function perfect_number(w) {
    var w1 = 0;
    for (var i = 1; i < w; i++) {
        if (w % i == 0) {
            w1 = w1 + i;
        }
    }
    if (w1 == w) {
        return 'ваше число совершенно';
    }
    else {
        return 'ваше число не является совершенным';
    }
}
var number_to_divide = +prompt("введите число для определения совершенства");
alert(perfect_number(number_to_divide));
//Написать функцию, которая принимает минимальное имаксимальное значения для диапазона, и выводит толькоте числа из диапазона, которые являются совершенными.Используйте написанную ранее функцию, чтобы узнавать,совершенное число или нет.
function sampling_of_perfect_numbers(min, max) {
    do {
        var w1 = 0;
        for (var i = 1; i < min; i++) {
            if (min % i == 0) {
                w1 = w1 + i;
            }
        }
        if (w1 == min) {
            result += min;
            toString();
        }
        min += 1;
    } while (max >= min);
    if (result == '') {
        return 'в диапазоне нет совершенных чисел';
    }
    else {
        return result;
    }
}
var minimum_range_value = +prompt('укажите начальное значение диапазона');
var maximum_range_value = +prompt('укажите конечное значение диапазона');
var result = '';
document.write(sampling_of_perfect_numbers(minimum_range_value, maximum_range_value));
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не былипереданы, то выводить их как 00.
function time(h, m, c) {
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (c < 10) {
        c = '0' + c;
    }
    return h + ':' + m + ':' + c;
}
var hour = +prompt('введите часы от 0 до 24');
var minute = +prompt('введите сколько минут от 0 до 59');
var second = +prompt('введите сколько секунд от 0 до 59');
var time1 = '';
alert('ваше время ' + time(hour, minute, second));
//Написать функцию, которая принимает часы, минуты исекунды и возвращает это время в секундах.
function time_to_second(h, m, s) {
    return h * 3600 + m * 60 + s;
}
var numberOfHours = +prompt('введите количество часов');
var numberOfMinute = +prompt('введите количество минут');
var numberOfSecond = +prompt('введите количество секунд');
alert(time_to_second(numberOfHours, numberOfMinute, numberOfSecond));
//Написать функцию, которая принимает количество секунд,переводит их в часы, минуты и секунды и возвращает ввиде строки «чч:мм:сс».
function hour_to_second(sec, h, m, s) {
    if (h === void 0) { h = 0; }
    if (m === void 0) { m = 0; }
    if (s === void 0) { s = 0; }
    h = Math.floor(sec / 3600);
    m = Math.floor((sec % 3600) / 60);
    s = (sec % 3600) % 60;
    if (h < 10) {
        // @ts-ignore
        h = '0' + h;
    }
    if (m < 10) {
        // @ts-ignore
        m = '0' + m;
    }
    if (s < 10) {
        // @ts-ignore
        s = '0' + s;
    }
    return h + ':' + m + ':' + s;
}
var how_many_seconds = +prompt('введите колличество секунд');
alert(hour_to_second(how_many_seconds));
