$(window).on('load',function(){
     
    $('.brand').find('.loader').fadeOut(200);
         $('.product').find('.loader').fadeOut(200);
         $('.soap').find('.loader').fadeOut(200);
         $('.cont').find('.loader').fadeOut(200);
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
            if($(this).scrollTop()>=c.offset().top-800){
               c.addClass('right'); 
            }else {
                c.removeClass('right');
            }
        });
    }
    
    //common 
    
    var header = $('header');
    var nav = $('nav');
    var navInner = $('.navInner');
        
    $('.navBtn').click(function(){
        nav.fadeIn();
    });
    navInner.children('a').click(function(e){
        e.preventDefault();
        nav.fadeOut();
    });
    
    //brand
   $('.brand').each(function(){
        
        //about
        var aboutInner = $('.aboutInner');
        var atitle = aboutInner.find('.title');
        var ah3 = aboutInner.find('h3');
        var ap1 = atitle.find('p');
        var aa = atitle.find('a');
        var ap2 = aboutInner.children('p');
        var aspan1 = aboutInner.children('span').eq(0);
        var aspan2 = aboutInner.children('span').eq(1);
        var aspan3 = aboutInner.children('span').eq(2);
        
        /* about parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=ah3.offset().top-800){
                ah3.addClass('left');
                ap1.addClass('up');
                aa.addClass('up');
                aspan1.addClass('right');
            }else {
                ah3.removeClass('left');
                ap1.removeClass('up');
                aa.removeClass('up');
                aspan1.removeClass('right');
            }
        });
        $(window).scroll(function(){
            if($(this).scrollTop()>=ap2.offset().top-800){
                ap2.addClass('up');
            }else {
                ap2.removeClass('up');
            }
        });
        $(window).scroll(function(){
            if($(this).scrollTop()>=aspan3.offset().top-800){
                aspan2.addClass('up');
                aspan3.addClass('down');
            }else {
                aspan2.removeClass('up');
                aspan3.removeClass('down');
            }
        });
   
    //story 
        var storyInner = $('.storyInner');
        var stitle = storyInner.find('.title');
        var sp = stitle.find('p');
        var sspan = $(this).find('span');
        
        /* story parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=sp.offset().top-700){
                sp.addClass('left');
                sspan.addClass('op');
            }else {
                sp.removeClass('left');
                sspan.removeClass('op');
            }
        });
    
    //ritual
        var ritualInner =$('.ritualInner');
        var rh3 = ritualInner.find('h3');
        var rslide = ritualInner.find('.slide');
        
        /* ritual parallax */
        $(window).scroll(function(){
            if($(this).scrollTop()>=rh3.offset().top-700){
                rh3.addClass('up');
                rslide.addClass('op');
            }else {
                rh3.removeClass('up');
                rslide.removeClass('op');
            }
        });
       rslide.each(function(){
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
        
        
    
    //feature 
        var featureInner = $('.featureInner');
        var tabs = featureInner.find('.tabs');
        var tabA = tabs.find('a');
        var panels = featureInner.find('.panels').children('div');
        
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
        tabA.click(function(e){
        e.preventDefault();
        var index = $(this).index();
        tabA.removeClass('on');
        $(this).addClass('on');
        panels.hide();
        panels.eq(index).fadeIn();
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
        function addfill (f) {
        f.addClass('fill');
        }
        var p1 = $('.p1');
        var p2 = $('.p2'); 
        var p3 = $('.p3'); 
        var addfill1 = addfill(p1);
        var addfill2 = addfill(p2);
        var addfill3 = addfill(p3);
    //body
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
        div2.addClass('op')
        ws(div3);
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
        div2.addClass('op')
        ws(div3);
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
    });  
    wr(p);
    ws(div4);
    ws(div5);
    ws(div6);
    //hair 
        var hairInner = $('.hairInner');
        var hdiv1 = hairInner.children('div').eq(0);
        var hdiv2 = hairInner.children('div').eq(1);
        var hdiv3 = hairInner.children('div').eq(2);
        var hdiv4 = hairInner.children('div').eq(3);
        var hdiv5 = hairInner.children('div').eq(4);
        wl(hdiv1);
        ws(hdiv2);
        ws(hdiv3);
        ws(hdiv4);
        ws(hdiv5);
    //scent
        var scentInner = $('.scentInner');
        var sdiv1 = scentInner.children('div').eq(0);
        var sdiv2 = scentInner.children('div').eq(1);
        var sdiv3 = scentInner.children('div').eq(2);
        var sdiv4 = scentInner.children('div').eq(3);
        var sdiv5 = scentInner.children('div').eq(4);
        var sdiv6 = scentInner.children('div').eq(5);
        var ifr = scentInner.find('iframe');
        wr(ifr);
        ws(sdiv1);
        ws(sdiv2);
        ws(sdiv3);
        ws(sdiv4);
        ws(sdiv5);
        ws(sdiv6);
    //vivus
     var svg6 = new Vivus('svg6',{duration: 50, type:'sync'},addfill1);
        svg6.play();   
     var svg7 = new Vivus('svg7',{duration: 50, type:'sync'},addfill2);
        $(window).scroll(function(){
	       var wsc = $(this);
	       startAni2(wsc,'#svg7',svg7,p2);
        });
      var svg8 = new Vivus('svg8',{duration: 50, type:'sync'},addfill3);
        $(window).scroll(function(){
	       var wsc = $(this);
	       startAni2(wsc,'#svg8',svg8,p3);
        });  
    });
    //product
    
    //soap
   $('.soap').each(function(){
       var svg13 = new Vivus('svg13',{duration: 50, type:'sync'});
       var svg14 = new Vivus('svg14',{duration: 50, type:'sync'});
       var svg15 = new Vivus('svg18',{duration: 50, type:'sync'});
       
       $(window).scroll(function(){
	       var wsc = $(this);
	       startAni(wsc,'#svg13',svg13);
	       startAni(wsc,'#svg14',svg14);
	       startAni(wsc,'#svg18',svg15);
        });
       var exInner = $('.exInner');
       var eh2 = exInner.find('h2');
       var eifr = exInner.find('iframe');
       var exText = exInner.find('.exText');
       var espan = exInner.children('span');
          
       $(window).scroll(function(){
        if($(this).scrollTop()>=eifr.offset().top-650) {
            eh2.addClass('right');
            eifr.addClass('left');
            exText.addClass('up');
            espan.addClass('op');
        }else {
            eh2.removeClass('right');
            eifr.removeClass('left');
            exText.removeClass('up');
            espan.removeClass('op');
        } 
        });  
       
        var bookInner = $('.bookInner');
        var h2 = bookInner.find('h2');
        var span = bookInner.children('span');
        var bookText = bookInner.find('.bookText');
        var ft = bookInner.find('form');
        var h3 = ft.find('h3');
        var table = ft.find('.table');
        var input = ft.find('fieldset').children('input');
           
        $(window).scroll(function(){
            if($(this).scrollTop()>=h2.offset().top-700){
                h2.addClass('right');
                span.addClass('op');
                bookText.addClass('left');
                h3.addClass('right');
                table.addClass('op');
                input.addClass('up');
            }else {
                h2.removeClass('right');
                span.removeClass('op');
                bookText.removeClass('left');
                h3.removeClass('right');
                table.removeClass('op');
                input.removeClass('up');
            }
        });

        var customInner = $('.customInner');
        var ch2 = customInner.find('h2');
        var cText = customInner.children('div').eq(1);
        var cspan = customInner.children('span');
           
        $(window).scroll(function(){
            if($(this).scrollTop()>=ch2.offset().top-700){
                ch2.addClass('left');
                cText.addClass('up');
                cspan.addClass('op');
            }else {
                ch2.removeClass('left');
                cText.removeClass('up');
                cspan.removeClass('op');
            }
        });
   });
    //soap
    //contact
   $('.cont').each(function(){
       //contact
        var con = $(this);
        var conInner = $('.conInner');
        var h2 = conInner.find('h2');
        var p = conInner.find('p');
        var p1 = conInner.find('p').eq(0);
        var p2 = conInner.find('p').eq(1);
        var p3 = conInner.find('p').eq(2);
        var line = p3.find('a').children('span');
        var span1 = con.children('span').eq(0);
        var span2 = con.children('span').eq(1);
           
        if($(window).width()<1024){
            h2.addClass('op');
            p.addClass('op');
            line.addClass('line');
        }else {
            h2.addClass('left');
            p1.addClass('up2');
            p2.addClass('right');
            p3.addClass('right');
            line.addClass('line');
            span1.addClass('right');
            span2.addClass('left');
        }
        $(window).resize(function(){
            h2.removeClass('left');
            line.removeClass('line');
            p.removeClass('op');
            p1.removeClass('up2');
            p2.removeClass('right');
            p3.removeClass('right');
            span1.removeClass('right');
            span2.removeClass('left');
            if($(window).width()<1024){
                h2.addClass('op');
                p.addClass('op');
                p2.removeClass('right');
                p3.removeClass('right');
                line.addClass('line');
           }else {
                h2.removeClass('op');
                h2.addClass('left');
                p.removeClass('op');
                p1.addClass('up2');
                p2.addClass('right');
                p3.addClass('right');
                line.addClass('line');
                span1.addClass('right');
                span2.addClass('left');
           } 
        });
       //enquire
        var enInner = $('.enInner');
        var eh2 = enInner.find('h2');
        var form = enInner.find('form');
        var ediv = form.find('div');
        var textarea = form.find('textarea');
        var textLabel = textarea.prev();
        var submit = form.find('fieldset').children('input');
           
        form.find('input').each(function(){
            var thisInput = $(this);
            var thisLabel = thisInput.prev();
            thisInput.on({
            focus:function(){thisLabel.hide();},
            blur:function(){
                if($(this).val() == ''){thisLabel.show();}
            }
            });
        });
        textarea.on({
               focus:function(){textLabel.hide();},
            blur:function(){
                if(textarea.val() == ''){textLabel.show();}
            }
        });
           
        if($(window).width()<1024){
            form.addClass('op');
            ediv.each(function(){
                $(this).addClass('up2');
            });
            submit.addClass('up2');
        }else {
            $(window).scroll(function(){
                if($(this).scrollTop()>=eh2.offset().top-900){
                    eh2.addClass('left');
                    form.addClass('op');
                    ediv.each(function(){
                        $(this).addClass('up2');
                    });
                    submit.addClass('up2');
                }else {
                    eh2.removeClass('left');
                    form.removeClass('op');
                    ediv.each(function(){
                        $(this).removeClass('up2');
                    });
                    submit.removeClass('up2');
                }
            });
        }
        $(window).resize(function(){
            ediv.removeClass('up2');
            submit.removeClass('up2');
            if($(window).width()<1024){
               form.addClass('op');
               ediv.each(function(){
                   $(this).addClass('up2');
               });
               submit.addClass('up2');
           }else {
               $(window).scroll(function(){
                   if($(this).scrollTop()>=eh2.offset().top-900){
                       eh2.addClass('left');
                       form.addClass('op');
                       ediv.each(function(){
                            $(this).addClass('up2');
                        });
                       submit.addClass('up2');
                   }else {
                       eh2.removeClass('left');
                       form.removeClass('op');
                       ediv.each(function(){
                        $(this).removeClass('up2');
                        });
                       submit.removeClass('up2');
                   }
               });
           }
           });
       //store
        var stInner = $('.stInner');
        var spcInner = stInner.find('.pcinner');
        var sh2 = spcInner.find('h2');
        var sdiv = spcInner.children('div');
        var sdiv1 = spcInner.children('div').eq(0);
           
        $(window).scroll(function(){
            if($(window).width()<1024){
                    if($(window).scrollTop()>=sh2.offset().top-500){
                           sh2.addClass('op');
                           sdiv.addClass('move');
                    }else {
                           sh2.removeClass('op');
                           sdiv.removeClass('move');
                    }
            }else {
                    if($(window).scrollTop()>=sdiv1.offset().top-900){
                           sh2.addClass('left');
                           sdiv.addClass('move');
                     }else {
                           sh2.removeClass('left');
                           sdiv.removeClass('move');
                   }
            }
        });
        sdiv.find('a').click(function(v){
               v.preventDefault();
        });
           
        $(window).resize(function(){
            $(window).scroll(function(){
               if($(window).width()<1024){
                   h2.removeClass('left');
                       if($(window).scrollTop()>=sh2.offset().top-500){
                           sh2.addClass('op');
                           sdiv.addClass('move');
                       }else {
                           sh2.removeClass('op');
                           sdiv.removeClass('move');
                       }
               }else {
                   sh2.removeClass('op');
                       if($(window).scrollTop()>=sdiv1.offset().top-900){
                           sh2.addClass('left');
                           sdiv.addClass('move');
                       }else {
                           sh2.removeClass('left');
                           sdiv.removeClass('move');
                       }
               }
           });
        });

   });
    
});