// tenses: (0) present, (1) future, (2) imperfect, (3) aorist, (4) present passive, (5) imperfect passive

endings = [
	["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"], // present (0)
	["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"], // future (1)
	["ον", "ες", "ε(ν)", "ομεν", "ετε", "ον"], // imperfect, 2nd aorist (2)
	["α", "ας", "ε(ν)", "αμεν", "ατε", "αν"], // 1st aorist (3)
	["ομαι", "ῃ", "εται", "ομεθα", "εσθε", "ονται"], // present passive (4)
	["ομην", "ου", "ετο", "ομεθα", "εσθε", "οντο"] // imperfect passive (5)
]

function conjugate(verb, person, tense) {
	switch(tense) {
		case 0:
			stem = verb[0].substring(0, verb[0].length - 1)
			ending = endings[0][person - 1]
			break
		case 1:
			stem = verb[1].substring(0, verb[1].length - 1)
			ending = endings[1][person - 1]
			break
		case 2:
			stem = augment(verb[0].substring(0, verb[0].length - 1))
			ending = endings[2][person - 1]
			break
		case 3:
			if (verb[2].substring(verb[2].length - 1, verb[2].length) == "α") {
				stem = verb[2].substring(0, verb[2].length - 1)
				ending = endings[3][person - 1]
			} else {
				stem = verb[2].substring(0, verb[2].length - 2)
				ending = endings[2][person - 1]
			}
			break
		case 4:
			stem = verb[0].substring(0, verb[0].length - 1)
			ending = endings[4][person - 1]
			break
		case 5:
			stem = augment(verb[0].substring(0, verb[0].length - 1))
			ending = endings[5][person - 1]
			break
	}
	return placeRecessiveAccent(setAccents(stem, 0, -1) + ending)
}

/*function conjugate(verb, person, tense) {
	conjugated = setAccents(verb[0].substring(0, verb[0].length - 1), 0, -1)
	if (tense == 2 || tense == 3) {
		if (isVowel(conjugated[0])) { return "-" }
		conjugated = "ἐ" + conjugated
	}
	if (tense == 1 || tense == 3) {
		if (!isVowel(conjugated[conjugated.length - 1])) { return "-" }
		conjugated += "σ"
	}
	conjugated += endings[tense][person - 1]
	conjugated = placeRecessiveAccent(conjugated)
	return conjugated
}*/
