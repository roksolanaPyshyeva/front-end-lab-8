﻿$(window).load(function(){for(var t=0,n=0;n<$(".category-unit").length;n++)$(".category-unit").eq(n).height()>t&&(t=$(".category-unit").eq(n).height());for(n=0;n<$(".category-unit").length;n++)$(".category-unit").eq(n).css("height",t)}),$(window).load(function(){$(document).on("submit",".form",function(){if($(".form #name").val().length<6)return alert("Name must contain at least 6 characters"),!1})}),$(window).load(function(){$(".flexslider").flexslider({animation:"fade"})});