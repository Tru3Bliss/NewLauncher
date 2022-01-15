import React from "react";

const UnitItem = (props) => {
  const { unit, className } = props
  const priceFrom = unit.price_from > 1000000 ? "$" + unit.price_from / 1000000 + "M" : unit.price_from > 1000 ? "$" + unit.price_from / 1000 + "K" : "$" + unit.price_from

  return (
    <div className="flex h-13 items-center px-5 justify-between text-xs">
      <div className="flex md:flex-row flex-col gap-2 text-app-black-60 items-start md:items-center">
        <p className="bg-app-gray-20  px-1 py-1 hidden md:flex">{unit.count_type}type{unit.count_type > 1 ? "s" : ""}</p>
        <p className="text-sm text-app-black-100">{unit.unit_name}</p>
        <p>{unit.size_from}-{unit.size_to} sqft</p>
      </div>
      <div className="flex md:flex-row flex-col gap-2 items-end md:items-center">
        <p className="text-app-black-60">${unit.psf_from}-${unit.psf_to} PSF</p>
        <p className="text-sm text-app-black-100">{unit.price_from > 1000000 ? "$" + unit.price_from / 1000000 + "M" : unit.price_from > 1000 ? "$" + unit.price_from / 1000 + "K" : "$" + unit.price_from} - {unit.price_to > 1000000 ? "$" + unit.price_to / 1000000 + "M" : unit.price_to > 1000 ? "$" + unit.price_to / 1000 + "K" : "$" + unit.price_to}</p>
      </div>
    </div>
  )
}

export default UnitItem