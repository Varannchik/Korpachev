$(document).ready(function(){


    $('.name_section').click(function(){       
        $(this).closest('.container').find('.section_content').slideToggle(300);
        $(this).closest('.container').find('svg').addClass(".rotate");
        $(this).closest('.container').find('svg').addClass(".un_rotate");
        $(this).closest('.container').find('svg').toggleClass("rotate un_rotate");
    }); 

    $('.activity_block').click(function(){       
        $(this).closest('.wrap_activity').find('.content_activity').slideToggle(300);
        $(this).find('.arrow').addClass(".rotate");
        $(this).find('.arrow').addClass(".un_rotate");
        $(this).find('.arrow').toggleClass("rotate un_rotate");
    });


});
