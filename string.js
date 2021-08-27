// String.prototype.endsWith = function (search, position) {};

String.prototype.endsWith = function (search, position) {
	if (position) {
		if (search === this.substr(position - search.length, search.length)) {
			return true;
		}
		return false;
	}
	if (this.substr(-search.length) === search) {
		return true;
	} else return false;
};
