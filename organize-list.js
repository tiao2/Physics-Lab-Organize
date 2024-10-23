function orzl(){
  return [];
}

function orz(n){ return (orzl())[n]; };

var htor='';
for(a=0, a<orzl().length, a++){
 htor='<div class="orz"><h3>'+orz(a).name+'</h3></div>';
}
