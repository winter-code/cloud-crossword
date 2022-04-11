function splitScroll(){
    const controller = new ScrollMagic.Controller();


    new ScrollMagic.Scene({
        duration: '200%', 
        triggerElement:'.right',
        triggerHook: 0
    })

    .setPin('.left')

    .addIndicators({
        colorTrigger:'#fff',
        colorStart:'#fff',
        colorEnd :'#fff',
    })
    .addTo(controller);

}

splitScroll();