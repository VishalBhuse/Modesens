import React, { useRef, useState } from 'react';
import { BsShare, BsSearch } from 'react-icons/bs';
import { AiOutlineLock, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GrEdit, GrPan } from 'react-icons/gr';
import { RiCamera3Line, RiDeleteBin5Line, RiShareForwardBoxLine } from 'react-icons/ri';
import styles from "../Recent/Recent.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getpostapi, postcommentapi, removepostapi } from '../Store/Post.action';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

import axios from 'axios';

const Alerts = () => {

  const postref = useRef();

  const [recentdata, setRecentdata] =useState([]);

  const dispatch = useDispatch();

  let {postcomment, getcomment} = useSelector((state) => state)

  const { isOpen, onOpen, onClose } = useDisclosure()

 const handlepost = () => {
    let value = postref.current.value;
    postcommentapi(dispatch, value);
    postref.current.value = ""
  }


  const handleremovecomment = (id) => {
      removepostapi(dispatch,id)
  }

  useEffect(() => {
    getpostapi(dispatch);
  },[])

useEffect(() => {
  axios
  .get("http://localhost:8080/like")
  .then((res) => setRecentdata(res.data))
},[])

 

  //if(postcomment.loading) return(<h3>Loading...</h3>)
  //else if(postcomment.error) return (<h3>something went wrong...</h3>)
  return (
    <div>
        <div className={styles.empty}></div>

        <div className={styles.profilebox}>

            <div>
              <div className={styles.imgmail}>
                <img className={styles.profileimg} src="https://cdn.modesens.com/user?w=100"/>
                <p>piyushnarkhede02@gmail.com</p>
              </div>
              <h3 style={{textAlign:"left",fontWeight:"bold", marginLeft:"6%", marginTop:"10px"}}>Alerts</h3>
            </div>

          <div>
            <div className={styles.pubshare}>
              <button className={styles.pubbtn}>PUBLISH LIST</button>
              <h3> <BsShare /></h3>
            </div>

            <div className={styles.symbols}>
              <h4><AiOutlineLock /></h4>
              {/* AiOutlineUnlock */}
              <h4><GrEdit /> </h4>
              <h4><GrPan /> </h4>
              <h4><RiCamera3Line /></h4>
              <h4><BsSearch /> </h4>
            </div>
          </div>
        </div>

        <div className={styles.productbox}>
            {recentdata.map((el,index) => (
              <div className={styles.product} key={index}>
                <div className={styles.delike}>
                <h3 className={styles.removesymbol}><RiDeleteBin5Line /></h3>
                <h3 className={styles.unlikesymbol}> {/*<AiFillHeart />*/ <AiOutlineHeart/>}  </h3>
                </div>
                <Link style={{textDecoration:"none"}} to={`/recentproduct/${el.id}`} >  <img className={styles.productimg} src={el.product_img_src}/> </Link>
                <div className={styles.quickbox} >
                <Link to={`/alerts/recentquickview/${el.id}`}> <button onClick={onOpen} className={styles.quickbtn}>Quick View</button> </Link>
                 </div>

{/* comp start */}
<div>
  
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
              
              <Outlet/>
          
          </ModalBody>

          
        </ModalContent>
      </Modal>


</div>
{/* Comp end */}   
                <Link style={{textDecoration:"none"}} to={`/recentproduct/${el.id}`} > 
                <div>
                <h5 className={styles.brand}>{el.product_name}</h5>
                <p className={styles.description} >{el.product_description}</p>
                <h5 className={styles.price}>{el.product_price}</h5>
                <h5 className={styles.store}>{el.brand_store} Stores</h5>
                </div>
                </Link>
              </div>
              
            ))}
            
        </div>

        <div className={styles.inputcommentsection}>
          <h3 className={styles.toughts} >Share Your Toughts</h3>

          <div className={styles.inputcommentbox}>
            <input ref={postref} className={styles.inputcomment} type="text" placeholder="Add a comment" maxLength="100" />

            <button onClick={() => handlepost()} className={styles.postbtn}>POST</button>
          </div>
        </div>

        <div className={styles.commentsection}>
          <h3 className={styles.more}>More From piyushnarkhede02</h3>
          <div className={getcomment.data.length === 0 ? styles.noposts : ""} hidden={getcomment.data.length === 0 ? false : true}> {getcomment.data.length === 0 ? "Oops, This Closet Doesn't Have Any Posts Yet." :  ""} </div>
          

          <div className={styles.posts}>
            {getcomment.data.map((el) => (
              <div className={styles.postsdiv} key={el.id}>
              <p className={styles.commenttext}>{el.comment}</p>
             <button onClick={() => handleremovecomment(el.id)} className={styles.removebtn}>Delete</button>
              </div>
            ))}
            {postcomment.loading ? "posting..." : ""}
            {getcomment.loading ? "Loading...": ""}
          </div>
        </div>
        
        <br/>
        <br/>
        <br/>

    </div>
  )
}

export default Alerts