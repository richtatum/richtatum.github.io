javascript:(()=>{
    const turl=new URL(window.location);
    const tq=turl.searchParams;
    let newUrl=turl.protocol+'//'+turl.host+turl.pathname+"?";
    const params=["q","tbm","start","num","filter"];
    params.forEach((param,index)=>{
        if(tq.get(param)){
            newUrl+=`${index===0?'':'&'}${param}=${encodeURIComponent(tq.get(param))}`;
            }
    });
    if(navigator.clipboard){navigator.clipboard.writeText(newUrl,'text/plain');}
    else{
        const textarea=document.createElement("textarea");
        textarea.value=newUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        }
})();