
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Best Perfume Collections Perfect for you",
            subTitle: "Welcome to Scent99",
            image: "src/assets/images/banner_image.png"
        },
        {
            id: 2,
            title: "Best Perfume Collections Perfect for you",
            subTitle: "Welcome to Scent99",
            image: "src/assets/images/banner_image.png"
        },
        {
            id: 3,
            title: "Best Perfume Collections Perfect for you",
            subTitle: "Welcome to Scent99",
            image: "src/assets/images/banner_image.png"
        },
        {
            id: 4,
            title: "Best Perfume Collections Perfect for you",
            subTitle: "Welcome to Scent99",
            image: "src/assets/images/banner_image.png"
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="lg:container">
            <div className="slider-container slider_container">
                <Slider {...settings}>
                    {
                        products?.map((product) => (
                            <div key={product?.id} className="banner_slide_item flex items-center justify-between px-32">

                                {/* banner text  */}
                                <div className="banner_text max-w-[40%]">
                                    <p className="text-sm font-poppins text-[#272343] uppercase font-medium">{product?.subTitle}</p>
                                    <h3 className="text-6xl text-[#272343] font-poppins capitalize max-w-[631px] w-full font-bold mb-5">{product?.title}</h3>
                                    <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[45px] bg-[#029fae] rounded-full capitalize text-white cursor-pointer">shop now <MoveRight /></button>
                                </div>


                                {/* banner image  */}
                                <div className="banner_image  w-full h-full flex items-center justify-end max-w-[40%]">
                                    <img src={product?.image} alt={product?.title} className="w-full h-full object-cover" />
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Banner;