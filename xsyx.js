function doTask() {
    launchApp("微信")
    sleep(500)
    swipe(243, 460, 243, 1336, 500)
    desc("兴盛优选,").click()
    if (text("我知道了").exists()) {
        text("我知道了").findOne().click()
    }
    text("立即登录").findOne().click()
    textContains("我已阅读并同意").findOne().click()
    text("微信授权登录").findOne().click()
    text("允许").findOne().click()
}

text("手机号登录").findOne().click()

//doTask()
