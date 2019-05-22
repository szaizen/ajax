jQuery(document).ready(function(){
  console.log('test');

  // URLパラメータ文字列を取得する
  var param = location.search
  console.log('GETパラーメータ：' + getParam('test'));

  function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getPost() {
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        console.log( xhr.responseText );
        
      }
    }
  }

});
