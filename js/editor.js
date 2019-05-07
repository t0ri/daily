var today = new Date();
var currentDay = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();
var data;

window.onload = function() {
    if (localStorage.bData) {
        const dataInit = JSON.parse(localStorage.getItem('bData'));

        if (dataInit == undefined || dataInit == null || dataInit == "null") {
            console.log("null");
            data = [{
                "DATE": {
                    [currentDay]: []
                }
            }];
        } else {
            data = JSON.parse(localStorage.getItem('bData'));
        }

    } else {
        data = [{
            "DATE": {
                [currentDay]: []
            }
        }];
    }

    sortForRender();
};

mainTextEdit.addEventListener('blur', function() {
    data[0]["DATE"][currentDay] = [];

    var nodeZero = document.querySelector('div[contenteditable="true"]');
    saveText(nodeZero.firstChild.nodeValue, 0);
    nodeZero.classList.add('saved');
    console.log(contentNodes);

    var contentNodes = document.querySelectorAll('div[contenteditable="true"] > div');
    let entryNum = 1;

    for (var entry of contentNodes.entries()) {
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
    let type = sortIntoStorage(line);

    // console.log(data[0]["DATE"][currentDay][entryNum]["time"]);

    let newEntry = {
        [entryNum]: {
            "time": [seconds],
            "type": [type],
            "note": [line]
        }
    };


    data[0]["DATE"][currentDay].push(newEntry);
};

function sortIntoStorage(line) {
    return 0;
    // switch (line.charAt(0)) {
    //     case "o":
    //         return 1;
    //         break;
    //     case "x":
    //         return 2;
    //         break;
    //     case "&":
    //         return 3;
    //         break;
    //     case "-":
    //         return 4;
    //         break;
    //     case "+":
    //         return 5;
    //         break;
    //     case "!":
    //         return 6;
    //         break;
    //     default:
    //         return 0;
    // }
};

function sortForRender() {
    let noteNum = 0;
    data[0]['DATE'][currentDay].forEach(function() {

        let next = document.getElementById('');
        render(data[0]['DATE'][currentDay][noteNum][noteNum]['note'][0], data[0]['DATE'][currentDay][noteNum][noteNum]['type'][0]);

        // switch (data[0]['DATE'][currentDay][noteNum][noteNum]['type'][0]) {
        //    case 5:
        //         break;
        //     case 6:
        //         break;
        //     default:
        //         render(data[0]['DATE'][currentDay][noteNum][noteNum]['note'][0], data[0]['DATE'][currentDay][noteNum][noteNum]['type'][0])
        // };
        //
        // switch (data[0]['DATE'][currentDay][noteNum][noteNum]['type'][0]) {
        //     case 5:
        //         render(data[0]['DATE'][currentDay][noteNum][noteNum]['note'][0], data[0]['DATE'][currentDay][noteNum][noteNum]['type'][0]);
        //         noteNum++;
        //         break;
        //     case 6:
        //         render(data[0]['DATE'][currentDay][noteNum][noteNum]['note'][0], data[0]['DATE'][currentDay][noteNum][noteNum]['type'][0]);
        //         noteNum++;
        //         break;
        //     default:
        //         noteNum++;
        //         break;
        // };
    })
};

function render(line, type) {
    // let str = "<div class=\"rendered\">" + line.charAt(0) + "&emsp;" + line.substring(1) + "</div>";
    let str = "<div class=\"rendered\">" + line + "</div>";

    let start = document.getElementById('editable-content');
    // let start = function() {
    //     if (!document.querySelector('.rendered')) {
    //         return document.getElementById('editable-content');
    //     } else {
    //         let last = document.querySelector('.rendered:last-child');
    //         console.log(last);
    //         return last;
    //     }
    // };

    start.insertAdjacentHTML('beforeend', str);

    //
    // if (type == 5 || type == 6) {
    //     start.insertAdjacentHTML('beforeend', str);
    // } else if (type == 3) {
    //     str = "<div class=\"rendered\">" + "&gt; &emsp; &emsp;" + line.substring(7) + "</div>";
    //     start.insertAdjacentHTML('beforeend', str);
    // } else if (type == 0) {
    //     str = "<div class=\"rendered\">" + line + "</div>";
    //     start.insertAdjacentHTML('beforeend', str);
    // } else {
    //     start.insertAdjacentHTML('beforeend', str);
    // };
};
