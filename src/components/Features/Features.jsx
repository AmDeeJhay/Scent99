import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Features = () => {
  const features = [
    {
      title: 'library stool',
    //   status: 'New',
    //   price: '$250',
      image: '/src/assets/features/product_1.png',
    //   currentPrice: '$200',
    },
    {
      title: 'library stool Chair',
    //   status: 'Sales',
    //   price: '$250',
      image: '/src/assets/features/product_2.png',
    },
    {
      title: 'library stool Chair',
    //   price: '$250',
      image: '/src/assets/features/product_3.png',
    },
    {
      title: 'library stool Chair',
    //   status: 'New',
    //   price: '$250',
      image: '/src/assets/features/product_4.png',
    //   currentPrice: '$200',
    },
    {
        title: 'library stool',
      //   status: 'New',
      //   price: '$250',
        image: '/src/assets/features/product_1.png',
      //   currentPrice: '$200',
      },
      {
        title: 'library stool Chair',
      //   status: 'Sales',
      //   price: '$250',
        image: '/src/assets/features/product_2.png',
      },
      {
        title: 'library stool Chair',
      //   price: '$250',
        image: '/src/assets/features/product_3.png',
      },
      {
        title: 'library stool Chair',
      //   status: 'New',
      //   price: '$250',
        image: '/src/assets/features/product_4.png',
      //   currentPrice: '$200',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="features-section bg-gray-100 py-10">
      <div className="lg:container mx-auto">
        <SectionTitle title="Fragrance families" mb="mb-5" />
        <div className="slider-container features_slider w-full h-full">
        <Slider {...settings}>
          {features?.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="feature_image mb-4 relative px-20">
                <img className="w-full h-full object-cover grid grid-row-4" src={feature?.image} alt={feature?.title} />
                {feature?.status && (
                  <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                    <button className="text-sm font-inter font-normal">{feature?.status}</button>
                  </div>
                )}
              </div>
              <div className="feature_content">
                <div className="flex items-center justify-between">
                  <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">{feature?.title}</h4>
                </div>
                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                  {feature?.price}
                  {feature?.currentPrice && (
                    <span className="text-sm text-[#9a9caa] font-inter font-normal">{feature?.currentPrice}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Features;