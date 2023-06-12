// ids a serem manipulados (targeting id): select-cur, result-cur, worth-one, worth-two, exchange-rate através do método getEelementById
const currencyFirstEl = document.getElementById("select-cur");

const worthFirstEl = document.getElementById("worth-one");

const currencySecondEl = document.getElementById("result-cur");

const worthSecondEl = document.getElementById("worth-two");

const exchangeRateEl = document.getElementById("exchange-rate");
// implementando os eventListeners

updateRate();

function updateRate() {
  // this function was made to store and execute the API key for currency exchange
  fetch(
    `https://v6.exchangerate-api.com/v6/a214cff78361eb36bff7637c/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];

      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("change", updateRate);
