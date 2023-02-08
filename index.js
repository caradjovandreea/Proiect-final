const scrollToTopButton = document.querySelector('#goToTopButton');

scrollToTopButton.addEventListener('click',()=>{
window.scrollTo({
    top:0,
    left: 0,
    behavior:'smooth'
});

});

window.addEventListener('scroll', (event) =>{
    console.log(' salut');
    console.log(' window.scrollY:', window.scrollY);

    if(window.scrollY > 100){
        scrollToTopButton.style.visibility = 'visible';

    } else{
        scrollToTopButton.style.visibility = 'hidden';
    }
  
});

function initMap() {
    const bucuresti= { lat: 44.444, lng: 26.121 };
    const map = new google.maps.Map(document.getElementById("map"), {
      scaleControl: true,
      center: bucuresti,
      zoom: 10,
    });
    const infowindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({ map, position: bucuresti });
  
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
  
  window.initMap = initMap;
  