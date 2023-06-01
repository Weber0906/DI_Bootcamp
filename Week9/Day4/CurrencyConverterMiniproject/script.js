
async function fetchCurrencyCodes(apiKey) {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/codes`
    );
    const data = await response.json();
    return data.supported_codes;
  }
  
 
  async function fetchExchangeRate(apiKey, fromCurrency, toCurrency) {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`
    );
    const data = await response.json();
    return data.conversion_rate;
  }
  
  
  function convertCurrency() {
    const apiKey = '7cf52e0c29d3880aa6d8391c';
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
  
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);
  
   
    fetchExchangeRate(apiKey, fromCurrency, toCurrency)
      .then((conversionRate) => {
        const result = amount * conversionRate;
        const resultElement = document.getElementById('result');
        resultElement.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('Failed to fetch exchange rate.');
      });
  }
  
  
  function populateCurrencyOptions(currencyCodes) {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
  
    currencyCodes.forEach(([currencyCode, currencyName]) => {
      const option = document.createElement('option');
      option.value = currencyCode;
      option.textContent = `${currencyCode} - ${currencyName}`;
      fromCurrencySelect.appendChild(option.cloneNode(true));
      toCurrencySelect.appendChild(option);
    });
  }
  

  const apiKey = '7cf52e0c29d3880aa6d8391c';
  
 
  fetchCurrencyCodes(apiKey)
    .then((currencyCodes) => {
      populateCurrencyOptions(currencyCodes);
    })
    .catch((error) => {
      console.log('Error:', error);
      alert('Failed to fetch currency codes.');
    });

    function toggleCurrencies() {
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
      
        const tempCurrency = fromCurrencySelect.value;
        fromCurrencySelect.value = toCurrencySelect.value;
        toCurrencySelect.value = tempCurrency;
      }
  

  const convertButton = document.getElementById('convertBtn');
  convertButton.addEventListener('click', convertCurrency);

  const toggleButton = document.getElementById('toggleCurrencies');
    toggleButton.addEventListener('click', toggleCurrencies);
