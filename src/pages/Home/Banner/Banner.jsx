import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/1.png';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/Black White Simple Opening Banner.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/2.png';
import img6 from '../../../assets/home/Brown and Orange Vintage Modern Americana Restaurant and Food Banner.png';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
    );
};

export default Banner;