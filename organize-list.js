function orzl(){
  return [{"name":"文博园文化组织","createAuthor":"沃尔夫冈(5f2e1445ef04fa1c9fff91f7)","createTime":"2025-01-26 13:47:26.000","targetID":"67963cee826568de4e99f1fd"},{"name":"群星报社共同体","createAuthor":"沃尔夫冈(5f2e1445ef04fa1c9fff91f7)","createTime":"2025-01-21 12:12:08.000","targetID":"678f8f18826568de4e997c11"},{"name":"星尘报社","createAuthor":"iceiceiceice(62341a0272b4cb1c52616556)","createTime":"2022-04-15 07:37:04.000","targetID":"625920a0fa4ee80001c760d1"},{"name":"星辰报社","createAuthor":"屑月(5b344c5e217fdffc76287dac)","createTime":"2022-04-23 07:59:27.000","targetID":"6263b1df0948e50001d8dcb3"},{"name":"星程报社","createAuthor":"Bromine溴(5f769da706172c9f5f66ba59)","createTime":"2022-05-10 09:59:46.000","targetID":"627a37925a9b8600015565d8"},{"name":"星辉报社","createAuthor":"沃尔夫冈(5f2e1445ef04fa1c9fff91f7)","createTime":"2025-01-21 05:49:50.000","targetID":"678f357efa3a53d92a75b11a"},{"name":"星环报社","createAuthor":"昼夜下的诗人(6471c8012276341fc2e02006)","createTime":"2023-07-28 02:07:38.000","targetID":"64c322ea2a15b0ecf77a9cc5"},{"name":"星光报社","createAuthor":"来自M31星系的屑(635c6f41c64b7d76f174750a)","createTime":"2023-10-31 12:59:20.000","targetID":"6540fa284d12128c0f070b0c"},{"name":"沃尔夫冈基金会","createAuthor":"沃尔夫冈(5f2e1445ef04fa1c9fff91f7)","createTime":"2024-07-10 01:17:02.000","targetID":"668de10e9e258e6b2f4fc94f"},{"name":"物实之家-解忧咨询室","createAuthor":"生巧(5e44c1e883d247292cc8b749)","createTime":"2022-08-09 03:32:45.000","targetID":"62f1d55dafedf1000165551b"},{"name":"互助团总部","createAuthor":"钇Yttrium(630b931c8b2d083afd4e7b3b)","createTime":"2023-01-17 06:10:28.000","targetID":"63c63bd44906dcddc28eb175"},{"name":"逐影联盟","createAuthor":"逐影星空(61298987933d333d44bae760)","createTime":"2022-02-10 09:31:50.000","targetID":"6204db860f15cd000184df8e"},{"name":"加强物理实验室黑洞区基础学科建设计划(强基计划)","createAuthor":"班长大大(5e9faef0b14a4c3623864d89)","createTime":"2022-04-21 13:06:31.000","targetID":"626156d70948e50001d88cd6"},{"name":"国区精知激励计划(RRR)","createAuthor":"刃破梦人(6023c57e2383ab2775485c02)","createTime":"2024-01-29 04:12:28.000","targetID":"65b725ac000124686a0baf02"},{"name":"国区精文激励计划(snp)","createAuthor":"DyingSun(62d626fd2f3a2a810f8ce52f)","createTime":"2024-05-24 16:06:49.000","targetID":"6650bb19464f6f1f605a1e24"},{"name":"回望计划","createAuthor":"沉云风(6197cf2e5d768d5c4663c15d)","createTime":"2023-03-18 01:21:32.000","targetID":"6415121c2268789cb69c4c6d"},{"name":"物实法理学协会","createAuthor":"逐影星空(61298987933d333d44bae760)","createTime":"2023-03-05 14:28:27.000","targetID":"6404a70b4960653c4d039732"},{"name":"晚会聊天室","createAuthor":"小绘梨衣(6200b7124a3d0c75213b62fc)","createTime":"2022-08-30 10:53:13.000","targetID":"630dec19de06940001b34e90"},{"name":"微风周刊刊社","createAuthor":"眺跳(6260042ff3d2fc0d1926d63c)","createTime":"2023-02-14 11:33:15.000","targetID":"63eb717bbf4e44a71a28ec2c"},{"name":"理颜计划","createAuthor":"无产阶级编辑(5b359b24217fdf92082882ab)","createTime":"2022-08-07 13:35:54.000","targetID":"62efbfbaafedf1000164c125"},{"name":"服务用户协会","createAuthor":"沃尔夫冈(5f2e1445ef04fa1c9fff91f7)","createTime":"2023-07-18 13:06:09.000","targetID":"64b68e415e2f05a09bf2163f"},{"name":"物实学院","createAuthor":"北冥薛猫(5e40b1749178a319c6ea5974)","createTime":"2020-06-04 15:02:49.000","targetID":"5ed90d19ef132a000118296f"}];
}

function orz(n){ return (orzl())[n]; };

var htor='';
for(a=0; a<orzl().length; a++){
 htor+='<div class="orz" onclick="location.href=\'physics://chinese/discussion/'+orz(a).targetID+'\'"><h3>'+orz(a).name+'</h3><pre>创建者:'+orz(a).createAuthor+'\n创建时间:'+orz(a).createTime+'</pre></div>';
}

document.getElementById("orzl").innerHTML=htor;

function ts(){
  var a=document.createElement("a");
  a.href='/tiao2/Physics-Lab-Organize/edit/main/search.html?orz='+encodeBase64(document.getElementById('search').value);
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
