(function(n,g,q,c,f){var s=document,l=s.onclick,h="ws_cmbm-"+f,b=s.getElementById(h),d="ws_cmbms-"+f,p=s.getElementById(d),e=null,o,a={tl:{left:"10px",top:"10px"},tr:{right:"10px",top:"10px"},bl:{left:"10px",bottom:"10px"},br:{right:"10px",bottom:"10px"}},k,m=".ws_cmbmc{position:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;}.ws_cmbmc a{display:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}";function r(){b.style.visibility="hidden"}function j(){b.style.visibility="visible"}if(b){if(b.style.visibility=="visible"){r()}else{j()}return}if(!p){m=m.replace(/.ws_cmbmc/g,"#"+h);p=s.createElement("style");p.type="text/css";p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName("head")[0].appendChild(p)}b=s.createElement("div");b.setAttribute("id",h);b.className="ws_cmbmc";for(o=0;o<n.length;o++){e=s.createElement("a");e.appendChild(s.createTextNode(n[o].title));e.setAttribute("href",n[o].url);e.onclick=(function(i){if(q){r()}});b.appendChild(e)}s.getElementsByTagName("body")[0].appendChild(b);if(a.hasOwnProperty(g)){for(k in a[g]){b.style[k]=a[g][k]}}else{if(g=="c"){b.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+"px";b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+"px"}}if(c){s.onclick=(function(){r();if(typeof l=="function"){l()}});b.onclick=(function(i){i.stopPropagation()})}j()})([{title:"One",url:"https://one.com"}],"tl",true,true,1664441802186)

xhere
javascript:(function(compareWith, key, zoomAware, keepMaximized, n) {
	elementfunction remainingInit() {
		dom.style.visibility = "hidden";

	}
	elementfunction toggleAbilityVisibility() {
		dom.style.visibility = "visible";

	}
	elementvar doc = document;
	elementvar onclick = doc.onclick;
	elementvar id = "ws_cmbm-" + n;
	elementvar dom = doc.getElementById(id);
	elementvar str = "ws_cmbms-" + n;
	elementvar el = doc.getElementById(str);
	elementvar element = null;
	elementvar heading = null;
	elementvar i;
	elementvar opts = {
		elementtl : {
			left: "10px",
			top:"10px"
		},
		elementtr : {
			right : "10px",
			top:"10px"
		},
		elementbl : {
			left: "10px",
			bottom : "10px"
		},
		elementbr : {
			right : "10px",
			bottom : "10px"
		}
		element
	};
	elementvar type;
	elementvar t = "";
	elementif (dom) {
		elementif (dom.style.visibility == "visible") {
			remainingInit();

		}
		elementelse {
			toggleAbilityVisibility();
		}
		elementreturn;
		element
	}
	elementif (!el) {
		elementt = t.replace(/.ws_cmbmc/g, "#" + id);
		elementel = doc.createElement("style");
		elementel.type = "text/css";
		elementel.id = str;
		elementel.appendChild(doc.createTextNode(t));
		elementdoc.getElementsByTagName("head")[0].appendChild(el);
		element
	}
	elementdom = doc.createElement("div");
	elementdom.setAttribute("id", id);
	elementdom.className = "ws_cmbmc";
	elementelement = doc.createElement("span");
	elementelement.appendChild(doc.createTextNode("Edgy SEO Bookmarklets"));
	elementdom.appendChild(element);
	elementi = 0;
	elementfor (; i < compareWith.length; i++) {
		elementelement = doc.createElement("a");
		elementelement.setAttribute("href", compareWith[i].url);
		elementelement.appendChild(doc.createElement("img")).setAttribute("src", compareWith[i].icon);
		elementelement.appendChild(doc.createTextNode(compareWith[i].title));
		elementelement.onclick = function(branch) {
			elementif (zoomAware) {
				remainingInit();
			}
			element
		};
		elementdom.appendChild(element);
		element
	}
	elementdoc.getElementsByTagName("body")[0].appendChild(dom);
	elementif (opts.hasOwnProperty(key)) {
		elementfor (type in opts[key]) {
			elementdom.style[type] = opts[key][type];
			element
		}
		element
	}
	elementelse {
		elementif (key == "c") {
			elementdom.style.left = Math.round((window.innerWidth - dom.offsetWidth) / 2) + "px";
			elementdom.style.top = "40px";
			element
		}
		element
	}
	elementif (keepMaximized) {
		elementdoc.onclick = function() {
			elementremainingInit();
			elementif (typeof onclick == "function") {
				onclick();

			}
			element
		};
		elementdom.onclick = function(event) {
			event.stopPropagation();

		};
		element
	}
	elementtoggleAbilityVisibility();
	element
})
([
{
	title:"Highlighters",
	icon:"https://freesvg.org/img/lightbulb3.png",
	url:"javascript:(function(){document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://richtatum.github.io/bookmarklets/edgy-highliters.js'+Math.random();}());",

},
{
	title:"TWO",
	url:"https://ONE.com/",
	icon:"https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/mt-brightness_auto.svg"
},
{
	title:"THREE",
	url:"https://ONE.com/",
	icon:"https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/mt-backup.svg"
}
],"c",true,true,1664423943207)