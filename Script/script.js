window.addEventListener("load", (event) => {

    window.addEventListener("scroll", (event) => {
    
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
        document.getElementsByTagName("nav")[0].className= "alt";
      }else{
        document.getElementsByTagName("nav")[0].classList.remove("alt");
      }});
        
    

  let theta = Math.PI / 3.0;
  let new_theta = 0.0;
  let new_x = 0.0;
  let new_y = 0.0;
  let wheel_radius = 230.0;
  let wheel_theta = 0.0;
  const cards = document.querySelectorAll(".card");
  const wheel = document.querySelector(".wheel");
  const center = {
    x: parseFloat(getComputedStyle(cards[0]).left),
    y: parseFloat(getComputedStyle(cards[0]).top),
  };

  cards.forEach((card, index) => {
    new_theta = theta * index;
    new_x = Math.cos(new_theta) * wheel_radius;
    new_y = -1.0 * Math.sin(new_theta) * wheel_radius;

    card.style.left = `${center.x + new_x}px`;
    card.style.top = `${center.y + new_y}px`;
  });

  document.addEventListener("wheel", (event) => {
    let scroll_speed = event.deltaY * 0.002;
    wheel_theta = wheel_theta + scroll_speed;
    wheel.style.transform = `translate(-50%, -50%) rotate(${
      wheel_theta * (180 / Math.PI)
    }deg)`;
  });
});
