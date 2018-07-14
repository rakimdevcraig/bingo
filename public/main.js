var change, count=0, myVar;
let bingo = document.getElementById('bingoclaim')
let setGenerator =  document.getElementById('start')
// let bingoBox = document.getElementsByClassName('num')
var rnum = [];
var num = [];

bingo.addEventListener('click', function () {
    for(var i=1;i<=18;i++){
        num[i] = document.getElementById('num'+i);
    }
    if(num[1].value == "1" && num[2].value == "1" && num[3].value == "1" &&
    num[4].value == "1" && num[5].value == "1" &&     num[6].value == "1" &&
    num[7].value == "1" && num[8].value == "1" && num[9].value == "1" &&
    num[10].value == "1" && num[11].value == "1" && num[12].value == "1" &&
    num[13].value == "1" && num[14].value == "1" && num[15].value == "1" &&
    num[16].value == "1" && num[17].value == "1" && num[18].value == "1" &&
    num[19].value == "1" && num[20].value == "1"){
    }else{
        alert("Congrats!!!! Raise Your Hand And Wait For Personel To Verify");
    }
})


function gen(){
    var g, called, numbers_called;
    count++;
    if(count<=108){
        g = Math.floor((Math.random()*60)+1);
        numbers_called = document.getElementById('poll');
        numbers_called.innerHTML += "<section class='num-style'>"+g+"</ section>";
        check(g);
    }
}
$('#bing1').on('click',function() {
  $('#num1').toggleClass('checked')
  console.log('clink');
})
$('#bing2').on('click',function() {
  $('#num2').toggleClass('checked')
})
$('#bing3').on('click',function() {
  $('#num3').toggleClass('checked')
})
$('#bing4').on('click',function() {
  $('#num4').toggleClass('checked')
})
$('#bing5').on('click',function() {
  $('#num5').toggleClass('checked')
})
$('#bing6').on('click',function() {
  $('#num6').toggleClass('checked')
})
$('#bing7').on('click',function() {
  $('#num7').toggleClass('checked')
})
$('#bing8').on('click',function() {
  $('#num8').toggleClass('checked')
})
$('#bing9').on('click',function() {
  $('#num9').toggleClass('checked')
})
$('#bing10').on('click',function() {
  $('#num10').toggleClass('checked')
})
$('#bing11').on('click',function() {
  $('#num11').toggleClass('checked')
})
$('#bing12').on('click',function() {
  $('#num12').toggleClass('checked')
})
$('#bing13').on('click',function() {
  $('#num13').toggleClass('checked')
})
$('#bing14').on('click',function() {
  $('#num14').toggleClass('checked')
})
$('#bing15').on('click',function() {
  $('#num15').toggleClass('checked')
})
$('#bing16').on('click',function() {
  $('#num16').toggleClass('checked')
})
$('#bing17').on('click',function() {
  $('#num17').toggleClass('checked')
})
$('#bing18').on('click',function() {
  $('#num18').toggleClass('checked')
})
$('#bing19').on('click',function() {
  $('#num19').toggleClass('checked')
})
$('#bing20').on('click',function() {
  $('#num20').toggleClass('checked')
})


function check(g1){
    for(var i=1;i<=20;i++){
        num[i].onmousedown = false;
        if(g1 == rnum[i]){
            num[i] = document.getElementById('num'+i);
            num[i].onmousedown = cross;
        }
    }
}
function do_first(){
    for(var i=1;i<=20;i++){
        rnum[i] = Math.floor((Math.random()*60)+1);
        num[i] = document.getElementById('num'+i);
        num[i].innerHTML = rnum[i];
    }
}
window.addEventListener('load',do_first,false);
