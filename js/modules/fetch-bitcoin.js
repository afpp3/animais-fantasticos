export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const precoBtc = document.querySelector(target);
      precoBtc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => console.log(error));
}
