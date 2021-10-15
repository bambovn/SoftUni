const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};


// импорт чай


describe("Tests …", function () {
    describe("test showmovies", function () {
        it("returns message if no movies", () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("returns array joined by comma and space", () => {
            expect(cinema.showMovies(['abc', 'def', 'xyz'])).to.equal('abc, def, xyz');
        });
        it("returns movie if only 1 element in the array", () => {
            expect(cinema.showMovies(['abc'])).to.equal('abc');
        });
        it("returns movie if only 1 element in the array", () => {
            expect(cinema.showMovies([''])).to.equal('');
        });
    });
    describe("test ticketPrice", function () {
        it("returns the price if the type exists", () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });
        it("throws an error if the type does not exist", () => {
            expect(() => cinema.ticketPrice('abc')).to.throw();
            expect(() => cinema.ticketPrice('1')).to.throw();
        });
    });
    describe("test swapSeatsInHall", function () {
        it("returns bad message if inputs are not integers", () => {
            expect(cinema.swapSeatsInHall(1.5, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1.5)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("returns bad message if one or both numbers are greater than 20", () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("returns bad message if one or both numbers are less than or equal 0", () => {
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, -2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("returns bad message if the inputs are strings", () => {
            expect(cinema.swapSeatsInHall(1, '1')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1', 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1', '1')).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("returns bad message if the inputs are equal", () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("returns good message if valid", () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });
    });
});