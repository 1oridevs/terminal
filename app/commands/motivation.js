export const description = "Get a random motivational quote";

export default function motivation() {
  const quotes = [
    "“The only way to do great work is to love what you do.” – Steve Jobs",
    "“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau",
    "“Don’t watch the clock; do what it does. Keep going.” – Sam Levenson",
    "“The future depends on what you do today.” – Mahatma Gandhi",
    "“Hard work beats talent when talent doesn't work hard.” – Tim Notke"
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return randomQuote;
}
