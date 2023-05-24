
// Написать функцию, которая принимает 2 числа и возвра-щает -1, если первое меньше, чем второе; 1 – если первоебольше, чем второе; и 0 – если числа равны.
    function Compare(a, b) {
      if (a < b) {
        return -1
      } else if (a > b) {
        return 1
      } else if (a == b) {
        return 0
      } else {
        return 'Вы ошиблись при вводе чисел'
      }
    }
   
    let x = +(prompt('Введите первое число для сравнения' )as string)
    let y = +(prompt('Введите второе число для сравнения' )as string)
  
    alert(Compare(x, y))


 // Написать функцию, которая вычисляет факториал переданного ей числа.

    function factorial(n){
        let n1=1
        while (n > 0) {
            n1 = n1 * n
            n --  
        }
        return n1
    }
        let range_boundary = +(prompt('введите число, факториал которого нужно найти')as string)
       alert(factorial (range_boundary)) 


 //Написать функцию, которая принимает три отдельныецифры и превращает их в одно число. Например: цифры1, 4, 9 превратятся в число 149.
 
 function turnsInto (n1: any,n2: any,n3: any):string {
    if (n1 != 0){
    let a = String(n1)
    let b = String(n2)
    let c = String(n3)
    return a+b+c
    }else if (n2 != 0){
        let a = String(n1)
        let b = String(n2)
        let c = String(n3)
        return b+c+a   
    }else if (n3 != 0){
        let a = String(n1)
        let b = String(n2)
        let c = String(n3)
        return c+a+b   
    }else {
        return n1
    }
 }
 let figure1 =+(prompt('введите первую цифру для превращения в число')as string)
 let figure2 =+(prompt('введите вторую цифру для превращения в число')as string)
 let figure3 =+(prompt('введите третью цифру для превращения в число')as string)
 alert (turnsInto(figure1,figure2,figure3))


 //Написать функцию, которая принимает длину и ширинупрямоугольника и вычисляет его площадь. Если в функциюпередали 1 параметр, то она вычисляет площадь квадрата.
 
 function the_area_of_the_figure (a:any,b:any){
    if (a==0){
        return 'Площадь квадрата: '+ b*b
    }else if (b==0){
        return 'Площадь квадрата: '+ a*a
    }else{
        return 'Площадь прямоугольника: '+ a*b
    }
 }
 let side_length1 = +(prompt('введите длину одной стороны прямоугольника или квадрата')as string)
 let side_length2 = +(prompt('введите длину второй стороны прямоугольника, для квадрата вводить не обязательно')as string)
 alert (the_area_of_the_figure(side_length1,side_length2))      

 
 
//Написать функцию, которая проверяет, является ли пере-данное ей число совершенным. Совершенное число – эточисло, равное сумме всех своих собственных делителей. 
 
function perfect_number(w){
 let w1 = 0  
for (let  i = 1 ; i < w ; i ++) {
  if (w % i == 0) {
    w1 = w1+i
  }
}
if (w1 == w){
    return 'ваше число совершенно'
}else {
    return 'ваше число не является совершенным'
}

}
let number_to_divide = +(prompt ("введите число для определения совершенства")as string)
 alert (perfect_number( number_to_divide )) 
 


 //Написать функцию, которая принимает минимальное имаксимальное значения для диапазона, и выводит толькоте числа из диапазона, которые являются совершенными.Используйте написанную ранее функцию, чтобы узнавать,совершенное число или нет.
 
function sampling_of_perfect_numbers (min,max){

    do {
        let w1 = 0  
        for (let  i = 1 ; i < min ; i ++) {
          if (min % i == 0) {
            w1 = w1+i
          }
        }
        if (w1 == min){
           result += min; toString()
        }
        min +=1  
    }while(max>=min)
    if (result == ''){
        return 'в диапазоне нет совершенных чисел'
    }else{
    return result
    }
}
let minimum_range_value = +(prompt('укажите начальное значение диапазона')as string)
let maximum_range_value = +(prompt('укажите конечное значение диапазона')as string)
let result = ''
document.write (sampling_of_perfect_numbers(minimum_range_value, maximum_range_value))



//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не былипереданы, то выводить их как 00.


function time (h,m,c){
    if (h<10){
        h= '0'+h
    }
    if (m<10){
        m= '0'+m
    }
    if (c<10){
        c='0'+c
    }
    return h +':'+ m +':'+ c
}
let hour = +(prompt ('введите часы от 0 до 24')as string)
let minute = +(prompt ('введите сколько минут от 0 до 59')as string)
let second = +(prompt ('введите сколько секунд от 0 до 59')as string)
let time1 =''
alert ('ваше время '+ time(hour,minute,second))



//Написать функцию, которая принимает часы, минуты исекунды и возвращает это время в секундах.

function time_to_second (h,m,s){
    return h*3600+m*60+s
}
let numberOfHours = +(prompt('введите количество часов')as string)
let numberOfMinute = +(prompt('введите количество минут')as string)
let numberOfSecond = +(prompt('введите количество секунд')as string)
alert (time_to_second(numberOfHours,numberOfMinute,numberOfSecond))


//Написать функцию, которая принимает количество секунд,переводит их в часы, минуты и секунды и возвращает ввиде строки «чч:мм:сс».


function hour_to_second (sec,h=0,m=0,s=0){
     h =Math.floor(sec/3600)
     m =Math.floor((sec%3600)/60)
     s =(sec%3600)%60
    if (h<10){
         // @ts-ignore
        h= '0'+h
    }
    if (m<10){
         // @ts-ignore
        m= '0'+m
    }
    if (s<10){
         // @ts-ignore
        s='0'+s
    }
    return h+':'+m+':'+s
}
let how_many_seconds = +(prompt('введите колличество секунд')as string)
alert (hour_to_second(how_many_seconds))


//Написать функцию, которая считает разницу между датами.

function time_difference (h,m,s,h1,m1,s1) {
    let h2=0
    let m2=0
    let s2=0
    let differenc = 0
    let time1 = h*3600+m*60+s
    let time2 = h1*3600+m1*60+s1
    console.log (time1)
    console.log (time2)
    if (time1<time2){
        differenc = time2-time1
    }else if(time1>time2) {
        differenc = time1-time2
    }else {
        return 'Нет разницы во времени'
    }
    console.log (differenc)
    h2 =Math.floor(differenc/3600)
    m2 =Math.floor((differenc%3600)/60)
    s2 =(differenc%3600)%60
   if (h2<10){
        // @ts-ignore
       h2= '0'+h2
   }
   if (m2<10){
        // @ts-ignore
       m2= '0'+m2
   }
   if (s2<10){
        // @ts-ignore
       s2='0'+s2
   }
   return  'ваша разница во времени составит: '+h2+':'+m2+':'+s2
}
let one_hour = +(prompt ('Для вычисления разницы введите часы первого времени')as string)
let one_minute = +(prompt ('Для вычисления разницы введите минуты первого времени')as string)
let one_seconds = +(prompt ('Для вычисления разницы введите секунды первого времени')as string)
let two_hour = +(prompt ('Для вычисления разницы введите часы второго времени')as string)
let two_minute = +(prompt ('Для вычисления разницы введите минуты второго времени')as string)
let two_seconds = +(prompt ('Для вычисления разницы введите секунды второго времени')as string)
alert (time_difference(one_hour,one_minute,one_seconds,two_hour,two_minute,two_seconds))