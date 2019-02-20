var inp = document.getElementById('inp');
var wrapper = document.getElementsByClassName('search-wrapper')[0];
function aa(data) {
    // console.log(data);
    
    wrapper.innerHTML="";//清空之前一次的内容。
    var oUl = document.createElement('ul');//渲染页面
    var list = data.result;//在控制台里看到每一项数据在data.s里面。
    var len=4;
    if(list.length<4){
        len=list.length;
    }
    for (var i = 0; i < len; i++) {
        var oLi = document.createElement('li');
        oLi.innerHTML = '<a href=https://s.taobao.com/search?ie=utf8&initiative_id=staobaoz_20190219&stats_click=search_radio_all%3A1&js=1&imgfile=&q=t' + list[i][0] + '>' + list[i][0] + '</a>';
        oUl.appendChild(oLi);
        // console.log(list[1][0])

    }
    wrapper.appendChild(oUl);
    wrapper.style.display = 'block';

}
var timer = null;
inp.oninput = function () {
    console.log(this.value);
    clearTimeout(timer);
    var self = this;
    timer = setTimeout(function () {//防抖处理，因为每次输入完后，都会触发，所以隔一段时间触发就用到防抖处理

        var oScript = document.createElement('script');//动态添加script
        oScript.src = ' https://suggest.taobao.com/sug?callback=aa&q='+ self.value;
        document.body.appendChild(oScript);
        oScript.remove();//每次用完就把script删除

    }, 1000)

}


