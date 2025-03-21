import React from "react";

const LaunchTable = (props) => {
  const { data, className } = props

  return (
    <table className="text-app-black-100 w-full min-w-120 text-xs md:text-sm">
      <thead className="rounded-full bg-app-primary-100">
        <tr className="p-3 text-white h-9.5 md:h-11 items-center font-semibold">
          <th className="text-left px-3 ">Project Name</th>
          <th>Project Type</th>
          <th>Market Segment</th>
          <th>Total Units</th>
          <th>Total Sales Vol.</th>
          <th>Nov 21 Sales Vol.</th>
          <th>Lowest PSF</th>
          <th>Median PSF</th>
          <th className="text-right px-3">Highest PSF</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className="text-center font-semibold text-app-black-100 hover:bg-app-primary-60 cursor-pointer">
            <td  className="text-left p-3">{item.name}</td>
            <td>{item.type}</td>
            <td>{item.segment}</td>
            <td>{item.units}</td>
            <td>{item.total_sales}</td>
            <td>{item.current_sales}</td>
            <td>{item.low_psf}</td>
            <td>{item.medium_psf}</td>
            <td className="text-right p-3">{item.high_psf}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LaunchTable