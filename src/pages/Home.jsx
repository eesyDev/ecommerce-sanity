import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import { client } from '../utils/client';

const Home = () => {
  const [bannerData, setBannerData] = useState({});
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type=="product"]').then((data) => setProductData(data));

    client.fetch('*[_type=="banner"]').then((data) => setBannerData(data[0]));
  }, []);

  console.log(bannerData)
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
    </>
  )
}

export default Home