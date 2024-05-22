function Player(name) {
	this.name = name;
	this.lvl = 1;
	this.points = 0;
}

Player.prototype.gainXp = function (xp) {
	this.points += xp;

	if (this.points >= 10) {
		this.lvl++;
		this.points -= 10;
	}
};

Player.prototype.describe = function () {
	return `${this.name} is level ${this.lvl} with ${this.points} experience in points`;
};

const player1 = new Player('Kyle');
const player2 = new Player('Kim');

player1.gainXp(6);
player2.gainXp(3);
player1.gainXp(2);
player2.gainXp(5);
player1.gainXp(3);
player2.gainXp(6);
player1.gainXp(9);
player2.gainXp(1);

console.log(player1.describe());
console.log(player2.describe());
