class Wallet {
	#balance = 0;
	#transactions = [];
	#limit = 3000;

	deposit(amount) {
		if (amount > this.#limit) {
			console.log(
				'Acount Restricted: Suspecting Fraudulent activities in your account, Contact your bank for more details'
			);
		}
		this.#processDeposit(amount);
		this.#balance += amount;
	}

	withdraw(amount) {
		if (amount > this.#balance) {
			console.log(
				'Not Enough Funds Your Account'
			);
			return;
		}
		this.#processWithdraw(amount);
		this.#balance -= amount;
	}

	#processDeposit(amount) {
		console.log(`Depositing ${amount}`);

		this.#transactions.push({
			type: 'deposit',
			amount,
		});
	}

	#processWithdraw(amount) {
		console.log(`Withdrawing ${amount}`);

		this.#transactions.push({
			type: 'withdraw',
			amount,
		});
	}
	get balance() {
		return `Your balance is ${this.#balance}`;
	}

	get transaction() {
		return this.#transactions;
	}
}

const wallet = new Wallet();
wallet.deposit(50000);
wallet.withdraw(200);
console.log(wallet.balance);
