import axios from "axios";
import { DELETERECENT, POSTRECENTERROR, POSTRECENTLOADING, POSTRECENTSUCCESS } from "./recenttype";


export const postrecentapi = (dispatch,category, productid) => {
    
    dispatch({type:POSTRECENTLOADING})

    axios
    .get(`http://localhost:8080/${category}`)
    .then((res) => {
        res.data.map((el) => {
            if(el.web_scraper_order === productid){
                axios
                .post("http://localhost:8080/recent",{
                    web_scraper_order: el.web_scraper_order,
                    category_MenClothing:el.category_MenClothing,
                    brand_store:el.brand_store,
                    category_MenClothing_href:el.category_MenClothing_href,
                    product_name:el.product_name,
                    product_description:el.product_description,
                    product_price:el.product_price,
                    product_img_src:el.product_img_src
                }).then((res) => 
                axios
                .get(`http://localhost:8080/recent`)
                .then((res) => dispatch({type:POSTRECENTSUCCESS, payload:res.data}))
                )
            }
        })
    }
    ).catch(() => dispatch({type:POSTRECENTERROR}))
};



export const removerecentapi = (dispatch,id) => {
    console.log(id)
    axios
    .delete(`http://localhost:8080/recent/${id}`)
    .then(() => 
        axios
                .get(`http://localhost:8080/recent`)
                .then((res) => dispatch({type:DELETERECENT, payload:res.data}))
    )
};