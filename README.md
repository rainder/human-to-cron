# HumanToCron

```js
var humanToCron = require('human-to-cron');

humanToCron('once each minute') // => 0 */1 * * * *
humanToCron('each 2 minutes') // => * */2 * * * *
humanToCron('each second') // => */1 * * * * *
humanToCron('once each hour') // => 0 0 */1 * * *
humanToCron('once each day') // => 0 0 0 */1 * *
humanToCron('once each month') // => 0 0 0 0 */1 *
humanToCron('once each 5 months') // => 0 0 0 0 */5 *
humanToCron('midnight') // => 0 0 0 * * *
humanToCron('midnight each 2 minutes') // => 0 */2 0 * * *
humanToCron('once tuesday each 10 minutes') // => 0 */10 * 1 * *
humanToCron('friday 15:44') // => 0 44 15 4 * *
humanToCron('august friday 15:44') // => 0 44 15 4 7 *

```

See tests for full list of expressions