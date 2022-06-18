import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "./Quickview.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiShareForwardBoxLine } from "react-icons/ri";

import { useEffect } from "react";

import axios from "axios";

const AlertQuickview = () => {
    let {id} = useParams();

    const [product, setProduct] = useState({})

    useEffect(()=>{
      axios
      .get(
        `http://localhost:8080/alert/${id}`
      )
      .then((res) => setProduct(res.data)  )
    },[]) 

  return (
    <div>

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

        <Link to={`/alertproduct/${product.id}`}><p className={styles.viewmore}>See Full Details</p></Link> 


        
    </div>
    </div>
  )
}

export default AlertQuickview