function fun1(){
    var a;
 a=document.getElementById('inp1').value;
 a=parseInt(a);
    if(a>=1 && a<=20){
        alert('1-st Entrance');
    }
    else if (a>=21 && a<=64){
        alert('2-ed Entrance');
    }
    else if (a>=65 && a<=80){
        alert('3-rd Entrance');
    }
    else {
        alert('Not Entrance');
    }
}