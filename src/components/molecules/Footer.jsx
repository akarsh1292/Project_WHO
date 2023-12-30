import React from "react"
import "./Footer.css"
import RectangularButton from "../atoms/RectangularButton"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
    return (

        <div className="footer">
            <RectangularButton baseColor="#FBFAFA"><FaChevronLeft/> Previous</RectangularButton>
            <RectangularButton baseColor="#9C2C2C">Clear Response</RectangularButton>
            <RectangularButton baseColor="#9C912C">MarkForReview</RectangularButton>
            <RectangularButton baseColor="#FBFAFA">Next<FaChevronRight/></RectangularButton>
        </div>

    )
}

export default Footer; 