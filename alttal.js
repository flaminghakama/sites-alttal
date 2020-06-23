//
//  Updates the content of the content DIV, according to the person you specify
//  Valid values for the who argument include: andy, david, kenny or band.
//
function update_content(who){

    var none ;

    if (who=="andy") {
       none = new Array('david', 'kenny', 'band') ; 
    }
    if (who=="david") {
       none = new Array('andy', 'kenny', 'band') ; 
    }
    if (who=="kenny") {
       none = new Array('andy', 'david', 'band') ; 
    }
    if (who=="band") {
       none = new Array('andy', 'david', 'kenny') ; 
    }

    var this_div ;
    
    for (i=0; i<none.length; i++) {
        this_div = document.getElementById(none[i] + '_div') ;
        this_div.style.display="none" ;
    }

    this_div = document.getElementById(who + '_div') ;
    this_div.style.display="block" ; 

}

