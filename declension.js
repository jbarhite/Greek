function decline(noun, caseNumber, number) {
	return identifyDeclension(noun)
}

function identifyDeclension(noun) {
	parts = ", " + setAccents(noun[1], 0, 0) + ", " + noun[2]
	parts1 = setAccents(noun[0], 0, 0).substring(noun[0].length - 1, noun[0].length) + parts
	parts2 = setAccents(noun[0], 0, 0).substring(noun[0].length - 2, noun[0].length) + partfs
	switch(parts1) {
		case "η, ης, ἡ":
		case "α, ας, ἡ":
		case "α, ης, ἡ":
			return 1
		case "α, ων, τά":
			return 2
	}
	switch(parts2) {
		case "αι, ων, αἱ":
		case "ης, ου, ὁ":
		case "ας, ου, ὁ":
		case "αι, ων, οἱ":
			return 1
		case "ος, ου, ἡ":
		case "ος, ου, ὁ":
		case "οι, ων, οἱ":
		case "οι, ων, αἱ":
		case "ον, ου, τό":
			return 2
	}
	return "3"
}
