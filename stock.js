var interval,
    onChangeHandler;

var stocks = [{
        symbol: "GM",
        open: 38.87
    },
    {
        symbol: "GE",
        open: 25.40
    },
    {
        symbol: "MCD",
        open: 97.05
    },
    {
        symbol: "UAL",
        open: 69.45
    },
    {
        symbol: "WMT",
        open: 83.24
    },
    {
        symbol: "AAL",
        open: 55.76
    },
    {
        symbol: "LLY",
        open: 76.12
    },
    {
        symbol: "JPM",
        open: 61.75
    },
    {
        symbol: "BAC",
        open: 15.84
    },
    {
        symbol: "BA",
        open: 154.50
    }
];


function simulateChange() {
    onChangeHandler('stock', stocks);
}

function start(onChange) {
    onChangeHandler = onChange;
    interval = setInterval(simulateChange, 200);
}

function stop() {
    clearInterval(interval);
}

exports.start = start;
exports.stop = stop;