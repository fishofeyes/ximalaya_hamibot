const { time } = hamibot.env;
function task() {
    // xxima
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
}

function setScheduledTask(hour, minute, callTask) {
    let taskTime = new Date();
    taskTime.setHours(hour);
    taskTime.setMinutes(minute);
    let timeDiff = taskTime.getTime() - (new Date()).getTime(); // 获取时间差
    timeDiff = timeDiff > 0 ? timeDiff : (timeDiff + 24 * 60 * 60 * 1000);
    setTimeout(function() {
        callTask(); // 首次执行
        setInterval(callTask, 24 * 60 * 60 * 1000); // 24小时为循环周期
    }, timeDiff); 
}

function doTask() {
    launchApp("微信")
    sleep(500)
    swipe(243, 460, 243, 1336, 500)
    desc("喜播学堂,").click()
    text("有声主播").click()
    swipe(300, 2094, 300, 705, 500)
    text("开启任务").click()
    taskt()
}
setScheduledTask(time - 1, 59, doTask);