
// const Brand = () => {

//     const brands = [
//         {
//             id: 1,
//             image: "/src/assets/brands/brand_1.png"
//         },
//         {
//             id: 2,
//             image: "/src/assets/brands/brand_2.png"
//         },
//         {
//             id: 3,
//             image: "/src/assets/brands/brand_3.png"
//         },
//         {
//             id: 4,
//             image: "/src/assets/brands/brand_4.png"
//         },
//         {
//             id: 5,
//             image: "/src/assets/brands/brand_5.png"
//         },
//         {
//             id: 6,
//             image: "/src/assets/brands/brand_6.png"
//         }, 
//         {
//             id: 7,
//             image: "/src/assets/brands/brand_7.png"
//         },
 
//     ]

//     return (
//         <div className="lg:container mx-auto">
//             <div className="grid grid-cols-7 items-center gap-5 px-4">
//                 {
//                     brands?.map((brand) => (
//                         <div key={brand?.id} className="brand_item">
//                             <img className="w-auto h-auto" src={brand?.image} alt="brand" />
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Brand;

import React from "react";

const FragranceQuiz = () => {
  return (
    <div className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 lg:py-32" style={{ backgroundImage: "url('/src/assets/images/background.png')" }}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#2E1A47] font-arapey mb-4">
        Not Sure Which Fragrance <br /> Is Right For You?
      </h2>
      <p className="text-sm md:text-base text-[#333] max-w-xl mb-6">
        Take our interactive scent profile quiz to discover perfumes <br className="hidden md:block" />
        that match your personality, preferences, and lifestyle.
      </p>
      <button className="bg-[#56437A] text-white py-2 px-6 rounded-lg text-sm md:text-base font-medium">
        Find your scent
      </button>
    </div>
  );
};

export default FragranceQuiz;
