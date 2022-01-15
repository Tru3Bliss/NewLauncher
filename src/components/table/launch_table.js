import React from "react";

const LaunchTable = (props) => {
  const { launches, className } = props

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
        <tr></tr>
      </tbody>
    </table>
  )
}

export default LaunchTable