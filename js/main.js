window.onload = function () {
     imgPlay();
}

//轮播图自动、点击、滑动播放
function imgPlay() {
    var indexMainBox = document.getElementById('index-main-mov-banner');
    var mainImg = document.getElementById('main-img');
    var buttons = document.getElementById('buttons');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var index = 0;  //图片索引，定位哪一张图片
    var circle = document.getElementsByClassName('main-small-circle')[0].getElementsByTagName('div');
    var animated = false; //判断动画播放状态
    var timer; //定时器

    // 换图函数，调用换图
    function moveValue(imgWidth) {
        animated = true;
        var newleft = parseInt(mainImg.style.left) + imgWidth;
        var time = 800;//位移完的总时间
        var interval = 20;//位移间隔时间
        var speed = imgWidth / (time / interval);//每次位移的量
        //动画函数animate
        function animate() {
            if (speed <0 && parseInt(mainImg.style.left) >newleft ||speed >0 && parseInt(mainImg.style.left) <newleft) {
                mainImg.style.left = parseInt(mainImg.style.left) + speed + "px";
                setTimeout(animate, interval);
            } else {
                animated = false;
                mainImg.style.left = newleft + 'px';
                if (newleft > -590) {
                    mainImg.style.left = "-4130px";
                }
                if (newleft < -4130) {
                    mainImg.style.left = "-590px";
                }
            }
        }
        animate();
    }

    function autoPlay() {
        timer = setInterval(function () {
            right.onclick();
        },3000);
    }
    function stopAutoPlay() {
        clearInterval(timer);
    }

    //小圆点跟随变动
    function changeCir() {
        for (var i=0;i <circle.length;i++){
            if (circle[i].className = 'circle circleChange'){
                circle[i].setAttribute('class','circle');
            }
        }
        circle[index].setAttribute('class','circle circleChange');
    }

    left.onclick = function (ev) {
        if (!animated){
            if (index == 0){
                index = 6;
            }else {
                index -= 1;
            }
            changeCir();
            moveValue(590);
        }

    }

    right.onclick = function (ev) {
        if (!animated){ //动画完成后小圆点才能变动
            if (index == 6){
                index = 0;
            }else {
                index += 1;
            }
            changeCir();
            moveValue(-590);
        }

    }

    //小圆点滑过换图
    for (var i =0;i< circle.length;i++){
        circle[i].onmouseover = function (ev) {
            if (!animated){
                if (this.className =="circle circleChange"){
                    return;
                }
                var myIndex = parseInt(ev.target.id);
                var offset = -590 * (myIndex - index);
                index = myIndex;
                changeCir();
                moveValue(offset);
            }
        }
    }

    //自动播放，滑入停止，滑出又开始播放
    indexMainBox.onmousemove = stopAutoPlay;
    indexMainBox.onmouseout = autoPlay;
    autoPlay();

}
