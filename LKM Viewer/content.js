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
var wasInLKMMode = true;
var isFirstClick = true;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "LKMMode") {
        if (wasInLKMMode) {
            $(".portalapp").find("span[id*='LKMKEY_']").each(function () {
                var lkmKey = $(this)[0].id;
                var lkmText = $(this).text();
                var lkmObject = {};
                lkmObject[lkmKey] = lkmText;
                lkmArray.push(lkmObject);
                $(this).attr('style', 'background-color:yellow');

                //$(this).css("background-color:blue;");
                $(this).html($(this)[0].id.replace("LKMKEY_", ""));
            });
            wasInLKMMode = false;
            isFirstClick = false;
        }

      
        //  sendResponse(returnTable);
    }
    else if (request.todo == "NormalMode") {

        if (!isFirstClick) {

            wasInLKMMode = true;
            $(".portalapp").find("span[id*='LKMKEY_']").each(function () {
                var tempText = FindArrayElementValueByID($(this)[0].id);
                if (tempText != '' && tempText != undefined) {
                    $(this).attr('style', '');
                    $(this).html(tempText);
                }
            });
        }
        else {
            alert("Please toggle into LKM mode before clicking on Normal Mode");
        }

        //   sendResponse(returnTable);
    }
});