var tenseList = ["present", "future", "imperfect", "aorist", "present passive", "imperfect passive"]
var tensesActive = [true, true, true, true, true, true]

// BEGIN REQUIRED FUNCTIONS

function optionsForm() {
	s = "<b>Tenses:</b><br>"
	s += "<input type=\"checkbox\" name=\"present\" id=\"present\">Present<br>"
	s += "<input type=\"checkbox\" name=\"future\" id=\"future\">Future<br>"
	s += "<input type=\"checkbox\" name=\"imperfect\" id=\"imperfect\">Imperfect<br>"
	s += "<input type=\"checkbox\" name=\"aorist\" id=\"aorist\">Aorist<br>"
	s += "<input type=\"checkbox\" name=\"present passive\" id=\"present passive\">Present Passive<br>"
	s += "<input type=\"checkbox\" name=\"imperfect passive\" id=\"imperfect passive\">Imperfect Passive"
	return s
}

// return successful
function moduleSetup() {
	var tenses = tenseList.length
	for (i=0; i<tenseList.length; i++) {
		if (!(gebid(tenseList[i]).checked)) {
			tensesActive[i] = false
			tenses--
		}
	}
	if (tenses <= 0) { return false }
	loadScript("greekfunctions.js")
	loadScript("conjugation.js")
	loadScript("verblist.js")
	return true
}

function formatQuizDisplay() {
	var s = "<table style=\"text-align:center; width:100%; height:100%; border-collapse:collapse\">"
	s += "<tr style=\"height:20%\"><td colspan=2 id=\"verbDisplay\" style=\"font-size:48px; border:1px solid black\">&nbsp;</td></tr>"
	s += "<tr><td id=\"1psDisplay\" style=\"width:50%; height:30px; border:1px solid black\">&nbsp;</td><td id=\"1ppDisplay\" style=\"border:1px solid black\">&nbsp;</td></tr>"
	s += "<tr><td id=\"2psDisplay\" style=\"width:50%; height:30px; border:1px solid black\">&nbsp;</td><td id=\"2ppDisplay\" style=\"border:1px solid black\">&nbsp;</td></tr>"
	s += "<tr><td id=\"3psDisplay\" style=\"width:50%; height:30px; border:1px solid black\">&nbsp;</td><td id=\"3ppDisplay\" style=\"border:1px solid black\">&nbsp;</td></tr></table>"
	return s
}

// must return correct answer
function question(n) {
	var i = Math.floor(Math.random() * verblist.length)
	var person = Math.floor(Math.random() * 3) + 1
	var sp = Math.round(Math.random())
	var tense = Math.floor(Math.random() * tenseList.length)
	while (!tensesActive[tense]) {
		var tense = Math.floor(Math.random() * tenseList.length)
	}
	
	gebid("verbDisplay").innerHTML = verblist[i][0]
	gebid("1psDisplay").innerHTML = ""
	gebid("1ppDisplay").innerHTML = ""
	gebid("2psDisplay").innerHTML = ""
	gebid("2ppDisplay").innerHTML = ""
	gebid("3psDisplay").innerHTML = ""
	gebid("3ppDisplay").innerHTML = ""
	gebid(person + "p" + (sp == 0 ? "s" : "p") + "Display").innerHTML = tenseList[tense]
	return conjugate(verblist[i], sp * 3 + person, tense)
}

function showCorrectAnswer(answer) {
	gebid("verbDisplay").innerHTML = answer
}

// END REQUIRED FUNCTIONS
