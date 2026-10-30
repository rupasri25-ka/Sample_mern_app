import img12 from '../assets/img12.jpg'
import img13 from '../assets/img13.jpg'
import img14 from '../assets/img14.jpeg'
function Home(){
return(
    <div> 
        <div id="carouselStacked" class="carousel slide">
  <div class="d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Top controls</h5>
    <div>
      <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="prev">
        <span class="carousel-icon-prev" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselStacked" data-bs-slide="next">
        <span class="carousel-icon-next" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="carousel-inner rounded-5">
    <div class="carousel-item active">
      <img src={img12} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img13} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img14} class="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>
    </div>
    )

}
export default Home;
