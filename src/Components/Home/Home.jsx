import { Link } from "react-router-dom";

export default function Home(){

    return <>
    
      <div className="">

        <p>this is home</p>

    <div className="relative ">

            <div className="carousel ">
  <div id="slide1" className="carousel-item relative w-full h-[90vh]">
    <img
      alt="Tailwind CSS slide example"
      src="https://www.tallengestore.com/cdn/shop/products/Jurassic_Park_-_Tallenge_Hollywood_Movie_Poster_Collection_711103c2-c79c-4738-b763-916198a02f1b.jpg?v=1577693323"
      className="w-[80vw] h-[70vh] ml-[8vw] mt-[10vh]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-center gap-[70vw]">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full h-[90vh]">
    <img
      alt="Tailwind CSS slide example"
      src="https://wallpapercat.com/w/full/f/e/e/1381692-2880x1800-desktop-hd-movie-poster-wallpaper-image.jpg"
      className="w-[80vw] h-[70vh] ml-[8vw] mt-[10vh]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-center gap-[70vw]">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full h-[90vh]">
    <img
      alt="Tailwind CSS slide example"
      src="https://cdn.dribbble.com/userupload/45708508/file/02dc9a2f3f99cca6d26783cc9e510a95.png?resize=752x&vertical=center"
      className="w-[80vw] h-[70vh] ml-[8vw] mt-[10vh]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-center gap-[70vw]">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
                  
            </div>
       
       <div className="relative bottom-15 ml-[47vw]">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                <Link to={"/list"}>Explore Now!</Link>
                </button>
       </div>

    </div>

            <div className="h-50 border-2 w-full">

            </div>

      </div>
    
    </>
}