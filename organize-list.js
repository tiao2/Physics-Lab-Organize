function orzl(){
  return [{
    "name": "海龟实验室社区委员会",
    "createAuthor": "未知",
    "createTime": "未知"
  }];
}

function orz(n){ return (orzl())[n]; };

var htor='';
for(a=0, a<orzl().length, a++){
 htor+='<div class="orz"><h3>'+orz(a).name+'</h3><pre>创建者:'+orz(a).createAuthor+'\n创建时间:'+orz(a).createTime+'</pre></div>';
}

document.getElementById("orzl").innerHTML=htor;
