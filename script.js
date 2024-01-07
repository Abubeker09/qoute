const api_url = "https://api.quotable.io/random"
const quote = document.getElementById("quote") 
const author = document.getElementById("author")

async function getQuote (url) {
  const respons = await fetch(url)
  let data = await respons.json()
  quote.innerHTML = '"'+data.content+'"';
  author.innerHTML = "-"+data.author+"-";
  console.log(data)
}

getQuote(api_url)

function tweet () {
  window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+ "---- by" + author.innerHTML,"Tweet Window","width=600, height=300")
}