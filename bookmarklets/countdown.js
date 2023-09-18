javascript:(function(){
var targetTime='1:00:00 PM'; /* Customize this to set your target time for the countdown */
var uniqueID='timeToTargetModal';
if(document.getElementById(uniqueID)){return;}

var backdrop=document.createElement('div');
backdrop.id='timeToTargetModal';
backdrop.style.position='fixed';
backdrop.style.left='0';
backdrop.style.top='0';
backdrop.style.width='100vw';
backdrop.style.height='100vh';
backdrop.style.margin='0';
backdrop.style.backgroundColor='rgba(0,0,0,0.4)';
backdrop.style.backdropFilter='blur(3px)';
backdrop.style.display='flex';
backdrop.style.justifyContent='center';
backdrop.style.alignItems='center';
backdrop.style.zIndex='999999';

var modal=document.createElement('div');
modal.style.backgroundColor='white';
modal.style.fontFamily='Open Sans Extrabold';
modal.style.fontSize='80pt';
modal.style.margin='0';
modal.style.padding='40pt';
modal.style.lineHeight='60pt';
modal.style.color='#222a35';
modal.style.borderRadius='15px';
modal.style.boxShadow='0px 5px 8px rgba(0,0,0,0.3),0px 10px 25px rgba(0,0,0,0.3)';

var timeElement=document.createElement('div');
var textElement=document.createElement('div');
var currentTime=document.createElement('div');

textElement.style.fontFamily='Open Sans';
textElement.style.fontSize='20pt';
textElement.style.float='right';

currentTime.style.fontFamily='Open Sans Extrabold';
currentTime.style.color='#bbc5d3';
currentTime.style.fontSize='20pt';

modal.appendChild(currentTime);
modal.appendChild(timeElement);
modal.appendChild(textElement);
backdrop.appendChild(modal);
document.body.appendChild(backdrop);

backdrop.addEventListener('click',function(e){if(e.target===backdrop){document.body.removeChild(backdrop);}});
window.addEventListener('keydown',function(e){if(e.key==='Escape'){if(document.body.contains(backdrop)){document.body.removeChild(backdrop);}}});

var targetTimeIn24Hour=new Date('1970-01-01 ' + targetTime);

var updateTime=function(){
var now=new Date();
var currentTimeIn24Hour=new Date('1970-01-01 ' + now.toLocaleTimeString('en-US',{hour12:false}));
var timeDiff=targetTimeIn24Hour-currentTimeIn24Hour;
if (timeDiff<0){timeDiff+=24*60*60*1000;}
var hours=Math.floor(timeDiff/(1000*60*60));
var minutes=Math.floor((timeDiff % (1000*60*60))/(1000*60));
var seconds=Math.floor((timeDiff % (1000*60))/1000);
timeElement.textContent=`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
textElement.textContent=`until ${targetTime}`;
currentTime.textContent=`${now.toLocaleTimeString('en-US',{hour12:true})}`;
if (document.body.contains(backdrop)){setTimeout(updateTime,500);}
};
updateTime();
})()