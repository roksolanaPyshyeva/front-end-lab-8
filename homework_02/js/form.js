﻿$(window).load(function(){
    $(document).on('submit','.form',function(){
    	if( $('.form #name').val().length < 6) {
    		alert('Name must contain at least 6 characters');
    		return false;
    	}
    });
});