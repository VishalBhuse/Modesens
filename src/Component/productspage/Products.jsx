import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Filters } from "./Filters";
import styled from "./products.module.css";
import { useParams } from "react-router-dom";

const Products = () => {
  let { id } = useParams();
  console.log(id);
  const category = [
    "Activewear",
    "Beachwear",
    "Coats",
    "Dresses",
    "Hosiery",
    "Jackets",
    "Jeans",
    "Jumpsuits",
    "Knitwear",
    "Lingerie",
    "Loungewear",
    "Pants",
    "Shorts",
    "Skirts",
    "Suits",
    "Tops",
    "Shoes",
    "Bags",
    "Accessories",
    "Beauty",
    "Home",
  ];
  const designer = [
    "GANNI",
    "DOLCE & GABBANA",
    "BALMAIN",
    "STELLA MC,CARTNEY",
    "ALEXANDER MCQUEEN",
    "VALENTINO",
    "VERSACE",
    "MONCLER",
    "SAINT LAURENT",
    "BURBERRY",
    "LOEWE",
    "BALENCIAGA",
    "ISABEL MARANT",
    "BOTTEGA VENETA",
    "CHLOÉ",
    "GUCCI",
    "MAX MARA",
    "OFF-WHITE",
    "ALEXANDER WANG",
    "GIVENCHY",
    "ETRO",
    "ACNE STUDIOS",
    "RAG & BONE",
    "FENDI",
    "NIKE",
    "TOM FORD",
    "VICTORIA BECKHAM",
    "MARNI",
    "RICK OWENS",
    "PACO RABANNE",
    "JIL SANDER",
    "THOM BROWNE",
    "EMILIO PUCCI",
    "KENZO",
    "3.1 PHILLIP LIM",
    "MAISON MARGIELA",
    "DSQUARED2",
    "MOSCHINO",
    "PALM ANGELS",
    "ADIDAS ORIGINALS",
    "SIMONE ROCHA",
    "MARC JACOBS",
    "VETEMENTS",
    "GOLDEN GOOSE",
    "ADAM LIPPES",
    "GIAMBATTISTA VALLI",
    "ELIE SAAB",
  ];
  const size = [
    "US0",
    "US2",
    "US4",
    "US6",
    "US8",
    "US10",
    "US12",
    "US14",
    "US16",
  ];
  const color = [
    "ANIMAL PRINT",
    "BLACK",
    "BLUE",
    "BROWN",
    "BURGUNDY",
    "GOLD",
    "GRAY",
    "GREEN",
    "METALLIC",
    "MULTI",
    "NEUTRALS",
    "ORANGE",
    "PATTERN",
    "PINK",
    "PURPLE",
    "RED",
    "TRANSPARENT",
    "WHITE",
    "YELLOW",
  ];
  const pricerange = ["Free Shipping", "Free Duty"];
  const onsale = [
    "10%",
    "15%",
    "20%",
    "25%",
    "30%",
    "35%",
    "40%",
    "45%",
    "50%",
  ];
  const store = [
    "SSENSE",
    "NET-A-PORTER",
    "Neiman Marcus",
    "Farfetch",
    "Mytheresa",
    "Oscar de la Renta",
    "Shopbop",
    "Ramy Brook",
    "MATCHESFASHION",
    "CETTIRE",
    "Nordstrom",
    "THE OUTNET.COM",
    "Gucci",
    "Prada",
  ];
  const keyword = [
    "Jacquemus",
    "Jacquemus Tops Sale",
    "Jacquemus Tops",
    "Jacquemus Men Tops",
    "Jacquemus Kids Tops",
    "Jacquemus Beachwear",
    "Jacquemus Bikinis",
    "Jacquemus Blazers",
    "Jacquemus Blouses",
    "Jacquemus Bodysuits",
    "Jacquemus Bomber Jackets",
    "Jacquemus Bootcut Jeans",
    "Jacquemus Bras",
    "Jacquemus Camisoles",
    "Jacquemus Capes",
    "Jacquemus Cardigans",
  ];
  const headlinearr = [
    {
      headline: "Womens Fashion & Designer Products",
      json: "women.json",
    },
    {
      headline: "Designer Clothing for Men",
      json: "men_clothing.json",
    },
    {
      headline: "Designer Beauty",
      json: "beauty.json",
    },
    {
      headline: "Designer Bags for Women",
      json: "women_bags.json",
    },
    {
      headline: "Baby Boys Fashion & Designer Products",
      json: "baby_boys.json",
    },
    {
      headline: "Designer Home Decor",
      json: "homeDecor.json",
    },
    {
      headline: "Designer Bath",
      json: "bath.json",
    },
    {
      headline: "Designer Accessories for Men",
      json: "men_accessories.json",
    },

    {
      headline: "Designer Grooming for Men",
      json: "men_grooming.json",
    },
  ];

  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://unit4-335f9-default-rtdb.firebaseio.com/${headlinearr[id].json}`
      )
      .then((res) => setproduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styled.productmean}>
      <div className={styled.productfiltermran}>
        <div className={styled.brandimage}></div>
        <p className={styled.pagepath}>MODESENS / SHOP / BABY BOYS</p>

        <div className={styled.searchfilter}>
          <div>
            <p>10,000+ items</p>
            <p>Filter by:</p>
          </div>
          <div className={styled.searchicon}>
            <BsSearch />
            <p>Reset</p>
          </div>
        </div>
        <hr />

        <div className={styled.filteroption}>
          <select name="" id="">
            <option value="">Gender: Baby Boys</option>
            <option value="">Women</option>
            <option value="">Men</option>
            <option value="">Kids</option>
            <option value="">Baby Girls</option>
            <option value="">Baby Boys</option>
            <option value="">Girls</option>
            <option value="">Boys</option>
          </select>
          <select name="" id="">
            <option value="">Condition: New</option>
            <option value="">All</option>
            <option value="">New</option>
            <option value="">Pre-Owned</option>
          </select>
          <select name="" id="">
            <option value="">Category: All</option>
            <option value="">Clothing</option>
            <option value="">Shoes</option>
            <option value="">Bags</option>
            <option value="">Accessories</option>
            <option value="">Home</option>
          </select>
          <Center>
            <Button w={"95%"} my={"4"}>
              SAVE MY SEARCH
            </Button>
          </Center>

          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    CATEGORY
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={category} />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    DESIGNER
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={designer} />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    SIZE
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={size} />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    COLOR
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={color} />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    PRICE RANGE
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={pricerange} />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    ON SALE
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={onsale} />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    STORE
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={store} />
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading fontWeight={"600"} as="h5" size="sm">
                    KEYWORD
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <hr />
                <Filters filteritem={keyword} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div className={styled.links}>
            <p className={styled.relatedcate}>Related Category</p>
            <p>Sale</p>
            <p>Accessories</p>
            <p>Bags</p>
            <p>Care</p>
            <p>Clothing</p>
            <p>Shoes</p>
            <p>Home</p>

            <p className={styled.relatedcate}>Related Search</p>
            <p>Women</p>
            <p>Men</p>
            <p>Kids</p>
            <p>Marc Le Bihan</p>
            <p>Rene' Caovilla</p>
            <p>Cj By Cookie Johnson</p>
            <p>Aciel</p>
            <p>Yohji Yamamoto</p>
            <p>Gucci</p>
            <p>Mabu By Maria Bk</p>
            <p>Sophia Webster X Puma</p>
            <p>Topo Designs</p>
            <p>D Squared</p>
          </div>
        </div>
      </div>
      <div className={styled.productside}>
        <h1 className={styled.headline}>{headlinearr[id].headline}</h1>
        <p className={styled.subheading}>
          {headlinearr[id].headline} with price comparison across 500+ stores in
          one place. Discover the latest designer fashion for baby boys at
          ModeSens.
        </p>
        <div className={styled.pagination}>
          <div className={styled.paginationno}>1 2 3 .... {">"}</div>
          <div className={styled.paginationimages}>
            {/* <img src="https://cdn.modesens.com/static/img/20210908column4.svg"  /> */}
            <img
              src="https://cdn.modesens.com/static/img/20210908column4_active.svg"
              alt="a"
            />
            <img
              src="https://cdn.modesens.com/static/img/20210908column3.svg"
              alt="a"
            />
            {/* <img src="https://cdn.modesens.com/static/img/20210908column3_active.svg"  /> */}
            <img
              src="https://cdn.modesens.com/static/img/20210908column2.svg"
              alt="a"
            />
            {/* <img src="https://cdn.modesens.com/static/img/20210908column2_active.svg"  /> */}
          </div>
          <div className={styled.paginationoption}>
            <select name="" id="">
              <option value="">Best Sellers</option>
              <option value="">New Arrivals</option>
              <option value="">Most Liked</option>
              <option value="">Highest Price</option>
              <option value="">Lowest Price</option>
              <option value="">New Sale</option>
              <option value="">Largest Discount Amount</option>
              <option value="">Largest Discount Percentage</option>
            </select>
          </div>
        </div>
        <div className={styled.productgried}>
          {product.map((item) => (
            <div className={styled.product1img} key={1}>
              <span>♡</span>
              <img src={item.product_img_src} alt="ab" />
              <div className={styled.product1quckview}>
                <h2>QUICK VIEW</h2>
              </div>
              <Center>
                <VStack>
                  <Text fontWeight={"600"} fontSize={"15px"} mt={"1rem"}>
                    {item.product_name}
                  </Text>
                  <Text
                    color={"#A3A3A3"}
                    textAlign={"center"}
                    fontSize={"12px"}
                    noOfLines={1}
                  >
                    {item.product_description}
                  </Text>
                  <Text fontSize={"12px"} fontWeight={"500"}>
                    {item.product_price}
                  </Text>
                  <Text fontSize={"12px"}>{item.brand_store}</Text>
                </VStack>
              </Center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
