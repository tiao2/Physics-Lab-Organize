function orzl(){
  return [{
   name: "星尘报社总部",
   createAuthor: "iceiceiceice(62341a0272b4cb1c52616556)",
   createTime: "2022.04.15",
  },{
    name: "服务用户协会",
    createAuthor: "沃尔夫冈(5f2e1445ef04fa1c9fff91f7)",
    createTime: "2023.07.11"
  },{
    name: "物实之家-解忧咨询室",
    createAuthor: "生巧(5e44c1e883d247292cc8b749)",
    createTime: "2022.08.09"
  },{
 name: "物实法理学协会",
 createAuthor: "逐影星空(61298987933d333d44bae760)",
 createTime: "2023.02.25"
  },{
    name: "互助团",
    createAuthor: "钇Yttrium(630b931c8b2d083afd4e7b3b)",
    createTime: "2023.01.24"
  },{
    name: "逐影联盟",
    createAuthor: "逐影星空(61298987933d333d44bae760)",
    createTime: "2021.10.05"
  },{
    name: "星辉报社",
    createAuthor: "沃尔夫冈(5f2e1445ef04fa1c9fff91f7)",
    createTime: "2023.02.03"
  },{
    name: "加强物理实验室黑洞区基础学科建设计划(强基计划)",
    createAuthor: "班长大大(5e9faef0b14a4c3623864d89)",
    createTime: "2022.04.21"
  },{
    name: "理颜计划",
    createAuthor: "无产阶级编辑(5b359b24217fdf92082882ab)",
    createTime: "2022.08.07"
  },{
    name: "晚会聊天室",
    createAuthor: "是橙子呀~(6200b7124a3d0c75213b62fc)",
    createTime: "2022.08.30"
  },{
    name: "微风周刊刊社",
    createAuthor: "眺跳(6260042ff3d2fc0d1926d63c)",
    createTime: "2023.02.14"
  }];
}

function orz(n){ return (orzl())[n]; };

var htor='';
for(a=0; a<orzl().length; a++){
 htor+='<div class="orz"><h3>'+orz(a).name+'</h3><pre>创建者:'+orz(a).createAuthor+'\n创建时间:'+orz(a).createTime+'</pre></div>';
}

document.getElementById("orzl").innerHTML=htor;

function ts(){
  var a=document.createElement("a");
  a.href='search.html?orz='+encodeBase64(document.getElementById('search').value);
  a.click();
}


function encodeBase64(str) {
    var utf8Str = unescape(encodeURIComponent(str));
    var base64Str = btoa(utf8Str);
    return base64Str;
}

function ch(){
      var a=document.getElementById("gn").style.display;
      document.getElementById("gn").style.display=(a=='none')?'block':'none';
   }
