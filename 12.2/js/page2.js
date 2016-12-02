;(function(win,doc){
	win.addEventListener('resize',setFont,false);
	setFont()
	function setFont(){
		doc.documentElement.style.fontSize = doc.documentElement.clientWidth/15+'px';
	}
})(window,document);

document.addEventListener('DOMContentLoaded',function(){
    var oNav=document.getElementById('tab-list');
    var aLi=oNav.children;
    var aShow = oNav.getElementsByTagName('a');
    var oDiv=document.getElementById('test');
    var aDiv=oDiv.children;
    var swiper = new Swiper('.swiper-container', {
        onSlideChangeEnd: function(swiper){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
                aShow[i].className = '';
            }
            aLi[swiper.activeIndex].className='red';
            aShow[swiper.activeIndex].className = 'active';
        }
    });
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
                aShow[i].className = '';
            }
            this.className='red';
            aShow[this.index].className = 'active';
            swiper.slideTo(this.index, 1000, false);
        };
    }
},false);