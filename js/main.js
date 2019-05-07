$(document).ready(function(){


    $('.name_section').click(function(){       
        $(this).closest('.container').find('.section_content').slideToggle(300);
        $(this).closest('.container').find('svg').addClass(".rotate");
        $(this).closest('.container').find('svg').addClass(".un_rotate");
        $(this).closest('.container').find('svg').toggleClass("rotate un_rotate");
    }); 

    
});
