import React, { useEffect, useState } from 'react'
import { H1, H2, Title } from '../../components/label'
import Layout from '../../layout/layout'
import { filterOptions } from './options'
import FilterUnit from '../../components/unit/filterunit'
import { useNavigate } from 'react-router-dom'
import Accordion from '../../components/accordion'
import { BadgeButton, FilterBadge } from '../../components/badge'
import { SplitedProgressBar } from '../../components/progress'
import ForbesIcon from '../../assets/icons/ic_forbes.svg'
import BloombergIcon from '../../assets/icons/ic_bloomberg.svg'
import YahooIcon from '../../assets/icons/ic_yahoo.svg'
import Img1 from '../../assets/images/img1.png'
import Img2 from '../../assets/images/img2.png'
import ClientImt from '../../assets/images/client_logo.png'
import TopOne from '../../components/item/topone'
import SecondaryItem from '../../components/item/secondary'
import axios from 'axios'
import ProjectItem from '../../components/item/project'
import { BASE_API_URL, BASE_URL } from '../../components/api'
import LaunchTable from '../../components/table/launch_table'

const HomePage = () => {

  const [newLaunchers, setNetLaunchers] = useState(145)
  const [unitTypes, setUnitTypes] = useState(346)
  const [floorPlans, setFloorPlans] = useState(789)
  const [filter, setFilter] = useState([])
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

  const [projects, setProjects] = useState([])

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

  useEffect(() => {
    axios.post(BASE_API_URL + "listings").then((response) => setProjects(response.data)).catch((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <Layout>
      <div className='px-4 md:px-20 flex flex-col'>
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
            <img src={ForbesIcon} alt='forbes' className='w-1/4 md:w-max'/>
            <img src={BloombergIcon} alt='bloomberg' className='w-1/4 md:w-max'/>
            <img src={YahooIcon} alt='yahoo' className='w-1/4 md:w-max'/>
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
                {
                  filterOptions.map((option, idx) => (
                    <FilterUnit option={option} key={idx} filter={filter} setFilter={setFilter} />
                  ))
                }
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 w-full'>
            <div className='lg:flex hidden'>
              {filter.length !== 0 &&
                <div className="" subClassname={filter.length > 0 ? "h-19" : "h-12.6"} expand={expand} setExpand={setExpand}>
                  <div className='flex flex-wrap gap-1 pb-4'>
                    {filter.map((item, idx) => (<FilterBadge key={idx} remove={() => handleRemove(item)} mode="purple">{item.name}</FilterBadge>))}
                    <button onClick={handleClear} className='text-app-primary-100 font-semibold text-sm px-2'>Clear All</button>
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
          <div className='mt-10'>
            <LaunchTable />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;