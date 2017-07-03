( function( factory ) {
    "use strict";
    if ( typeof define === "function" && define.amd ) {

        // AMD
        define( [ "jquery" ], factory );
    } else if ( typeof exports === "object" ) {

        // CommonJs
        factory( require( "jquery" ) );
    } else {

        // Browser globals
        factory( jQuery );
    }
}( function( $ ) {
    "use strict";
    $.fn.menuBuilder = function( customOnclickCallback, showNumbers ) {
        if ( showNumbers === undefined ) {
            showNumbers = true;
        }
        var menuElement = $( this );
        var list = $( "<ul></ul>" );
        var menuReferences = $( "*[data-menu]" );
        var counter = 1;
        menuReferences.each( function() {
            var item = $( this );
            var menuItem = $( "<li></li>" );
            var dataMenuAttr = item.attr( "data-menu" );
            var menuItemText = "";
            if ( showNumbers ) {
                menuItemText = counter + " - ";
            }
            if ( dataMenuAttr ) {
                menuItemText += dataMenuAttr;
            } else {
                menuItemText += item.html();
            }
            menuItem.text( menuItemText );
            var onclickCallback = function() {
                $( "html, body" ).animate( {
                    scrollTop: $( item ).offset().top
                } );
            };
            if ( typeof customOnclickCallback === "function" ) {
                onclickCallback = function() {
                    customOnclickCallback( this, item.get( 0 ) );
                };
            }
            menuItem.click( onclickCallback );
            list.append( menuItem );
            counter++;
        } );
        menuElement.append( list );
    };
} ) );
