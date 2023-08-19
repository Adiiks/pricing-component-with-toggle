const basicPriceMonth = 19.99;
const professionalPriceMonth = 24.99;
const masterPriceMonth = 39.99;

const basicPriceAnnual = 199.99;
const professionalPriceAnnual = 249.99;
const masterPriceAnnual = 399.99;

const basicPrice = document.getElementById('basic');
const professionalPrice = document.getElementById('professional');
const masterPrice = document.getElementById('master');

const toogle = document.getElementById('toogle');

let priceMode = 'Annually';

toogle.addEventListener('change', () => {
    if (priceMode === 'Annually') {
        priceMode = 'Monthly';
        basicPrice.innerText = basicPriceMonth;
        professionalPrice.innerText = professionalPriceMonth;
        masterPrice.innerText = masterPriceMonth;
    } else {
        priceMode = 'Annually';
        basicPrice.innerText = basicPriceAnnual;
        professionalPrice.innerText = professionalPriceAnnual;
        masterPrice.innerText = masterPriceAnnual;
    }
});