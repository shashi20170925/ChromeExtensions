chrome.runtime.sendMessage({ todo: "showPageAction" });
var lkmArray = [];

function FindArrayElementValueByID(id) {
    var tempText1 = '';
    lkmArray.filter((item) => {
        if (item[id] != '' && item[id] != undefined) {
            tempText1 = item[id];
        }
    });
    return tempText1;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "LKMMode") {
        $(".portalapp").find("span[id*='LKMKEY_']").each(function () {
            var lkmKey = $(this)[0].id;
            var lkmText = $(this).text();
            var lkmObject = {};
            lkmObject[lkmKey] = lkmText;
            lkmArray.push(lkmObject);
            $(this).html($(this)[0].id.replace("LKMKEY_", ""));
        });
        //  sendResponse(returnTable);
    }
    else if (request.todo == "NormalMode") {
        $(".portalapp").find("span[id*='LKMKEY_']").each(function () {
            var tempText = FindArrayElementValueByID($(this)[0].id);
            if (tempText != '' && tempText != undefined) {
                $(this).html(tempText);
            }
        });
        //   sendResponse(returnTable);
    }
});