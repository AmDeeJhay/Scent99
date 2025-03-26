import Banner from "../../components/Banner/Banner";
import Delivery from "../../components/Delivery/Delivery";
// import Brand from "../../components/Brand/Brand";
import Categories from "../../components/Categories/Categories";
import Clients from "../../components/Clients/Clients";
import Product from "../../components/Product/Product";
import Recent from "../../components/Recent/Recent";
import Features from './../../components/Features/Features';

const Home = () => {
  return (
    <div>
      {/* Banner Component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner></Banner>
      </div>

      {/* delivery component */}
      <div className="w-full min-h-[#150px] bg-white shadow-md p-7">
        <Delivery></Delivery>
      </div>

      {/* brand component  */}
      {/* <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
        <Brand></Brand>
      </div> */}

      {/* features component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features></Features>
      </div>

      {/* features component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Categories></Categories>
      </div>

      {/* product component  */}
      <div className="w-full flex items-center justify-center pb-[80px]">
        <Product></Product>
      </div>


      {/* client say component  */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">

        <Clients></Clients>

      </div>


      {/* Recent component  */}
      <div className="w-full flex items-center justify-center pb-[80px] pt-[80px]">
        <Recent></Recent>
      </div>

    </div>
  );
};

export default Home;
