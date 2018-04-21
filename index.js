var now = null
if (typeof performance !== 'undefined') { // browser
    /* global performance */
    now = function now() {
        return Math.floor(performance.now())
    }
}
else { // node.js
    now = function now() {
        var hrtime = process.hrtime()
        return Math.floor((hrtime[0]*1000) + (hrtime[1]/1000000))
    }
}

var last = -Infinity
var oneDiffBack = null
var twoDiffsBack = null
function winfrey(fn) {
    var current = now()
    var diff = current - last
    if (diff === oneDiffBack && diff === twoDiffsBack) {
        fn()
        return
    }
    last = current
    twoDiffsBack = oneDiffBack
    oneDiffBack = diff
    setTimeout(function() {
        winfrey(fn)
    }, 1)
}

module.exports = winfrey
