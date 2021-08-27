describe("String", function () {
	describe("#endsWith()", function () {
		it("should return true if the string ends with the given string", function () {
			expect("devashish".endsWith("shish")).to.equal(true);
		});

		it("should return false if the string does not end with the given string", function () {
			expect("foo".endsWith("bar")).to.equal(false);
		});

		context("with a position argument", function () {
			it("returns true if the postion argument lines up with the search string", function () {
				expect("1234".endsWith("23", 3)).to.equal(true);
			});

			it("returns false if the position argument does not line up with the search string", function () {
				expect("foobar".endsWith("ar", 3)).to.equal(false);
			});
		});
	});
});
