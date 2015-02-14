var sets = [
	["Verbs", "Vocabulary/verbs.js"],
	["Nouns", "Vocabulary/nouns.js"],
	["Adjectives", "Vocabulary/adjectives.js"],
	["Principal Parts", "Vocabulary/principalparts.js"]
]

var flip
var shuffle
var random
var nSets = 0
var vocab = []
var subsets = []

function addSet() {
	loadScript(sets[gebid("vocabSetSelect").selectedIndex][1])
	gebid("addSet").disabled = true
	setTimeout("addSet2()", 500)
}

function addSet2() {
	subsets = []
	for (var i=0; i<vocabSet.length; i++) {
		if (vocabSet[i].length == 3) {
			subsets.push([vocabSet[i][2], i, vocabSet.length])
			if (subsets.length > 1) { subsets[subsets.length - 2][2] = i }
			vocabSet[i] = vocabSet[i].slice(0, 2)
		}
	}
	for (var i=0; i<subsets.length; i++) {
		gebid("subsetTable").innerHTML += "<tr><td>" + subsets[i][0] + "</td><td>" + (subsets[i][2]-subsets[i][1]) + " terms</td><td><input type=\"button\" value=\"Add\" onclick=\"addSet3(" + subsets[i][1] + ", " + subsets[i][2] + ")\" style=\"width:100%\"></td></tr>"
	}
	gebid("subsetTable").innerHTML += "<tr><td colspan=2><input type=\"button\" value=\"Add Entire Set\" onclick=\"addSet3(0, " + vocabSet.length + ")\" style=\"width:100%\"></td><td><input type=\"button\" value=\"Close\" onclick=\"addSet4()\"></td></tr>"
	gebid("subsetTable").style.display = "table"
}

function addSet3(a, b) {
	nSets++
	vocab = vocab.concat(vocabSet.slice(a, b))
	gebid("nSets").innerHTML = nSets + " set" + (nSets == 1 ? "" : "s")
	gebid("nTerms").innerHTML = vocab.length + " term" + (vocab.length == 1 ? "" : "s")
}

function addSet4() {
	gebid("subsetTable").style.display = "none"
	gebid("subsetTable").innerHTML = ""
	gebid("addSet").disabled = false
}

function shuffle(array) {
	for (var i=array.length-1; i>0; i--) {
		var j = Math.floor(Math.random() * (i + 1))
		var temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}

// BEGIN REQUIRED FUNCTIONS

function optionsForm() {
	var s = "<select id=\"vocabSetSelect\">"
	for (var i=0; i<sets.length; i++) {
		s += "<option>" + sets[i][0] + "</option>"
	}
	s += "</select> <input id=\"addSet\" type=\"button\" value=\"Add Set\" onclick=\"addSet()\"><br><br>"
	s += "<table id=\"subsetTable\" style=\"display:none\" border=1 cellpadding=3></table><br>"
	s += "<table border=1 cellpadding=3><tr><td id=\"nSets\">0 sets</td><td id=\"nTerms\">0 terms</td></tr></table><br><br>"
	s += "<input type=\"checkbox\" name=\"flip\" id=\"flip\">Flip question/answer<br>"
	s += "<input type=\"checkbox\" name=\"shuffle\" id=\"shuffle\">Shuffle terms (only applicable if Every Term Once selected)<br><br>"
	s += "<input type=\"radio\" name=\"random\" checked=\"checked\">Every Term Once<br>"
	s += "<input type=\"radio\" name=\"random\" id=\"random\">Random Selection"
	return s
}

// return successful
function moduleSetup() {
	if (vocab.length == 0) {
		alert("No vocab sets added!")
		return false
	}
	flip = gebid("flip").checked
	random = gebid("random").checked
	if (gebid("shuffle").checked) { shuffle(vocab) }
	return true
}

function formatQuizDisplay() {
	return "<span id='vocabDisplay' style=\"font-size:48px\"></span>"
}

// must return correct answer
function question(n) {
	var i = n - 1
	if (random) { i = Math.floor(Math.random() * vocab.length) }
	if (i >= vocab.length) {
		endSession()
		return false
	}
	if (random) { centerDisplay("<span style=\"font-size:24px\">(" + n + " / ?)</span>") }
	else { centerDisplay("<span style=\"font-size:24px\">(" + n + " / " + vocab.length + ")</span>") }
	gebid("vocabDisplay").innerHTML = vocab[i][flip ? 1 : 0]
	return vocab[i][flip ? 0 : 1]
}

function showCorrectAnswer(answer) {
	gebid("vocabDisplay").innerHTML = answer
}

// END REQUIRED FUNCTIONS
