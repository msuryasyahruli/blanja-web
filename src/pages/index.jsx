import React from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../components/navbar/Headers";
import Carousel from "../components/carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import { useCategories } from "../config/redux/hooks/categoryHook";
import { useProducts } from "../config/redux/hooks/productHook";

// assets
import Trend2025Banner from "../assets/image/trend 2020.png";
import BlackEditionBanner from "../assets/image/black edition.png";
import CategoryBanner from "../assets/image/Mask Group (3).png";
import StarsIcon from "../assets/image/Rating 5 stars.png";

const promotions = [
  { title: "Trend 2025", image: Trend2025Banner },
  {
    title: "Black Edition",
    image: BlackEditionBanner,
  },
  { title: "Trend 2025", image: Trend2025Banner },
  {
    title: "Black Edition",
    image: BlackEditionBanner,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const params = {
    page: 1,
    limit: 12,
  };

  const { data: categories } = useCategories();
  const { data: products } = useProducts(params);

  return (
    <>
      <Headers />

      <main>
        <div className="container">
          <Carousel
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="my-4"
            loop={true}
            autoPlay={true}
          >
            {promotions.map((item, i) => (
              <SwiperSlide
                className="carousel-slide position-relative d-flex justify-content-center align-items-center"
                key={i}
              >
                <img
                  src={item.image}
                  alt="banner"
                  className="w-100 h-100 rounded-lg"
                  style={{ aspectRatio: "24/9", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Carousel>
          <div className="category">
            <h2 className="font-weight-bold">Category</h2>
            <p className="text-black-50">What are you currently looking for</p>
          </div>
          <Carousel
            breakpoints={{
              0: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
            className="my-2"
            loop={false}
            autoPlay={false}
          >
            {categories.map((item, i) => (
              <SwiperSlide
                className="carousel-slide position-relative d-flex justify-content-center align-items-center"
                key={i}
              >
                <h3 className="position-absolute text-white font-weight-bold">
                  {item.category_name}
                </h3>
                <img
                  src={CategoryBanner}
                  alt="banner"
                  className="w-100 rounded-lg bg-dark"
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Carousel>

          <div className="mt-5">
            <h2 className="font-weight-bold">New</h2>
            <p className="text-black-50">You’ve never seen it before!</p>
          </div>
          <div className="row mx-n2 mb-5">
            {products.map((data, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6 p-2">
                <div
                  className="card rounded shadow btn-card"
                  onClick={() => navigate(`/detail/${data.product_id}`)}
                >
                  <img
                    className="card-img"
                    src={data.product_thumbnail}
                    alt="Product"
                    style={{ objectFit: "cover", aspectRatio: 4 / 3 }}
                  />
                  <div className="p-1">
                    <h6 className="card-title m-0">{data.product_name}</h6>
                    <h6 className="text-danger card-text m-0">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "idr",
                      }).format(data.product_price)}
                    </h6>
                    <p className="card-text m-0">
                      <small className="text-muted">{data.store_name}</small>
                    </p>
                    <img src={StarsIcon} alt="stars" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="product">
            <h2 className="font-weight-bold">Popular</h2>
            <p className="text-black-50">
              Find clothes that are trending recently
            </p>
          </div>
          <div className="row mx-n2 mb-5">
            {products.map((data, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6 p-2">
                <div
                  className="card rounded shadow btn-card"
                  onClick={() => navigate(`/detail/${data.product_id}`)}
                >
                  <img
                    className="card-img"
                    src={data.product_thumbnail}
                    alt="Product"
                    style={{ objectFit: "cover", aspectRatio: 4 / 3 }}
                  />
                  <div className="p-1">
                    <h6 className="card-title m-0">{data.product_name}</h6>
                    <h6 className="text-danger card-text m-0">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "idr",
                      }).format(data.product_price)}
                    </h6>
                    <p className="card-text m-0">
                      <small className="text-muted">{data.store_name}</small>
                    </p>
                    <img src={StarsIcon} alt="stars" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
