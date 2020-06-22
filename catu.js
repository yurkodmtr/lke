$.cookie('step', '26');

var bot = function(){

    var goForwardArr = [
    '1','2','3','6','7','9','11','12','14','15','16','18','20','23','24','25','27','28','30','31','33','34','36','38','40','42','43','45','47','49','51','55','56','58','59','60','61','62','63','67','69','73','75','76','78','80','82','83','85','86','88','89','91','92','94','96','100','102','103','104','105','108','109','111','113','114','115','117','119','120','124','127','129','131'
    ];
    var goTurnRightArr = [
    '8','19','37','48','64','71','72','79','97','99','101','106','112','122','123','128'
    ];
    var goTurnLeftArr = [
    '17','21','32','41','44','52','54','57','66','77','84','95','118','125','130'
    ];
    var startFightArr = [
    '4','5','10','13','22','26','29','35','39','46','50','68','74','81','87','90','93','107','110','116','126','132'
    ];
    var teleportArr = [
    '53','65','70','98','121'
    ];

    var plusCookie = function(){
        var val = +$.cookie('step')+1;
        if ( $('#sd4win:visible').length > 0 ) {
            alert('current must update to - ', val);
        }
        $.cookie('step', val);
        console.log('cookiie updated to - ', val);
    }

    var checkDrop = function(){
        var index = 1;
        $.each($('iframe#main').contents().find('a'), function() {      
            if ( $(this).attr('href') !== undefined && $(this).attr('href').indexOf('main.php?take=') !== -1 ) {
                console.log('drop found');
                var href = $(this).attr('href');
                $('iframe#main').attr('src', href);
                setTimeout(function(){
                    checkDrop();
                }, 1500);   
                index++;    
                return false;               
            }           
        });
        setTimeout(function(){
            stepForward();
        }, 2000);       
    }


    var teleport = function(){
        $.each($('iframe#main').contents().find('img'), function() {
            if ( $(this).attr('onClick') !== undefined && $(this).attr('onClick').indexOf('take_obj') !== -1 ) {
                var onClickValue = $(this).attr('onClick');
                onClickValue = onClickValue.replace("location='", '');
                onClickValue = onClickValue.replace("';", '');
                $('iframe#main').attr('src', onClickValue);
                plusCookie();
                setTimeout(function(){
                    checkDrop();
                }, 1500);
                return false;
            }
        });
    }

    var checkIfBattle = function(){
        $.each($('iframe#main').contents().find('img'), function() {
            if ( $(this).attr('onClick') !== undefined && $(this).attr('onClick').indexOf('dialogMenu') !== -1 ) { 
                var onClickValue = $(this).attr('onClick');
                onClickValue = onClickValue.replace('dialogMenu(', '');
                onClickValue = onClickValue.replace(",1,0,0,0,event);", '');
                $('iframe#main').attr('src', 'main.php?atack='+ onClickValue); //начинаем бой   
                setTimeout(function(){
                    battleProcess();
                }, 2000);   
                return false;   
            }
        }); 
    }

    var battleProcess = function(){
        var updateButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="reflesh_btn"]');
        var backButton =  $('iframe#main').contents().find('div#ref_menu_down').find('button[name="back_menu_down"]');
        var hitButton = $('iframe#main').contents().find('div#ref_menu_down').find('button[name="go_auto"]');
        if (hitButton.length > 0 && hitButton.css('display') != 'none') {
            console.log('Делаем удар');
            hitButton.trigger("click"); 
            setTimeout(function(){
                battleProcess();
            }, 2000);           
        } else {
            $('iframe#main').contents().find('button[value="Обновить"]');
            console.log('battle is finished');
            plusCookie();
            setTimeout(function(){
                checkDrop();
            },2000);
        }
    }

    var stepForward = function(){

        var cookieVal = $.cookie('step');

        if ( $.inArray(cookieVal, goForwardArr) !== -1 ) {
            $.each($('iframe#main').contents().find('img'), function() {
                if ( $(this).attr('src').indexOf('g5.jpg') !== -1 && $(this).attr('src').indexOf('g2') !== -1 ) {
                    var onClickValue = $(this).attr('onClick');
                    onClickValue = onClickValue.replace('goToLoca5edd134f7ed6899da833856ead45e7ab(', '');
                    onClickValue = onClickValue.replace(",'вперед','5edd134f7ed6899da833856ead45e7ab');", '');  
                    goto = onClickValue;
                    $('iframe#main').attr('src', 'main.php?rnd='+ new Date().getTime() + '&sk=5edd134f7ed6899da833856ead45e7ab&key1='+goto+'&go=1');
                    plusCookie();
                    setTimeout(function(){
                        checkDrop();
                    }, 6000);
                    return false;
                }
            });
            return false;
        }

        if ( $.inArray(cookieVal, startFightArr) !== -1 ) {
            setTimeout(function(){
                checkIfBattle();
            }, 1500);
            return false;
        }

        if ( $.inArray(cookieVal, goTurnRightArr) !== -1 ) {
            $('iframe#main').attr('src', 'main.php?look=2&rnd=1');
            plusCookie();
            setTimeout(function(){
                checkDrop();
            }, 1500);
            return false;
        }

        if ( $.inArray(cookieVal, goTurnLeftArr) !== -1 ) {
            $('iframe#main').attr('src', 'main.php?look=1&rnd=1');
            plusCookie();
            setTimeout(function(){
                checkDrop();
            }, 1500);
            return false;
        }

        if ( $.inArray(cookieVal, teleportArr) !== -1 ) {           
            setTimeout(function(){
                teleport();
            }, 1500);
            return false;
        }

        console.log('done, current cookie - ', cookieVal);

        

    }

    checkDrop();
}

bot();