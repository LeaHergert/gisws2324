// Wait for the window to load before executing JavaScript
window.addEventListener("load", (event) => {
  // Add a scroll event listener to the window
  window.addEventListener("scroll", (event) => {
    // Check if the scroll position is greater than 100 pixels from the top of the body
    // or 50 pixels from the top of the document element (for compatibility with older browsers)
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 50
    ) {
      // If the condition is met, add the "alt" class to the first navigation element
      document.getElementsByTagName("nav")[0].className = "alt";
    } else {
      // If not, remove the "alt" class from the first navigation element
      document.getElementsByTagName("nav")[0].classList.remove("alt");
    }
  });

  // Get a reference to the header element
  var header = document.querySelector("header");

  // Get the desired height (e.g., the client height of the body)
  var bodyHeight = document.body.clientHeight;

  // Set the height of the header using CSS
  header.style.height = bodyHeight + "px";

  // Check if the current page URL contains the string 'index'
  if (document.location.href.indexOf('index') > -1){ 
    // Define some variables for rotating cards in a wheel-like arrangement
    let theta = Math.PI / 3.0;
    let new_theta = 0.0;
    let new_x = 0.0;
    let new_y = 0.0;
    let wheel_radius = 230.0;
    let wheel_theta = 0.0;
    
    // Select all elements with the class "card" and the element with class "wheel"
    const cards = document.querySelectorAll(".card");
    const wheel = document.querySelector(".wheel");
    
    // Define the center point for arranging cards
    const center = {
      x: parseFloat(getComputedStyle(cards[0]).left),
      y: parseFloat(getComputedStyle(cards[0]).top),
    };
  
    // Loop through each card and position it in a circular pattern
    cards.forEach((card, index) => {
      new_theta = theta * index;
      new_x = Math.cos(new_theta) * wheel_radius;
      new_y = -1.0 * Math.sin(new_theta) * wheel_radius;
  
      card.style.left = `${center.x + new_x}px`;
      card.style.top = `${center.y + new_y}px`;
    });
  
    // Add a wheel rotation effect in response to the mouse wheel event
    document.addEventListener("wheel", (event) => {
      let scroll_speed = event.deltaY * 0.002;
      wheel_theta = wheel_theta + scroll_speed;
      wheel.style.transform = `translate(-50%, -50%) rotate(${
        wheel_theta * (180 / Math.PI)
      }deg)`;
    });
  }
});
