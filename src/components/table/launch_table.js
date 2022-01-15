import React from "react";

const LaunchTable = (props) => {
  const { data, className } = props

  return (
    <table className="text-app-black-100 w-full min-w-120 ">
      <thead>
        <tr className="bg-app-primary-100 p-3 text-sm text-white h-11 items-center">
          <th className="text-left p-3">Project Name</th>
          <th>Project Type</th>
          <th>Market Segment</th>
          <th>Total Units</th>
          <th>Total Sales Vol.</th>
          <th>Nov 21 Sales Vol.</th>
          <th>Lowest PSF</th>
          <th>Median PSF</th>
          <th className="text-right p-3">Highest PSF</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className="text-center text-sm font-semibold text-app-black-100">
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