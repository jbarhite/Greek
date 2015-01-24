// BEGIN REQUIRED FUNCTIONS

function optionsForm() {
	return "No options."
}

// return successful
function moduleSetup() {
	loadScript("greekfunctions.js")
	loadScript("declension.js")
	loadScript("nounlist.js")
	return true
}

function formatQuizDisplay() {
	var s = "<table style=\"text-align:center; width:100%; height:100%; border-collapse:collapse\">"
	s += "<tr style=\"height:20%\"><td id=\"caseDisplayS\" style=\"width:50%; border:1px solid black\">&nbsp;</td>"
	s += "<td id=\"caseDisplayP\" style=\"border:1px solid black\">&nbsp;</td></tr>"
	s += "<tr><td id=\"nounDisplay\" colspan=2 style=\"font-size:48px; border:1px solid black\">&nbsp;</td></tr></table>"
	return s
}

// must return correct answer
function question(n) {
	var i = Math.floor(Math.random() * nounlist.length)
	var caseNumber = Math.floor(Math.random() * 9) % 5
	var sp = Math.round(Math.random())
	
	caseName = ["nominative", "genitive", "dative", "accusative", "vocative"][caseNumber]
	gebid("caseDisplayS").innerHTML = (sp == 0) ? caseName : "&nbsp;"
	gebid("caseDisplayP").innerHTML = (sp == 1) ? caseName : "&nbsp;"
	gebid("nounDisplay").innerHTML = nounlist[i][0]
	return decline(nounlist[i], caseNumber, sp)
}

function showCorrectAnswer(answer) {
	gebid("nounDisplay").innerHTML = answer
}

// END REQUIRED FUNCTIONS
