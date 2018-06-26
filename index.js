function firstNotRepeatingCharacter(s) {
    var storage = {}
	for(let i = 0; i < s.length; i++) {
		if (storage[s[i]] === undefined){
			storage[s[i]] = 1
		} else {
			storage[s[i]] += 1
		}
	}
    
    for(key in storage){
        if (storage[key] === 1){
        	return key
        }
    }
    return "_"
}