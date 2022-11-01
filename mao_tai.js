// launchApp("京东")
// v1
console.show()
//注册触摸监听器
id("com.jd.lib.productdetail.feature:id/add_2_car").findOne().click()
var res = true
while (res) {
  res = text("确定").findOne().click()
  console.log("确定 = %s", res)
}
while (true) {
  text("提交订单").findOne().click()
  console.log("提交订单 = %s", res)
}

// v2
console.show()
var res = true;
while (true) {
  if (!text('立即预约').exists()) {
    console.log("---开始抢购")
    id("com.jd.lib.productdetail.feature:id/add_2_car").findOne().click()
    res = text("确定").findOne().click()
    console.log("确定 = %s", res)
  } else {
    console.log("--等待抢购")
  }
}
while (true) {
  text("提交订单").findOne().click()
  console.log("提交订单 = %s", res)
}

// v3

console.show()
var res = true;
while (res) {
  if (!text('立即预约').exists()) {
    console.log("---开始抢购")
    id("com.jd.lib.productdetail.feature:id/add_2_car").findOne().click()
    while (res) {
      res = text("确定").findOne().click()
    }
  } else {
    console.log("--等待抢购")
  }

}
while (true) {
  text("提交订单").findOne().click()
  console.log("提交订单 = %s", res)
}

