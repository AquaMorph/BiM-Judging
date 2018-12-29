var numJudges = null;
var entries = null;
var numInfo = null;
var numTopInfo = 1;
var sheet = null;
var lastRow = null;
var max = null;

// opOpen() creates a BiM drop down menu.
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{name : "Rank By Instant Runoff",functionName : "instantRunoff"}];
  spreadsheet.addMenu("BiM", entries);
};

// setJudges() creates a pop up asking for the number of judges.
function setJudges() {
  numJudges = parseInt(Browser.inputBox('Enter the number of judges'));
}

// setInfo creates a pop up asking for the number of judges.
function setInfo() {
  numInfo = 1+parseInt(Browser.inputBox('Enter the number of into columns before the ranks'));
}

// instantRunoff run IRV algorithm on the current sheet.
function instantRunoff() {
  // Get input about form data
  setInfo();
  setJudges();
  
  // Get sheet information
  sheet = SpreadsheetApp.getActiveSheet();
  lastRow = sheet.getLastRow();

  // Set sheet freeze
  sheet.setFrozenColumns(numInfo-1);
  sheet.setFrozenRows(numTopInfo);
  
  // Prepare for IRV
  copyData();
  getMax();
  fillBlanks();
  fillSum();
  
  // IRV
  runOff(max)
  rankFilms(lastRow);
  
  // Clean up sheet
  copyDataBack();
  moveRankColumn();
}

// moveRankColumn() moves the rank data to the beginning of the sheet.
function moveRankColumn() {
  sheet.insertColumnBefore(1);
  sheet.getRange(numTopInfo, numInfo+numJudges+2, lastRow, 1).copyTo(sheet.getRange(1, 1, lastRow, 1));
  sheet.deleteColumn(numInfo+numJudges+2);
}

// copyData() copies ranking data over a few rows as a backup before it is manipulated.
function copyData() {
  var data = sheet.getRange(numTopInfo+1, numInfo, lastRow, numJudges).getValues();
  sheet.getRange(numTopInfo+1, numInfo+numJudges+2, lastRow, numJudges).setValues(data);
}

// copyDataBack() copies ranking data over a few rows as a backup before it is manipulated.
function copyDataBack() {
  var data = sheet.getRange(numTopInfo+1, numInfo+numJudges+2, lastRow, numJudges).getValues();
  sheet.getRange(numTopInfo+1, numInfo, lastRow, numJudges).setValues(data);
  sheet.getRange(numTopInfo+1, numInfo+numJudges+2, lastRow, numJudges).deleteCells(SpreadsheetApp.Dimension.COLUMNS);
}

// getMax() sets max to the highest rank the judges gave
function getMax() {
  max = Math.max.apply(null, sheet.getRange(numTopInfo+1, numInfo, lastRow, 1).getValues());
}

// fillBlanks() fills all blanks from films that some judges did not rank but others did with the highest rank given plus one.
function fillBlanks() {
  var range = sheet.getRange(numTopInfo+1, numInfo, lastRow, numJudges).offset(0, 0, sheet.getDataRange().getNumRows()-1);
  range.setValues(range.getValues().map(function (row) {
    return row.map(function (cell) {
      return !cell ? (max+1) : cell;
    });
  }));
}

// rankFilms() creates a rank column and fills with the proper values.
function rankFilms(lastRow) {
  sheet.getRange(1, numInfo+numJudges+1).setValue("Rank");
  var rank = 1;
  var count = 0;
  var score = 0;
  for(var i = 1; i < lastRow; i++) {
    score = sheet.getRange(1+i, numInfo+numJudges).getValue();
    sheet.getRange(1+i, numInfo+numJudges).setValue(score);
    sheet.getRange(1+i, numInfo+numJudges+1).setValue(rank);
    if(score == sheet.getRange(2+i, numInfo+numJudges).getValue()) {
      count++;
    }
    else {
      rank += count + 1;
      count = 0;
    }
  }
}

// fillSum() creates a sum column for the total rankings of a film.
function fillSum() {
  sheet.getRange(1, numInfo+numJudges).setValue("Sum");
  var cel = sheet.getRange(numTopInfo+1, numInfo+numJudges);
  cel.setFormula('=SUM(' + sheet.getRange(numTopInfo+1, numInfo, 1, numJudges).getA1Notation() + ')');
  var fillDown = sheet.getRange(numTopInfo+1, numInfo+numJudges, lastRow-1);
  cel.copyTo(fillDown);
}

// googleSheetReloadHack() is a hack to make the sum formulas update their values.
function googleSheetReloadHack() {
  var cell = sheet.getRange('BI1'); 
  cell.setValue(1); 
}

// rankSort() sorts the rankings.
function rankSort() { 
  googleSheetReloadHack(); 
  sheet.sort(numInfo+numJudges);
}

// rerank() reranks all judges rankings based on the film that has been pulled.
function rerank(rank) {
  for(var i=0;i<numJudges;i++) {
    var judgeRank = sheet.getRange(rank+numTopInfo, numInfo+i).getValue();
    
    // Each row
    for(var j=0;j<rank;j++) {
      var cellRank = sheet.getRange(j+numTopInfo, numInfo+i).getValue();
      if(cellRank>judgeRank) {
        cellRank--;
        sheet.getRange(j+numTopInfo, numInfo+i).setValue(cellRank);
      }
    }
  }  
}

// runOff runs IRV until all films have been ranked.
function runOff(bRow) {
  if (bRow == 0);
  else {
    rankSort();
    rerank(bRow);
    runOff(bRow-1);
  }
}