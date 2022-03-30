
// https://docs.hamibot.com/reference/http/#httppostmultiparturl-files-options-callback
var res = http.get(
    'https://api.github.com/users/ruanyf'
);
if (res.statusCode != 200) {
    toast('请求失败: ' + res.statusCode + ' ' + res.statusMessage);
} else {
    var weather = res.body.json();
    toast(weather.id);
}

// post请求
var url = 'http://www.tuling123.com/openapi/api';
r = http.postJson(url, {
  key: 'key',
  info: '你好啊',
  userid: '1',
});
toastLog(r.body.string());

// 定时任务
var index = 0
var timerId = 0 
timerId = setInterval(function (e) {
  index += 1
  if(index == 5) {
  	clearInterval(timerId)
  }
	toast(index)
}, 1000)
