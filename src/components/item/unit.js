import React, { useState } from "react";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const ButtonGroup = ({
  isAttached,
  goToSlide,
  position,
  setPosition,
  ...rest
}) => {
  let {
    carouselState: { currentSlide, totalItems },
  } = rest
  totalItems = totalItems;

  const dotHandler = (index) => {
    goToSlide(index)
    setPosition(index)
  }
  const width = parseInt(100 / totalItems)
  return (
    <div className="absolute right-20 left-0 bottom-0 z-50 w-full">
      <div className="flex justify-start items-center gap-1">
        {[...Array(totalItems).keys()].map((dt, index) =>
          <div className={`cursor-pointer ${currentSlide !== index ? "bg-app-gray-10" : totalItems > 1 && "bg-app-primary-100"}`} onClick={() => dotHandler(index)} key={index}
            style={{ width: `${width}%`, height: "2px" }}>
            &nbdp;
          </div>
        )}
      </div>
    </div>
  )
}

const UnitItem = (props) => {
  const { unit, className } = props
  const priceFrom = unit.price_from > 1000000 ? "$" + unit.price_from / 1000000 + "M" : unit.price_from > 1000 ? "$" + unit.price_from / 1000 + "K" : "$" + unit.price_from
  const responsive = {
    mobile: {
      breakpoint: { max: 10000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  const [position, setPosition] = useState(unit.unit_types.length)
  return (
    <Carousel
      swipeable
      draggable
      responsive={responsive}
      infinite={false}
      arrows={null}
      autoPlay={false}
      customButtonGroup={
        <ButtonGroup
          isAttached={unit.unit_types.length !== undefined && unit.unit_types.length !== 0}
          position={position}
          setPosition={setPosition}
        />}
    >
      {unit.unit_types.map((item, idx) => (
        <div className="flex h-18 md:h-13 items-center px-3 md:px-5 justify-between text-xs pt-4" key={idx}>
          <div className="flex md:flex-row flex-col gap-1 text-app-black-60 items-start md:items-center h-full">
            <p className="bg-app-gray-20  px-1 py-1 hidden md:flex">{unit.count_type}type{unit.count_type > 1 ? "s" : ""}</p>
            <p className="text-sm text-app-black-100 leading-5">{unit.unit_name}</p>
            <div className="flex items-center gap-1 leading-4.5">
              <p className="bg-app-gray-20  px-1 py-1 md:hidden">{unit.count_type} type{unit.count_type > 1 ? "s" : ""}</p>
              <p>{item.size_from}-{item.size_to} sqft</p>
            </div>
          </div>
          <div className="flex md:flex-row gap-1 items-end md:items-center h-full flex-col">
            <p className="text-app-black-60 hidden md:block">${item.psf_from}-${item.psf_to} PSF</p>
            <p className="text-sm text-app-black-100">{item.price_from > 1000000 ? "$" + item.price_from / 1000000 + "M" : item.price_from > 1000 ? "$" + item.price_from / 1000 + "K" : "$" + item.price_from}&nbsp;-&nbsp;{item.price_to > 1000000 ? "$" + item.price_to / 1000000 + "M" : item.price_to > 1000 ? "$" + item.price_to / 1000 + "K" : "$" + item.price_to}</p>
            <p className="text-app-black-60 md:hidden">${item.psf_from}&nbsp;-&nbsp;${item.psf_to} PSF</p>
          </div>
        </div>
      ))}
    </Carousel>

  )
}

export default UnitItem