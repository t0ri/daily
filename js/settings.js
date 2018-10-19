const settingsIcon = document.getElementById('settings-icon');
const settingsOverlay = document.getElementById('settings');
const settingsText = document.getElementById('header-settings-text');

const mainContent = document.getElementsByClassName('main-content');
const mainHeading = document.getElementById('header-date');

const mainTextEdit = document.getElementById('editable-content');

const customizeOptions = document.getElementById('customize-options');
const customizeBtn = document.getElementById('customize-heading');

const customizeHeaderColorInput = document.getElementById('customize-options-header-color-input');
const customizeDateColorInput = document.getElementById('customize-options-date-color-input');

let settingsOverlayBool = false;
let customizeOptionsBool = false;


settingsIcon.addEventListener('click', function() {
    if (settingsOverlayBool === false) {
        settingsOverlayBool = true;
    } else {
        settingsOverlayBool = false;
    };

    settingsOverlayChange();
});

function settingsOverlayChange() {
    if (settingsOverlayBool === true) {
        settingsOverlay.style.visibility = "visible";

        settingsIcon.src = "./img/cross.png";
        settingsIcon.id = "settings-icon-cross";

        mainTextEdit.classList.add("noDOM");
        mainHeading.classList.add("noDOM");
        settingsText.classList.remove("noDOM");
    } else {
        settingsOverlay.style.visibility = "hidden";

        settingsIcon.src = "./img/settings.png";
        settingsIcon.id = "settings-icon";

        mainTextEdit.classList.remove("noDOM");
        mainHeading.classList.remove("noDOM");
        settingsText.classList.add("noDOM");
    };
};


// customizeBtn.addEventListener('click', function() {
//     if (customizeOptionsBool === false) {
//         customizeOptionsBool = true;
//     } else {
//         customizeOptionsBool = false;
//     }
//
//     toggleCustomizeOptions();
// });
//
// function toggleCustomizeOptions() {
//     if (customizeOptionsBool === false) {
//         customizeOptions.classList.add("noDOM");
//     } else {
//         customizeOptions.classList.remove("noDOM");
//     }
// };
//
// customizeHeaderColorInput.addEventListener('blur', updateColor('--customize-header-option', customizeHeaderColorInput.value));
// customizeDateColorInput.addEventListener('blur', updateColor('--customize-date-option', customizeDateColorInput.value));
//
// function updateColor(location, value) {
//     console.log("isCalled");
//     document.documentElement.style.setProperty(location, "#" + value);
//     // renderMain();
// };

// function renderMain() {
//     renderText();
//
// }
