// Function to display the surprise section when the button is clicked
function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

// Function to light up the candles and display the birthday popup
function lightUpCandles() {
    const candles = document.querySelectorAll(".candle");
    
    // Add the 'lit' class to all candles
    candles.forEach(candle => {
        candle.classList.add('lit');
    });

    // Show the "HAPPY 17TH BIRTHDAY" popup
    document.getElementById("birthday-popup").style.display = "block";
}
