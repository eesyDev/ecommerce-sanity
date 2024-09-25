import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Product from '../components/Product';
import { client } from '../utils/client';
import FooterBanner from '../components/FooterBanner';

const Home = () => {
  const [bannerData, setBannerData] = useState({});
  const [footerBannerData, setFooterBannerData] = useState({});
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type=="product"]').then((data) => setProductData(data));

    client.fetch('*[_type=="banner"]').then((data) => {
      setBannerData(data[0])
      setFooterBannerData(data[1])
    });
  }, []);

  console.log(productData)
  return (
    <>
      <HeroBanner
        lgText={bannerData?.largeText}
        midText={bannerData?.midText}
        smallText={bannerData?.smallText}
        image={bannerData?.image}
        buttonText={bannerData?.buttonText}
        desc={bannerData?.descr}
      />
      <div className="products-heading">
        <h2>Best sellinng products</h2>
        <p>Speaker of many variation</p>
      </div>
      <div className="products-container">
        {
          productData?.map((item) => (
            <Product
              image={item?.image}
              name={item?.name}
              slug={item?.slug}
              price={item?.price}
            />
          ))
        }
      </div>
      <FooterBanner footerBanner={footerBannerData}/>
    </>
  )
}

export default Home