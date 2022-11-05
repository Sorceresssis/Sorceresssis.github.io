/* 鼠标滚轮滚动关闭 */
document.onmousewheel = function () {
    popup_second.style.display = 'none'
    popup_first.style.display = 'none'
    popup_third.style.display = 'none'
    popup_fourth.style.display = 'none'
    popup_search.style.display = 'none'
    search_btn.style.display = 'inline'
    search_close.style.display = 'none'
    angle_down_first.style.transform = 'rotateZ(0deg)'
    angle_down_second.style.transform = 'rotateZ(0deg)'
    angle_down_third.style.transform = 'rotateZ(0deg)'
    angle_down_fourth.style.transform = 'rotateZ(0deg)'
}

/* popup-first */
const navList_firstItem = document.getElementById('navList-firstItem');
const popup_first = document.getElementById('popup-first');
const angle_down_first = document.getElementById('angle-down-first')
navList_firstItem.onclick = function (event) {
    popup_second.style.display = 'none'
    popup_third.style.display = 'none'
    popup_fourth.style.display = 'none'
    popup_search.style.display = 'none'
    search_btn.style.display = 'inline'
    search_close.style.display = 'none'
    angle_down_second.style.transform = 'rotateZ(0deg)'
    angle_down_third.style.transform = 'rotateZ(0deg)'
    angle_down_fourth.style.transform = 'rotateZ(0deg)'
    if (popup_first.style.display == 'block') {
        popup_first.style.display = 'none'
        angle_down_first.style.transform = 'rotateZ(0deg)'
    } else {
        popup_first.style.display = 'block'
        angle_down_first.style.transform = 'rotateZ(-180deg)'
    }
    stopBubble(event);
    document.onclick = function () {
        popup_first.style.display = 'none';
        angle_down_first.style.transform = 'rotateZ(0deg)'
        document.onclick = null;
    }
}
popup_first.onclick = function (event) {
    //只阻止了向上冒泡，而没有阻止向下捕获，所以点击popup_first的内部对象时，仍然可以执行这个函数
    stopBubble(event);
}


/* popup-second */
const navList_secondItem = document.getElementById('navList-secondItem');
const popup_second = document.getElementById('popup-second');
const angle_down_second = document.getElementById('angle-down-second')
navList_secondItem.onclick = function (event) {
    popup_first.style.display = 'none'
    popup_third.style.display = 'none'
    popup_fourth.style.display = 'none'
    popup_search.style.display = 'none'
    search_btn.style.display = 'inline'
    search_close.style.display = 'none'
    angle_down_first.style.transform = 'rotateZ(0deg)'
    angle_down_third.style.transform = 'rotateZ(0deg)'
    angle_down_fourth.style.transform = 'rotateZ(0deg)'
    if (popup_second.style.display == 'block') {
        popup_second.style.display = 'none'
        angle_down_second.style.transform = 'rotateZ(0deg)'
    } else {
        popup_second.style.display = 'block'
        angle_down_second.style.transform = 'rotateZ(-180deg)'
    }
    stopBubble(event);
    document.onclick = function () {
        popup_second.style.display = 'none';
        angle_down_second.style.transform = 'rotateZ(0deg)'
        document.onclick = null;
    }
}
popup_second.onclick = function (event) {
    stopBubble(event);
}

/* popup-third */
const navList_thirdItem = document.getElementById('navList-thirdItem');
const popup_third = document.getElementById('popup-third');
const angle_down_third = document.getElementById('angle-down-third')
navList_thirdItem.onclick = function (event) {
    popup_first.style.display = 'none'
    popup_second.style.display = 'none'
    popup_fourth.style.display = 'none'
    popup_search.style.display = 'none'
    search_btn.style.display = 'inline'
    search_close.style.display = 'none'
    angle_down_first.style.transform = 'rotateZ(0deg)'
    angle_down_second.style.transform = 'rotateZ(0deg)'
    angle_down_fourth.style.transform = 'rotateZ(0deg)'
    if (popup_third.style.display == 'block') {
        popup_third.style.display = 'none'
        angle_down_third.style.transform = 'rotateZ(0deg)'
    } else {
        popup_third.style.display = 'block'
        angle_down_third.style.transform = 'rotateZ(-180deg)'
    }
    stopBubble(event);
    document.onclick = function () {
        popup_third.style.display = 'none';
        angle_down_third.style.transform = 'rotateZ(0deg)'
        document.onclick = null;
    }
}
popup_third.onclick = function (event) {
    stopBubble(event);
}

/* popup-fourth */
const navList_fourthItem = document.getElementById('navList-fourthItem');
const popup_fourth = document.getElementById('popup-fourth');
const angle_down_fourth = document.getElementById('angle-down-fourth')
navList_fourthItem.onclick = function (event) {
    popup_first.style.display = 'none'
    popup_second.style.display = 'none'
    popup_third.style.display = 'none'
    popup_search.style.display = 'none'
    search_btn.style.display = 'inline'
    search_close.style.display = 'none'
    angle_down_first.style.transform = 'rotateZ(0deg)'
    angle_down_second.style.transform = 'rotateZ(0deg)'
    angle_down_third.style.transform = 'rotateZ(0deg)'
    if (popup_fourth.style.display == 'block') {
        popup_fourth.style.display = 'none'
        angle_down_fourth.style.transform = 'rotateZ(0deg)'
    } else {
        popup_fourth.style.display = 'block'
        angle_down_fourth.style.transform = 'rotateZ(-180deg)'
    }
    stopBubble(event);
    document.onclick = function () {
        popup_fourth.style.display = 'none';
        angle_down_fourth.style.transform = 'rotateZ(0deg)'
        document.onclick = null;
    }
}
popup_fourth.onclick = function (event) {
    stopBubble(event);
}

/* popup-search */
const search_close = document.getElementById('search-close')
const search_btn = document.getElementById('search-btn');
const popup_search = document.getElementById('popup-search');
search_btn.onclick = function (event) {
    popup_first.style.display = 'none'
    popup_second.style.display = 'none'
    popup_third.style.display = 'none'
    popup_fourth.style.display = 'none'
    search_close.style.display = 'inline'
    search_btn.style.display = 'none'
    angle_down_first.style.transform = 'rotateZ(0deg)'
    angle_down_second.style.transform = 'rotateZ(0deg)'
    angle_down_third.style.transform = 'rotateZ(0deg)'
    angle_down_fourth.style.transform = 'rotateZ(0deg)'
    if (popup_search.style.display == 'block') {
        popup_search.style.display = 'none'
    } else {
        popup_search.style.display = 'block'
    }
    stopBubble(event);
    document.onclick = function () {
        popup_search.style.display = 'none';
        search_close.style.display = 'none'
        search_btn.style.display = 'inline'
        document.onclick = null;
    }
}
popup_search.onclick = function (event) {
    stopBubble(event);
}

//search-close
search_close.onclick = function (event) {
    search_close.style.display = 'none'
    search_btn.style.display = 'inline'
    if (popup_search.style.display == 'block') {
        popup_search.style.display = 'none'
    } else {
        popup_search.style.display = 'block'
    }
    stopBubble(event);
    document.onclick = function () {
        document.onclick = null;
    }
}

// 阻止冒泡函数
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();  //w3c
    } else {
        window.event.cancelBubble = true; //IE
    }
}

/**************模板****************/
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