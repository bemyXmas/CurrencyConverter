const apiKey = '88d4f1c3c09fdec27d4d2d21';

const convertBtn = document.getElementById('convert');
convertBtn.addEventListener('click', convertCurrency);

function convertCurrency() {
	const amount = document.getElementById('amount').value;
	const from = document.getElementById('from').value;
	const to = document.getElementById('to').value;

	fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`)
		.then(response => response.json())
		.then(data => {
			const result = data.conversion_result;
			document.getElementById('output').textContent = `${amount} ${from} = ${result} ${to}`;
		})
		.catch(error => {
			console.log(error);
			document.getElementById('output').textContent = 'An error occurred. Please try again later.';
		});
}

