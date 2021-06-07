import React, { useContext } from 'react'
import { PostInfoContext } from './PostContextManager/PostInfoContext'


export const PaginationLinks = (props) => {

    const { setPageNumber, totalPosts } = useContext(PostInfoContext)
    const NUMBER_PER_PAGE = 5
    console.log(`Total Posts: ${totalPosts}`)
    console.log(`Number Per Page: ${NUMBER_PER_PAGE}`)
    console.log(`Some Math: ${Math.ceil(+totalPosts / NUMBER_PER_PAGE)}`)


    return (  totalPosts > 5 ? <section className="pagination" style={{margin: "2px calc(38% + -3rem"}} >
        {
        
            [...Array(Math.ceil(+totalPosts / NUMBER_PER_PAGE)).keys()].map(i =>
            <button onClick={() => {
            setPageNumber(i+1)
            window.scrollTo(0,document.body.scrollHeight)
            }
            }>{i+1} </button>
             
        )}
    </section>: "" )

}

