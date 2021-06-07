import React, { useState, createContext } from 'react'

export const PostInfoContext = createContext();

export const PostInfoProvider = (props) => {

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  //TODO add setPage to 1 with links when you click them??? ....

    return(
        <PostInfoContext.Provider 
        value={{
          pageNumber,
          setPageNumber,
          totalPosts,
          setTotalPosts
          }}>

            {props.children}
        </PostInfoContext.Provider>
    );
}