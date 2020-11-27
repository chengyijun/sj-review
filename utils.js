/**
 * 获得当前状态
 * @param obj
 * @param attr
 * @returns {string}
 */
function getCurrentStyle(obj, attr) {
    let res
    if (obj.currentStyle)
        // IE 兼容写法 只有IE Opera 使用currentStyle
        res = obj.currentStyle[attr]
    else
        res = window.getComputedStyle(obj, null)[attr]
    return res
}

/**
 * 动画
 * @param obj
 * @param json
 * @param callback
 */
function animation(obj, json, callback) {
    let now
    let step
    let direction
    let current
    let isStop = true
    const t1 = setInterval(function () {
        for (let attr in json) {
            if (attr === 'opacity') {
                now = parseInt(getCurrentStyle(obj, attr) * 100)
                direction = json[attr] * 100 - now
                step = direction > 0 ? Math.ceil(direction / 10) : Math.floor((direction) / 10)
                current = now + step
                obj.style[attr] = current / 100
            } else {
                now = parseInt(getCurrentStyle(obj, attr))
                direction = json[attr] - now
                step = direction > 0 ? Math.ceil(direction / 10) : Math.floor((direction) / 10)
                current = now + step
                obj.style[attr] = current + 'px'
            }
            isStop = now === current;
        }

        if (isStop) {
            clearInterval(t1)
            callback('动画执行结束！')
        }
    }, 30)
}