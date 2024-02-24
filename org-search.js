
function searchOrg() {

    var highLightClassName = 'gov-highlight';
    
    //清除原有高亮内容
    $('#orgListContent a').each(function(){  
        $(this).find('.'+highLightClassName).each(function(){ 
            $(this).replaceWith( $(this).html() ); // 找到所有highlight属性的元素 将他们的属性去掉
        }); 
    }); 
    
    var searchText = $('#govTxt').val();
    var regExp     = new RegExp(searchText);
    var content    = $("#orgListContent").text();
    if ( searchText == '' ) {
        return;
    }
    else if ( ! regExp.test(content) ) { 
        alert("没有找到相关内容"); 
        return; 
    }
    
    //高亮显示
    $('#orgListContent a').each(function(){ 
        var html = $(this).html(); 
        var newHtml = html.replace(regExp, '<span class="'+highLightClassName+'">'+searchText+'</span>');  // 将找到的关键字替换
        $(this).html( newHtml );
    });  

    //跳到目标位置
    var _top = $("."+highLightClassName).eq(0).offset().top + $("."+highLightClassName).eq(0).height();
    $("html, body").animate({ scrollTop: _top - 50 });
    
}
 
 
$(function(){
    $('#govSubmit').click(searchOrg);
});