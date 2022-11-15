import React from 'react'
import "./Widgets.css"
import Info from "@mui/icons-material/Info"
import FiberManualRecord from "@mui/icons-material/FiberManualRecord"
function Widgets() {

    const newsArticle = (heading , subtitle) => (
        <div  className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecord/>
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>

        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>Linkedin News</h2>
                <Info/>
        </div>
        {newsArticle("PAPA REACT is back" , "Top news , 999 - readers")}
        {newsArticle("PAPA REACT is back" , "Top news , 999 - readers")}
        {newsArticle("PAPA REACT is back" , "Top news , 999 - readers")}
        {newsArticle("PAPA REACT is back" , "Top news , 999 - readers")}
        {newsArticle("PAPA REACT is back" , "Top news , 999 - readers")}
        
        </div>
        
)
}

export default Widgets