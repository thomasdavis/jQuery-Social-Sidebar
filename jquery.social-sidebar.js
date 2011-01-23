/**
 * @author Thomas Davis.
 * Use somebody
 *
 * Version 5.1
 * Copyright (c) 2011 Thomas Davis
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function( $ ){

  $.fn.socialSidebar = function( options ) {  

    return this.each(function() {

      var settings = {
		'top'        : '100px',
        'twitter'         : {
			'username': '',
			'image': 'images/twitter.jpg'
		},
        'facebook'         : {
			'link': '',
			'image': 'images/facebook.jpg'
		},
        'linkedin'         : {
			'link': '',
			'image': 'images/linkedin.jpg'
		},
		'public': 1
      };
      
	
      if ( options ) { 
        $.extend( true, settings, options );
      }
	 
		$(this).append("<div id='socialSidebar' style='z-index: 10000; position: fixed; top: " + settings['top'] + "; right: -3px;'></div>");
		sidebar = $("#socialSidebar");
		if( settings['twitter']['username'] != "" ){
			sidebar.append("<div class='socialNetwork'><a target='_blank' title='follow me' href='http://twitter.com/" + settings['twitter']['username'] + "'><img style='z-index: 10000;' src='" + settings['twitter']['image'] + "' /></a></div>");
		}
		if( settings['facebook']['link'] != ""){
			sidebar.append("<div class='socialNetwork'><a target='_blank' title='facebook page' href='" + settings['facebook']['link'] + "'><img style='z-index: 10000;' src='" + settings['facebook']['image'] + "' /></a></div>");
		}		
		if( settings['linkedin']['link'] != ""){
			sidebar.append("<div class='socialNetwork'><a target='_blank' title='linkedin' href='" + settings['linkedin']['link'] + "'><img style='z-index: 10000;' src='" + settings['linkedin']['image'] + "' /></a></div>");
		}		
		if( settings['op1']['link'] != ""){
			sidebar.append("<div class='socialNetwork'><a target='_blank' title='' href='" + settings['op1']['link'] + "'><img style='z-index: 10000;' src='" + settings['op1']['image'] + "' /></a></div>");
		}		
		if( settings['op2']['link'] != ""){
			sidebar.append("<div class='socialNetwork'><a target='_blank' title='' href='" + settings['op2']['link'] + "'><img style='z-index: 10000;' src='" + settings['op2']['image'] + "' /></a></div>");
		}		
		if( settings['op3']['link'] != ""){
			sidebar.append("<div class='socialNetwork'><a target='_blank' title='' href='" + settings['op3']['link'] + "'><img style='z-index: 10000;' src='" + settings['op3']['image'] + "' /></a></div>");
		}
		$(".socialNetwork").hover( function(){
			$(this).css("margin-left","-3px");	
		}, function(){
			$(this).css("margin-left","0px");	
		})
		
    });

  };
})( jQuery );
