/**
 * Created by Administrator on 2017/2/13.
 */
/*全选或取消*/
function DoCheck() {
    var ch=document.getElementsByName("wp");
    if(document.getElementsByName("allChecked")[0].checked==true) {
        for(var i=0;i<ch.length;i++) {
            ch[i].checked=true;
        }
    }else{
        for(var i=0;i<ch.length;i++) {
            ch[i].checked=false;
        }
    }
}

/*显示本地时间*/
function time(){
    var oDate = new Date();
    var year = oDate.getFullYear();
    var mounth = oDate.getMonth()+1;
    var day = oDate.getDate();
    var hours = oDate.getHours();
    var minute = oDate.getMinutes();
    var seconds = oDate.getSeconds();
    var time = null;
    var week = new Array(7);
    week[0]='星期天';
    week[1]='星期一';
    week[2]='星期二';
    week[3]='星期三';
    week[4]='星期四';
    week[5]='星期五';
    week[6]='星期六';
    var weeks = week[oDate.getDay()];
    var data = document.getElementById('time');
    data.innerHTML =year+'年'+mounth+'月'+day+'日'+'  '+weeks+'  '+fillZero(hours)+':'+fillZero(minute)+':'+fillZero(seconds);
    function fillZero(n){
        if(n<10){
            return '0'+n
        }
        else{
            return ''+n
        }
    }

}
time();
setInterval(time,1000);