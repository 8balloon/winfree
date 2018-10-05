# winfrey

Execute a function when nothing else is going on. 

Works in the browser (IE10+) or in node (0.7.6+)

## example

```
const winfrey = require('winfrey')

winfrey(() => {
    doAnalyticsOrOptimizationOrWhatever()
})

main()
```
