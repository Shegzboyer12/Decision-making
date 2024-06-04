function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "Invalid age";
    }
}

// Prompt the user to enter their age
let age = prompt("Please enter your age:");

// Convert the age to a number
age = Number(age);

// Get the ticket price based on the age
let ticketPrice = getTicketPrice(age);

// Display the ticket price
document.getElementById("ticketPrice").innerHTML = 
    "The price of your movie ticket is: $" + ticketPrice;