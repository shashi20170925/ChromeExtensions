chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "LKMMode") {
        $(".portalapp").find("span[id*='LKMKEY_']").each(function () {
            $(this).html($(this)[0].id.replace("LKMKEY_", ""));
        });
        sendResponse(returnTable);
    }
    else if (request.todo == "NormalMode") {
        $(".portalapp").find("span[id*='LKMKEY_']").each(function () {
        });
        sendResponse(returnTable);
    }
});