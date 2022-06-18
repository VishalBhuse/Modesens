import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardBoxLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

import styles from "./Product.module.css";
import { useEffect } from "react";
import axios from "axios";

const Product = () => {
  const { category, productid } = useParams();

  const [product, setProduct] = useState({})

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(()=>{
    axios
    .get(
      `http://localhost:8080/${category}`
    )
    .then((res) => {
      res.data.map((el) => {
        if(el.web_scraper_order === productid){
          setProduct(el)
        }
      })
    })
  },[]) 

  return (
    <div>
      {/*Product Start */}
      <div className={styles.maindiv}>
        <div className={styles.productimgbox}>
          <img className={styles.productimg} src={product.product_img_src} />

          <div className={styles.listsharesymbol}>
            <h3 className={styles.unlikesymbol}
            >
              {" "}
              {/*<AiFillHeart />*/<AiOutlineHeart />}{" "}
            </h3>
            <h3 className={styles.sharesymbol}>
              <RiShareForwardBoxLine />
            </h3>
          </div>
        </div>

        <div className={styles.productdescription}>
          <h3 className={styles.pbrand}>{product.product_name}</h3>
          <p className={styles.pdescription}>{product.product_description}</p>
          <h5 className={styles.pprize}>
            {product.product_price}
          </h5>
          <p onClick={onOpen} className={styles.psize}>
            Size Guide
          </p>

          <Modal isOpen={isOpen} size={"3xl"} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader backgroundColor={"red"}>SIZE GUIDE</ModalHeader>
              <ModalCloseButton />

              <ModalBody marginTop={"40px"}>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Standard</th>
                        <th>Italu</th>
                        <th>UK/US CHEST SIZE</th>
                        <th>UK/US WAIST</th>
                        <th>FRANCE/EUROPE</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>XXXS</td>
                        <td>40</td>
                        <td>30</td>
                        <td>24</td>
                        <td>40</td>
                      </tr>

                      <tr>
                        <td>XXS</td>
                        <td>42</td>
                        <td>32</td>
                        <td>26</td>
                        <td>42</td>
                      </tr>

                      <tr>
                        <td>XS</td>
                        <td>44</td>
                        <td>34</td>
                        <td>28</td>
                        <td>44</td>
                      </tr>

                      <tr>
                        <td>S</td>
                        <td>46</td>
                        <td>36</td>
                        <td>30</td>
                        <td>46</td>
                      </tr>

                      <tr>
                        <td>M</td>
                        <td>48</td>
                        <td>38</td>
                        <td>32</td>
                        <td>48</td>
                      </tr>

                      <tr>
                        <td>L</td>
                        <td>50</td>
                        <td>40</td>
                        <td>34</td>
                        <td>50</td>
                      </tr>

                      <tr>
                        <td>XL</td>
                        <td>52</td>
                        <td>42</td>
                        <td>36</td>
                        <td>52</td>
                      </tr>

                      <tr>
                        <td>XXL</td>
                        <td>54</td>
                        <td>44</td>
                        <td>38</td>
                        <td>54</td>
                      </tr>

                      <tr>
                        <td>XXXL</td>
                        <td>56</td>
                        <td>46</td>
                        <td>40</td>
                        <td>56</td>
                      </tr>

                      <tr>
                        <td>4XL</td>
                        <td>58</td>
                        <td>48</td>
                        <td>42</td>
                        <td>58</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={styles.sizenote}>Please note, this is an approximate size conversion guide. Conversions may vary from brand to brand. For further information or advice, please contact customer care of the store carrying the product.</p>
              </ModalBody>
            </ModalContent>
          </Modal>

          <button className={styles.pbtn}>SELECT STORE TO BUY</button>
          <p className={styles.ptag}>
            Earn up to <span style={{ color: "firebrick" }}>1049</span> points
            from this purchase.{" "}
            <span>
              {" "}
              <a
                href="https://modesens.com/loyalty/"
                className={styles.learnmore}
              >
                {" "}
                Learn More
              </a>
            </span>
          </p>
        </div>
      </div>

      {/*Product End */}

      <div className={styles.siteinfo}>
        <h3 className={styles.sitehead}>Shop With ModeSens concierge</h3>
        <p className={styles.sitedisc}>
          We will fulfill your order by finding the best price available from
          our partner stores, applying any applicable promotions and providing
          assistance on tracking, returns or anything else you may need.
        </p>
      </div>

      <div className={styles.siteinfo}>
        <h3 className={styles.sitehead}>Shop From Partner Stores</h3>
        <p className={styles.elprice}>
          {product.product_price}
        </p>

        {/*Stores Start */}
        <div className={styles.stores}>
          <div className={styles.store1}>
            <img className={styles.storeimg} src={`${product.product_img_src}`} />
            <div className={styles.sproductdata}>
              <h5 className={styles.storename}>SSENSE</h5>
              <p className={styles.storeprice}>{product.product_price}</p>
              <p className={styles.storesize}>SIZES: XS, S, M, L</p>
            </div>

            <button className={styles.storebtn}>BUY FROM STORE</button>
          </div>

          <div className={styles.store1}>
            <img className={styles.storeimg} src={`${product.product_img_src}`} />
            <div className={styles.sproductdata}>
              <h5 className={styles.storename}>FARFETCH</h5>
              <p className={styles.storeprice}>{product.product_price}</p>
              <p className={styles.storesize}>SIZES: XS, S, M, L</p>
            </div>

            <button className={styles.storebtn}>BUY FROM STORE</button>
          </div>

          <div className={styles.store1}>
            <img className={styles.storeimg} src={`${product.product_img_src}`} />
            <div className={styles.sproductdata}>
              <h5 className={styles.storename}>Mytheresa</h5>
              <p className={styles.storeprice}>{product.product_price}</p>
              <p className={styles.storesize}>SIZES: XS, S, M, L</p>
            </div>

            <button className={styles.storebtn}>BUY FROM STORE</button>
          </div>

          <div className={styles.store1}>
            <img className={styles.storeimg} src={`${product.product_img_src}`} />
            <div className={styles.sproductdata}>
              <h5 className={styles.storename}>MATCHESFASHION</h5>
              <p className={styles.storeprice}>{product.product_price}</p>
              <p className={styles.storesize}>SIZES: XS, S, M, L</p>
            </div>

            <button className={styles.storebtn}>BUY FROM STORE</button>
          </div>
        </div>
        {/*Stores end */}

        <h5 className={styles.viewmore}>VIEW MORE</h5>

        <div className={styles.alerthead}>
          <h3 className={styles.subto}>Subscribe To Alerts For This Product</h3>

          <button className={styles.alertbtn}>
            <p className={styles.bell}>
              <BiBell />
            </p>
            <p className={styles.alerttext}>SET ALERT</p>
          </button>
        </div>

        <p className={styles.alertinfo}>
          We'll keep our eyes out for you. Subscribe to receive automatic email
          and app updates to be the first to know when this item becomes
          available in new stores, sizes or prices.
        </p>
      </div>

      <div className={styles.offer}>
        <img
          className={styles.offerimg}
          src="https://modesens.com/banner/11956/getimg/?img=%2Fbanner%2F20220520-modesens-Sale-1440x250-EN.jpg"
        />
      </div>

      <div className={styles.offer}>RECENTLY VIEWED PRODUCTS</div>

      
    </div>
  )
};

export default Product;
