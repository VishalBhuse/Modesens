import {
  GETPOST_ERROR,
  GETPOST_LOADING,
  GETPOST_SUCCESS,
  POST_ERROR,
  POST_LOADING,
  POST_SUCCESS,
  REMOVEPOST,
} from "./Post.actiontype";

const initialstate = {
  postcomment: {
    loading: false,
    error: false,
    data: {},
  },

  getcomment: {
    loading: false,
    error: false,
    data: [],
  },
};

export const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case POST_LOADING: {
      return {
        ...state,
        postcomment: {
          ...state.postcomment,
          loading: true,
          error: false,
        },
      };
    }

    case POST_SUCCESS: {
      return {
        ...state,
        postcomment: {
          ...state.postcomment,
          loading: false,
          error: false,
          data: action.payload,
        },

        getcomment:{
            data:[...state.getcomment.data, action.payload]
        }
      };
    }

    case POST_ERROR: {
      return {
        ...state,
        postcomment:{
            ...state.postcomment,
            loading:false,
            error:true,
        }
      };
    }

    case GETPOST_LOADING: {
      return {
        ...state,
        getcomment:{
            ...state.getcomment,
            loading:true,
            error:false,
        }
    }
}

    case GETPOST_SUCCESS: {
      return {
        ...state,
        getcomment:{
            ...state.getcomment,
            loading:false,
            error:false,
            data:action.payload,
        }
      };
    }

    case GETPOST_ERROR: {
      return {
        ...state,
        getcomment:{
            ...state.getcomment,
            loading:false,
            error:true,
        }
      };
    }

    case REMOVEPOST:{
        return{
            ...state,
            getcomment:{
                ...state.getcomment,
                data:action.payload,
            }
        }
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
