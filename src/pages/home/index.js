import React, { useEffect, useState } from 'react'
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { H1, H2, Title } from '../../components/label'
import Layout from '../../layout/layout'
import FilterUnit from '../../components/unit/filterunit'
import { useLocation, useNavigate } from 'react-router-dom'
import Accordion from '../../components/accordion'
import { BadgeButton, FilterBadge } from '../../components/badge'
import { SplitedProgressBar } from '../../components/progress'
import ForbesIcon from '../../assets/icons/ic_forbes.svg'
import FilterIcon from '../../assets/icons/ic_filter.svg'
import BloombergIcon from '../../assets/icons/ic_bloomberg.svg'
import YahooIcon from '../../assets/icons/ic_yahoo.svg'
import Img1 from '../../assets/images/img1.png'
import Img2 from '../../assets/images/img2.png'
import ClientImt from '../../assets/images/client_logo.png'
import Client1 from '../../assets/images/client_1.png'
import Client2 from '../../assets/images/client_2.png'
import Client3 from '../../assets/images/client_3.png'
import Developer_1 from '../../assets/images/developer_1.png'
import Developer_2 from '../../assets/images/developer_2.png'
import Developer_3 from '../../assets/images/developer_3.png'
import Launch_1 from '../../assets/images/launch_1.png'
import Launch_2 from '../../assets/images/launch_2.png'
import Launch_3 from '../../assets/images/launch_3.png'
import IcArrowUp from '../../assets/icons/ic_arrow_up.svg'
import IcArrowDown from '../../assets/icons/ic_arrow_down.svg'
import TopOne from '../../components/item/topone'
import SecondaryItem from '../../components/item/secondary'
import axios from 'axios'
import ProjectItem from '../../components/item/project'
import { BASE_API_URL, BASE_URL } from '../../components/api'
import LaunchTable from '../../components/table/launch_table'
import Client from '../../components/item/client'
import ClientItem from '../../components/item/client'
import LaunchItem from '../../components/item/launch'
import ApexChart from '../../components/chart';
import Switch from '../../components/switch'

