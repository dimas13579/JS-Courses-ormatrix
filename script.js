//1 Task
let buttonFirst = document.getElementsByTagName('button')[0];
    buttonSecond = document.getElementsByTagName('button')[1];
    buttonThird = document.getElementsByTagName('button')[2];
    helloWords = document.getElementById('hello');
    header = document.getElementById('header');

buttonFirst.addEventListener("click", function(){
    document.location.href = "http://www.yandex.ru";
});
buttonSecond.addEventListener("click", function(){
    helloWords.style.color = "blue";
});
buttonThird.addEventListener("click", function(){
    buttonFirst.remove();
    buttonSecond.remove();
    buttonThird.remove();
    helloWords.remove();
    header.remove();
});


//2 Task

let temp = {
    Belarus : 13,
    Russia : 16,
    Ukraine : 20,
    Lithuania : 12,
    Egypt : 30,
    Spain : 25
};

var middle = 0,
    ab = 0;
for (let key in temp){
    ab += temp[key];
    middle = ab / Object.keys(temp).length;
}
alert ("Средняя температрура равна " + middle.toFixed(1));


function newMax(obj){
    var maxx = 0;
    for(let key in obj){
        if(obj[key] > maxx){
            maxx = obj[key];
        }
    }
    alert("Самая большая температура "+maxx);
}
newMax(temp);
