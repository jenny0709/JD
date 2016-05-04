$(function(){
    //点击按钮topbanner图消失
    var cha=$('.tushi')[0];
    var tuBox=$('.topbannerbox')[0];
    cha.onclick=function(){
        tuBox.style.display="none";
    }
    //送至：北京
    var headLeft=$('.headleft')[0];
    var songZhi=$('.songzhi')[0];
    headLeft.onmouseover=function(){
        songZhi.style.display="block";
    }
    headLeft.onmouseout=function(){
        songZhi.style.display="none";
    }
    //我的京东
    var dong=$('.myjingdongbox')[0];
    var myjd=$('.myjingdong')[0];
    dong.onmouseover=function(){
        myjd.style.display="block";
    }
    dong.onmouseout=function(){
        myjd.style.display="none";
    }
    //手机京东
    var phone=$('.phone')[0];
    var phoneJd=$('.phonejd')[0];
    phone.onmouseover=function(){
        phoneJd.style.display="block";
    }
    phone.onmouseout=function(){
        phoneJd.style.display="none";
    }
    //关注京东
    var guan=$('.guan')[0];
    var guanzhu=$('.guanzhu')[0];
    guan.onmouseover=function(){
        guanzhu.style.display="block";
    }
    guan.onmouseout=function(){
        guanzhu.style.display="none";
    }
    //客户服务
    var fuwu=$('.fuwu')[0];
    var fuwuBox=$('.kehufuwu')[0];
    fuwu.onmouseover=function(){
        fuwuBox.style.display="block";
    }
    fuwu.onmouseout=function(){
        fuwuBox.style.display="none";
    }
    //网站导航
    var wz=$('.wz')[0];
    var wdh=$('.wdh')[0];
    wz.onmouseover=function(){
        wdh.style.display="block";
    }
    wz.onmouseout=function(){
        wdh.style.display="none";
    }
    //购物车
    var shopBox=$('.shopcarbox')[0];
    var car=$('.carxiang')[0];
    shopBox.onmouseover=function(){
        car.style.display="block";
    }
    shopBox.onmouseout=function(){
        car.style.display="none";
    }







 
    //banner轮播图效果
	var imgs=$('a',$('.bannertubox')[0]);
	var btns=$('li',$('.btns')[0]);
	var index=0;
	var t=setInterval(wheel,2000);
	function wheel(){
		index++;
		if(index>imgs.length-1){
			index=0;
		}
		for(var i=0;i<imgs.length;i++){
            animate(imgs[i],{opacity:0});
            btns[i].style.background="";
		}
		animate(imgs[index],{opacity:1});
        btns[index].style.background="#b61b1f";
	}
//banner小按钮
    for(var i=0;i<btns.length;i++){
    	btns[i].index=i;
    	btns[i].onmouseover=function(){
    		for(var j=0;j<imgs.length;j++){
    		   animate(imgs[j],{opacity:0});
    		   btns[j].style.background="";
    		}
    		animate(imgs[this.index],{opacity:1});
    		btns[this.index].style.background="#b61b1f";
    		index=this.index;
    	}

    }
//banner鼠标移上、鼠标移下
    var box=$('.bannertubox')[0];
    box.onmouseover=function(){
    	clearInterval(t);
    	lbtn.style.display="block";
    	rbtn.style.display="block";
    }
    box.onmouseout=function(){
    	t=setInterval(wheel,2000);
    	lbtn.style.display="none";
    	rbtn.style.display="none";
    }
//banner左右按钮
    var lbtn=$('.left')[0];
    var rbtn=$('.right')[0];
    lbtn.onclick=function(){
        index--;
		if(index==-1){
			index=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
            animate(imgs[i],{opacity:0});
            btns[i].style.background="";
		}
		animate(imgs[index],{opacity:1});
        btns[index].style.background="#b61b1f";
    }
    rbtn.onclick=function(){
    	wheel();
    }
    //今日推荐按钮效果
    var tuilbtn=$(".tuileft")[0];
    var tuirbtn=$(".tuiright")[0];
    var tuibox=$(".tui1")[0];
    var tuiw=parseInt(getStyle(tuibox,"width"));
    var datuibox=$(".tuijian")[0];
    tuibox.onmouseover=function(){
    	tuilbtn.style.display="block";
    	tuirbtn.style.display="block";
    }
    tuibox.onmouseout=function(){
    	tuilbtn.style.display="none";
    	tuirbtn.style.display="none";
    }
    var index4=0;
    var flag=true;
    tuilbtn.onclick=function(){
    	 if(flag==false){
    	 	return;
    	 }
    	 flag=false;
         datuibox.insertBefore(getLast(datuibox),getFirst(datuibox));
         datuibox.style.marginLeft=-tuiw+"px";
         animate(datuibox,{marginLeft:0},function(){
         	index4--;
         	if(index4<tuibox.length-1){
         		index4=0;
         	}
         	flag=true;
         })
    }
    tuirbtn.onclick=function(){
    	if(flag==false){
    		return;
    	}
    	flag=false;
        animate(datuibox,{marginLeft:-tuiw},function(){
        	datuibox.appendChild(getFirst(datuibox));
        	datuibox.style.marginLeft=0+'px';
            index4++;
            if(index4>tuibox.length-1){
                index4=0;
            }
            flag=true;
        });
    }
//楼层轮播图
var bigbox=$('.f1banner');
// console.log(bigbox);
function lun(num){
    var bigbox=$('.f1banner')[num];
    var img2s=$('.f1bannera',bigbox);
    var aw=parseInt(getStyle(img2s[0],'width'));
    var btn2s=$('li',$('.floor1btn')[num]);
    var index2=0;
    var flag=true;
    var t2=setInterval(wheel2,2000);
    function wheel2(){
    	if(!flag){
           return;
    	}
    	flag=!flag;
    	animate(bigbox,{marginLeft:-aw},function(){
    		bigbox.appendChild(getFirst(bigbox));
    		bigbox.style.marginLeft=0+"px";
    		index2++;
	    	if(index2>=img2s.length){
	    		index2=0;
	    	}
    		for(var i=0;i<btn2s.length;i++){
    			btn2s[i].className="";
    		}
    		btn2s[index2].className="f1hotbtn";
    		flag=true;
    	});
    }
    //楼层鼠标移上、鼠标移下
    var box2=$('.xbanner')[num];
    box2.onmouseover=function(){
    	clearInterval(t2);
    	lbtn2.style.display="block";
    	rbtn2.style.display="block";
    }
    box2.onmouseout=function(){
    	t2=setInterval(wheel2,2000);
    	lbtn2.style.display="none";
    	rbtn2.style.display="none";
    }
    //楼层左右按钮
    var lbtn2=$('.floor1lbtn')[num];
    var rbtn2=$('.floor1rbtn')[num];
    var flag=true;
    lbtn2.onclick=function(){
    	if(flag==false){
    		return;
    	}
    	flag=false;
        insertBefore(getLast(bigbox),getFirst(bigbox));
        bigbox.style.marginLeft=-aw+"px";
        animate(bigbox,{marginLeft:0},function(){
            index2--;
	    	if(index2==-1){
	    		index2=img2s.length-1;
	    	}
    		for(var i=0;i<btn2s.length;i++){
    			btn2s[i].className="";
    		}
    		btn2s[index2].className="f1hotbtn";
    		flag=true;
        })  
    }
    rbtn2.onclick=function(){
    	wheel2();
    }
}
  for (var i = 0; i < bigbox.length; i++) {
    	lun(i);
  };
    //选项卡效果
    var linksBox=$('.tab');
    var divsBox=$('.da-dapaibox');
    var links,divs;
    for (var i = 0; i < linksBox.length; i++) {
    	links=$('li',linksBox[i]);
    	divs=$('.dapaibox',divsBox[i]);
    	tab(links,divs);
    };
    function tab(links,divs){
    	for (var i = 0; i < links.length; i++) {
	    	links[i].index3=i;
	        links[i].onmouseover=function(){
	        	for (var j = 0; j < divs.length; j++) {
	        		divs[j].style.display="none";
	        		links[j].className="";
	        	};
	        	divs[this.index3].style.display="block";
	        	links[this.index3].className="hotpai";
	        }
	    };
    } 
    

   //品质生活、天天低价
// function moveImg(num2){
//     var ximg=$('img',$('.xinpin')[num2])[0];
//     ximg.onmouseover=function(){
//        animate(ximg,{marginLeft:-8},300);
//     }
//     ximg.onmouseout=function(){
//         animate(ximg,{marginLeft:0},300);
//     }
// }
// for (var i = 0; i < 9 ; i++) {
//     moveImg(i);
// };
      //老师的封装方法(品质生活、天天低价)
var ximgBox=$('.xinpin');
for (var i = 0; i < ximgBox.length; i++) {
    var ximg=$('img',ximgBox[i])[0];//获取每一个盒子里面的第一张图片
    moveImg(ximg);
};
function moveImg(ximg){
    ximg.onmouseover=function(){
       animate(ximg,{marginLeft:-8},300);
    }
    ximg.onmouseout=function(){
        animate(ximg,{marginLeft:0},300);
    }
}


//slide1box效果
var over=$('.over');
for (var i = 0; i < over.length; i++) {
    var carbox1=$('.carbox1')[i];
    var carbox2=$('.carbox2')[i];
    mLeft(over[i],$(".carbox2",over[i])[0],$(".carbox1",over[i])[0]);
};
function mLeft(over,carbox2,carbox1){
    over.onmouseover=function(){
        carbox2.style.background="#c81623";
        carbox1.style.background="#c81623";
        dian.style.display="none";
        animate(carbox2,{marginLeft:-60},350);
    }
    over.onmouseout=function(){
        carbox2.style.background="#7a6e6e";
        carbox1.style.background="#7a6e6e";
        dian.style.display="block";
        animate(carbox2,{marginLeft:0},350);
    }
}

//slide2box效果
var over2=$('.over2');
var dian=$('.dian')[0];
for (var i = 0; i < over2.length; i++) {
    var dingbox1=$('.carbox1')[i];
    var dingbox2=$('.carbox2')[i];
    m2Left(over2[i],$(".carbox2",over2[i])[0],$(".carbox1",over2[i])[0]);
};
function m2Left(over2,dingbox2,dingbox1){
    over2.onmouseover=function(){
        dingbox2.style.background="#c81623";
        dingbox1.style.background="#c81623";
        animate(dingbox2,{marginLeft:-50},350);
    }
    over2.onmouseout=function(){
        dingbox2.style.background="#7a6e6e";
        dingbox1.style.background="#7a6e6e";
        animate(dingbox2,{marginLeft:0},350);
    }
}
//返回顶部
var ding=$('.ding')[0];
ding.onclick=function(){
    var rong=document.body.scrollTop?document.body:document.documentElement;
    animate(rong,{scrollTop:0});
}
//左边楼层切换
var fls=$('.floor');
var lis2=$('li',$('.leftbox')[0]);
var leftBox=$('.leftbox')[0];
var arr=[];
var f=$('.f1');  //f
var li=$('li',$('.leftbox')[0]);
var fzi=$('.ftitle');
for (var i = 0; i < fls.length; i++) {
    arr.push(fls[i].offsetTop);
}; 
window.onscroll=function(){
    var st=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
    if(st>1100){
       leftBox.style.display="block";
    }
    if(st>arr[arr.length-1]+500){
       leftBox.style.display="none";
    }
    for (var i = 0; i < arr.length; i++) {
        if(st+500>=arr[i]){
            for (var j = 0; j < f.length; j++) {
                f[j].style.display="block";
                fzi[j].style.display="none";
            };
            f[i].style.display="none";
            fzi[i].style.cssText="display:block; color:#c81623;";
        }
    };
    for (var i = 0; i < lis2.length; i++) {
        lis2[i].index=i;
        lis2[i].onclick=function(){
            var sr=document.body.scrollTop?document.body:document.documentElement;
            animate(sr,{scrollTop:arr[this.index]},500);
        }            
    };
 }
//楼层按钮之鼠标移上移下
// for (var i = 0; i < li.length; i++) {
//     li[i].index_7=i;
//     li[i].onmouseover=function(){
//        for (var j = 0; j < f.length; j++) {
//            f[j].style.display="block";
//            fzi[j].style.display="none";
//        };
//        f[this.index_7].style.display="none";
//        fzi[this.index_7].style.display="block";
//     }
//     li[i].onmouseout=function(){
//        for (var j = 0; j < f.length; j++) {
//            f[j].style.display="block";
//            fzi[j].style.display="none";
//        };
//        f[this.index_7].style.display="block";
//        fzi[this.index_7].style.display="none";
//     }
// };



//热门晒单
var daBox=$('.dashaidan')[0];
var lis=$('.shaidan1')[0];
var liH=parseInt(getStyle(lis,'height'));
var index5=0;
var num=setInterval(moveTop,2000)
function moveTop(){
    index5++;
    insertBefore(getLast(daBox),getFirst(daBox));
    daBox.style.marginTop=-liH+"px";
    animate(daBox,{marginTop:0});
}
var sBox=$('.shaidan')[0];
sBox.onmouseover=function(){
    clearInterval(num);
}
sBox.onmouseout=function(){
    num=setInterval(moveTop,2000);
}












})