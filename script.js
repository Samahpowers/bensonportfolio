const cardDivs = document.querySelectorAll(".card")


// Loop through each div and apply a style to the even divs
cardDivs.forEach((div, index) => {
  if (index % 2 === 1) {
    div.style.marginTop = '50px'; // Change the background color for even divs
     // Change the text color for even divs
    // Add any other styles you want to apply to even divs
  }
});