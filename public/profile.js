var thumbUp = document.getElementsByClassName("fas fa-user-plus");
var thumbDown = document.getElementsByClassName("fas fa-user-minus");
var trash = document.getElementsByClassName("fa-trash");

var change, count=0, myVar;
// let bingo = document.getElementById('bingoclaim')
let setGenerator =  document.getElementById('start')
// let bingoBox = document.getElementsByClassName('num')
var rnum = [];
var num = [];


setGenerator.addEventListener('click', function(){
    // document.getElementById('setgen').disabled = "disabled";
    gen();
    setInterval(function(){ gen(); },4000);
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


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messagesDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbDown':thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
