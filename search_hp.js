// JavaScript Document
 function searchw(){
	var word = document.getElementById('searchword').value;
	if (word == "" || word == "请输入关键字")
	{
		alert("请输入关键字");
	} else {
		var url = "http://search.beihai.gov.cn/was5/web/search?searchword="+encodeURI(word)+"&perpage=&templet=&token=0.1488788069990.38&channelid=273618&searchscope=";
		window.open(url, "_blank");
	}
 }
 // Method_Yjsgkpt
  function searchYjs(){
	var word = document.getElementById('docTitle').value;
	if (word == "" || word == "关键字")
	{
		alert("请输入关键字");
	} else {
		var url = "http://search.beihai.gov.cn/was5/web/search?searchword="+encodeURI(word)+"&perpage=&templet=&token=0.1488788069990.38&channelid=249714&searchscope=doctitle";
		window.open(url, "_blank");
	}
 }
    // Method_Yjsgkpt
  function searchYjs1(channelid){
	console.log(channelid);
	var word = document.getElementById('textfield').value;
	var val1 = $('input:radio[name="searchscope"]:checked').val();
	if (word == "" || word == "关键字")
	{
		alert("请输入关键字");
	} else {
		var url = "http://search.beihai.gov.cn/was5/web/search?searchword="+encodeURI(word)+"&perpage=&templet=&token=0.1488788069990.38&searchscope="+val1+"&channelid="+channelid;
		window.open(url, "_self");
	}
  }
 // Method_Wj
  function searchWj(){
	var word = document.getElementById('docTitle').value;
	if (word == "" || word == "关键字")
	{
		alert("请输入关键字");
	} else {
		var url = "http://search.beihai.gov.cn/was5/web/search?searchword="+encodeURI(word)+"&perpage=&templet=&token=0.1488788069990.38&channelid=257984&searchscope=";
		window.open(url, "_blank");
	}
 }

 function searchZwgk() {
	 var word = document.getElementById('searchword1').value;
	 if (word == "" || word.length == 0) {
		alert("请输入搜索关键字");
	} else {
		var url = "http://search.beihai.gov.cn/was5/web/search?searchword="+encodeURI(word)+"&perpage=&templet=&token=0.1488788069990.38&channelid=263145&searchscope=";
		window.open(url, "_blank");
	}
 }