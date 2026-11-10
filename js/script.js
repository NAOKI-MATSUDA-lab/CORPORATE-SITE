/*================
ハンバーガーメニュー
================*/
$('.hamburger').on('click',function(){
    $(this).toggleClass('active');
    $('.sp-menu').toggleClass('open');
})

$('.sp-menu a').on('click',function(){
    $('.hamburger').removeClass('active');
    $('.sp-menu').removeClass('open');
})

/*===============
FVアニメーション
===============*/
$(window).on('load',()=>{
    const firstPhrase=$('.first-phrase');

    const secondLeadWords=$('.second-phrase .lead-words');
    const secondKeywords=$('.second-phrase .keywords');

    const thirdLeadWords=$('.third-phrase .lead-words');
    const thirdKeywords=$('.third-phrase .keywords');

    const fourthLeadWords=$('.fourth-phrase .lead-words');
    const fourthKeywords=$('.fourth-phrase .keywords');

    const fifthPhrase=$('.fifth-phrase');

    const contactBtn=$('.contact-btn');

    setTimeout(()=>{
        firstPhrase.addClass('is-visible');
    },400);

    setTimeout(()=>{
        secondLeadWords.addClass('is-visible');
    },700);

    setTimeout(()=>{
        secondKeywords.addClass('is-visible');
    },1000);

    setTimeout(()=>{
        thirdLeadWords.addClass('is-visible');
    },1700);

    setTimeout(()=>{
        thirdKeywords.addClass('is-visible');
    },2000);

    setTimeout(()=>{
        fourthLeadWords.addClass('is-visible');
    },2700);

    setTimeout(()=>{
        fourthKeywords.addClass('is-visible');
    },3000);

    setTimeout(()=>{
        fifthPhrase.addClass('is-visible');
    },3700);

    setTimeout(()=>{
        contactBtn.addClass('is-visible');
    },4000);

    setTimeout(()=>{
        contactBtn.addClass('shine');

        setTimeout(()=>{
            contactBtn.removeClass('shine')
        },500);
    },4400);
})

/*=================
私たちについて
=================*/
const fadeItems=$('.fade-item');

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            $(entry.target).addClass('is-visible');
            observer.unobserve(entry.target);
        }
    })
},{
    threshold:0.3
})

fadeItems.each((index,fadeItem)=>{
    observer.observe(fadeItem);
})

/*==============
トップボタンの出現方法
==============*/
function btnupdown(){
    const scroll=$(window).scrollTop();
    const windowH=$(window).height();
    const footerPos=$('footer').offset().top;
    if(scroll>=500){
            $('.pagetop').removeClass('downmove');
            $('.pagetop').addClass('upmove');
            if(scroll+windowH>=footerPos){
                const btnPos=scroll+windowH-footerPos+50;
                $('.pagetop').css('bottom',btnPos);
            }else{
                $('.pagetop').css('bottom','50px');
            }
    }else{
        if($('.pagetop').hasClass('upmove')){
            $('.pagetop').removeClass('upmove');
            $('.pagetop').addClass('downmove');
        }
    }
}

$(window).on('load',function(){
    btnupdown();
})

$(window).on('scroll',function(){
    btnupdown();
})

/*================
splide初期化
================*/
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        type:'fade',
        perPage:1,
        autoplay:true,
        rewind:true,
        speed:1000,
        pagination:true
    } ).mount();
} );

/*===============
制作の流れ
===============*/
const flowItems=$('.flow-item');

const flowObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            $(entry.target).addClass('is-visible');
            flowObserver.unobserve(entry.target);
        }
    })
},{
    threshold:0.3
})

flowItems.each((index,flowItem)=>{
    flowObserver.observe(flowItem);
})