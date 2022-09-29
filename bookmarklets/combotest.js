(function(compareWith, key, zoomAware, keepMaximized, n) { 
	function remainingInit() { dom.style.visibility = "hidden"; }
	function toggleAbilityVisibility() { dom.style.visibility = "visible"; }

	var doc = document;
	var onclick = doc.onclick;
	var id = "ws_cmbm-" + n;
	var dom = doc.getElementById(id);
	var str = "ws_cmbms-" + n;
	var el = doc.getElementById(str);
	var element = null;
	var i;
	var opts = { 
		tl : { left: "10px", top:"10px" },
		tr : { right : "10px", top:"10px" },
		bl : { left: "10px", bottom : "10px" },
		br : { right : "10px", bottom : "10px" }
		 };
	var type;
	var t = "";	
	if (dom) { 
		if (dom.style.visibility == "visible") { remainingInit(); }
		else { toggleAbilityVisibility();}
		return;
	 	}
	if (!el) { 
		t = t.replace(/.ws_cmbmc/g, "#" + id);
		el = doc.createElement("style");
		el.type = "text/css";
		el.id = str;
		el.appendChild(doc.createTextNode(t));
		doc.getElementsByTagName("head")[0].appendChild(el);
	 	}
	dom = doc.createElement("div");
	dom.setAttribute("id", id);
	dom.className = "ws_cmbmc";
	i = 0;
	for (; i < compareWith.length; i++) { 
		element = doc.createElement("a");
			element.setAttribute("href", compareWith[i].url);
				element.appendChild(doc.createElement("img")).setAttribute("src", compareWith[i].icon);
				element.appendChild(doc.createTextNode(compareWith[i].title));


		element.onclick = function(branch) { 
			if (zoomAware) { remainingInit();}
		 	};
		dom.appendChild(element);
	 	}
	doc.getElementsByTagName("body")[0].appendChild(dom);
	if (opts.hasOwnProperty(key)) { 
		for (type in opts[key]) { 
			dom.style[type] = opts[key][type];
		 	}
	 	}
	 else { 
		if (key == "c") { 
			dom.style.left = Math.round((window.innerWidth - dom.offsetWidth) / 2) + "px";
			dom.style.top = "40px";
		 	}
	 	}
	if (keepMaximized) { 
		doc.onclick = function() { 
			remainingInit();
			if (typeof onclick == "function") { onclick(); }
			 };
		dom.onclick = function(event) { event.stopPropagation(); };
		 }
	toggleAbilityVisibility();
 })
([
{ title:"ONE",url:"https://ONE.com/",icon:"https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/mt-arrow_drop_down_circle.svg" },
{ title:"TWO",url:"https://ONE.com/",icon:"https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/mt-brightness_auto.svg" },
{ title:"THREE",url:"https://ONE.com/",icon:"https://raw.githubusercontent.com/eirikmadland/notion-icons/master/v5/icon4/mt-backup.svg" }
],"c",true,true,1664423943207)