const HomePage = () => {
  const location = useLocation()

  const [newLaunchers, setNetLaunchers] = useState(0)
  const [unitTypes, setUnitTypes] = useState(0)
  const [floorPlans, setFloorPlans] = useState(0)
  const [filter, setFilter] = useState(location.state?.filter)
  const [chatSelect, setChatSelect] = useState(false)
  const [expand, setExpand] = useState(false)
  const [topOne, setTopOne] = useState(
    {
      img: Img1,
      name: "Pullman Residence",
      address: "District 11 - Newton Novena",
      description: "Vasai East, Mirai Road and Beyond, Mumbai. The 1st Branded Residence of Pullman",
      client: {
        name: "Haberman Construction Co.",
        img: ClientImt
      }
    }
  )
  const [secItems, setSecItems] = useState(
    [
      {
        id: 0,
        img: Img2,
        name: "Ultra-Luxurious Penthouse",
        description: "Experience the ultimate sky living"
      },
      {
        id: 1,
        img: Img2,
        name: "Unblocked Sea View",
        description: `Live in Paradise, Every
          Single Day`
      },
      {
        id: 2,
        img: Img2,
        name: "Unblocked Sea View",
        description: `Live in Paradise, Every
          Single Day`
      },
      {
        id: 3,
        img: Img2,
        name: "Unblocked Sea View",
        description: `Live in Paradise, Every
          Single Day`
      },
      {
        id: 4,
        img: Img2,
        name: "Unblocked Sea View",
        description: `Live in Paradise, Every
          Single Day`
      },
    ]
  )
  const [testimonials, setTestimonials] = useState([])
  const [launches, setLaunches] = useState(
    [
      {
        title: `Brick house designs: Ways to use brick
        for wall exterior`,
        content: "One recurring thing among many architectural marvels in the world is the usage of bricks. An oft-used material for house construction, bricks, ...",
        img: Launch_1,
        developer: {
          name: "Arlene McCoy",
          img: Developer_1
        }
      },
      {
        title: `House parapet design: Home parapet wall design ideas and images`,
        content: "Parapets play a vital role in the design of a house. Before we move on examining the various house parapet designs that can be ideal for your home.",
        img: Launch_2,
        developer: {
          name: "Savannah Nguyen",
          img: Developer_2
        }
      },
      {
        title: "DDA Housing Scheme 2021: Flats, price list, location, and draw result details",
        content: `Out of the 1,354 DDA flats that were launched in the DDA Housing Scheme 2021, in January this year, around 689 flats have been surrendered.`,
        img: Launch_3,
        developer: {
          name: "Cody Fisher",
          img: Developer_3
        }
      },
    ]
  )
  const [projects, setProjects] = useState([])

  const [salesData, setSalesData] = useState([
    [
      {
        name: 'Non Landed',
        data: [44, 55, 41, 67, 22, 43, 13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 44, 55, 41, 67, 22, 43, 13, 23],
        color: "#DBAAE8"
      },
      {
        name: 'Exec Condo',
        data: [13, 23, 20, 8, 13, 27, 11, 17, 15, 15, 21, 14, 13, 23, 20, 8, 44, 55, 41, 67, 22, 43, 13, 23],
        color: "#9255A2"
      },
      {
        name: 'Landed',
        data: [11, 17, 15, 15, 21, 14, 44, 55, 41, 67, 22, 43, 13, 23, 20, 8, 44, 55, 41, 67, 22, 43, 13, 23],
        color: "#5A1879"
      }],
    [
      {
        name: 'Non Landed',
        data: [11, 17, 15, 15, 21, 14, 44, 55, 41, 67, 22, 43, 13, 23, 20, 8, 44, 55, 41, 67, 22, 43, 13, 23],
        color: "#DBAAE8"
      },
      {
        name: 'Exec Condo',
        data: [13, 23, 20, 8, 13, 27, 11, 17, 15, 15, 21, 14, 13, 23, 20, 8, 44, 55, 41, 67, 22, 43, 13, 23],
        color: "#9255A2"
      },
      {
        name: 'Landed',
        data: [44, 55, 41, 67, 22, 43, 13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 44, 55, 41, 67, 22, 43, 13, 23],
        color: "#5A1879"
      }]
  ])

  const [newLaunchData, setNewLaunchData] = useState([
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
    {
      name: "Sengkang Grand Residence",
      type: "Apartment",
      segment: "Outside Central",
      units: "680",
      total_sales: "680",
      current_sales: "680",
      low_psf: "$680",
      medium_psf: "$680",
      high_psf: "$680",
    },
  ])
  const [sortOptions, setSortOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(0)
  const [filterOptions, setFilterOptions] = useState([])
  async function getData() {
    const res = await axios('/data');
    return await res.json(); // (Or whatever)
  }
  const maskColors = ["blue", "primary-100", "green-dark", "yellow-700", "red"]
  const handleClear = () => {
    setFilter([])
  }

  let navigate = useNavigate()
  const handleBack = () => {
    navigate("/");
  }
  const handleRemove = (item) => {
    setFilter(filter.filter(e => e !== item))
  }
  const handleFilter = () => {
    navigate('/filter', {
      state: {
        filter: filter
      }
    })
  }

  useEffect(() => {
    axios.post(BASE_API_URL + "listings").then((response) => setProjects(response.data)).catch((response) => {
      console.log(response.data)
    })

    axios.post(BASE_API_URL + "herosection").then((response) => {
      setNetLaunchers(response.data[0].count_project)
      setUnitTypes(response.data[0].count_unittype)
      setFloorPlans(response.data[0].count_floorplans)
    }).catch((response) => {
      console.log(response.data)
    })

    axios.post(BASE_API_URL + "testimonials").then((response) => {
      setTestimonials(response.data)
    }).catch((response) => {
      console.log(response.data)
    })

    axios.post(BASE_API_URL + "sortsandfilters").then((response) => {
      console.log(response.data.sort_by)
      setSortOptions(response.data.sort_by)
      setFilterOptions(response.data)
    }).catch((response) => {
      console.log(response.data)
    })

  }, [])


  return (
    <Layout>
      <div className='px-4 md:px-20 flex flex-col pb-10 md:pb-20 gap-15 md:gap-45'>
        <div className='flex flex-col gap-9 md:items-center md:justify-center py-8 md:py-24'>
          <div >
            <div className='flex flex-col gap-2'>
              <H1 className="font-bold text-start md:text-center">Reliably Explore</H1>
              <Title className="md:text-center">New Launch Properties</Title>
            </div>
          </div>
          <div className='w-full flex md:w-1/2 xl:w-1/3 justify-between mx-auto'>
            <div className='flex flex-col items-start md:items-center justify-center w-1/3'>
              <span className='text-app-primary-100 font-bold text-2xl lg:text-3xl xl:text-5xl text-left'>{newLaunchers}</span>
              <p className='text-sm md:text-lg lg:text-xl'>New Launches</p>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center w-1/3'>
              <span className='text-app-primary-100 font-bold text-2xl lg:text-3xl xl:text-5xl text-left'>{unitTypes}</span>
              <p className='text-sm md:text-lg lg:text-xl'>Unit Types</p>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center w-1/3'>
              <span className='text-app-primary-100 font-bold text-2xl lg:text-3xl xl:text-5xl text-left'>{floorPlans}</span>
              <p className='text-sm md:text-lg lg:text-xl'>Floor Plans</p>
            </div>
          </div>
          <p className='text-app-gray-60 md:text-center text-xs md:text-base'>Accurately listed & constantly updated by each project's official sales team</p>
          <div className='flex items-center mx-auto justify-between md:justify-around mt-11 w-full lg:w-2/3 xl:w-1/2'>
            <img src={ForbesIcon} alt='forbes' className='w-1/4 md:w-max' />
            <img src={BloombergIcon} alt='bloomberg' className='w-1/4 md:w-max' />
            <img src={YahooIcon} alt='yahoo' className='w-1/4 md:w-max' />
          </div>
        </div>

        <div className='flex gap-15 '>
          <div className='w-1/4 lg:flex flex-col hidden'>
            <div className='h-15'>
              <h2 className='text-2xl font-semibold'>Filter</h2>
            </div>
            <div className='overflow-y-auto text-app-black-100'>
              <div className='flex flex-col divide-y divide-app-gray-100'>
                <div className='lg:hidden flex'>
                  {filter.length !== 0 &&
                    <Accordion summary={
                      <div >
                        <div className='flex items-center gap-2'>
                          <p className='text-base font-semibold'>Selected Filter</p>
                          <BadgeButton count={filter.length} clear={handleClear} className={filter.length === 0 && "hidden"} />
                        </div>
                        <p className={`whitespace-nowrap overflow-hidden truncate text-sm text-app-gray-600 ${(filter.length === 0 || expand) && "hidden"}`}>{filter.map((item) => (item.name) + ", ")}</p>
                      </div>} className="bg-app-primary-50" subClassname={filter.length > 0 ? "h-19" : "h-12.6"} expand={expand} setExpand={setExpand}>
                      <div className='flex flex-wrap gap-1 pb-4'>
                        {filter.map((item, idx) => (<FilterBadge key={idx} remove={() => handleRemove(item)}>{item.name}</FilterBadge>))}
                      </div>
                    </Accordion>}
                </div>
                {/* {
                  filterOptions.map((option, idx) => (
                    <FilterUnit option={option} key={idx} filter={filter} setFilter={setFilter} />
                  ))
                } */}
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 w-full'>
            <div className='flex items-start md:items-center justify-between md:flex-row flex-col'>
              <div className='flex flex-col gap-1'>
                <h2 className='text-2xl font-semibold'>Available New Launches</h2>
                {projects.length > 0 && <p className='text-app-black-80'>Showing 1 - {projects.length >= 10 ? 10 : projects.length} of {projects.length} available launches</p>}
              </div>
              <div className='flex justify-between w-full'>
                <button href="/filter" className='md:hidden flex px-3 gap-2 rounded-md border items-center' onClick={handleFilter}>
                  <img src={FilterIcon} alt='filter' className='w-4 h-4' />
                  <p>Filter</p>
                  {filter.length > 0 && <div className='rounded-full w-3.6 h-3.6 items-center justify-center text-xs flex bg-app-primary-100 text-white flex-shrink-0'>
                    {filter.length}
                  </div>}
                </button>
                {sortOptions.length > 0 && <Accordion summary={<div className='truncate'>{sortOptions[selectedOption].name}</div>} className="max-w-190 w-full border rounded-md py-2 px-3 relative" autoclose={true} >
                  <div className='absolute z-10 bg-white w-full left-0 transform translate-y-3 border rounded-md'>
                    {sortOptions.map((option, idx) => (
                      <div key={idx} className='text-sm py-2 w-full px-4 cursor-pointer hover:bg-app-primary-60 truncate' onClick={() => setSelectedOption(idx)}>{option.name}</div>
                    ))}
                  </div>
                </Accordion>}
              </div>
            </div>
            <div className='mt-6'>
              {filter.length !== 0 &&
                <div className="" subClassname={filter.length > 0 ? "h-19" : "h-12.6"} expand={expand} setExpand={setExpand}>
                  <div className='md:flex flex-wrap gap-1 pb-8 hidden'>
                    {filter.map((item, idx) => (<FilterBadge key={idx} remove={() => handleRemove(item)} mode="purple">{item.name}</FilterBadge>))}
                    <button onClick={handleClear} className='text-app-primary-100 font-semibold text-sm px-2'>Clear All</button>
                  </div>
                  <div className='flex flex-row gap-1 md:hidden h-7'>
                    <div className='w-full flex overflow-x-hidden relative'>
                      <div className='absolute flex gap-1 left-0 w-max'>
                        {filter.map((item, idx) => (<FilterBadge key={idx} remove={() => handleRemove(item)} mode="purple">{item.name}</FilterBadge>))}
                      </div>
                      <div className='w-8 bg-gradient-to-l from-white h-full right-0 absolute top-0'></div>
                    </div>
                    <button onClick={handleClear} className='whitespace-nowrap text-app-primary-100 font-semibold text-sm px-2'>Clear All</button>
                  </div>
                </div>}
            </div>
            <div className='flex flex-col gap-6'>
              {projects.map((project, idx) => (
                <ProjectItem project={project} key={idx} />
              ))}
            </div>
          </div>
          <div className='md:w-1/2 lg:w-1/4 lg:flex hidden flex-col'>
            <div className='pb-2'>
              <h2 className='text-2xl font-semibold'>Best Deals</h2>
              <p className='text-app-gray-60'>Handpicked projects recommended for you.</p>
            </div>
            <SplitedProgressBar percent={35} />
            <div className='mt-5 flex flex-col gap-4'>
              <TopOne data={topOne} />
              <div className='flex flex-col gap-4'>
                {secItems.map((item, idx) => (
                  <SecondaryItem item={item} key={idx} mask={maskColors[idx]} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <H2>Trending New Launches</H2>
          <div className='text-app-black-80 mt-4'>Based on units sold in Nov 21</div>
          <div className='mt-10 overflow-x-auto relative'>
            <div className='overflow-x-auto'>
              <LaunchTable data={newLaunchData} />
            </div>
            <div className='w-15 bg-gradient-to-l from-white h-full md:hidden absolute right-0 top-0'></div>
          </div>
          <p className='text-app-black-60 text-sm mt-9'>Source: Urban Redevelopment Authority (URA)</p>
        </div>

        <div>
          <H2>Developer Sales Volume</H2>
          <div className='text-app-black-80 mt-4'>Based on sales from Nov 19 to Nov 21</div>
          <div className='w-full flex justify-between items-center mt-10 flex-col tiny:flex-row gap-2 tiny:gap-0'>
            <Switch select={chatSelect} setSelect={setChatSelect} first="Property Type" second="Market Segment" className="w-full" />
            <div className='flex text-lg sm:gap-2 items-center'>
              <img src={chatSelect ? IcArrowUp : IcArrowDown} />
              <p className={`${chatSelect ? "text-app-green-dark" : "text-app-red"} text-sm sm:text-base font-semibold`}>2.1%</p>
              <p className='text-xs sm:text-sm'>&nbsp; vs last month</p>
            </div>
          </div>
          <div className='mt-10 relative'>
            <div className='overflow-x-auto '>
              <ApexChart data={chatSelect ? salesData[0] : salesData[1]} />
            </div>
            <div className='w-15 bg-gradient-to-l from-white h-full md:hidden absolute right-0 top-0'></div>
          </div>
          <p className='text-app-black-60 text-sm mt-9'>Source: Urban Redevelopment Authority (URA)</p>
        </div>

        <div>
          <H2>New Launch Column</H2>
          <div className='text-app-black-80 mt-4'>The ways people travel, work and live are blurring.</div>
          <div className='mt-10 overflow-x-auto flex-col md:flex-row flex gap-10 pb-10'>
            {launches.map((launch, idx) => (
              <LaunchItem launch={launch} key={idx} />
            ))}
          </div>
          <p className='text-app-black-80'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          <a href="#" className='md:text-lg font-semibold text-app-black-100 mt-4'>See all posts</a>
        </div>


        <div>
          <H2>Experince New Launches</H2>
          <div className='text-app-black-80 mt-4'>Product innovations, to Live Anywhere updates.</div>
          <div className='mt-10 overflow-x-auto flex-col md:flex-row flex gap-10 pb-10'>
            {testimonials.map((client, idx) => (
              <ClientItem client={client} key={idx} />
            ))}
          </div>
          <p className='text-app-black-80'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          <a href="#" className='md:text-lg font-semibold text-app-black-100 mt-4'>See all posts</a>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;

