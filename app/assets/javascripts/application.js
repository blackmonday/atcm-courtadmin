/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
    
    
    
    
    
    $( "#progress-bar-1" ).animate({
        width: "100%"
    }, 5000, function() {
        document.getElementById("progressBar1").style.display = "none";
        document.getElementById("uploadDate1").style.display = "table-cell";
        document.getElementById("uploadTime1").style.display = "table-cell";
        document.getElementById("row1cancel").style.display = "none";
        document.getElementById("row1remove").style.display = "table-cell";

    });

    $( "#progress-bar-2" ).animate({
        width: "100%"
    }, 1500, function() {
        document.getElementById("progressBar2").style.display = "none";
        document.getElementById("uploadDate2").style.display = "table-cell";
        document.getElementById("uploadTime2").style.display = "table-cell";
        document.getElementById("row2cancel").style.display = "none";
        document.getElementById("row2remove").style.display = "table-cell";
    });

    $( "#progress-bar-3" ).animate({
        width: "100%",
    }, 8000, function() {
        document.getElementById("progressBar3").style.display = "none";
        document.getElementById("uploadDate3").style.display = "table-cell";
        document.getElementById("uploadTime3").style.display = "table-cell";
        document.getElementById("row3cancel").style.display = "none";
        document.getElementById("row3remove").style.display = "table-cell";
    });
    
})



/* TABS PATTERN */
function tabGroup(tableObj, which) {

    tabA = 'TAB-ONE';
    tabB = 'TAB-TWO';
    tabC = 'TAB-THREE';

    if(which == tabA) {
        document.getElementById("tabA").className = "tab-on";
        document.getElementById("tabB").className = "tab";
        document.getElementById("tabC").className = "tab";
        document.getElementById("tabOneContent").style.display = "block";
        document.getElementById("tabTwoContent").style.display = "none";
        document.getElementById("tabThreeContent").style.display = "none";
    } else if(which == tabB) {
        document.getElementById("tabA").className = "tab";
        document.getElementById("tabB").className = "tab-on";
        document.getElementById("tabC").className = "tab";
        document.getElementById("tabOneContent").style.display = "none";
        document.getElementById("tabTwoContent").style.display = "block";
        document.getElementById("tabThreeContent").style.display = "none";
    } else if(which == tabC) {
        document.getElementById("tabA").className = "tab";
        document.getElementById("tabB").className = "tab";
        document.getElementById("tabC").className = "tab-on";
        document.getElementById("tabOneContent").style.display = "none";
        document.getElementById("tabTwoContent").style.display = "none";
        document.getElementById("tabThreeContent").style.display = "block";
    } 
}












/* FILE 1 */
function overlay_file_1_on() {
    document.getElementById("overlay-file-1").style.display = "block";
}
function overlay_file_1_off() {
    document.getElementById("overlay-file-1").style.display = "none";
}
function removeFile1() {
    document.getElementById("row1").style.display = "none";
}



/* FILE 2 */
function overlay_file_2_on() {
    document.getElementById("overlay-file-2").style.display = "block";
}
function overlay_file_2_off() {
    document.getElementById("overlay-file-2").style.display = "none";
}
function removeFile2() {
    document.getElementById("row2").style.display = "none";
}



/* FILE 3 */
function overlay_file_3_on() {
    document.getElementById("overlay-file-3").style.display = "block";
}
function overlay_file_3_off() {
    document.getElementById("overlay-file-3").style.display = "none";
}
function removeFile3() {
    document.getElementById("file3name").innerText = "";
    document.getElementById("row3").style.display = "none";
}

/* UPLOAD DOCUMENTS & UPLOADING DOCUMENTS */
function on2() {
    document.getElementById("overlay2").style.display = "block";
}
function on() {
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
}
function removeRow1() {
    /*document.getElementById("row1").style.display = "none";*/
    document.getElementById("noFilesAdded").style.display = "block";
    document.getElementById("filesAdded").style.display = "none";
}










/*
function on3() {
    document.getElementById("overlay3").style.display = "block";
}

function on4() {
    document.getElementById("overlay4").style.display = "block";
}

function off3() {
    document.getElementById("overlay3").style.display = "none";
}
function off4() {
    document.getElementById("overlay4").style.display = "none";
}
*/
