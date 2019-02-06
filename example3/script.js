var date = new Date(); // получаем текущую дату
var time = date.getHours(); // получаем текущее время в часах
if(time < 12 && time > 5) {
    alert('Доброе утро!');
}
else if(time < 17){
    alert('Добрый день!');
}
else if(time < 23){
    alert('Добрый вечер!');
}
else{
    alert('Доброй ночи!');
}