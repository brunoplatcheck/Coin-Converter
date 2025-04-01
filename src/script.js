function showPrompt() {
    document.getElementById('prompt').style.display = 'block';
}

function closePrompt() {
    document.getElementById('prompt').style.display = 'none';
}

function calculate() {
    let selectedCurrency = document.querySelector('input[name="currency"]:checked');
    let amount = parseFloat(document.getElementById("amount").value);
    
    let exchangeRates = {
        dollar: 5.30,
        euro: 5.80,
        won: 0.0041
    };

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount in BRL.");
        return;
    }

    if (selectedCurrency) {
        let convertedValue = amount / exchangeRates[selectedCurrency.value];

        // Format number to "1.000.000,00" style
        let formattedValue = convertedValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        alert(`R$ ${amount.toFixed(2)} BRL is equal to ${formattedValue} ${selectedCurrency.value.toUpperCase()}`);
        closePrompt();
    } else {
        alert("Please select a currency.");
    }
}
