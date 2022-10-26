
// const btn = document.getElementById('btn');
// const p = document.getElementById('fb');



// btn.onclick = function () {
//     if (p.style.display == 'block') {
//         p.style.display = 'none'
//     } else {
//         p.style.display = 'block'
//     }
// }
/******************************************************************************/
// function e(obj) { return document.getElementById(obj) }
// e('tf').onclick = function (event) {
//     e('con').style.display = 'block';
//     stopBubble(event);
//     document.onclick = function () {
//         e('con').style.display = 'none';
//         document.onclick = null;
//     }
// }

// e('con').onclick = function (event) {
//     //只阻止了向上冒泡，而没有阻止向下捕获，所以点击con的内部对象时，仍然可以执行这个函数
//     stopBubble(event);
// }
// //阻止冒泡函数
// function stopBubble(e) {
//     if (e && e.stopPropagation) {
//         e.stopPropagation();  //w3c
//     } else {
//         window.event.cancelBubble = true; //IE
//     }
// }
/******************************************/
// function e(obj) { return document.getElementById(obj) }
// e('tf').onclick = function (event) {
//     if (e('con').style.display == 'block') {
//         e('con').style.display = 'none'
//     } else {
//         e('con').style.display = 'block'
//     }
//     // e('con').style.display = 'block';
//     stopBubble(event);
//     document.onclick = function () {
//         e('con').style.display = 'none';
//         document.onclick = null;
//     }
// }

// e('con').onclick = function (event) {
//     //只阻止了向上冒泡，而没有阻止向下捕获，所以点击con的内部对象时，仍然可以执行这个函数
//     stopBubble(event);
// }
// //阻止冒泡函数
// function stopBubble(e) {
//     if (e && e.stopPropagation) {
//         e.stopPropagation();  //w3c
//     } else {
//         window.event.cancelBubble = true; //IE
//     }
// }

const tf = document.getElementById('tf');
const con = document.getElementById('con')
tf.onclick = function (event) {
    if (con.style.display == 'block') {
        con.style.display = 'none'
    } else {
        con.style.display = 'block'
    }
    // con.style.display = 'block';
    stopBubble(event);
    document.onclick = function () {
        con.style.display = 'none';
        document.onclick = null;
    }
}

con.onclick = function (event) {
    //只阻止了向上冒泡，而没有阻止向下捕获，所以点击con的内部对象时，仍然可以执行这个函数
    stopBubble(event);
}
阻止冒泡函数
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();  //w3c
    } else {
        window.event.cancelBubble = true; //IE
    }
}