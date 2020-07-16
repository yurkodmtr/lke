$.each($('iframe#main').contents().find('a'), function() {
    if ( $(this).attr('onClick') !== undefined && $(this).attr('onClick').indexOf('usepriem') !== -1 ) {
        var priemNum = $(this).attr('onClick').replace('usepriem(','');
        priemNum = +priemNum.replace(',1);','');
        if (priemNum == 3 ) {
            $("iframe#main")[0].contentWindow.top.priemOnUser(3,1,'Искалечить','Надзиратель Глубин (2)');
            $("iframe#main")[0].contentWindow.top.usePriemNow('3');
            win.closew('iusepr3');

            $(this).remove();            
        }           
    }
}); 