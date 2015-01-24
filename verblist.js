verblist = [
    ["ἄγω"],
    ["γράφω"],
    ["διώκω"],
    ["ἔχω"],
    ["θύω"],
    ["κωλύω"],
    ["λύω"],
    ["πέμπω"],
    ["φέρω"],
    ["φεύγω"],
    ["φυλάττω"],
    ["θεραπεύω"],
    ["παύω"],
    ["πείθω"],
    ["στρατεύω"],
    ["βασιλεύω"],
    ["κωλύω (ἀπό)"],
    ["παιδεύω"],
    ["πιστεύω"],
    ["κινδυνεύω"],
    ["μένω"],
    ["βλάπτω"],
    ["ἐθέλω"],
    ["κελεύω"],
    ["κόπτω"],
    ["παρέχω"]
]

function getVerb(verb) {
	for (i=0; i<verblist.length; i++) {
		if (verblist[i][0] == verb) {
			return verblist[i]
		}
	}
	return false
}
