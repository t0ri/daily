var today = new Date();
var currentDay = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();
var data;

window.onload = function() {
    if (localStorage.bData) {
        console.log("he exists!");
        const dataInit = JSON.parse(localStorage.getItem('bData'));

        if (dataInit == undefined || dataInit == null || dataInit == "null") {
            console.log("null");
            data = [{ "DATE" : { [currentDay] : [] } }];
        } else {
            data = JSON.parse(localStorage.getItem('bData'));
        }

    } else {
        data = [{ "DATE" : { [currentDay] : [] } }];
    }
};

mainTextEdit.addEventListener('blur', function() {
    data[0]["DATE"][currentDay] = [];

    var nodeZero = document.querySelector('div[contenteditable="true"]');
    saveText(nodeZero.firstChild.nodeValue, 0);
    nodeZero.classList.add('saved');

    var contentNodes = document.querySelectorAll('div[contenteditable="true"] > div');
    let entryNum = 1;

    for(var entry of contentNodes.entries()) {
        let line = entry[1].innerHTML;
        saveText(line, entryNum);

        entryNum++;
    };

    console.log(data);
    localStorage.setItem("bData", JSON.stringify(data));
});

function saveText(line, entryNum) {
    var date = new Date();
    let seconds = date.getTime() / 1000;
    let type = 0;

    // console.log(data[0]["DATE"][currentDay][entryNum]["time"]);

    let newEntry = {[entryNum] : {
            "time" : [seconds],
            "type" : [type],
            "note" : [line]
        }};


    data[0]["DATE"][currentDay].push(newEntry);
};
