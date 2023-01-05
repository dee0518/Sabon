$(document).ready(function(){
    
    //vivus function
    function startAni(th,ms,vv){
	if(th.scrollTop() >= $(ms).offset().top-800){
		vv.play();
	}else {
		vv.reset();
	}
    }
    function startAni2(t,m,v,af){
	if(t.scrollTop() >= $(m).offset().top-800){
		v.play();
        af.addClass('fill');
	}else {
		v.reset();
        af.removeClass('fill');
	}
    }
    //parallax function
    function ws(a){
        $(window).scroll(function(){
            if($(this).scrollTop()>=a.offset().top-900){
               a.addClass('op'); 
            }else {
                a.removeClass('op');
            }
        });
    }
    function wl(b){
        $(window).scroll(function(){
            if($(this).scrollTop()>=b.offset().top-900){
               b.addClass('left'); 
            }else {
                b.removeClass('left');
            }
        });
    }
    function wr(c){
        $(window).scroll(function(){
            if($(this).scrollTop()>=c.offset().top-700){
               c.addClass('right'); 
            }else {
                c.removeClass('right');
            }
        });
    }
    
    //header-common 
    $('header').each(function(){
    var header = $(this);
    var nav = $('nav');
    var navInner = $('.navInner');
        
    $('.navBtn').click(function(){
        nav.fadeIn();
    });
    navInner.children('a').click(function(e){
        e.preventDefault();
        nav.fadeOut();
    });
    });
    
    //brand
   $('.brand').each(function(){
        
        //about
    $('#about').each(function(){
        var aboutInner = $('.aboutInner');
        var title = aboutInner.find('.title');
        var h3 = aboutInner.find('h3');
        var p1 = title.find('p');
        var a = title.find('a');
        var p2 = aboutInner.children('p');
        var span1 = aboutInner.children('span').eq(0);
        var span2 = aboutInner.children('span').eq(1);
        var span3 = aboutInner.children('span').eq(2);
        
        /* about parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=h3.offset().top-800){
                h3.addClass('left');
                p1.addClass('up');
                a.addClass('up');
                span1.addClass('right');
            }else {
                h3.removeClass('left');
                p1.removeClass('up');
                a.removeClass('up');
                span1.removeClass('right');
            }
        });
        $(window).scroll(function(){
            if($(this).scrollTop()>=p2.offset().top-800){
                p2.addClass('up');
            }else {
                p2.removeClass('up');
            }
        });
        $(window).scroll(function(){
            if($(this).scrollTop()>=span3.offset().top-800){
                span2.addClass('up');
                span3.addClass('down');
            }else {
                span2.removeClass('up');
                span3.removeClass('down');
            }
        });
    });
   
    //story 
    $('#story').each(function(){
        var storyInner = $('.storyInner');
        var title = storyInner.find('.title');
        var p = title.find('p');
        var span = $(this).find('span');
        
        /* story parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=p.offset().top-700){
                p.addClass('left');
                span.addClass('op');
            }else {
                p.removeClass('left');
                span.removeClass('op');
            }
        });
    });
    
    //ritual
    $('#ritual').each(function(){
        var ritualInner =$('.ritualInner');
        var h3 = ritualInner.find('h3');
        var slide = ritualInner.find('.slide');
        var rBtn = $('.ritualBtn');
        var pBtn = rBtn.children('button').eq(0);
        var nBtn = rBtn.children('button').eq(1);
        
        /* ritual parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=h3.offset().top-700){
                h3.addClass('up');
                slide.addClass('op');
            }else {
                h3.removeClass('up');
                slide.removeClass('op');
            }
        });
       slide.each(function(){
        var timer;
        var wrapper = $(this);
        function changDiv(){
            var div = wrapper.children('div');
            var first = div.eq(0);
            var second = div.eq(1);
            first.hide().appendTo(wrapper);
            second.fadeIn();
        }
        function startTimer(){
            timer = setInterval(changDiv,4000);
        }

        startTimer();
    });
        
        
    });
    
    //feature 
    $('#feature').each(function(){
        var featureInner = $('.featureInner');
        var tabs = featureInner.find('.tabs');
        var tabA = tabs.find('a');
        var panels = featureInner.find('.panels').children('div');
        
        function pp(){
            panels.each(function(){
        var pn = $(this);
        var h4 = pn.find('h4');
        var line = h4.find('span');
        var p = pn.find('p');
        var span = pn.find('span');
        
        /* feature parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=pn.offset().top-650){
                h4.addClass('right');
                line.addClass('line');
                p.addClass('op');
                span.addClass('op');
            }else {
                h4.removeClass('right');
                line.removeClass('line');
                p.removeClass('op');
                span.removeClass('op');
            }
            });
        });
        }
        
        tabA.click(function(e){
        e.preventDefault();
        var index = $(this).index();
        tabA.removeClass('on');
        $(this).addClass('on');
        panels.hide();
        panels.eq(index).fadeIn();
        });
        if($(window).width()<1024){
            pp();
        }
        $(window).resize(function(){
            if($(window).width()<1024){
                panels.show();
                pp();
            }else {
                tabA.eq(0).addClass('on').siblings().removeClass('on');
                panels.eq(0).show().siblings().hide();
                h4.removeClass('right');
                line.removeClass('line');
                p.removeClass('op');
                span.removeClass('op');
            }
        });
        
        function ps(){
            var divs = 2;
            var now = 0;
    
        start();
        function start(){
            tabA.eq(0).siblings().removeClass('on');
            panels.eq(0).siblings().css('display','none');
            setInterval(function(){slide();},4000);
        }
        function slide(){
            if($(window).width()>=1024){
                now = now == divs?0:now+=1;
            tabA.eq(now).siblings().removeClass('on');
            tabA.eq(now).addClass('on');
            var ind = tabA.filter('.on');
                panels.eq(ind).css('display','block').siblings().css('display','none');
            
            tabA.click(function(e){
        e.preventDefault();
        var index = $(this).index();
        tabA.removeClass('on');
        $(this).addClass('on');
        panels.hide();
        panels.eq(index).fadeIn();
        now = index;
        });
        }
            }
        }
        
        if($(window).width()<1024) {
            pp();
            
        }else {
            ps();
        }
        
        $(window).resize(function(){
        if($(window).width()<1024){
            panels.show();
            pp();
        }else {
            ps();
        }
        });
         
    });
     
    
     //vivus
    var svg2 = new Vivus('svg2',{duration: 50, type:'sync'});
    var svg3 = new Vivus('svg3',{duration: 50, type:'sync'});
    var svg4 = new Vivus('svg4',{duration: 50, type:'sync'});
    var svg5 = new Vivus('svg5',{duration: 50, type:'sync'}); 
    
    $(window).scroll(function(){
	var wsc = $(this);
	startAni(wsc,'#svg2',svg2);
	startAni(wsc,'#svg3',svg3);
	startAni(wsc,'#svg4',svg4);
	startAni(wsc,'#svg5',svg5);
    });
       
     //anime
    randomValues();
    
   function randomValues() {
    anime({
    targets: '.visual circle',
    translateX: function() {
      return anime.random(-50, 50);
    },
    translateY: function() {
      return anime.random(-30, 30);
    },
    easing: 'easeInOutCubic',
    duration: 500,
    complete: randomValues
  });
   }
   });
    //brand
    
    //product 
    $('.product').each(function(){
        var addfill1 = function addfill () {
        $('.p1').addClass('fill');
    }
        var p2 = $('.p2'); 
        var p3 = $('.p3'); 
    //body
    $('#body').each(function(){
        var bodyInner = $('.bodyInner');
        var div1 = bodyInner.children('div').eq(0);
        var div2 = bodyInner.children('div').eq(1);
        var div3 = bodyInner.children('div').eq(2);
        var div4 = bodyInner.children('div').eq(3);
        var div5 = bodyInner.children('div').eq(4);
        var div6 = bodyInner.children('div').eq(5);
        var p = bodyInner.find('p');
    if($(window).width()<768){
        div1.addClass('op');
    }
    if($(window).width()>=768 && $(window).width()<1024){
        div1.addClass('op');
        div2.addClass('op');
        ws(div3);
    }
    if($(window).width()>=1024) {
        div1.addClass('op');
        div2.addClass('op');
        div3.addClass('op');
    }
    $(window).resize(function(){
        if($(window).width()<768){
        div1.addClass('op');
        div2.removeClass('op');
        div3.removeClass('op');
        ws(div2);
        ws(div3);
    }
    if($(window).width()>=768 && $(window).width()<1024){
        div1.addClass('op');
        div2.addClass('op');
        div3.removeClass('op');
        ws(div3);
    }
    if($(window).width()>=1024) {
        div1.addClass('op');
        div2.addClass('op');
        div3.addClass('op');
    }
    });  
    wr(p);
    ws(div4);
    ws(div5);
    ws(div6);
    });
    //hair 
    $('#hair').each(function(){
        var hairInner = $('.hairInner');
        var div1 = hairInner.children('div').eq(0);
        var div2 = hairInner.children('div').eq(1);
        var div3 = hairInner.children('div').eq(2);
        var div4 = hairInner.children('div').eq(3);
        var div5 = hairInner.children('div').eq(4);
        wl(div1);
        ws(div2);
        ws(div3);
        ws(div4);
        ws(div5);
    });
    //scent
    $('#scent').each(function(){
        var scentInner = $('.scentInner');
        var div1 = scentInner.children('div').eq(0);
        var div2 = scentInner.children('div').eq(1);
        var div3 = scentInner.children('div').eq(2);
        var div4 = scentInner.children('div').eq(3);
        var div5 = scentInner.children('div').eq(4);
        var div6 = scentInner.children('div').eq(5);
        var ifr = scentInner.find('iframe');
        wr(ifr);
        ws(div1);
        ws(div2);
        ws(div3);
        ws(div4);
        ws(div5);
        ws(div6);
    });
    //vivus
     var svg6 = new Vivus('svg6',{duration: 50, type:'sync'},addfill1);
        svg6.play();   
     var svg7 = new Vivus('svg7',{duration: 50, type:'sync'});
        $(window).scroll(function(){
	       var wsc = $(this);
	       startAni2(wsc,'#svg7',svg7,p2);
        });
      var svg8 = new Vivus('svg8',{duration: 50, type:'sync'});
        $(window).scroll(function(){
	       var wsc = $(this);
	       startAni2(wsc,'#svg8',svg8,p3);
        });  
    });
    
    //product
    
   
   
    
});