$(function () {
    $('#btnView')
        .click(function () {
            $('#tblLKMKeyValues').html('');
            chrome
                .tabs
                .query({
                    active: true,
                    currentWindow: true
                }, function (tabs) {
                    chrome
                        .tabs
                        .sendMessage(tabs[0].id, {
                            todo: "viewTable"
                        }, function (response) {
                            // assuming that info was html markup then you could do document.body.innerhtml
                            // = response; $('#tblLKMKeyValues').innerhtml=response;
                            $('#tblLKMKeyValues').html($(response));
                            //$('#tblLKMKeyValues').html("");

                        });
                });
        });
});