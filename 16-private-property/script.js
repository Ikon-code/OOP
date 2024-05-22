class Wallet {
	constructor() {
		this._balance = 0;
		this._transaction = [];
		this._limit = 3000;
	}

	deposit(amount) {
		if ((amount = this._limit)) {
			console.log(
				'Acount Restricted: Suspecting Fraudulent activities in your account, Contact your bank for more details'
			);
		}
		this._processDeposit(amount);
		this._balance += amount;
	}

	withdraw(amount) {
		if (amount > this._balance) {
			console.log(
				'Not Enough Funds Your Account'
			);
			return;
		}
		this._processWithdraw(amount);
		this._balance -= amount;
	}

	_processDeposit(amount) {
		console.log(`Depositing ${amount}`);

		this._transaction.push({
			type: 'deposit',
			amount,
		});
	}

	_processWithdraw(amount) {
		console.log(`Withdrawing ${amount}`);

		this._transaction.push({
			type: 'withdraw',
			amount,
		});
	}
	get balance() {
		return this._balance;
	}

	get transaction() {
		return this._transaction;
	}
}

const wallet = new Wallet();

wallet.deposit(4000);
wallet.withdraw(5000);
console.log(wallet.balance);
console.log(wallet.transaction);
