jQuery(function($) {
	
	/* ============================================================ */
    /* Disqus */
    /* ============================================================ */
	
	var disqus_shortname = 'arestheme'; // required: replace example with your forum shortname

	/* * * DON'T EDIT BELOW THIS LINE * * */
	(function() {
	    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	})();
	
	/* ============================================================ */
    /* Timeline Layout */
    /* ============================================================ */
	
	var $timeline_block = $('.bh-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.bh-timeline-img, .bh-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.bh-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.bh-timeline-img, .bh-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
	
	/* ============================================================ */
    /* Fluidbox */
    /* ============================================================ */
	
	$('.post-content img').each(function(){
	    var img = $(this).attr('src');
	    $(this).wrap('<a href="'+img+'" class="fluid-popup"></a>');      
	    $('.fluid-popup').fluidbox();
	});
	
	/* ============================================================ */
    /* Highlight  */
    /* ============================================================ */
	
	$('pre code').each(function(i, block) {
    	hljs.highlightBlock(block);
  	});
  	
  	/* ============================================================ */
    /* Fitvids */
    /* ============================================================ */
	
	$(".post-content").fitVids();
	
	/* ============================================================ */
    /* Masonry Layout */
    /* ============================================================ */
	
	var $container = $('.grid');
    $container.imagesLoaded( function() {
    	$container.masonry({
            itemSelector : '.item'
    	});
    });
    
    /* ============================================================ */
    /* Navigation */
    /* ============================================================ */
	
	$(".button-collapse").sideNav({
		edge: 'right'
	});
	
	/* ============================================================ */
    /* Smoothscroll */
    /* ============================================================ */
	
	smoothScroll.init({
	    easing: 'easeInOutCubic',
	    updateURL: false
	});
});