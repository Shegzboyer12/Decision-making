
        // Function to advise clothing based on temperature and rain status
        function getClothingAdvice(temperature, isRaining) {
            let advice = "";

            if (temperature < 0) {
                advice += "It's freezing! Wear a heavy coat, scarf, gloves, and a hat.";
            } else if (temperature >= 0 && temperature <= 10) {
                advice += "It's quite cold. Wear a coat and a hat.";
            } else if (temperature > 10 && temperature <= 20) {
                advice += "It's cool. Wear a jacket or a sweater.";
            } else if (temperature > 20 && temperature <= 30) {
                advice += "The weather is mild. A t-shirt and jeans should be fine.";
            } else if (temperature > 30) {
                advice += "It's hot. Wear light clothing such as shorts and a t-shirt.";
            }

            if (isRaining) {
                advice += " Don't forget to take an umbrella or wear a raincoat.";
            }

            return advice;
        }

        let temperature = prompt("Please enter the current temperature (in °C):");

        temperature = Number(temperature);

        let raining = confirm("Is it raining? (Press OK for Yes, Cancel for No)");

        let clothingAdvice = getClothingAdvice(temperature, raining);

        document.getElementById("clothingAdvice").innerHTML = clothingAdvice;