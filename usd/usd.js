const exchangeRatesElement = document.getElementById('exchange-rates');

function fetchExchangeRates() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => {
            const exchangeRates = data.map(rate => `${rate.cc}: ${rate.rate.toFixed(2)}`).join('<br>');
            exchangeRatesElement.innerHTML = exchangeRates;
        })
        .catch(error => {
            console.error('Помилка отримання курсів валют:', error);
            exchangeRatesElement.innerHTML = 'Помилка отримання курсів валют';
        });
}

fetchExchangeRates();
setInterval(fetchExchangeRates, 60000); 