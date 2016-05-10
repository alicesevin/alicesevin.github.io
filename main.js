$(document).ready(function(){
    var previousClassSuffix;
    /*declare pages objects*/
    var accueil = new Page('Accueil', 'accueil', 'Home', true);
    var apropos = new Page('À propos', 'apropos', 'About', true);

    /*show or add pages depending on hash*/
    function checkUrl(){

        var hash = location.hash;
        /*verify if hash is set else define*/
        if(hash == ''){
            hash = 'accueil';
        }else{
            /*delete #/ from hash*/
            hash = hash.substring(2,hash.length);
        }
        /*transform string entry into object*/
        var hashToCheck = eval(hash),
            contentTitle = hashToCheck.pageTitle,
            contentClassSuffix = hashToCheck.pageClassSuffix,
            contentLink = contentClassSuffix.charAt(0).toLowerCase() + contentClassSuffix.slice(1),
            content = contentLink +'.js',
            contentTemplate = $('#content'+contentClassSuffix).html(),
            sectionPreviousSuffix = 'section'+previousClassSuffix,
            sectionActualSuffix = 'section'+contentClassSuffix,
            linkActualSuffix = 'link'+contentClassSuffix,
            linkPreviousSuffix = 'link'+previousClassSuffix;
            /* add js script include page content to head*/
            /*$('head').append('<script id="content'+contentClassSuffix+'" src="'+content+'" type="text/x-custom-template"></script>');*/

        /*update title to actual page name*/
        $('title').html('Alice Sevin |'+ contentTitle);
        /*Add active class to selected nav link*/
        $('.'+linkActualSuffix)
            .addClass('activeLink')
            .attr('disabled','true');

        /*verify if other pages have already been loaded,add elements and classes to the DOM*/
        if(typeof (previousClassSuffix) == 'undefined') {
            $('body').addClass(contentClassSuffix);
            $('section')
                .html(contentTemplate)
                .addClass(sectionActualSuffix);
            $('.'+sectionActualSuffix).fadeIn(500);
        }else{
            $('.'+linkPreviousSuffix)
                .removeClass('activeLink')
                .attr('disabled','false');
            $('body').toggleClass(previousClassSuffix,contentClassSuffix);
            $('.'+sectionPreviousSuffix).fadeOut(400);
            $('section').toggleClass(sectionPreviousSuffix,sectionActualSuffix);
            $('.'+sectionActualSuffix).html(contentTemplate).fadeIn(200);
        }
        /*keep last page loaded in memory, to hide it next call*/
        previousClassSuffix = hashToCheck.pageClassSuffix;
    }

    /*get hash and check it*/
    $(window).on('hashchange',function(){
        checkUrl();
    });
    $('section').css('display','none');
    checkUrl();
});
