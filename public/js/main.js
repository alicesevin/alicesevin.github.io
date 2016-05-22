$(document).ready(function(){
    /*______________________________SECTIONS VIEWS & URL CHECKING______________________________*/
    var previousPageClass = '',
        open = false,
        pages = [
            {
                pageTitle: 'Accueil',
                pageHash: 'accueil',
                pageClassSuffix: 'Home',
                pageFooter: true
            },
            {
                pageTitle: 'À propos',
                pageHash: 'apropos',
                pageClassSuffix: 'About',
                pageFooter: true
            },
            {
                pageTitle: 'Projets',
                pageHash: 'projets',
                pageClassSuffix: 'Projects',
                pageFooter: true
            },
            {
                pageTitle: 'Contact',
                pageHash: 'contact',
                pageClassSuffix: 'Contact',
                pageFooter: false
            },
            {
                pageTitle: '404',
                pageHash: '404',
                pageClassSuffix: 'Error',
                pageFooter: false
            }
        ];
    var viewCreate = function (actualPageTitle,actualPageClass,nextHash,previousPageClass){
        /*Classes Suffixes*/
        var linkActualSuffix = 'link'+actualPageClass,
            linkPreviousSuffix = 'link'+previousPageClass,
            contentLink = actualPageClass.charAt(0).toLowerCase() + actualPageClass.slice(1),
            content = 'sections/'+contentLink +'.html';
            open = false;
        if($( window ).width()<=768 || $( window ).height()<=650){
            if($('.responsive_nav').hasClass('active')) {
                $('.responsive_nav>span').addClass('icon-menu1').removeClass('icon-cancel');
                $('.responsive_nav').removeClass('active');
                if($( window ).width()<=480){
                    $('header>div').css('margin-top', '-500px');
                }else{
                    $('header>div').animate({ marginTop :'-500px'},500);
                }
            }
        }else{
            $('header').animate({top:'-100px'},400);
        }
        $('#next').fadeOut(400);
        $('#sectionAdd').fadeOut(400,function() {
            if(previousPageClass != ''){
                $('body').removeClass(previousPageClass).addClass(actualPageClass);
            }else{
                $('body').addClass(actualPageClass);
            }
            $('title').html('Alice Sevin | '+ actualPageTitle);
            $('.'+linkActualSuffix)
                .addClass('activeLink')
                .attr('disabled','true');
            $('.' + linkPreviousSuffix)
                .removeClass('activeLink')
                .attr('disabled', 'false');
            if($( window ).width()>480) {
                $('header').animate({top: 0}, 400);
            }else{
                $('header').css('top',0);
            }
            if (nextHash != '') {
                $('#next')
                    .fadeIn(1000)
                    .attr('href', '#/' + nextHash);
            }else{
                $('#next').attr('href', '#accueil');
            }
            $('.' + actualPageClass).find('#sectionAdd').load(content).delay(200).fadeIn(400);
        });
    };
    /*verify if hash is set else define it*/
    var checkUrl = function(){
        var nextHash  = '',
            actualPageClass,
            actualPageTitle,
            hash = (location.hash).substring(2,(location.hash).length),
            /*verify index of hash in pages*/
            verif = pages.map(function(d) { return d['pageHash']; }).indexOf(hash);

        /*attribute default value in case hash is not in pages*/
        if(verif == -1){
            if(hash == ''){
                hash = 'accueil';
            }else{
                hash = '404';
            }
            verif = pages.map(function(d) { return d['pageHash']; }).indexOf(hash);
        }
        actualPageClass = pages[verif].pageClassSuffix;
        actualPageTitle = pages[verif].pageTitle;
        /*keep next page nav to use next arrow*/
        if(pages[verif].pageFooter) {
            nextHash = pages[verif + 1].pageHash;
        }

        /*show/hide pages depending on hash*/
        viewCreate(actualPageTitle,actualPageClass,nextHash,previousPageClass);

        /*keep last page loaded in memory, to hide it next call*/
        previousPageClass = actualPageClass;
    };

    var start = function() {
        /*display nav links*/
        $.each(pages, function (index, value) {
            if (value.pageTitle != '404') {
                var link_item = $('<a class="link' + value.pageClassSuffix + '">' + value.pageTitle + '</a>').attr('href', '#/' + value.pageHash);
                var list_item = $('<li></li>').append(link_item);
                $('#menu').append(list_item);
            }
        });
            checkUrl();
    };

    $(window).on('hashchange',function(){
        checkUrl();
    });
    start();
    /*________________________RESPONSIVE__________________________*/
    /*Menu*/
    $('.responsive_nav').click(function(){
        var top = '50px';
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $('.responsive_nav>span').addClass('icon-cancel').removeClass('icon-menu1');
        }else{
            $(this).removeClass('active');
            top = '-500px';
            $('.responsive_nav>span').addClass('icon-menu1').removeClass('icon-cancel');
        }
        $('header>div').animate({marginTop:top},500);
    });
    /*Resize*/
    $(window).resize(function() {
        var pos;
        if($( window ).width()<=768 || $( window ).height()<=650){
            var top = '50px';
            if(!$('.responsive_nav').hasClass('active'))
                top = '-500px';
            $('header>div').css('margin-top', top);
            pos = $('.contactActive').css('top');
            $('.contactBackgroundActive')
                .css('top',pos)
                .css('left',0);
            if($('body').hasClass('About')){
                $('.title').css('margin-top','0');
            }
        }else{
            $('header>div').css('margin-top',0);
            pos = $('.contactActive').css('left');
            $('.contactBackgroundActive')
                .css('left',pos)
                .css('top',0);
            if($('body').hasClass('About')) {
                var div_show = '';
                var top_title = '162px';
                for (var i = 0; i < $('.about_section').length; i++) {
                    var li = $('.about_section')[i];
                    if ($(li).attr('style') == 'display: block;') {
                        div_show = $(li).attr('id');
                    }
                }
                if( div_show != '') {
                    if (div_show == 'about_competence') {
                        if ($(window).width() <= 768 || $(window).height() <= 650) {
                            top_title = '188px';
                        } else {
                            top_title = '538px';
                        }
                    } else if (div_show == 'about_professionnel') {
                        top_title = '5px';
                    }
                    $('.About').find('.title').css('margin-top', top_title);
                }
            }
        }
    });
    /*______________________________SECTIONS INTERACTIONS______________________________*/
    /*______ABOUT_BUTTONS______*/
    $(document).on('click','#btn_formation_open,#btn_professionnel_open,#btn_competence_open',function(){
        if(!open) {
            open = true;
            var top_title = '162px';
            var subtitle_about= $(this).text();
            var div_show = $(this).attr('class');
            $('.about_menu').fadeOut(500, function () {
                $('.subtitle_about').text(subtitle_about);
                $('#'+div_show).fadeIn(500);
                if(div_show == 'about_competence') {
                    if($( window ).width()<=768 || $( window ).height()<=650){
                        top_title = '188px';
                    }else {
                        top_title = '538px';
                    }
                }else if(div_show == 'about_professionnel'){
                    top_title = '5px';
                }
                $('.About').find('.title').css('margin-top', top_title);
            });
        }
    });
    $(document).on('click','.about_close',function(){
        if(open){
            open = false;
            $(this).parent('div').fadeOut(500,function(){
                $('.subtitle_about').text('Mon Parcours');
                $('.about_menu').fadeIn(500);
                $('.About').find('.title').css('margin-top','80px');
                $('.about_section_active').removeClass('about_section_active');
            });
        }
    });
    /*_______CONTACT_TABS______*/
    $(document).on('click','.contactLink>a',function(){
        if(!$(this).parent('li').hasClass('contactActive')) {
            var pos;
            $('.contactLink').removeClass('contactActive');
            $(this).parent('li').addClass('contactActive');
            if($( window ).width()<=768 || $( window ).height()<=650) {
                pos = $(this).parent('li').css('top');
                $('.contactBackgroundActive').css('top',pos)
            }else{
                pos = $(this).parent('li').css('left');
                $('.contactBackgroundActive').css('left',pos);
            }
        }
    });
    /*_____PROJECTS_CARDS_______*/
    $(document).on('click','.card',function(){
        if(!$(this).hasClass('activeCard')) {
            $('.activeCard').removeClass('activeCard');
            $(this).addClass('activeCard');
        }
    });
});
