// window.addEventListener('DOMContentLoaded',function(){
// gsap.to('',{})
// gsap.fromTo('',{})
// gsap.set('',{})
// const tl = gsap.timeline();
// tl
// .to({})
// .to({})
// .to({})
// .to({})
// })

// < 直前のアニメーションと同時に発動
// -＝ 
// +=

document.addEventListener('DOMContentLoaded',function(){
    gsap.fromTo(".js-fade_in",{
        y: 50,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: ".js-fade_in",
          start: "top center",
        //   markers: true
        },
        y: 0,
        opacity: 1,
        duration: 1
      });


      gsap.utils.toArray(".js-fade_in02").forEach(target => {
        // ここで共通のアニメーションを設定する
        gsap.fromTo(target,{
            y: 50,
            opacity: 0,
            
          }, {
            scrollTrigger: {
              trigger: target,
              start: "top center",
            //   markers: true
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 1.5
          });
      });

      gsap.fromTo(".js-fade_in03",{
        y: 50,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: ".js-fade_in03",
          start: "top center",
        //   markers: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger:0.5
      });


})