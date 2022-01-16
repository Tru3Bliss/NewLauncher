import React from 'react';
import ReactApexCharts from 'react-apexcharts'

const SalesChart = (props) => {
  const { data, className } = props

  let options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: 'normal',
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      },
      sparkline: {
        enabled: false,
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5
      },
    },
    xaxis: {
      type: 'date',
      categories: [
        '01/01/2011',
        '01/02/2011',
        '01/03/2011',
        '01/04/2011',
        '01/05/2011',
        '01/06/2011',
        '01/07/2011',
        '01/08/2011',
        '01/09/2011',
        '01/10/2011',
        '01/11/2011',
        '01/12/2011',
        '01/01/2012',
        '01/02/2012',
        '01/03/2012',
        '01/04/2012',
        '01/05/2012',
        '01/06/2012',
        '01/07/2012',
        '01/08/2012',
        '01/09/2012',
        '01/10/2012',
        '01/11/2012',
        '01/12/2012'
      ],
    },
    legend: {
      position: 'bottom',
      offsetY: 10,
      itemMargin: {
        horizontal: 5,
        vertical: 40
    },
    },
    fill: {
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: "light",
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
      z: {
        formatter: undefined,
        title: 'Size: '
      },
      marker: {
        show: true,
      },
      items: {
        display: "flex",
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },

    }
  }
  return (
    <div className='w-full min-w-120'>
      <ReactApexCharts options={options} series={data} type="bar" height={350} />
    </div>
  )
}

export default SalesChart