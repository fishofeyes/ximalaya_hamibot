text("我可申请").click()
var isRefresh = true
var isAll = false
var index = 0
while(isRefresh) {
    if (text('暂时没有内容～').exists()) {
    text("全部").click()
    sleep(500)
  } else {
  	if(index > 2) isRefresh = false
    var cells = textContains('申请名额：').find()
    if(cells.length != 0) {
        cells[index].click()
        bounds(90,2058,1062,2310).click()
        index++
    }
  }
}