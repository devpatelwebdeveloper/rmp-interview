// Array.prototype.find = function (fn) {};

// Array.prototype.findIndex = function (fn) {};

// Array.prototype.includes = function (search) {};

Array.prototype.find = function (fn) {
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i])) {
			return this[i];
		}
	}
	return undefined;
};

Array.prototype.findIndex = function (fn) {
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i])) {
			return i;
			break;
		}
	}
	return -1;
};

Array.prototype.includes = function (search) {
	for (let i = 0; i < this.length; i++) {
		if (search === this[i]) {
			return true;
		}
	}
	return false;
};
