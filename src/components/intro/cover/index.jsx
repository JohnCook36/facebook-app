import React from "react";
import {Cover} from "./index.styles";
import cover from "../../../img/png/cover_img.png"

const CoverImg = () => {
    return (
       <Cover>
           <img src={cover} alt=""/>
       </Cover>
    )
}

export default CoverImg