var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180000",
        "ok": "180000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "948",
        "ok": "948",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles1": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "percentiles2": {
        "total": "327",
        "ok": "327",
        "ko": "-"
    },
    "percentiles3": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "percentiles4": {
        "total": "527",
        "ok": "527",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 179968,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2000",
        "ok": "2000",
        "ko": "-"
    }
},
contents: {
"req_passthrough-mes-7f865": {
        type: "REQUEST",
        name: "passthrough-messages",
path: "passthrough-messages",
pathFormatted: "req_passthrough-mes-7f865",
stats: {
    "name": "passthrough-messages",
    "numberOfRequests": {
        "total": "180000",
        "ok": "180000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "948",
        "ok": "948",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles1": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "percentiles2": {
        "total": "327",
        "ok": "327",
        "ko": "-"
    },
    "percentiles3": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "percentiles4": {
        "total": "527",
        "ok": "527",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 179968,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2000",
        "ok": "2000",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
