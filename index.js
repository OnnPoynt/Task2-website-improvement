(function($){

    
    $('.carousel').flickity({
        wrapAround: true,
        setGallerySize: false,
        resize: false,
    });
    
    $('.fade_carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        fade: true,
        imagesLoaded: true
    });
    let $carousel = $('.fade_carousel').flickity({
        fade: true,
      });
      

})(jQuery)
