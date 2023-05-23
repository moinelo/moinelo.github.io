function emoticonComentario() {

if(!document.getElementById) {return;} // no soportado
bodyText = document.getElementById('comments');
cualTexto = bodyText.innerHTML;

//	:)	:-)	:]	:-]
cualTexto = cualTexto.replace(/:\)/g,'<img src="http://img179.imageshack.us/img179/2107/com-smile.gif" />');
cualTexto = cualTexto.replace(/:-\)/g,'<img src="http://img179.imageshack.us/img179/2107/com-smile.gif" />');
cualTexto = cualTexto.replace(/:\]/g,'<img src="http://img179.imageshack.us/img179/2107/com-smile.gif" />');
cualTexto = cualTexto.replace(/:-\]/g,'<img src="http://img179.imageshack.us/img179/2107/com-smile.gif" />');

//	:'-(	:((	:'(
cualTexto = cualTexto.replace(/:'-\(/g,'<img src="http://img179.imageshack.us/img179/557/com-cry.gif" />');
cualTexto = cualTexto.replace(/:\(\(/g,'<img src="http://img179.imageshack.us/img179/557/com-cry.gif" />');
cualTexto = cualTexto.replace(/:'\(/g,'<img src="http://img179.imageshack.us/img179/557/com-cry.gif" />');

//	:(	:-(	:[	:-[
cualTexto = cualTexto.replace(/:\(/g,'<img src="http://img179.imageshack.us/img179/5361/com-sad.gif" />');
cualTexto = cualTexto.replace(/:-\(/g,'<img src="http://img179.imageshack.us/img179/5361/com-sad.gif" />');
cualTexto = cualTexto.replace(/:\[/g,'<img src="http://img179.imageshack.us/img179/5361/com-sad.gif" />');
cualTexto = cualTexto.replace(/:-\[/g,'<img src="http://img179.imageshack.us/img179/5361/com-sad.gif" />');

//	:P	:-P
cualTexto = cualTexto.replace(/:\P/g,'<img src="http://img179.imageshack.us/img179/8452/com-tongue.gif" />');
cualTexto = cualTexto.replace(/:-\P/g,'<img src="http://img179.imageshack.us/img179/8452/com-tongue.gif" />');

//	:D	:-D	xD XD 
cualTexto = cualTexto.replace(/:D/g,'<img src="http://img179.imageshack.us/img179/5278/com-lol.gif" />');
cualTexto = cualTexto.replace(/:-D/g,'<img src="http://img179.imageshack.us/img179/5278/com-lol.gif" />');
cualTexto = cualTexto.replace(/xD/g,'<img src="http://img179.imageshack.us/img179/5278/com-lol.gif" />');
cualTexto = cualTexto.replace(/XD/g,'<img src="http://img179.imageshack.us/img179/5278/com-lol.gif" />');

// ;-D
cualTexto = cualTexto.replace(/;-D/g,'<img src="http://sites.google.com/site/dimensioncifi/portal/imagenes/com-blink-lol.gif" />');

//	:$	:-$
cualTexto = cualTexto.replace(/:\$/g,'<img src="http://img179.imageshack.us/img179/8856/com-oops.gif" />');
cualTexto = cualTexto.replace(/:-\$/g,'<img src="http://img179.imageshack.us/img179/8856/com-oops.gif" />');

//	;)	;-)	;]	;-]
cualTexto = cualTexto.replace(/;\)/g,'<img src="http://img179.imageshack.us/img179/3919/com-blink.gif" />');
cualTexto = cualTexto.replace(/;-\)/g,'<img src="http://img179.imageshack.us/img179/3919/com-blink.gif" />');
cualTexto = cualTexto.replace(/;\]/g,'<img src="http://img179.imageshack.us/img179/3919/com-blink.gif" />');
cualTexto = cualTexto.replace(/;-\]/g,'<img src="http://img179.imageshack.us/img179/3919/com-blink.gif" />');

//	:-I	:-| 
cualTexto = cualTexto.replace(/:-\I/g,'<img src="http://img179.imageshack.us/img179/5741/com-neutral.gif" />');
cualTexto = cualTexto.replace(/:-\|/g,'<img src="http://img179.imageshack.us/img179/5741/com-neutral.gif" />');

//	:-X
cualTexto = cualTexto.replace(/:-\X/g,'<img src="http://img179.imageshack.us/img179/2271/com-secreto.gif" />');

//	:o	:-o
cualTexto = cualTexto.replace(/:\o/g,'<img src="http://img179.imageshack.us/img179/9074/com-sorpresa1.gif" />');
cualTexto = cualTexto.replace(/:-\o/g,'<img src="http://img179.imageshack.us/img179/9074/com-sorpresa1.gif" />');

//	:O	:-O
cualTexto = cualTexto.replace(/:\O/g,'<img src="http://img179.imageshack.us/img179/4439/com-sorpresa2.gif" />');
cualTexto = cualTexto.replace(/:-\O/g,'<img src="http://img179.imageshack.us/img179/4439/com-sorpresa2.gif" />');

//	|O	|-O
cualTexto = cualTexto.replace(/\|O/g,'<img src="http://img179.imageshack.us/img179/2108/com-mad.gif" />');
cualTexto = cualTexto.replace(/\|-\O/g,'<img src="http://img179.imageshack.us/img179/2108/com-mad.gif" />');

//	:/	:-/	:S :-S
cualTexto = cualTexto.replace(/:\/ /g,'<img src="http://img179.imageshack.us/img179/9003/com-confuso.gif" />');
cualTexto = cualTexto.replace(/:-\/ /g,'<img src="http://img179.imageshack.us/img179/9003/com-confuso.gif" />');
cualTexto = cualTexto.replace(/:S/g,'<img src="http://img179.imageshack.us/img179/9003/com-confuso.gif" />');
cualTexto = cualTexto.replace(/:-S/g,'<img src="http://img179.imageshack.us/img179/9003/com-confuso.gif" />');

bodyText.innerHTML = cualTexto;
}
