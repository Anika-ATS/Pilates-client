import P1 from '../../../assets/img/P1.1.webp';
import p1 from '../../../assets/img/P1.jpg';
import P2 from '../../../assets/img/P2.jpg';
// import P3 from '../../../assets/img/P3.jpg';
import P4 from '../../../assets/img/P4.jpg';
import p5 from '../../../assets/img/p5.jpg';

const Banner = () => {
    return (
        <div className="carousel  h-[600px] ">
            <div id="slide1" className="carousel-item relative lg:w-full ">
                <img src={P1} className="w-full" />
                <div className="absolute  left-5  bottom-1/2 ">
                    {/* <div className='pl-5 pt-2 space-y-7 w-1/3'>
                        <h2 className=' ps-10  text-4xl'><span className='text-bold text-purple-800'></span></h2>
                        
                    </div> */}

                </div>
                <div className="absolute justify-start  left-20  bottom-40 ">
                    <a href="#slide5" className="btn btn-circle mr-6 bg-purple-800">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-purple-800">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={p1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={P2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
    
            <div id="slide4" className="carousel-item relative w-full">
                <img src={P4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={p5} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;


