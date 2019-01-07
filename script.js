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

    newDomHtml = ' <div class="itemContent addItemCont  bg-gray">\n' +
        '                <input class="messageContent">\n' +
        '                <div class="startContent">\n' +
        '                    <span class="bg-red"></span>\n' +
        '                    <span class="bg-orange"></span>\n' +
        '                    <span class="bg-yellow"></span>\n' +
        '                    <span class="bg-green"></span>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="newMenu">\n' +
        '                <span class="isOK bg-green">&#xe7fc;</span>\n' +
        '                <span class="isNo bg-red">&#xe7fd;</span>\n' +
        '            </div>',
    content = document.getElementsByClassName('content')[0];

startBut.forEach(function (element) {
    element.addEventListener("click",function () {
        log(element)
        element.className = (element.className == "icon-star-empty startBut"?"icon-star startBut":"icon-star-empty startBut");
    })
})

addBut.addEventListener("click",function () {
    if(window.getComputedStyle(addICBg,null).getPropertyValue("display") === "none"){
        addICBg.style.display = 'flex';
        let newDom = document.createElement('div'),
            itemFirstC = content.children[0];
        newDom.className = "newItem";
        newDom.innerHTML = newDomHtml;
        content.insertBefore(newDom,itemFirstC);
        let isOkBut = document.getElementsByClassName('isOK')[0],
            colorBut = document.getElementsByClassName('startContent')[0],
            colorButArray = toArray(colorBut.children);
        //确认添加按钮
        isOkBut.addEventListener("click",function () {
            newDom.children[0].children[1].remove();
            newDom.children[1].remove();
            content.children[0].children[0].style.width = "100%";
            addICBg.style.display = 'none';
        })
        //改变颜色按钮
        colorButArray.forEach(function (element) {
            element.addEventListener("click",function () {
                newDom.children[0].className += " "+element.className;
            })
        })

    }else {
        addICBg.style.display = 'none';
    }
})

// startBut.addEventListener("click",function () {
//
// })