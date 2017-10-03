$(function () {
    $('#btnLKMView').click(function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                todo: "LKMMode"
            }, function (response) {

            });
        });
    });

    $('#btnNormalView').click(function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                todo: "NormalMode"
            }, function (response) {

            });
        });
    });

});