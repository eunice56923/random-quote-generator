const quoteBox = document.getElementById("quote");
const authorBox = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

async function getRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    
    // Use the data structure from the API response
    quoteBox.textContent = `"${data.content}"`;
    authorBox.textContent = `- ${data.author}`;
  } catch (error) {
    console.error("There was an error fetching the quote:", error);
    quoteBox.textContent = "Oops! Something went wrong. Please try again.";
    authorBox.textContent = "";
  }
}

// Add event listener to the button
newQuoteButton.addEventListener("click", getRandomQuote);
