import { GETPOST_ERROR, GETPOST_LOADING, GETPOST_SUCCESS, POST_ERROR, POST_LOADING, POST_SUCCESS, REMOVEPOST } from "./Post.actiontype";
import axios from "axios";


export const postcommentapi = (dispatch,post) => {

    dispatch({type:POST_LOADING})

    axios
    .post("http://localhost:8080/post",{
        comment:post,
    })
    .then((res) => {dispatch({type:POST_SUCCESS, payload:res.data})})
    .catch((err) => dispatch({type:POST_ERROR}))
};

export const getpostapi = (dispatch) => {
    dispatch({type:GETPOST_LOADING})

    axios
    .get("http://localhost:8080/post")
    .then((res) => dispatch({type:GETPOST_SUCCESS, payload:res.data}))
    .catch(() => dispatch({type:GETPOST_ERROR}))
};

export const removepostapi = (dispatch,id) => {
    axios.delete(`http://localhost:8080/post/${id}`)
    .then(() => 
       axios.
       get("http://localhost:8080/post")
    .then((res) => dispatch({type:REMOVEPOST, payload:res.data}))
    )
}