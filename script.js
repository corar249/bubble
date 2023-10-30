

document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById("draggableImage");
  let isDragging = false;
  let initialX, initialY;

  img.addEventListener("mousedown", (e) => {
      isDragging = true;
      initialX = e.clientX - img.getBoundingClientRect().left;
      initialY = e.clientY - img.getBoundingClientRect().top;
      img.style.transition = "none";
  });

  document.addEventListener("mousemove", (e) => {
      if (isDragging) {
          const newX = e.clientX - initialX;
          const newY = e.clientY - initialY;
          img.style.left = newX + "vh";
          img.style.top = newY + "vh";

          createCircleInContainers(newX, newY);
      }
  });

  document.addEventListener("mouseup", () => {
      if (isDragging) {
          isDragging = false;
          img.style.transition = "top 0.7s";
          img.style.top = 90 + "vh";
      }
  });


function createCircleInContainers(x, y) {
  const containers = document.querySelectorAll('.container, .container2, .container3, .container4, .container5, .container6, .container7, .container8, .container9, .container9b, .container10, .container11,.container11b, .container12, .container13, .container14, .container15, .container16, .container17, .container18');

  for (const container of containers) {
      const containerRect = container.getBoundingClientRect();
      if (x >= containerRect.left && x <= containerRect.right && y >= containerRect.top && y <= containerRect.bottom) {
  
          createRandomCircle(container);
      }
  }
}
function createRandomCircle(container) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  const size = Math.random() * (80 - 10) + 10;
  const x = Math.random() * (container.offsetWidth - size); 
  const y = Math.random() * (container.offsetHeight - size); 
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.addEventListener('click', handleClick);
  container.appendChild(circle);
}


function handleClick(event) {
  const circle = event.target;
  circle.classList.add('active');
  setTimeout(() => {
      circle.remove();
  }, 300);
}
        img.addEventListener("mousedown", (e) => {
            isDragging = true;
            initialX = e.clientX - img.getBoundingClientRect().left;
            initialY = e.clientY - img.getBoundingClientRect().top;
            initialTop = parseInt(getComputedStyle(img).top);
            img.style.transition = "none";
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                const newX = e.clientX - initialX;
                const newY = e.clientY - initialY;
                img.style.left = newX + "px";
                img.style.top = newY + "px";
            }
        });

        document.addEventListener("mouseup", () => {
            if (isDragging) {
                isDragging = false;
                img.style.top = 90 + "vh"; 
                img.style.transition = "top 0.7s";
            }
        });

$(document).ready(function() {
const numCircles = 40; 
const numCircles2 = 20; 
const numCircles3 = 25; 
const numCircles4 = 15;

class CircleGenerator {
  constructor(containerSelector, numCircles, minSizeRatio, maxSizeRatio) {
      this.container = document.querySelector(containerSelector);
      this.containerWidth = this.container.offsetWidth;
      this.containerHeight = this.container.offsetHeight;
      this.numCircles = numCircles;
      this.minSize = (this.containerWidth * minSizeRatio) / 100; 
      this.maxSize = (this.containerWidth * maxSizeRatio) / 100; 
  }
  
  
    generateCircle() {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      const size = Math.random() * (this.maxSize - this.minSize) + this.minSize;
      const x = Math.random() * (this.containerWidth - size);
      const y = Math.random() * (this.containerHeight - size);
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.addEventListener('click', handleClick);
      this.container.appendChild(circle);
    }
  }
  
  function handleClick(event) {
    const circle = event.target;
    circle.classList.add('active');
    setTimeout(() => {
      circle.remove();
    }, 300);
  }
  const containers = [
    new CircleGenerator('.enclosure2', numCircles, 1, 3),
    new CircleGenerator('.container', numCircles, 10, 90),
    new CircleGenerator('.container2', numCircles2, 10, 30),
    new CircleGenerator('.container3', numCircles2, 10, 30),
    new CircleGenerator('.container4', numCircles2, 10, 80),
  new CircleGenerator('.container5', numCircles2, 10, 30),
  new CircleGenerator('.container6', numCircles3, 10, 80),
  new CircleGenerator('.container7', numCircles, 10, 80),
  new CircleGenerator('.container8', numCircles4, 10, 30),
  new CircleGenerator('.container9', numCircles2, 10, 80),
  new CircleGenerator('.container9b', numCircles2, 10, 30),
  new CircleGenerator('.container10', numCircles, 10, 80),
  new CircleGenerator('.container11', numCircles2, 10, 30),
  new CircleGenerator('.container11b', numCircles4, 10, 80),
  new CircleGenerator('.container12', numCircles2, 10, 30),
  new CircleGenerator('.container13', numCircles, 10, 80),
  new CircleGenerator('.container14', numCircles2, 10, 80),
  new CircleGenerator('.container15', numCircles2, 10, 30),
  new CircleGenerator('.container16', numCircles2, 10, 30),
  new CircleGenerator('.container17', numCircles2, 10, 30),
  new CircleGenerator('.container18', numCircles2, 10, 80),
  ];
  for (const generator of containers) {
    for (let i = 0; i < generator.numCircles; i++) {
      generator.generateCircle();
    }
  }
});
function handleClick(event) {
  const circle = event.target;
  circle.classList.add('active');
  setTimeout(() => {
      circle.remove();
  }, 300);
}

});

