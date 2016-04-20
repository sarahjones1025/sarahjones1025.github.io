var contents = $( ".contents" );
var trigger = $( ".trigger" );

trigger.on( "click", function( e ){

	console.log("hello");

    var selector = $( this ).data( "contents" );
    
	contents.not(selector).hide();

    $( selector ).fadeToggle( 500 );

    if ( $( window ).height() < 600 ) {
		$( document.body ).scrollTop( $( selector ).offset().top - 130 );
    }

    e.preventDefault();
} );

$(document.body).on('click', function (e) {
	// Test is program locator contains the actual target of the event
	if (!$('.discovery').has(e.target).length > 0) {
		// Hide ALL inner lists
		$('.inner_list').hide();
	}
})

contents.hide();

$( ".trigger_2" ).trigger( "click" );