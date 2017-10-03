chrome
    .runtime
    .sendMessage({todo: "showPageAction"});
function getTableHeaderRow(LKMKey, LKMValue) {
    return `<table class="table table-hover table-responsive table-fixed"><thead class="blue-grey lighten-4"><tr><th>${LKMKey} </th><th>${LKMValue}</th></tr></thead>`;

}
function getTableDataRow(LKMKey, LKMValue) {
    return `<tr><td>${LKMKey} </td><td>${LKMValue}</td></tr>`;

}

function getFormattedTableHeaderRow(LKMKey, LKMValue) {
    return `<table class="table"><thead class="blue-grey lighten-4"><tr><th>${LKMKey} </th><th>${LKMValue}</th></tr></thead></table>`;

}
function getFormattedTableDataRow(LKMKey, LKMValue) {
    return `<tr><td>${LKMKey} </td><td>${LKMValue}</td></tr>`;

}

chrome
    .runtime
    .onMessage
    .addListener(function (request, sender, sendResponse) {
        var returnTable = getTableHeaderRow("LKM KEY", "LKM TEXT");

        if (request.todo == "viewTable") {

            $(".portalapp")
                .find("span[id*='LKMKEY_']")
                .each(function (element) {
                    returnTable = returnTable.concat(getTableDataRow($(this)[0].id.replace("LKMKEY_", ""), $(this).text()))
                });
            returnTable = returnTable.concat("</table>");
            sendResponse(returnTable);
        }
    });