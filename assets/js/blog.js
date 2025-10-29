$(document).ready(function() {
    // Initialize AOS animation
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true
    });
    
    // Equal height for blog cards
    function equalizeCardHeights() {
        $('.blog-page').css('height', 'auto');
        
        if ($(window).width() > 767) {
            let maxHeight = 0;
            $('.blog-page').each(function() {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $('.blog-page').css('height', maxHeight);
        }
    }
    
    $(window).on('load resize', function() {
        equalizeCardHeights();
    });
    
    // Filter handling for blog categories if needed
    $('.blog-filter-btn').on('click', function() {
        let category = $(this).data('filter');
        
        $('.blog-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if (category === 'all') {
            $('.blog-page').parent().show();
        } else {
            $('.blog-page').parent().hide();
            $(`.blog-page[data-category="${category}"]`).parent().show();
        }
        
        equalizeCardHeights();
    });
});