$(window).on('load',function(){
     
     $('.loader').fadeOut();
     });
  

$(document).ready(function(){   
         /* loader */
    var svgScale1 = document.getElementById('shape1');
    var svgc1 = svgScale1.getElementsByTagName('circle')[0];
    var svgc2 = svgScale1.getElementsByTagName('circle')[1];
    var svgc3 = svgScale1.getElementsByTagName('circle')[2];
    var svgc4 = svgScale1.getElementsByTagName('circle')[3];
    var svgc5 = svgScale1.getElementsByTagName('circle')[4];
    var svgc6 = svgScale1.getElementsByTagName('circle')[5];
    var svgc7 = svgScale1.getElementsByTagName('circle')[6];
    var svgc8 = svgScale1.getElementsByTagName('circle')[7];
    var svgc9 = svgScale1.getElementsByTagName('circle')[8];
    var svgc10 = svgScale1.getElementsByTagName('circle')[9];
    var svgTweenc1 = KUTE.fromTo(svgc1, { svgTransform:{scale:0.8}},{ svgTransform:{scale:1.05}},{duration:1500,repeat:100, yoyo: true});
    var svgTweenc2 = KUTE.fromTo(svgc2, { svgTransform:{scale:1.05}},{ svgTransform:{scale:0.5}},{duration:800, yoyo: true,repeat:100});
    var svgTweenc3 = KUTE.fromTo(svgc3, { svgTransform:{scale:0.8}},{ svgTransform:{scale:1.2}},{duration:1500, yoyo: true,repeat:100});
    var svgTweenc4 = KUTE.fromTo(svgc4, { svgTransform:{scale:1.15}},{ svgTransform:{scale:0.8}},{duration:1000, yoyo: true,repeat:100});
    var svgTweenc5 = KUTE.fromTo(svgc5,{ svgTransform:{scale:0.8}}, { svgTransform:{scale:1.2}},{duration:1000, yoyo: true,repeat:100});
    var svgTweenc6 = KUTE.fromTo(svgc6, { svgTransform:{scale:0.75}},{ svgTransform:{scale:1.1}},{duration:900, yoyo: true,repeat:100});
    var svgTweenc7 = KUTE.fromTo(svgc7, { svgTransform:{scale:1.05}},{ svgTransform:{scale:0.8}},{duration:1200, yoyo: true,repeat:100});
    var svgTweenc8 = KUTE.to(svgc8, { svgTransform:{scale:1.25}},{duration:1500, yoyo: true,repeat:100});
    var svgTweenc9 = KUTE.to(svgc9, { svgTransform:{scale:0.8}},{duration:1000, yoyo: true,repeat:100});
    var svgTweenc10 = KUTE.to(svgc10, { svgTransform:{scale:1.1}},{duration:1300, yoyo: true,repeat:100});
        svgTweenc1.start();
        svgTweenc2.start();
        svgTweenc3.start();
        svgTweenc4.start();
        svgTweenc5.start();
        svgTweenc6.start();
        svgTweenc7.start();
        svgTweenc8.start();
        svgTweenc9.start();
        svgTweenc10.start();
        
    var svgScale = document.getElementById('shape2');
    var svgs1 = svgScale.getElementsByTagName('circle')[0];
    var svgs2 = svgScale.getElementsByTagName('circle')[1];
    var svgs3 = svgScale.getElementsByTagName('circle')[2];
    var svgs4 = svgScale.getElementsByTagName('circle')[3];
    var svgs5 = svgScale.getElementsByTagName('circle')[4];
    var svgs6 = svgScale.getElementsByTagName('circle')[5];
    var svgs7 = svgScale.getElementsByTagName('circle')[6];
    var svgs8 = svgScale.getElementsByTagName('circle')[7];
    var svgs9 = svgScale.getElementsByTagName('circle')[8];
    var svgs10 = svgScale.getElementsByTagName('circle')[9];
    var svgs11 = svgScale.getElementsByTagName('circle')[10];
    var svgs12 = svgScale.getElementsByTagName('circle')[11];
    var svgs13 = svgScale.getElementsByTagName('circle')[12];
    var svgTween1 = KUTE.fromTo(svgs1, { svgTransform:{scale:0.05}},{ svgTransform:{scale:1.05}},{duration:1000,repeat:100, yoyo: true, delay:200});
    var svgTween2 = KUTE.fromTo(svgs2, { svgTransform:{scale:1.05}},{ svgTransform:{scale:0.05}},{duration:1300,repeat:100, yoyo: true, delay:150});
    var svgTween3 = KUTE.fromTo(svgs3, { svgTransform:{scale:0.3}},{ svgTransform:{scale:1.2}},{duration:1500,repeat:100, yoyo: true});
    var svgTween4 = KUTE.fromTo(svgs4, { svgTransform:{scale:0.15}},{ svgTransform:{scale:1.15}},{duration:1000,repeat:100, yoyo: true});
    var svgTween5 = KUTE.fromTo(svgs5,{ svgTransform:{scale:0.7}}, { svgTransform:{scale:1.2}},{duration:1500,repeat:100, yoyo: true});
    var svgTween6 = KUTE.fromTo(svgs6,{ svgTransform:{scale:0.5}},{ svgTransform:{scale:1.1}},{duration:1200,repeat:100, yoyo: true});
    var svgTween7 = KUTE.fromTo(svgs7, { svgTransform:{scale:0.3}},{ svgTransform:{scale:1.05}},{duration:800,repeat:100, yoyo: true,delay:150});
    var svgTween8 = KUTE.to(svgs8, { svgTransform:{scale:1.25}},{duration:1500,repeat:100, yoyo: true, delay:100});
    var svgTween9 = KUTE.fromTo(svgs9,{ svgTransform:{scale:1.1}},{ svgTransform:{scale:0.5}},{duration:1200,repeat:100, yoyo: true});
    var svgTween10 = KUTE.fromTo(svgs10,{ svgTransform:{scale:0.5}},{ svgTransform:{scale:1.1}},{duration:1500,repeat:100, yoyo: true,delay:300});
    var svgTween11 = KUTE.fromTo(svgs11,{ svgTransform:{scale:0.5}},{ svgTransform:{scale:1.3}},{duration:1300,repeat:100, yoyo: true});
    var svgTween12 = KUTE.fromTo(svgs12,{ svgTransform:{scale:0.5}},{ svgTransform:{scale:1.1}},{duration:1000,repeat:100, yoyo: true,delay:200});
    var svgTween13 = KUTE.to(svgs13, { svgTransform:{scale:0.5}},{duration:1200,repeat:100, yoyo: true});
        svgTween1.start();
        svgTween2.start();
        svgTween3.start();
        svgTween4.start();
        svgTween5.start();
        svgTween6.start();
        svgTween7.start();
        svgTween8.start();
        svgTween9.start();
        svgTween10.start();
        svgTween11.start();
        svgTween12.start();
        svgTween13.start();
     /* header */
    var header = $('header');
    var nav = $('nav');
	var h1 = header.find('h1');
    var navInner = $('.navInner');
    var visual = $('.visual');
    var span = visual.find('span');

    $(window).scroll(function(){
        if($(this).scrollTop()>=visual.offset().top+100){
            header.addClass('on');
        }else {
            header.removeClass('on');
        }
    });
        
    /* menu */    
    $('.navBtn').click(function(){
        nav.fadeIn();
    });
    navInner.children('a').click(function(e){
        e.preventDefault();
        nav.fadeOut();
    });
   
        
    /* visual */
    if($(window).width() < 768){
        span.each(function(){
            $(this).addClass('right');
        });
    }else {
        span.each(function(){
            $(this).addClass('up');
        });
    }
    $(window).resize(function(){
        if($(window).width() < 768){
        span.each(function(){
            $(this).removeClass('up');
            $(this).addClass('right');
        });
    }else {
        span.each(function(){
            $(this).removeClass('right');
            $(this).addClass('up');
        });
    }
    });
    
    /* new */
    $('.newInner').each(function(){
        
        var newInner = $(this);
        var h2 = newInner.find('h2');
        var overlapImg = $('.overlapImg');
        var img = overlapImg.children('span');
        var subTitle = $('.subTitle');
        var h3 = subTitle.find('h3');
        var subp = subTitle.find('p');
        var p = newInner.children('p');
        var span = newInner.children('span');
        var a = newInner.children('a');
        
        /* new parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=h2.offset().top-500){
                h2.addClass('left');
                overlapImg.addClass('right');
                h3.addClass('up');
                subp.addClass('left');
            }else {
                h2.removeClass('left');
                overlapImg.removeClass('right');
                h3.removeClass('up');
                subp.removeClass('left');
            }
            if($(this).scrollTop()>=p.eq(0).offset().top-750) {
                p.eq(0).addClass('up');
            }else {
                p.eq(0).removeClass('up');
            }
            if($(this).scrollTop()>=span.offset().top-600){
                span.addClass('left');
                p.eq(1).addClass('up');
                a.addClass('down');
            }else {
                span.removeClass('left');
                p.eq(1).removeClass('up');
                a.removeClass('down');
            }
        });
    });
    
    /* event parallax */
        
        var eventInner = $('.eventInner');
        var eh2 = eventInner.find('h2');
        var eh3 = eventInner.find('h3');
        var ep = eventInner.find('p');
        var espan = eventInner.children('span');
        var ea = eventInner.find('a');
        
        $(window).scroll(function(){
            if($(this).scrollTop()>=eh2.offset().top-800){
                eh2.addClass('left');
                eh3.addClass('right');
                ep.addClass('right');
                espan.addClass('left');
                ea.addClass('up');
            }else {
                eh2.removeClass('left');
                eh3.removeClass('right');
                ep.removeClass('right');
                espan.removeClass('left');
                ea.removeClass('up');
            }
        });
    
    /* share */   
        var shareInner = $(this);
        var sh2 = shareInner.find('h2');
        var shareImg = $('.shareImg');
        var simgA = shareImg.find('a');
        var sns = shareInner.find('.sns').find('a');
        var sp = shareInner.find('p');
        var xscroll = $('.scroll').find('span');
        
        /* share parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=sh2.offset().top-800){
                sh2.addClass('up');
                sns.addClass('down');
                sp.addClass('up');
                shareImg.addClass('op');
            }else {
                sh2.removeClass('up');
                shareImg.removeClass('left');
                sns.removeClass('down');
                sp.removeClass('up');
                shareImg.removeClass('op');
            }
        });
 
});
