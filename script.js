function log(infor) {
    console.log(infor);
}
function toArray(object){
    return Array.prototype.slice.call(object,0);
}
let addBut = document.getElementsByClassName("addItemBut")[0],
    addIC = document.getElementsByClassName("addItemCont")[0],
    startBut = toArray(document.getElementsByClassName("startBut")),
    addICBg = document.getElementsByClassName("addICBg")[0],
    localDLength = localStorage.length,
    newDomHtml = ' <div class="itemContent addItemCont  bg-gray">\n' +
        '                <input class="messageContent">\n' +
        '                <div class="startContent">\n' +
        '                    <span title="优先级为一" name="red" class="icon-faster bg-red">&#xe641;</span>\n' +
        '                    <span title="优先级为二" name="orange" class="icon-fast bg-orange">&#xe649;</span>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="newMenu">\n' +
        '                <span class="icon-isOk bg-green">&#xe502;</span>\n' +
        '                <span class="icon-isNo bg-red">&#xe654;</span>\n' +
        '            </div>',
    content = document.getElementsByClassName('content')[0];

startBut.forEach(function (element) {
    element.addEventListener("click",function () {
        log(element)
        element.className = (element.className == "icon-star-empty startBut"?"icon-star startBut":"icon-star-empty startBut");
    })
})
if(localDLength){
    let num = 0;
    while (localDLength--){
        let newDom = document.createElement('div'),
            itemFirstC = content.children[0];
        newDom.className = "newItem";
        newDom.style.zIndex = '0';
        newDom.innerHTML = localStorage.getItem(num).split("`")[0];
        newDom.children[0].children[0].value = localStorage.getItem(num).split('`')[1];
        log(newDom.children[0].children[0]);
        num++;
        content.insertBefore(newDom,itemFirstC);
    }
}
addBut.addEventListener("click",function () {
    if(window.getComputedStyle(addICBg,null).getPropertyValue("display") === "none"){
        addICBg.style.display = 'flex';
        let newDom = document.createElement('div'),
            itemFirstC = content.children[0],
            bgColor = '';
        newDom.className = "newItem";
        newDom.innerHTML = newDomHtml;
        content.insertBefore(newDom,itemFirstC);
        newDom.style.animation = 'down 2s';
        let isOkBut = document.getElementsByClassName('icon-isOk')[0],
            isNoBut = document.getElementsByClassName('icon-isNo')[0],
            colorBut = document.getElementsByClassName('startContent')[0],
            colorButArray = toArray(colorBut.children);
        //确认添加按钮
        isOkBut.addEventListener("click",function () {
            newDom.children[0].children[1].remove();
            newDom.children[1].remove();
            newDom.children[0].children[0].style.width = "100%";
            newDom.children[0].children[0].setAttribute("readonly","readonly");
            content.children[0].children[0].style.width = "100%";
            addICBg.style.display = 'none';
            newDom.children[0].className += "  out-shadow-"+(bgColor?bgColor:"gray");
            newDom.style.zIndex = '0';
            localStorage.setItem(localDLength++,newDom.innerHTML+"`"+newDom.children[0].children[0].value);
        })
        //删除按钮
        isNoBut.addEventListener("click",function () {
            newDom.remove();
            addICBg.style.display = 'none';
        })
        //改变颜色按钮
        colorButArray.forEach(function (element) {
            element.addEventListener("click",function () {
                bgColor = element.getAttribute("name");
                newDom.children[0].className = "itemContent addItemCont  bg-"+bgColor;
            })
        })

    }else {
        addICBg.style.display = 'none';
    }
})

// startBut.addEventListener("click",function () {
//
// })