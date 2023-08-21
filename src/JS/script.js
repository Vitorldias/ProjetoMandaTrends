let time = 7000,
  currentImageIndex = 0,
  currentImageIndex1 = 0,
  currentImageIndex2 = 0,
  
  images = document.querySelectorAll(".carousel2 img" ),
  images1 = document.querySelectorAll(".carousel3 img"),
  images2 = document.querySelectorAll('.carousel1 img')

  max = images.length;
  max1 = images1.length;
  max2 = images2.length;


  function nextImage() {
    
    images[currentImageIndex].classList.remove("selected")
    images1[currentImageIndex1].classList.remove("selected")
    images2[currentImageIndex2].classList.remove("selected")

    currentImageIndex++
    currentImageIndex1++
    currentImageIndex2++


    if(currentImageIndex >= max)
      currentImageIndex = 0

      if(currentImageIndex1 >= max1)
      currentImageIndex1 = 0

      if(currentImageIndex2 >= max2)
      currentImageIndex2 = 0

    images[currentImageIndex].classList.add("selected")
    images1[currentImageIndex1].classList.add("selected")
    images2[currentImageIndex2].classList.add("selected")
  }

  function start() { 
    setInterval(() => {
      nextImage()
    }, time)

  }

  window.addEventListener("load", start)