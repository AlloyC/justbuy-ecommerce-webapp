import { useRef, useState } from "react";
import { useCurrent } from "../Provider/ProductContext";

const Card = () => {
    const {currentCardData : product} = useCurrent();
        const imageRef = useRef();
        const [displayedImg, setDisplayedImg] = useState(product[0].images[0])

        const changeImage = (index) => {
            setDisplayedImg(prev => prev = product[0].images[index])
        }
    return (
        <div className="flex flex-col gap-4 w-[300px]">
        <img src={displayedImg} className="w-full rounded-lg" alt="" />
        <div className="flex gap-4 w-20">
            {product[0].images.map((thumbnail,index) => <img onClick={() => changeImage(index)} ref={imageRef} id={index} className=" rounded-lg" key={thumbnail} src={thumbnail} alt=""/>)}
        </div>
        </div>
    )
}

export default Card;