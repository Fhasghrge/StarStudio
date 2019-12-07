var mainInput = document.getElementById('email_input');

mainInput.addEventListener('input', function(event) {
    //获取输入框中的内容
    let value = event.target.value;
    //检测是否输入恶意
    if (value.length > 15) {
        alert('请输入正确的邮件');
        return;
    }
    //对内容进行去两边空格
    value = value.trim();
    //定义提示的ends
    let email_ends = ['qq.com', '163.com', '126.com', 'gamil.com', '263.net'];
    //获取插入的地方
    let ul_sets = document.getElementById('email-sug-wrapper');
    //根据输入是否显示提示
    ul_sets.style.display = value.length == 0 ? 'none' : 'block';
    //重置
    ul_sets.innerHTML = '';
    //为每个提示添加
    let value2 = value; //副本
    for (let i = 0; i < email_ends.length; i++) {
        value = value2;
        let at_pos = value.indexOf('@');
        //已经输入@
        if (at_pos != -1) {
            let value_end = value.substring(at_pos + 1);
            if (email_ends[i].startsWith(value_end)) {
                value = value.substring(0, at_pos);
            } else {
                continue;
            }
        }
        //每个提示节点
        let ul_child = document.createElement('li');
        let ul_child_text = '' + value + '@' + email_ends[i];
        let ul_child_text_node = document.createTextNode(ul_child_text);
        ul_child.appendChild(ul_child_text_node);
        //节点的样式
        ul_child.style.backgroundColor =
            i % 2 == 0 ? 'rgb(255, 197, 207)' : 'rgb(190, 222, 237)';
        //节点插入集合中
        ul_sets.appendChild(ul_child);
    }
    //对于每个提示设置监听函数，自动填充
    let li_list = document.getElementsByTagName('li');
    for (let li_node of li_list) {//let in 遍历的是对象
        li_node.addEventListener('click', function(event) {
            ul_sets.style.display = 'none';
            mainInput.value = event.target.innerHTML;
        });
    }
});

function addLoadEvent(func){
    let load_past = window.onload;//保存以前的函数
    if(typeof window.onload != 'function'){
        window.onload = func;//如果以前没有就直接执行
    }else{
        window.onload = function(){
            load_past();//如果以前就有，需要添加副本
            func();
        }
    }
}
function change_color(){
    let li_list = document.getElementsByTagName('li');
    for (let li_node of li_list) {//let in 遍历的是对象
        li_node.onmouseover = function(){
            console.log("???");
        }
    }
    console.log("123");
}