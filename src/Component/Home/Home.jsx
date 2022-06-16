import React from "react";
import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "./Home.css";
import styles from "./Home.module.css";

const Firstslider = () => {
  return (
    <>
      <Swiper
      className={styles.swiper}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide >
          <img
            src="https://cdn.modesens.com/banner/20220613-modesens-AERYNE-1140x400-EN.jpg"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.modesens.com/banner/20220614-modesens-Monnalisa-1140x400-EN.jpg"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.modesens.com/banner/20220612-modesens-TheSportsEdit-1140x400-EN.jpg"
            alt="slide3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.modesens.com/banner/20220611-modesens-Sugar-1140x400-F-EN.jpg"
            alt="slide4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.modesens.com/banner/20220613-modesens-SummerFashionGuide-1140x400-EN.jpg"
            alt="slide5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.modesens.com/banner/20220516-modesens-SS22-SALE-1140x400-EN.jpg"
            alt="slide6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gcdnb.pbrd.co/images/gJZXphZgjee1.png?o=1"
            alt="slide7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gcdnb.pbrd.co/images/H68VJBbChh8Q.png?o=1"
            alt="slide8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gcdnb.pbrd.co/images/UIdn53huJhIu.png?o=1"
            alt="slide9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
          src="https://cdn.modesens.com/banner/20220615-modesens-Renaisa-1140x400-US-EN.jpg" 
          alt="slide10" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const Mid1 = () => {
  return (
    <>
      <Center mt={"80px"}>
        <VStack>
          <Text fontWeight={"600"} fontSize={"25px"}>
            Featured Brands
          </Text>
          <Text color={"#7A8496"} fontSize={"20px"} fontWeight={"400"}>
            Compare across our 500+ partner stores to find the products you want
            at the best price.
          </Text>
        </VStack>
      </Center>
    </>
  );
};

const Secondslider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img
            className={styles.img222}
            src="https://gcdnb.pbrd.co/images/yEEY2jTyGqoo.png?o=1"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.img222}
            src="https://gcdnb.pbrd.co/images/EjMhCq4RrvUV.png?o=1"
            alt="slide2"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const Thirdslider = () => {
  return (
    <>
      <div className={styles.mid2text}>
        <h2>
          <span>Special Offers</span>
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <img
              src="https://cdn.modesens.com/banner/20220609-modesens-FPillowBags-364x484-F.jpg"
              alt="img1"
            />

            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Relive That Slumber Party Fun
                </Text>
                <Text fontWeight={"600"}>
                  Discover a pillow bag for everyday wear
                </Text>
                <button className={styles.blackbuttonhover}>READ NOW</button>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.modesens.com/banner/20220609-modesens-Sheerpants-364x484-Fgai.jpg"
              alt="img2"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  New To Sale
                </Text>
                <Text fontWeight={"600"}>Fresh Cut</Text>
                <button className={styles.blackbuttonhover}>READ NOW</button>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.modesens.com/banner/20220610-modesens-blog-364x484-F.jpg"
              alt="img3"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Delight in Your See-Through-Ness{" "}
                </Text>
                <Text fontWeight={"600"}>Wear transparent pants</Text>
                <button className={styles.blackbuttonhover}>READ NOW</button>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.modesens.com/banner/20220612-modesens-Gucci-364x484.jpg"
              alt="img4"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Less Sesons and More Sizes
                </Text>
                <Text fontWeight={"600"}>BLog by SSENSE</Text>
                <button className={styles.blackbuttonhover}>READ NOW</button>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.modesens.com/banner/20220523-modesens-Guide-364x484.jpg"
              alt="img5"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Gucci
                </Text>
                <Text fontWeight={"600"}>Father.s Day Gifts</Text>
                <button className={styles.blackbuttonhover}>READ NOW</button>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.modesens.com/banner/20220531-modesens-Sale-364x484.jpg"
              alt="img6"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  You Guide To Sale Season
                </Text>
                <Text fontWeight={"600"}>
                  Top 5 Tips to Get Designer Sale for Less Online{" "}
                </Text>
                <button className={styles.blackbuttonhover}>READ NOW</button>
              </VStack>
            </Center>
          </SwiperSlide>
        </Swiper>
      </div>

      <Center>
        <button className={styles.blackbuttonhover}>VIEW MORE</button>
      </Center>
    </>
  );
};


const Product1 = () => {
  const productdata1 = [
    {
      imgsrc: "https://cdn.modesens.com/product/7298931_66?w=400&",
      text1: "BURBERRY",
      text2: "Bbry Carrick Top Tee Cn Ss Chckd Logo Sl In White",
      text3: "$341 - $570",
      text4: "24 Store",
      id: 1,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/47635068?w=400&",
      text1: "ZIMMERMANN",
      text2: "Dancer Empire-waist Linen-silk Blend Midi Dress In Pink",
      text3: "$548 - $952",
      text4: "24 Store",
      id: 2,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/10535447_122?w=400&",
      text1: "BALMAIN",
      text2: "Square-neck Button-shoulder Ribbed Top In Blue",
      text3: "$560 - $1150",
      text4: "24 Store",
      id: 3,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/18444081_124?w=400&",
      text1: "BURBERRY",
      text2:
        "Net Sustain Checked Poplin-trimmed Cotton-jersey T-shirt In Black",
      text3: "$355 - $605",
      text4: "24 Store",
      id: 4,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/37731631?w=400&",
      text1: "ALEXANDER MCQUEEN",
      text2: "Glossed-leather Exaggerated-sole Loafers In Black",
      text3: "$528 - $913",
      text4: "24 Store",
      id: 5,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/48287774?w=400&",
      text1: "GANNI",
      text2: "Women's Black Other Materials Sandals",
      text3: "$190 - $471",
      text4: "24 Store",
      id: 6,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/7298931_66?w=400&",
      text1: "BURBERRY",
      text2: "Bbry Carrick Top Tee Cn Ss Chckd Logo Sl In White",
      text3: "$341 - $570",
      text4: "24 Store",
      id: 7,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/40615641_2?w=400&",
      text1: "SAINT LAURENT",
      text2: "Université Oversize Cotton Logo Graphic Sweatshirt In Lilla",
      text3: "$380 - $890",
      text4: "24 Store",
      id: 8,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/7298931_66?w=400&",
      text1: "ALEXANDER MCQUEEN",
      text2: "Crossover-strap Slim-fit Stretch-knit Mini Dress In Black",
      text3: "$892 - $1999",
      text4: "24 Store",
      id: 9,
    },
    {
      imgsrc:
        "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212144F109000_1.jpg",
      text1: "BURBERRY",
      text2: "Cotton Poplin Collared Sleeveless Top In White",
      text3: "$70 - $170",
      text4: "24 Store",
      id: 10,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/48383362?w=400&",
      text1: "ALEXANDER MCQUEEN",
      text2: "Alexander Macqueen Woman's Black Rave Buckle Leather Ankle Boots",
      text3: "$553 - $1554",
      text4: "24 Store",
      id: 11,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/41449769_2?w=400&",
      text1: "JACQUEMUS",
      text2: "La Robe Limao Cutout Halter Neck Minidress In Pink",
      text3: "$353 - $775",
      text4: "24 Store",
      id: 12,
    },
  ];
  return (
    <>
      <div className={styles.mid2text}>
        <h2>
          <span>Trending Now</span>
        </h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {productdata1.map((el) => (
          <SwiperSlide className={styles.product1img} key={el.id}>
            <span>♡</span>
            <img src={el.imgsrc} />
            <div className={styles.product1quckview}>
              <h2>QUICK VIEW</h2>
            </div>
            <Center>
              <VStack>
                <Text fontWeight={"600"} fontSize={"15px"} mt={"1rem"}>
                  {el.text1}
                </Text>
                <Text
                  color={"#A3A3A3"}
                  textAlign={"center"}
                  fontSize={"12px"}
                  noOfLines={1}
                >
                  {el.text2}
                </Text>
                <Text fontSize={"12px"} fontWeight={"500"}>
                  {el.text3}
                </Text>
                <Text fontSize={"12px"}>{el.text4}</Text>
              </VStack>
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>

      <Center>
        <button className={styles.blackbuttonhover}>VIEW MORE</button>
      </Center>
    </>
  );
};

const Product2 = () => {
  const productdata1 = [
    {
      imgsrc: "https://cdn.modesens.com/product/7298931_66?w=400&",
      text1: "BURBERRY",
      text2: "Bbry Carrick Top Tee Cn Ss Chckd Logo Sl In White",
      text3: "$341 - $570",
      text4: "24 Store",
      id: 1,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/47635068?w=400&",
      text1: "ZIMMERMANN",
      text2: "Dancer Empire-waist Linen-silk Blend Midi Dress In Pink",
      text3: "$548 - $952",
      text4: "24 Store",
      id: 2,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/10535447_122?w=400&",
      text1: "BALMAIN",
      text2: "Square-neck Button-shoulder Ribbed Top In Blue",
      text3: "$560 - $1150",
      text4: "24 Store",
      id: 3,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/18444081_124?w=400&",
      text1: "BURBERRY",
      text2:
        "Net Sustain Checked Poplin-trimmed Cotton-jersey T-shirt In Black",
      text3: "$355 - $605",
      text4: "24 Store",
      id: 4,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/37731631?w=400&",
      text1: "ALEXANDER MCQUEEN",
      text2: "Glossed-leather Exaggerated-sole Loafers In Black",
      text3: "$528 - $913",
      text4: "24 Store",
      id: 5,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/48287774?w=400&",
      text1: "GANNI",
      text2: "Women's Black Other Materials Sandals",
      text3: "$190 - $471",
      text4: "24 Store",
      id: 6,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/7298931_66?w=400&",
      text1: "BURBERRY",
      text2: "Bbry Carrick Top Tee Cn Ss Chckd Logo Sl In White",
      text3: "$341 - $570",
      text4: "24 Store",
      id: 7,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/40615641_2?w=400&",
      text1: "SAINT LAURENT",
      text2: "Université Oversize Cotton Logo Graphic Sweatshirt In Lilla",
      text3: "$380 - $890",
      text4: "24 Store",
      id: 8,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/7298931_66?w=400&",
      text1: "ALEXANDER MCQUEEN",
      text2: "Crossover-strap Slim-fit Stretch-knit Mini Dress In Black",
      text3: "$892 - $1999",
      text4: "24 Store",
      id: 9,
    },
    {
      imgsrc:
        "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212144F109000_1.jpg",
      text1: "BURBERRY",
      text2: "Cotton Poplin Collared Sleeveless Top In White",
      text3: "$70 - $170",
      text4: "24 Store",
      id: 10,
    },
    {
      imgsrc: "https://cdn.modesens.com/availability/48383362?w=400&",
      text1: "ALEXANDER MCQUEEN",
      text2: "Alexander Macqueen Woman's Black Rave Buckle Leather Ankle Boots",
      text3: "$553 - $1554",
      text4: "24 Store",
      id: 11,
    },
    {
      imgsrc: "https://cdn.modesens.com/product/41449769_2?w=400&",
      text1: "JACQUEMUS",
      text2: "La Robe Limao Cutout Halter Neck Minidress In Pink",
      text3: "$353 - $775",
      text4: "24 Store",
      id: 12,
    },
  ];
  return (
    <>
      <div className={styles.mid2text}>
        <h2>
          <span>Recently Viewed</span>
        </h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {productdata1.map((el) => (
          <SwiperSlide className={styles.product1img} key={el.id}>
            <span>♡</span>
            <img src={el.imgsrc} />
            <div className={styles.product1quckview}>
              <h2>QUICK VIEW</h2>
            </div>
            <Center>
              <VStack>
                <Text fontWeight={"600"} fontSize={"15px"} mt={"1rem"}>
                  {el.text1}
                </Text>
                <Text
                  color={"#A3A3A3"}
                  textAlign={"center"}
                  fontSize={"12px"}
                  noOfLines={1}
                >
                  {el.text2}
                </Text>
                <Text fontSize={"12px"} fontWeight={"500"}>
                  {el.text3}
                </Text>
                <Text fontSize={"12px"}>{el.text4}</Text>
              </VStack>
            </Center>
          </SwiperSlide>
        ))}
      </Swiper>

      <Center>
        <button className={styles.blackbuttonhover}>VIEW MORE</button>
      </Center>
    </>
  );
};


const Lastslider = () => {
  return (
    <>
      <div className={styles.mid2text}>
        <h2>
          <span>Community Posts</span>
        </h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1593167s?w=400&"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1592136s?w=400&"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1587648s?w=400&"
            alt="Slide3"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/14180s?w=400&"
            alt="Slide4"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1587542s?w=400&"
            alt="Slide5"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1567328s?w=400&"
            alt="Slide6"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1564720s?w=400&"
            alt="Slide7"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1567811s?w=400&"
            alt="Slide8"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1572505s?w=400&"
            alt="Slide9"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1580264s?w=400&"
            alt="slide10"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1583751s?w=400&"
            alt="slide11"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.lastsliderimg}>
          <img
            src="https://cdn.modesens.com/umedia/1580264s?w=400&"
            alt="slide12"
          />
        </SwiperSlide>
      </Swiper>

      <Center>
        <button className={styles.blackbuttonhover}>VIEW ALL</button>
      </Center>
    </>
  );
};


const Secondlastsection = () => {
  return (
    <>
      <Box
        backgroundColor={"#F8F7F6"}
        color={"black"}
        w="100%"
        mt={"100px"}
        p={15}
      >
        <HStack>
          <Box w="100%" p={10}>
            <Center>
              <VStack>
                <Text textAlign={"center"} fontWeight={"600"} fontSize={"23px"}>
                  Download the <br />
                  ModeSens App
                </Text>
                <Text textAlign={"center"} fontWeight={"500"} fontSize={"15px"}>
                  A seamless experience that takes your style <br /> to the next
                  level.
                </Text>
                <button className={styles.lastdownloadbutton}>
                  Download Alpha
                </button>
                <Image
                  height={"400px"}
                  width={"200px"}
                  alt="downl"
                  src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png"
                ></Image>
              </VStack>
            </Center>
          </Box>
          <Box w="100%" p={10}>
            <Center>
              <VStack>
                <Text textAlign={"center"} fontWeight={"600"} fontSize={"23px"}>
                  Install the ModeSens <br /> Browser Extension
                </Text>
                <Text fontWeight={"500"} fontSize={"15px"} textAlign={"center"}>
                  Get timely, accurate product information <br /> every time you
                  browse.
                </Text>
                <button className={styles.lastdownloadbutton}>
                  Install Now
                </button>
                <Image
                  height={"400px"}
                  width={"390px"}
                  src="https://cdn.modesens.com/static/img/20211109downloadright.png"
                  alt="downl"
                ></Image>
              </VStack>
            </Center>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export {
  Firstslider,
  Mid1,
  Secondslider,
  Thirdslider,
  Lastslider,
  Secondlastsection,
  Product1,
  Product2,
};
