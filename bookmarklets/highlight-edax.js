function(){
   var count=0, text, regexp;
   var text="(patrick[\\s\-]*j[\.\\s\-]*?o[\-\.\'’ʻ‘`]*?connor|robert[\\s\-]*j[\\.\\s\-]*marks[\\s\-]*II|magnifying[\\s\-]*the[\\s\-]*universe\\.*com|texas[\\s\-]*online[\\s\-]*colleges\\.*com|ca[\\s\-]*online[\\s\-]*colleges\\.*com|magnifying[\\s\-]*the[\\s\-]*universe|dav[eid]+[\\s\-]*h[\\.\\s\-]*nguyen|texas[\\s\-]*online[\\s\-]*colleges|william[\\s\-]*a[\\.\\s\-]*dembski|dav[eid]+[\\s\-]*a[\\.\\s\-]*tomar|patrick[\\s\-]*o[\-\.\'’ʻ‘`]*?connor|magnify[\\s\-]*the[\\s\-]*universe|intelligent[\\s\-]*education\\.*com|w[\\.\\s\-]*a[\\.\\s\-]*dembski|richard[\\s\-]*a[\\.\\s\-]*tatum|robert[\\s\-]*j[\\j.\\s\-]*marks|influence[\\s\-]*publishers\\.*com|ca[\\s\-]*online[\\s\-]*colleges|james[\\s\-]*a[\\.\\s\-]*barham|wayne[\\s\-]*justin[\\s\-]*downs|robert[\\s\-]*j[\\.\\s\-]*marks|sara[\\s\-]*l[\\.\\s\-]*austin|w[\\.\\s\-]*j[\\.\\s\-]*downs|wayne[j\\.\\s\-]*downs|erik[\j\\.\\s\-]*larson|jed[c\\.\\s\-]*macosko|academic[\\s\-]*influence\\.*com|alexandria[\\s\-]*library\\.*com|influence[\\s\-]*networks\\.*com|influence[\\s\-]*rankings\\.*com|rich[a\\.\\s\-]*tatum|ranking[\\s\-]*analytics\\.*com|success[\\s\-]*portraits\\.*com|successful[\\s\-]*student\.org|intelligent[\\s\-\.]*?education|education[\\s\-]*access\\.*com|concentrated[\\s\-]*influence|power[\\s\-]*learning\\.*com|influence[\\s\-]*publishers|influence[\\s\-]*rankings*?|inflection[\\s\-]*magazine|ranking[\\s\-]*analytics*?|bright[\\s\-]*notes\\.*com|academic[\\s\-]*influence|alexandria[\\s\-]*library|influence[\\s\-]*networks|success[\\s\-]*portraits|rich[ard[\\s\-]*]*?tatum|dalko[\\s\-]*book\\.*com|education[\\s\-]*access|dav[eid]+[\\s\-]*nguyen|william[\\s\-]*dembski|dav[eid]+[\\s\-]*tomar|power[\\s\-]*learning|dr[\\.\\s\-]*dembski|brian[\\s\-]*langhoff|daniel[\\s\-]*edelen|winston[\\s\-]*ewert|o[\-\.\'’ʻ‘`]*?connor|bright[\\s\-]*notes|ghost[\\s\-]*detect|james[\\s\-]*barham|bill[\\s\-]*dembski|will[\\s\-]*dembski|dr[\\.\\s\-]*ewert|sara[\\s\-]*austin|wayne[\\s\-]*downs|erik[\\s\-]*larson|jed[\\s\-]*macosko|dalko[\\s\-]*book|dan[\\s\-]*edelen|paul[\\s\-]*mikos|rich[\\s\-]*tatum|ghostdetect\\.*com|amy[\\s\-]*downs|bob[\\s\-]*marks|intelligentedux|academicinflux|inflection|dembski|macosko|barham|edelen|larson|nguyen|downs|ewert|marks|mikos|tatum|tomar)";
   document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://richtatum.github.io/userstyles/highlight.in.sites.user.css" />';
   if(text==null || text.length==0)return;
   try{
      regexp=new RegExp(text, 'gim');
   }
   catch(er){
      alert("Unable to create regular expression using text '"+text+"'.\n\n"+er);
      return;
   }
   function searchWithinNode(node, re){
      var pos, skip, spannode, middlebit, endbit, middleclone;
      skip=0;
      if(node.nodeType==3){
         pos=node.data.search(re);
         if(pos>=0){
            spannode=document.createElement("SPAN");
            spannode.setAttribute("CLASS", "myhilite");
            spannode.style.color="#D40000";
            spannode.style.backgroundColor="#FFF200";
            middlebit=node.splitText(pos);
            endbit=middlebit.splitText(RegExp.$1.length);
            middleclone=middlebit.cloneNode(true);
            spannode.appendChild(middleclone);
            middlebit.parentNode.replaceChild(spannode,middlebit);
            ++count;
            skip=1;
         }
      }
      else if(node.nodeType==1 && node.childNodes && node.tagName.toUpperCase()!="SCRIPT" && node.tagName.toUpperCase!="CLASS"){
         for (var child=0;child < node.childNodes.length;++child){
            child=child+searchWithinNode(node.childNodes[child], re);
         }
      }
      return skip;
   }
   window.status="Searching for "+regexp+"...";
   searchWithinNode(document.body, regexp);
   window.status="Found "+count+" match"+(count==1?"":"es")+" for "+regexp+".";
   style.appendChild(styleContent);
   newhead[0].appendChild(style);
}