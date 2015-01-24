endings = [
	["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"],
	["ω", "εις", "ει", "ομεν", "ετε", "ουσι(ν)"],
	["ον", "ες", "ε(ν)", "ομεν", "ετε", "ον"],
	["α", "ας", "ε(ν)", "αμεν", "ατε", "αν"]
]

function conjugate(verb, person, tense) {
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
}
