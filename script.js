const cardDivs = document.querySelectorAll(".card")
const paragraph = document.querySelectorAll(".rsn")
const contact =document.querySelector(".contact")
const portfolio =document.querySelector(".portfolio")
const contactsPopUp = document.querySelector(".contacts-popup")
const mainDetails = document.querySelector(".footer")

portfolio.addEventListener("click",(e)=>{
  if(portfolio.contains(e.target)){
mainDetails.scrollIntoView({ behavior: "smooth" })
console.log(e.target)
  }
  
  
})

document.addEventListener("click", (e)=>{
  if(contact.contains(e.target)){
contactsPopUp.style.display = "block"
  } else{
    contactsPopUp.style.display = "none"
  }
})

// Loop through each div and apply a style to the even divs
cardDivs.forEach((div, index) => {
  if (index % 2 === 1) {
    div.style.marginTop = '45px'; // Change the background color for even divs
     // Change the text color for even divs
    // Add any other styles you want to apply to even divs
  }
});
paragraph.forEach((p, index)=>{
  if(index % 2 === 1){
    p.style.color = "rgb(111, 120, 255)"
  }
})