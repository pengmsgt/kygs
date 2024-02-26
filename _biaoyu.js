var href = window.location.href;
if(href.indexOf('www.linzhi') == -1 && href.indexOf('bayiqu') == -1 && href.indexOf('gongbujiangda') == -1 && href.indexOf('milin') == -1 && href.indexOf('langxian') == -1 && href.indexOf('bomi') == -1 && href.indexOf('motuo') == -1 && href.indexOf('chayu') == -1){
    $('body').append('<link href="http://www.bayiqu.gov.cn/byq/xhtml/css/_biaoyu.css" rel="stylesheet" type="text/css">')
}




// $(function () {
//     var str = '';
//     var strcss = "";
//     var path = "";
//     var data = {
//         websiteId: "e61ec4d7aaeb4997b0a028dba4145897",
//         channelId: ['0b0696aaf5344605ab1a30132ca1580e']
//     }
//     $.ajax({
//         type: "POST",
//         url: path + "/interface-cms/qryManuscriptByWebsiteId",
//         contentType: "application/json",
//         async: false,
//         data: JSON.stringify(data),
//         success: function (res) {
//             if (res.Status == "success" && res.results.length > 0) {
//                 $.ajax({
//                     type: "GET",
//                     url: path + '/interface-cms/proxy/api?apiUrl=manuscript/getManuscriptById&manuscriptId=' + res.results[0].manuscriptId,
//                     success: function (json) {
//                         var data = JSON.parse(json).data;
//                         str = '<div class="tongyibg"><div class="tongyiRight"><p class="title_left">' + data.subTitle + '</p><p class="title_right">' + data.memo + '</p></div></div>';
//                         strcss = '<link rel="stylesheet" href="http://www.bayiqu.gov.cn/byq/xhtml/css/_biaoyu.css"></link>';
//                         $("body").prepend(str + strcss);
//                     },
//                     error: function (err) {
//                         console.log(err);
//                     }
//                 })
//             }
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })

// })