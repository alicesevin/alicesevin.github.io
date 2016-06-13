$(document).ready(function(){
    $('.close_modal').click(function(){
        $(this).closest('.modal_window').fadeOut();
    });
    $('.open_modal').click(function(){
        event.preventDefault();
         $(this).closest('div').next('.modal_window').fadeIn();
    });
    /*PLANNING NAV*/
    $(document).on('click','.arrow_planning',function(){
        var size = ($('.compte_result_planning_table').width()+20)-$('.compte_result_planning').width()
        var marge = size/3;
        var px = parseInt($('.compte_result_planning_table').css('margin-left'));
        var max = -Math.abs((marge*3));
        console.log(max);
        if(px == max && $('.arrow_planning a').hasClass('arrow_right')){
            $('.compte_result_planning_table').animate({
                marginLeft: "+="+marge+"px"
            }, 300);
            $('.arrow_planning a')
                .removeClass('arrow_right')
                .addClass('arrow_left');
        }else if(px == 0 && $('.arrow_planning a').hasClass('arrow_left')){
            $('.compte_result_planning_table').animate({
                marginLeft: "-="+marge+"px"
            }, 300);
            $('.arrow_planning a')
                .removeClass('arrow_left')
                .addClass('arrow_right');
        } else if(px < 0 && $('.arrow_planning a').hasClass('arrow_left')){
            $('.compte_result_planning_table').animate({
                marginLeft: "+="+marge+"px"
            }, 300);
        }else{
            $('.compte_result_planning_table').animate({
                marginLeft: "-="+marge+"px"
            }, 300);
        }
    });
    var check_url = function() {
        var hash = (location.hash).substring(1,(location.hash).length);
        if(hash == '') {
            hash = 'accueil';
        }
        var hashes = hash.split('_'),
            content = 'pages/'+hashes[0]+'.html';
        if (hashes.length <= 1) {
            $('.content').fadeOut(function () {
                $('.content').load(content).delay(200).fadeIn(400, function () {
                });
            });
        }else{
            if($('footer').length <1){
                $('.content').fadeOut(function () {
                    $('.content').load(content).delay(200).fadeIn(400, function () {
                        $('.principal_content_compte').fadeOut(function(){
                            var content_intern = 'pages/' + hashes[1] + '.html';
                            $('.principal_content_compte').load(content_intern).fadeIn(400);
                            $('.principal_content_compte')
                                .removeAttr('class')
                                .addClass('principal_content_'+hashes[0]+' principal_content_' + hashes[1]);
                            $('.'+hash).addClass('active');
                        });
                    });
                });
            }else {
                $('.nav_compte li').removeClass('active');
                $('.principal_content_compte').fadeOut(function () {
                    var content_intern = 'pages/' + hashes[1] + '.html';
                    $('.principal_content_compte').load(content_intern).fadeIn(400);
                    $('.principal_content_compte')
                        .removeAttr('class')
                        .addClass('principal_content_'+hashes[0]+' principal_content_' + hashes[1]);
                    $('.'+hash).addClass('active');
                });
            }
        }
    };
    $(window).on('hashchange',function(){
        check_url();
    });
    check_url();
    $(document).on('click','.arrow_hebergement',function(){
        var size = ($('.labels_approuves_results_ul').height()+1)-$('.labels_approuves_results_scroll').height();
        var marge = size/3;
        var px = parseInt($('.labels_approuves_results_ul').css('margin-top'));
        var max = -Math.abs((marge*3));
        if(px == max && $('.arrow_hebergement a').hasClass('arrow_bottom')){
            $('.labels_approuves_results_ul').animate({
                marginTop: "+="+marge+"px"
            }, 300);
            $('.arrow_hebergement a')
                .removeClass('arrow_bottom')
                .addClass('arrow_top');
        }else if(px == 0 && $('.arrow_hebergement a').hasClass('arrow_top')){
            $('.labels_approuves_results_ul').animate({
                marginTop: "-="+marge+"px"
            }, 300);
            $('.arrow_hebergement a')
                .removeClass('arrow_top')
                .addClass('arrow_bottom');
        } else if((px < 0 &&  px > max) && $('.arrow_hebergement a').hasClass('arrow_top')){
            $('.labels_approuves_results_ul').animate({
                marginTop: "+="+marge+"px"
            }, 300);
        }else{
            $('.labels_approuves_results_ul').animate({
                marginTop: "-="+marge+"px"
            }, 300);
        }
    });
    $(document).on('click','#labels_hebergement,#labels_approuves,#labels_ecos',function(){
        var left;
        var container = $(this).attr('id');
        switch(container){
            case 'labels_ecos':
                left = '100%';
                break;
            case 'labels_hebergement':
                left = '-15%';
                break;
            case 'labels_approuves':
                left = '42%';
                break;
            default:
                left = -'15%';
                break;
        }
        $('.principal_content_hebergement .arrow_up').css('left',left);

        $('.hebergement_labels_active').fadeOut(function(){
            $(this).switchClass('hebergement_labels_active','hebergement_labels');
            $('.'+container).fadeIn(function(){
                $(this).switchClass('hebergement_labels','hebergement_labels_active');
            });
        });
        $('.labels_approuves_results_ul').css('margin-top','0');
        $('.arrow_hebergement a')
            .removeClass('arrow_top')
            .addClass('arrow_bottom');
    });
    $(document).on('click','#into_paris,#to_paris',function(){
        var left;
        var container = $(this).attr('id');
        console.log(container);
        switch(container){
            case 'into_paris':
                left = '100%';
                break;
            case 'to_paris':
                left = '-35%';
                break;
            default:
                left = -'35%';
                break;
        }
        $('.arrows .arrow_up').css('left',left);
        $('.transports_active').fadeOut(function(){
            $(this).switchClass('transports_active','transports_unactive');
            $('.'+container).fadeIn(function(){
                $(this).switchClass('transports_unactive','transports_active');
            });
        });
    });
    $(document).on('click','.labels_approuves_research',function(){
            $('.labels_approuves').fadeOut(function(){
                $(this).switchClass('hebergement_labels_active','hebergement_labels');
                $('.labels_approuves_results').fadeIn(function(){
                    $(this).switchClass('hebergement_labels','hebergement_labels_active');
                });
            });
    });
   $(document).on('mouseover',"#datepicker",function(){
       $( "#datepicker" ).datepicker();
   });
    $(document).on('click','.select_labels_icones li',function(){
        $(this).toggleClass('active_labels_icone');
    });
    $(document).on('click','.show_text',function(){
        $('.edit').removeClass('edit');
        $(this).closest('td').addClass('edit');
        $(this).next('.edit_text').find('textarea').val($(this).closest('.show_text').find('p').html()).focus();
    });
    $(document).on('click','.edit_text>button',function(){
        $(this).closest('td').removeClass('edit');
        $(this).closest('div').next('.show_text').find('p').html($(this).closest('.edit_text').find('textarea').val());
    })
});