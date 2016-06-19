$(document).ready(function(){
    if($(window).width()>=768) {
        $(window).resize(function(){
            if($(window).width()<767){
                $('body,html,.content').css('height','100%');
                $('.content')
                    .html('<p class="error">Votre écran est trop petit,<br>agrandissez et rechargez la page<br>ou changez de support !</p>')
                    .css('position','relative');
            }
        });
        var depart = false;
        var previous_random;
        var randomMessage = function () {
            var messages = [
                {
                    name: 'Jason',
                    content: 'I know one very good the Petit bistrot, rue des rosiers, delicious !'
                },
                {
                    name: 'The Traveler',
                    content: 'I love this site, community is so helpful <img class="instantane_coeur" src="./public/images/instantane_coeur.jpg">!'
                },
                {
                    name: 'Annie 18',
                    content: 'I don\'t speak english can you translate in French please ? <img class="instantane_coeur" src="./public/images/instantane_rire.jpg">'
                },
                {
                    name: 'Jeanne du 39',
                    content: 'Sorry, I don\'t eat seafood. I hope you\'ll find one soon!'
                },
                {
                    name: 'French Lover',
                    content: 'I love you all, so happy to be in Paris! <img class="instantane_coeur" src="./public/images/instantane_coeur.jpg">'
                },
                {
                    name: 'I love Paris',
                    content: 'So much good restaurant in Le Marais, you should try !'
                }
            ], randomUser = Math.floor(Math.random() * 6);
            do {
                randomUser = Math.floor(Math.random() * 6)
            } while (randomUser == previous_random);

            var message = messages[randomUser];
            previous_random = randomUser;
            return '<li><small class="name_discuss">' + message.name + '</small><p>' + message.content + '</p></li>';
        };
        $(document).on('mouseover', '.convers', function () {
            var hash = (location.hash).substring(1, (location.hash).length);
            var hashes = hash.split('_');
            if (depart != true) {
                depart = true;
                $('.instantanee ul').append($(randomMessage()).delay(400).fadeIn(0)).delay(900).append($(randomMessage()).delay(1500).fadeIn(0));
            }
        });
        $(document).on('keyup', '.edit_discuss_textarea', function (e) {
            if (e.which == 13) {
                var random = Math.floor(Math.random() * 1600);
                var hash = (location.hash).substring(1, (location.hash).length);
                var hashes = hash.split('_');
                var name = 'user n°12390';
                if (hashes[0] == 'compte') {
                    name = JSON.parse(sessionStorage.getItem('user_active')).username;
                }
                var li = '<li><small class="name_discuss">' + name + '</small><p>' + $('.edit_discuss_textarea').val() + '</p></li>'
                $('.instantanee ul').append($(li).fadeIn(0)).animate({"scrollTop": $('.instantanee ul').scrollTop() + 500}).append($(randomMessage()).delay(random).fadeIn(0)).delay(random).animate({"scrollTop": $('.instantanee ul').scrollTop() + 500});
                $('.edit_discuss_textarea').val('');
            }
        });
        var users = {
            'anne': {
                username: 'Anne',
                password: 'toto',
                ville: 'Londres, Angleterre',
                visites: ['Londres', 'Madrid', 'Portugal']
            },
            'jeanne': {
                username: 'Jeanne',
                password: 'root',
                ville: 'Londres, Angleterre',
                visites: ['Londres', 'Madrid', 'Portugal']
            }
        };
        var add_storage = function (users) {
            users = JSON.stringify(users);
            sessionStorage.setItem("users", users);
        };
        var verify_password = function () {
            var users_storage = sessionStorage.getItem('users'),
                users_get_storage = JSON.parse(users_storage);
            $.each(users_get_storage, function (key, value) {
                if (($('input[name="name_connexion"]').val() == value.username) && ($('input[name="password_connexion"]').val() == value.password)) {
                    var user = JSON.stringify(users_get_storage[key]);
                    sessionStorage.setItem("user_active", user);
                    window.location.href = '#compte';
                }
            });
        };
        var randomcity = function () {
            var cities = ['Paris, France', 'Berlin, Allemagne', 'Londres, Angleterre', 'Londres, Angleterre'],
                randomVille = Math.floor(Math.random() * 3);
            return cities[randomVille];
        };
        add_storage(users);
        $(document).on('click', '.go-compte', function () {
            verify_password();
        });
        $(document).on('click', '.close_modal', function () {
            if ($(this).hasClass('close_inscription')) {
                $('.modal_window').fadeOut();
            } else {
                $('.modal_connexion').fadeOut();
            }
        });
        $(document).on('click', '.open_modal', function () {
            event.preventDefault();
            var user_active = JSON.parse(sessionStorage.getItem('user_active'));
            if ($(this).hasClass('open_inscription')) {
                if (!($("input[name='password']").val() == '' ) && !($("input[name='name']").val() == '' ) && !($("input[name='email']").val() == '' )) {
                    $('.modal_window').fadeIn();
                }
            } else {
                if (user_active != null) {
                    window.location.href = '#compte';
                } else {
                    $('.modal_connexion').fadeIn();
                }
            }
        });
        $(document).on('click', '.sign-up', function () {
            event.preventDefault();
            if (!($("input[name='pseudo']").val() == '' )) {
                var name = $("input[name='name']").val(),
                    password = $("input[name='password']").val(),
                    city = randomcity();
                var new_user = {
                    username: name,
                    password: password,
                    ville: city,
                    visites: []
                };
                var users_storage = sessionStorage.getItem('users'),
                    users_get_storage = JSON.parse(users_storage);
                users_get_storage[name.toLowerCase()] = new_user;
                add_storage(users_get_storage);
                $('.modal_window').fadeOut(function () {
                    $('.modal_connexion').fadeIn();
                });
            }
        });
        /*PLANNING NAV*/
        $(document).on('click', '.arrow_planning', function () {
            var size = ($('.compte_result_planning_table').width() + 20) - $('.compte_result_planning').width()
            var marge = size / 3;
            var px = parseInt($('.compte_result_planning_table').css('margin-left'));
            var max = -Math.abs((marge * 3));
            if (px == max && $('.arrow_planning a').hasClass('arrow_right')) {
                $('.compte_result_planning_table').animate({
                    marginLeft: "+=" + marge + "px"
                }, 300);
                $('.arrow_planning a')
                    .removeClass('arrow_right')
                    .addClass('arrow_left');
            } else if (px == 0 && $('.arrow_planning a').hasClass('arrow_left')) {
                $('.compte_result_planning_table').animate({
                    marginLeft: "-=" + marge + "px"
                }, 300);
                $('.arrow_planning a')
                    .removeClass('arrow_left')
                    .addClass('arrow_right');
            } else if (px < 0 && $('.arrow_planning a').hasClass('arrow_left')) {
                $('.compte_result_planning_table').animate({
                    marginLeft: "+=" + marge + "px"
                }, 300);
            } else {
                $('.compte_result_planning_table').animate({
                    marginLeft: "-=" + marge + "px"
                }, 300);
            }
        });
        var check_url = function () {
            var hash = (location.hash).substring(1, (location.hash).length);
            if (hash == '') {
                hash = 'accueil';
            }
            var hashes = hash.split('_'),
                content = 'pages/' + hashes[0] + '.html',
                user_active = JSON.parse(sessionStorage.getItem('user_active'));
            depart = false;
            if (hashes.length <= 1) {
                $('.content').fadeOut(function () {
                    $('.content').load(content).delay(200).fadeIn(400, function () {
                        if (hashes[0] == 'compte' && user_active != null) {
                            var lis = '';
                            $('.infos_profil p').html(user_active.username);
                            $('.infos_profil small').html(user_active.ville);
                            if ($('.visited').length < 1) {
                                for (var i in user_active.visites) {
                                    lis = '<li class="visited">' + user_active.visites[i] + '</li>';
                                    $('.ville_profil').append(lis);
                                }
                            }
                        }
                    });
                });
            } else {
                if ($('footer').length < 1) {
                    $('.content').fadeOut(function () {
                        $('.content').load(content).delay(200).fadeIn(400, function () {
                            $('.principal_content_compte').fadeOut(function () {
                                var content_intern = 'pages/' + hashes[1] + '.html';
                                $('.principal_content_compte').load(content_intern).fadeIn(400);
                                $('.principal_content_compte')
                                    .removeAttr('class')
                                    .addClass('principal_content_' + hashes[0] + ' principal_content_' + hashes[1]);
                                $('.' + hash).addClass('active');
                                if (hashes[0] == 'compte' && user_active != null) {
                                    var lis = '';
                                    $('.infos_profil p').html(user_active.username);
                                    $('.infos_profil small').html(user_active.ville);
                                    if ($('.visited').length < 1) {
                                        for (var i in user_active.visites) {
                                            lis = '<li class="visited">' + user_active.visites[i] + '</li>';
                                            $('.ville_profil').append(lis);
                                        }
                                    }
                                }
                            });
                        });
                    });
                } else {
                    $('.nav_compte li').removeClass('active');
                    $('.principal_content_compte').fadeOut(function () {
                        var content_intern = 'pages/' + hashes[1] + '.html';
                        $('.principal_content_compte').load(content_intern).fadeIn(400);
                        $('.principal_content_compte')
                            .removeAttr('class')
                            .addClass('principal_content_' + hashes[0] + ' principal_content_' + hashes[1]);
                        $('.' + hash).addClass('active');
                        if (hashes[0] == 'compte' && user_active != null) {
                            var lis = '';
                            $('.infos_profil p').html(user_active.username);
                            $('.infos_profil small').html(user_active.ville);
                            if ($('.visited').length < 1) {
                                for (var i in user_active.visites) {
                                    lis = '<li class="visited">' + user_active.visites[i] + '</li>';
                                    $('.ville_profil').append(lis);
                                }
                            }
                        }
                    });
                }
            }
        };
        $(window).on('hashchange', function () {
            check_url();
        });
        check_url();
        $(document).on('click', '.arrow_hebergement', function () {
            var size = ($('.labels_approuves_results_ul').height() + 1) - $('.labels_approuves_results_scroll').height();
            var marge = size / 3;
            var px = parseInt($('.labels_approuves_results_ul').css('margin-top'));
            var max = -Math.abs((marge * 3));
            if (px == max && $('.arrow_hebergement a').hasClass('arrow_bottom')) {
                $('.labels_approuves_results_ul').animate({
                    marginTop: "+=" + marge + "px"
                }, 300);
                $('.arrow_hebergement a')
                    .removeClass('arrow_bottom')
                    .addClass('arrow_top');
            } else if (px == 0 && $('.arrow_hebergement a').hasClass('arrow_top')) {
                $('.labels_approuves_results_ul').animate({
                    marginTop: "-=" + marge + "px"
                }, 300);
                $('.arrow_hebergement a')
                    .removeClass('arrow_top')
                    .addClass('arrow_bottom');
            } else if ((px < 0 && px > max) && $('.arrow_hebergement a').hasClass('arrow_top')) {
                $('.labels_approuves_results_ul').animate({
                    marginTop: "+=" + marge + "px"
                }, 300);
            } else {
                $('.labels_approuves_results_ul').animate({
                    marginTop: "-=" + marge + "px"
                }, 300);
            }
        });
        $(document).on('click','.nav_agenda li',function(){
            var classes_button = $(this).attr('class');
            classes_button = classes_button.split(' ');
            var type = classes_button[0].split('_');
            type = type[1];
            $(this).toggleClass('active_agenda');
            if($('.active_agenda').length>0) {
                if ($(this).hasClass('active_agenda')) {
                    $('.agenda_result_ul li').addClass('filter_unactive');
                    var filters = $('.filter_' + type);
                    for (var i = 0; i < filters.length; i++) {
                        if ($(filters[i]).hasClass('filter_unactive')) {
                            $(filters[i]).fadeIn();
                        }
                    }
                } else {
                    $('.filter_' + type).fadeOut().addClass('filter_unactive');
                }
            }else{
                $('.filter_' + type).removeClass('filter_unactive');
            }
        });
        $(document).on('click', '.arrow_hebergement', function () {
            var size = ($('.agenda_result_ul').height() + 100) - $('.agenda_result_scroll').height();
            var marge = size / 3;
            var px = parseInt($('.agenda_result_ul').css('margin-top'));
            var max = -Math.abs((marge * 3));
            if (px == max && $('.arrow_hebergement a').hasClass('arrow_bottom')) {
                $('.agenda_result_ul').animate({
                    marginTop: "+=" + marge + "px"
                }, 300);
                $('.arrow_hebergement a')
                    .removeClass('arrow_bottom')
                    .addClass('arrow_top');
            } else if (px == 0 && $('.arrow_hebergement a').hasClass('arrow_top')) {
                $('.agenda_result_ul').animate({
                    marginTop: "-=" + marge + "px"
                }, 300);
                $('.arrow_hebergement a')
                    .removeClass('arrow_top')
                    .addClass('arrow_bottom');
            } else if ((px < 0 && px > max) && $('.arrow_hebergement a').hasClass('arrow_top')) {
                $('.agenda_result_ul').animate({
                    marginTop: "+=" + marge + "px"
                }, 300);
            } else {
                $('.agenda_result_ul').animate({
                    marginTop: "-=" + marge + "px"
                }, 300);
            }
        });
        $(document).on('click', '#labels_hebergement,#labels_approuves,#labels_ecos', function () {
            var left;
            var container = $(this).attr('id');
            switch (container) {
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
            $('.principal_content_hebergement .arrow_up').css('left', left);

            $('.hebergement_labels_active').fadeOut(function () {
                $(this).switchClass('hebergement_labels_active', 'hebergement_labels');
                $('.' + container).fadeIn(function () {
                    $(this).switchClass('hebergement_labels', 'hebergement_labels_active');
                });
            });
            $('.labels_approuves_results_ul').css('margin-top', '0');
            $('.arrow_hebergement a')
                .removeClass('arrow_top')
                .addClass('arrow_bottom');
        });
        $(document).on('click', '#into_paris,#to_paris', function () {
            var left;
            var container = $(this).attr('id');
            switch (container) {
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
            $('.arrows .arrow_up').css('left', left);
            $('.transports_active').fadeOut(function () {
                $('.li_results_transports').remove();
                $(this).switchClass('transports_active', 'transports_unactive');
                $('.' + container).fadeIn(function () {
                    $(this).switchClass('transports_unactive', 'transports_active');
                });
            });
        });
        $(document).on('click', '.labels_approuves_research', function () {
            $('.labels_approuves').fadeOut(function () {
                $(this).switchClass('hebergement_labels_active', 'hebergement_labels');
                $('.labels_approuves_results').fadeIn(function () {
                    $(this).switchClass('hebergement_labels', 'hebergement_labels_active');
                });
            });
        });
        $(document).on('mouseover', "#datepicker", function () {
            $("#datepicker").datepicker();
        });
        $(document).on('click', '.select_labels_icones li', function () {
            $(this).toggleClass('active_labels_icone');
        });
        $(document).on('click', '.compte_select_icones_transports li', function () {
            var classes_button = $(this).attr('class');
            classes_button = classes_button.split(' ');
            var type = classes_button[0].split('_');
            type = type[0];
            var li =
                '<li class="li_results_transports compte_transports_'+type+' col-lg-6 col-md-6 col-sm-6">'
                +'<ul>'
                +'<li class="li_transports_heures"><strong>0</strong>heures</li>'
                +'<li class="li_transports_co2"><strong>0</strong>co2</li>'
                +'</ul>'
                +'</li>';

            if(!($(this).hasClass('active_transport'))) {
                $('.compte_result_transports>ul').append($(li));
            }else{
                $('.compte_transports_' + type).remove();
            }
            if($('.li_results_transports').length < 3) {
                $('.li_results_transports')
                    .addClass('col-lg-12 col-md-12 col-sm-12')
                    .removeClass('col-lg-6 col-md-6 col-sm-6');
            }else{
                $('.li_results_transports')
                    .removeClass('col-lg-12 col-md-12 col-sm-12')
                    .addClass('col-lg-6 col-md-6 col-sm-6');
            }
            if(!($(this).hasClass('active_transport'))) {
                $('.compte_transports_' + type).fadeIn();
            }
            $(this).toggleClass('active_transport');
            var compteur1 = 0;
            var tempsdecompte1 = 100;
            var maxdecompte1 = Math.floor(Math.random() * 90);
            var compteur2 = 0;
            var tempsdecompte2 = 30;
            var maxdecompte2 = Math.floor(Math.random() * 900);

            if(maxdecompte1 > 70){
                tempsdecompte1 = 50
            } else if(maxdecompte1 > 50 && maxdecompte1 < 70){
                tempsdecompte1 = 70
            }else if(maxdecompte1 < 50 && maxdecompte1 > 25){
                tempsdecompte1 = 100
            }else if(maxdecompte1 < 25){
                tempsdecompte1 = 150
            }

            if(maxdecompte2 > 700){
                tempsdecompte2 = 2
            } else if(maxdecompte2 > 400 && maxdecompte2 < 700){
                tempsdecompte2 = 10
            }else if(maxdecompte2 < 400 && maxdecompte2 > 150){
                tempsdecompte2 = 20
            }else if(maxdecompte2 < 150){
                tempsdecompte2 = 35
            }
            var decompte1 = setInterval(
                function(){
                    if(compteur1 < maxdecompte1){
                        var elem1 = $('.compte_transports_' + type+' .li_transports_heures strong');
                        compteur1 ++;
                        elem1.text(compteur1);
                    }else{
                        clearInterval(decompte1);
                    }
                },tempsdecompte1
            );
            var decompte2 = setInterval(
                function(){
                    if(compteur2 < maxdecompte2){
                        var elem2 = $('.compte_transports_' + type+' .li_transports_co2 strong');
                        compteur2 ++;
                        elem2.text(compteur2);
                    }else{
                        clearInterval(decompte2);
                    }
                },tempsdecompte2
            );
        });
        function increase(element){
            return function(){
                var elem1 = $(element+" .li_transports_heures strong");
                var compteur1 = parseInt(elem1.text());
                elem1.text(parseInt(compteur1)+1);
                var elem2 = $(element+" .li_transports_co2 strong");
                var compteur2 = parseInt(elem2.text());
                elem2.text(parseInt(compteur2)+1);
            }
        }
        $(document).on('click', '.show_text', function () {
            $('.edit').removeClass('edit');
            $(this).closest('td').addClass('edit');
            $(this).next('.edit_text').find('textarea').val($(this).closest('.show_text').find('p').html()).focus();
        });
        $(document).on('click', '.edit_text>button', function () {
            $(this).closest('td').removeClass('edit');
            $(this).closest('div').next('.show_text').find('p').html($(this).closest('.edit_text').find('textarea').val());
        })
    }else{
        $('body,html,.content').css('height','100%');
        $('.content')
            .append('<p class="error">Votre écran est trop petit,<br>agrandissez et rechargez la page<br>ou changez de support !</p>')
            .css('position','relative');
    }
});