while (true) {
    click(180, 2232)
    setText(0, "测试弹幕")
    text("发送").findOne().click()
    sleep(1000)
}