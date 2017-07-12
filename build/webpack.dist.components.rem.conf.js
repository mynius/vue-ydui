const merge = require('webpack-merge');
const distCommonWebpackConfig = require('./webpack.dist.common.conf');

module.exports = merge(distCommonWebpackConfig, {
    entry: {
        "/lib.rem/actionsheet/index": "./src/components/actionsheet/index.js",
        "/lib.rem/badge/index": "./src/components/badge/index.js",
        "/lib.rem/button/index": "./src/components/button/index.js",
        "/lib.rem/cell/index": "./src/components/cell/index.js",
        "/lib.rem/cityselect/index": "./src/components/cityselect/index.js",
        "/lib.rem/dialog/index": "./src/components/dialog/index.js",
        "/lib.rem/grids/index": "./src/components/grids/index.js",
        "/lib.rem/icons/index": "./src/components/icons/index.js",
        "/lib.rem/infinitescroll/index": "./src/components/infinitescroll/index.js",
        "/lib.rem/keyboard/index": "./src/components/keyboard/index.js",
        "/lib.rem/layout/index": "./src/components/layout/index.js",
        "/lib.rem/list/index": "./src/components/list/index.js",
        "/lib.rem/navbar/index": "./src/components/navbar/index.js",
        "/lib.rem/progressbar/index": "./src/components/progressbar/index.js",
        "/lib.rem/pullrefresh/index": "./src/components/pullrefresh/index.js",
        "/lib.rem/scrolltab/index": "./src/components/scrolltab/index.js",
        "/lib.rem/sendcode/index": "./src/components/sendcode/index.js",
        "/lib.rem/slider/index": "./src/components/slider/index.js",
        "/lib.rem/spinner/index": "./src/components/spinner/index.js",
        "/lib.rem/switch/index": "./src/components/switch/index.js",
        "/lib.rem/tab/index": "./src/components/tab/index.js",
        "/lib.rem/tabbar/index": "./src/components/tabbar/index.js",
        "/lib.rem/lazyimg/index": "./src/components/lazyimg/index.js",
        "/lib.rem/countup/index": "./src/components/countup/index.js",
        "/lib.rem/popup/index": "./src/components/popup/index.js",
        "/lib.rem/rate/index": "./src/components/rate/index.js",
        "/lib.rem/countdown/index": "./src/components/countdown/index.js",
        "/lib.rem/rollnotice/index": "./src/components/rollnotice/index.js",
        "/lib.rem/input/index": "./src/components/input/index.js",
        "/lib.rem/flexbox/index": "./src/components/flexbox/index.js",
        "/lib.rem/radio/index": "./src/components/radio/index.js",
        "/lib.rem/checkbox/index": "./src/components/checkbox/index.js",
        "/lib.rem/backtop/index": "./src/components/backtop/index.js",
        "/lib.rem/accordion/index": "./src/components/accordion/index.js",
        "/lib.rem/datetime/index": "./src/components/datetime/index.js"
    }
});
