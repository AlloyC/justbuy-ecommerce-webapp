// import Slider from "react-slick";
import { FaCartPlus, FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react";

const ProductCard = ({ settings }) => {

  const {
    button = false,
    incrementingSection = false,
    increamentvalue = 0,
    title,
    price,
    discount,
    images = [],
    percentage,
    description = false,
    company = false,
    thumbnails = false,
    card = false,
  } = settings;

const [activeIndex, setActiveIndex] = useState(0)
const refArray = useRef([]);
// const presentIndex = useRef(0);
const [clickedIndex, setClickedIndex] = useState(0)
const [translate, setTranslate] = useState(0)

const setRef = (index, ref) => {
  refArray.current[index] = ref;
}

const displaySelected = (index) => {
  refArray.current.forEach(current => current.ariaSelected = false)
  refArray.current[index].ariaSelected = true;
  setActiveIndex(index);
  setTranslate(prev => prev = prev + (-(index - clickedIndex) * 24))
  setClickedIndex(prev => prev = index);
  // presentIndex.current = index;
}

const next = () => {
  setTranslate(prev => clickedIndex >= (images.length - 1) ? prev = 0 :prev -= 24)
  refArray.current.forEach(current => current.ariaSelected = false)
  refArray.current[(() => clickedIndex >= (images.length - 1) ? 0: clickedIndex + 1)()].ariaSelected = true;
  setActiveIndex((prev) => clickedIndex >= (images.length - 1) ?prev = 0:prev = clickedIndex + 1);
  setClickedIndex(prev => prev >= (images.length - 1) ? prev = 0: prev = prev + 1);
}

const previous = () => {
  setTranslate(prev => clickedIndex === 0 ? prev = -(images.length - 1) * 24 : prev = prev + 24);
  refArray.current.forEach(current => current.ariaSelected = false)
  refArray.current[(() => clickedIndex <= 0 ? (images.length - 1): clickedIndex - 1)()].ariaSelected = true;
  setActiveIndex((prev) => clickedIndex <= 0 ? prev = (images.length - 1): prev = clickedIndex - 1);
  setClickedIndex(prev => prev <= 0 ? prev = (images.length - 1): prev = prev - 1)
}

// (() => refArray.current.filter(element => element.ariaSelected === true).map(element => <>{element}</>))()

  return (
  <div className={`y-5 w-full flex flex-col ${card? " gap-0" : "md:flex-row md:items-center gap-10"} justify-center  `}>
  { thumbnails ? 
  <div className=''>
    {/* the main image */}
    <div className='w-96 relative border-2 rounded-md'>
    <button onClick={previous} className='inline backdrop-blur-sm bg-white bg-opacity-55 opacity-70 rounded-md hover:bg-opacity-100 p-3 absolute top-1/2 left-0 -translate-y-1/2 z-30'><FaChevronLeft className='h-5 w-fit'/></button>
    <div className={`duration-500 transition w-fit flex items-center relative bg-gray-100`} style={{transform: 'translateX(' + translate +'rem)'}}>
      {images.map(image => (
        <div className='w-96'>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
    <button onClick={next} className='inline rounded-md hover:opacity-100 backdrop-blur-sm bg-white bg-opacity-55 opacity-70 p-3 absolute top-1/2 right-0 -translate-y-1/2 z-30'><FaChevronRight className='h-5 w-fit'/></button>
    </div>
    <div className="flex justify-center gap-3 px-2 py-10 w-96">
    {images.map((image, index) =>
      <div ref={ref => setRef(index, ref)} onClick={() => displaySelected(index)} aria-selected={false} className={`${activeIndex === index ? 'border-2 border-orange-400 opacity-50': ''}`} >
        <img src={image} className="rounded-md h-20" alt="" />
      </div>)}
</div>
  </div>: <img className="rounded-md h-60 md:h-48" src={images[0]} alt="" />}
    <div className={`${card? "pt-5" :"md:w-96 p-5"} flex flex-col gap-4`}>
      {company && <h4 className='font-semibold -mb-3 text-orange-500'>{company}</h4>}
      <h3 className={`font-bold capitalize ${card ? '' : 'text-2xl'} text-gray-800`}>{title}</h3>
      {description && <p className="text-gray-500 font-medium">{description}</p>}
      <div className="flex justify-between">
        <div className="flex items-start gap-3
        "><span className={`font-bold  ${card ? "text-xl text-gray-600 -mt-1":"text-gray-800 text-2xl -mt-0.5"} `}>${price - Math.floor(price * percentage / 100) }</span>
        {!card && <span className="p-1 leading-none mt-1  bg-orange-100 rounded-sm text-orange-500 text-xs">{percentage}%</span>}</div>
        {!card && <span className="text-gray-400 line-through font-medium">${price}</span>}
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
      {incrementingSection && <div className="md:basis-1/3 bg-gray-200 flex justify-between items-center py-2 px-4 rounded-md">
          <button className="w-fit h-full flex justify-center items-center"><FaMinus className="text-orange-400"/></button>
          <span className="font-medium">{increamentvalue}</span>
          <button className="w-fit h-full flex justify-center items-center"><FaPlus className="text-orange-400"/></button>
        </div>}
        {button && <button className="md:basis-2/3 bg-orange-400 rounded-md flex gap-3 justify-center items-center text-gray-50 py-3 font-medium w-full"><FaCartPlus className="text-gray-50"/>Add to cart</button>}
        </div>
    </div>
  </div>);
};

export default ProductCard;
