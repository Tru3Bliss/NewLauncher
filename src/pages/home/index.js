import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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

  const [newLaunchers, setNetLaunchers] = useState(145)
  const [unitTypes, setUnitTypes] = useState(346)
  const [floorPlans, setFloorPlans] = useState(789)
  const [filter, setFilter] = useState([])
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
  const [projects, setProjects] = useState(
    [
      {
        project_id: "55",
        project_name: "One Pearl Bank",
        project_address: "Pearl Bank",
        whatsapp_link: "https://wa.link/ulxoeb",
        phone_number: "+6585971878",
        project_category: "Private Condominium",
        project_development: "",
        project_mixed_type: "",
        launch_date: "2019-07-20",
        total_unit: "774",
        available_unit: "242",
        sold_unit: "532",
        count_launched_days: "911",
        sales_rate: "0.5840",
        district_id: "24",
        district_code: "D3",
        district_name: "queenstown, redhill, tiong bahru",
        subregion_id: "3",
        subregion_name: "city fringe",
        region_id: "1",
        region_name: "central region",
        mrt_dist: "204",
        station_name: "Outram Park",
        line_code: "NE,TE,EW",
        station_number: "3,17,16",
        line_color: "#9E27B5,#9D5A18,#00943A",
        line_text_color: "#FFFFFF,#FFFFFF,#FFFFFF",
        top: "Dec 2023",
        raw_top: "2023-12-31",
        top_filter: "2023",
        completion_status: "Uncompleted / Under Construction",
        tenure_id: "1",
        tenure_name: "99 Years",
        project_image_path: "project_img/web_crop_Image-1_CapitaLand-unveils-One-Pearl-Bank.jpg",
        project_image_alt: null,
        project_image_title: null,
        count_images: "11",
        count_developers: "1",
        developer_name: "CapitaLand Development",
        dev_logo_path: "dev_logo/CapitaLand Logo.png",
        dev_logo_alt: null,
        dev_logo_title: "CapitaLand Logo",
        marketsegment_id: "2",
        marketsegment_code: "RCR",
        marketsegment_name: "Rest Of Central Region",
        category_id: "4",
        category_name: "Big",
        developer_note: "Developer Sales Team",
        units: [
          {
            project_id: "55",
            un_id: "139",
            unit_name: "Studio",
            count_type: "4",
            size_from: "431",
            size_to: "431",
            price_from: "1174000",
            price_to: "1176000",
            psf_from: "2724",
            psf_to: "2729",
            unit_types: [
              {
                ut_id: "256",
                ut_name: "A1-a",
                ut_category: "Condo / Apartment",
                size_from: "431",
                size_to: "431",
                price_from: "1176000",
                price_to: "1176000",
                psf_from: "2729",
                psf_to: "2729"
              },
              {
                ut_id: "257",
                ut_name: "A1-a (m)",
                ut_category: "Condo / Apartment",
                size_from: "431",
                size_to: "431",
                price_from: "1174000",
                price_to: "1174000",
                psf_from: "2724",
                psf_to: "2724"
              },
              {
                ut_id: "258",
                ut_name: "A1-b",
                ut_category: "Condo / Apartment",
                size_from: "431",
                size_to: "431",
                price_from: "1176000",
                price_to: "1176000",
                psf_from: "2726",
                psf_to: "2726"
              },
              {
                ut_id: "259",
                ut_name: "A1-b(m)",
                ut_category: "Condo / Apartment",
                size_from: "431",
                size_to: "431",
                price_from: "1176000",
                price_to: "1176000",
                psf_from: "2726",
                psf_to: "2726"
              }
            ]
          },
          {
            project_id: "55",
            un_id: "140",
            unit_name: "1-Bedroom",
            count_type: "5",
            size_from: "527",
            size_to: "570",
            price_from: "1360000",
            price_to: "1561000",
            psf_from: "2580",
            psf_to: "2785",
            unit_types: [
              {
                ut_id: "260",
                ut_name: "B1-a",
                ut_category: "Condo / Apartment",
                size_from: "570",
                size_to: "570",
                price_from: "1525000",
                price_to: "1525000",
                psf_from: "2675",
                psf_to: "2675"
              },
              {
                ut_id: "261",
                ut_name: "B1-b",
                ut_category: "Condo / Apartment",
                size_from: "570",
                size_to: "570",
                price_from: "1530000",
                price_to: "1530000",
                psf_from: "2684",
                psf_to: "2684"
              },
              {
                ut_id: "262",
                ut_name: "B3-b",
                ut_category: "Condo / Apartment",
                size_from: "527",
                size_to: "527",
                price_from: "1360000",
                price_to: "1360000",
                psf_from: "2580",
                psf_to: "2580"
              },
              {
                ut_id: "263",
                ut_name: "B4-a",
                ut_category: "Condo / Apartment",
                size_from: "560",
                size_to: "560",
                price_from: "1560000",
                price_to: "1560000",
                psf_from: "2785",
                psf_to: "2785"
              },
              {
                ut_id: "264",
                ut_name: "B4-b",
                ut_category: "Condo / Apartment",
                size_from: "560",
                size_to: "560",
                price_from: "1561000",
                price_to: "1561000",
                psf_from: "2785",
                psf_to: "2785"
              }
            ]
          }
        ]
      },
      {
        project_id: "57",
        project_name: "Test Developer Delete",
        project_address: "Test",
        whatsapp_link: "https://wa.link/ulxoeb",
        phone_number: "85971878",
        project_category: "Private Condominium",
        project_development: "Mixed Development",
        project_mixed_type: null,
        launch_date: "2019-12-22",
        total_unit: "500",
        available_unit: "100",
        sold_unit: "400",
        count_launched_days: "756",
        sales_rate: "0.5291",
        district_id: "28",
        district_code: "D8",
        district_name: "farrer park, serangoon, little india",
        subregion_id: "3",
        subregion_name: "city fringe",
        region_id: "1",
        region_name: "central region",
        mrt_dist: "233",
        station_name: "Aljunied",
        line_code: "EW",
        station_number: "9",
        line_color: "#00943A",
        line_text_color: "#FFFFFF",
        top: "Dec 2022",
        raw_top: "2022-12-22",
        top_filter: "2022",
        completion_status: "Uncompleted / Under Construction",
        tenure_id: "1",
        tenure_name: "99 Years",
        project_image_path: "project_img/Amber-Park-Aerial-Image.jpg",
        project_image_alt: null,
        project_image_title: null,
        count_images: "1",
        count_developers: "1",
        developer_name: "Ahamed Sha",
        dev_logo_path: "dev_logo/Unit Configuration Mix.png",
        dev_logo_alt: null,
        dev_logo_title: null,
        marketsegment_id: "1",
        marketsegment_code: "CCR",
        marketsegment_name: "Core Central Region",
        category_id: "1",
        category_name: "Boutique",
        developer_note: "Developer Sales Team",
        units: [
          {
            project_id: "57",
            un_id: "193",
            unit_name: "1-bedroom",
            count_type: "1",
            size_from: "100",
            size_to: "100",
            price_from: "200",
            price_to: "200",
            psf_from: "200",
            psf_to: "200",
            unit_types: [
              {
                ut_id: "317",
                ut_name: "1bs",
                ut_category: "Condo / Apartment",
                size_from: "100",
                size_to: "100",
                price_from: "200",
                price_to: "200",
                psf_from: "200",
                psf_to: "200"
              }
            ]
          }
        ]
      },
      {
        project_id: "54",
        project_name: "Flying Castle",
        project_address: "Heavenhold",
        whatsapp_link: "1231",
        phone_number: "123123",
        project_category: "Executive Condominium",
        project_development: null,
        project_mixed_type: null,
        launch_date: "2029-12-12",
        total_unit: "1400",
        available_unit: "1200",
        sold_unit: "200",
        count_launched_days: "-2887",
        sales_rate: "0.0000",
        district_id: "49",
        district_code: "D5",
        district_name: "pasir panjang, west coast",
        subregion_id: null,
        subregion_name: null,
        region_id: "3",
        region_name: "west region",
        mrt_dist: "1250",
        station_name: "Ang Mo Kio",
        line_code: "NS,CR",
        station_number: "16,11",
        line_color: "#E2211C,#96D508",
        line_text_color: "#FFFFFF,#2C2A25",
        top: "Dec 2029",
        raw_top: "2029-12-12",
        top_filter: "2029",
        completion_status: "Uncompleted / Under Construction",
        tenure_id: "2",
        tenure_name: "999 Years",
        project_image_path: "project_img/Amber-Park-Aerial-Image.jpg",
        project_image_alt: null,
        project_image_title: null,
        count_images: "3",
        count_developers: "2",
        developer_name: "Ahamed Sha",
        dev_logo_path: "dev_logo/Unit Configuration Mix.png",
        dev_logo_alt: null,
        dev_logo_title: null,
        marketsegment_id: "2",
        marketsegment_code: "RCR",
        marketsegment_name: "Rest Of Central Region",
        category_id: "5",
        category_name: "Mega",
        developer_note: "+2 other developer(s)",
        units: [
          {
            project_id: "54",
            un_id: "191",
            unit_name: "Test 1",
            count_type: "1",
            size_from: "896",
            size_to: "896",
            price_from: "1000000",
            price_to: "1000000",
            psf_from: "1000",
            psf_to: "1000",
            unit_types: [
              {
                ut_id: "315",
                ut_name: "TEST 1 A",
                ut_category: "Condo / Apartment",
                size_from: "896",
                size_to: "896",
                price_from: "1000000",
                price_to: "1000000",
                psf_from: "1000",
                psf_to: "1000"
              }
            ]
          }
        ]
      },
      {
        project_id: "59",
        project_name: "TEST INACTIVE",
        project_address: "test",
        whatsapp_link: "12312312",
        phone_number: "123123",
        project_category: "Private Condominium",
        project_development: "Mixed Development",
        project_mixed_type: "Integrated Development",
        launch_date: "3131-12-12",
        total_unit: null,
        available_unit: null,
        sold_unit: "0",
        count_launched_days: "-405383",
        sales_rate: "0.0000",
        district_id: "62",
        district_code: "D25",
        district_name: "admiralty, woodlands",
        subregion_id: null,
        subregion_name: null,
        region_id: "5",
        region_name: "north region",
        mrt_dist: "1231",
        station_name: "Aljunied",
        line_code: "EW",
        station_number: "9",
        line_color: "#00943A",
        line_text_color: "#FFFFFF",
        top: "Mar 1231",
        raw_top: "1231-03-12",
        top_filter: "completed",
        completion_status: "Completed / TOP Obtained",
        tenure_id: "2",
        tenure_name: "999 Years",
        project_image_path: "project_img/Amber-Park-Aerial-View.jpg",
        project_image_alt: null,
        project_image_title: null,
        count_images: "1",
        count_developers: "1",
        developer_name: "CapitaLand Development",
        dev_logo_path: "dev_logo/CapitaLand Logo.png",
        dev_logo_alt: null,
        dev_logo_title: "CapitaLand Logo",
        marketsegment_id: "2",
        marketsegment_code: "RCR",
        marketsegment_name: "Rest Of Central Region",
        category_id: "5",
        category_name: "Mega",
        developer_note: "Developer Sales Team",
        units: [
          {
            project_id: "59",
            un_id: "192",
            unit_name: "a",
            count_type: "1",
            size_from: "1",
            size_to: "1",
            price_from: "1000001",
            price_to: "1000001",
            psf_from: "11",
            psf_to: "11",
            unit_types: [
              {
                ut_id: "316",
                ut_name: "a",
                ut_category: "Executive Condo",
                size_from: "1",
                size_to: "1",
                price_from: "1000001",
                price_to: "1000001",
                psf_from: "11",
                psf_to: "11"
              }
            ]
          }
        ]
      }

    ])

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
    // axios.post(BASE_API_URL + "listings").then((response) => setProjects(response.data)).catch((response) => {
    //   console.log(response.data)
    // })

    // axios.post(BASE_API_URL + "herosection").then((response) => {
    //   setNetLaunchers(response.data[0].count_project)
    //   setUnitTypes(response.data[0].count_unittype)
    //   setFloorPlans(response.data[0].count_floorplans)
    // }).catch((response) => {
    //   console.log(response.data)
    // })

    axios.post(BASE_API_URL + "testimonials").then((response) => {
      setTestimonials(response.data)
    }).catch((response) => {
      console.log(response.data)
    })

    axios.post(BASE_API_URL + "sortsandfilters").then((response) => {
      console.log(response.data.sort_by)
      setSortOptions(response.data[0].options)
      setFilterOptions(response.data)
    }).catch((response) => {
      console.log(response.data)
    })

    if (location.state?.filter)
      setFilter(location.state?.filter)
  }, [])


  return (
    <Layout>
      <div className='px-4 md:px-20 flex flex-col pb-10 md:pb-20 '>
        <div className='flex flex-col md:gap-9 md:items-center md:justify-center pt-8 md:py-24'>
          <div >
            <div className='flex flex-col'>
              <H1 className="font-bold text-start md:text-center">Reliably Explore</H1>
              <Title className="md:text-center leading-13">New Launch Properties</Title>
            </div>
          </div>
          <div className='mt-3 md:mt-0 gap-9 flex md:w-1/2 xl:w-1/3  md:mx-auto whitespace-nowrap'>
            <div className='flex flex-col items-start md:items-center justify-center md:w-1/3'>
              <span className='text-app-primary-100 font-bold text-2xl lg:text-3xl xl:text-5xl text-left leading-7'>{newLaunchers}</span>
              <p className='text-sm md:text-lg lg:text-xl mt-1 leading-5'>New Launches</p>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center md:w-1/3'>
              <span className='text-app-primary-100 font-bold text-2xl lg:text-3xl xl:text-5xl text-left leading-7'>{unitTypes}</span>
              <p className='text-sm md:text-lg lg:text-xl mt-1 leading-5'>Unit Types</p>
            </div>
            <div className='flex flex-col items-start md:items-center justify-center md:w-1/3'>
              <span className='text-app-primary-100 font-bold text-2xl lg:text-3xl xl:text-5xl text-left leading-7'>{floorPlans}</span>
              <p className='text-sm md:text-lg lg:text-xl mt-1 leading-5'>Floor Plans</p>
            </div>
          </div>
          <p className='text-app-gray-60 md:text-center text-xs md:text-base mt-4 w-10/12 md:w-full leading-4.5'>Accurately listed & constantly updated by each project's official sales team</p>
          <div className='flex items-center mx-auto justify-between md:justify-around mt-10 w-full lg:w-2/3 xl:w-1/2 py-6'>
            <img src={ForbesIcon} alt='forbes' className='md:w-max' style={{ width: "21%" }} />
            <img src={BloombergIcon} alt='bloomberg' className=' md:w-max' style={{ width: "28.6%" }} />
            <img src={YahooIcon} alt='yahoo' className=' md:w-max' style={{ width: "23%" }} />
          </div>
        </div>
        <div className='flex flex-col gap-24.5 md:gap-45 mt-10'>

          <div className='flex gap-15 '>
            <div className='lg:w-1/3 xl:w-1/4 lg:flex flex-col hidden'>
              <div className='h-15'>
                <h2 className='text-2xl font-semibold'>Filter</h2>
              </div>
              <div className='text-app-black-100'>
                <div className='flex flex-col divide-y divide-app-gray-30'>
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
                      idx > 0 && <FilterUnit option={option} key={idx} filter={filter} setFilter={setFilter} />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='lg:w-2/3 xl:w-1/2 w-full'>
              <div className='flex items-start md:items-center justify-between md:flex-row flex-col'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-2xl font-semibold leading-5'>Available New Launches</h2>
                  {projects.length > 0 && <p className='text-app-black-80 text-sm md:text-base mt-3'>Showing 1 - {projects.length >= 10 ? 10 : projects.length} of {projects.length} available launches</p>}
                </div>
                <div className='flex justify-between w-full md:max-w-190 mt-5 gap-3'>
                  <button className='md:hidden flex px-3 gap-2 rounded-md border items-center h-8.5 md:h-9  w-26 flex-shrink-0' onClick={handleFilter}>
                    <img src={FilterIcon} alt='filter' className='w-4 h-4' />
                    <p>Filter</p>
                    {filter.length > 0 && <div className='rounded-full w-3.6 h-3.6 items-center justify-center text-xs flex bg-app-primary-100 text-white flex-shrink-0'>
                      {filter.length}
                    </div>}
                  </button>
                  {sortOptions.length > 0 && <Accordion summary={<div className='truncate text-center'>{sortOptions[selectedOption].name}</div>} className="cursor-pointer w-full border rounded-md md:h-9 px-3 relative justify-center" autoclose={true} sort={true}>
                    <div className='absolute z-10 bg-white w-full left-0 transform translate-y-3 md:translate-y-4 border rounded-md'>
                      {sortOptions.map((option, idx) => (
                        <div key={idx} className='text-sm py-2 w-full px-4 cursor-pointer hover:bg-app-primary-60 truncate' onClick={() => setSelectedOption(idx)}>{option.name}</div>
                      ))}
                    </div>
                  </Accordion>}
                </div>
              </div>
              <div className=''>
                {filter.length !== 0 &&
                  <div className="mt-4 border-y py-3 border-app-gray-20">
                    <div className='md:flex flex-wrap gap-1 hidden'>
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
              <div className='flex flex-col gap-6 mt-5'>
                {projects.map((project, idx) => (
                  <ProjectItem project={project} key={idx} />
                ))}
              </div>
            </div>
            <div className='md:w-1/2 lg:w-1/4 xl:flex hidden flex-col'>
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
            <H2 className="leading-7">Trending New Launches</H2>
            <div className='text-app-black-80 mt-3 leading-5 text-sm md:text-base md:mt-4'>Based on units sold in Nov 21</div>
            <div className='mt-6 md:mt-10 overflow-x-auto relative'>
              <div className='overflow-x-auto rounded-t-sm'>
                <LaunchTable data={newLaunchData} />
              </div>
              <div className='w-15 bg-gradient-to-l from-white h-full md:hidden absolute right-0 top-0'></div>
            </div>
            <p className='text-app-black-60 text-xs md:text-sm mt-4 md:mt-9'>Source: Urban Redevelopment Authority (URA)</p>
          </div>

          <div>
            <H2>Developer Sales Volume</H2>
            <div className='hidden md:block text-app-black-80 mt-4'>Based on sales from Nov 19 to Nov 21</div>
            <div className='w-full flex justify-between items-center mt-14 md:mt-10 flex-col tiny:flex-row gap-2 tiny:gap-0'>
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
            <p className='text-app-black-60 text-xs md:text-sm mt-9'>Source: Urban Redevelopment Authority (URA)</p>
          </div>

          <div>
            <H2>New Launch Column</H2>
            <div className='text-app-black-100 text-sm md:text-base  mt-3 md:mt-4 leading-5'>The ways people travel, work and live are blurring.</div>
            <div className='mt-6 md:mt-10 overflow-x-auto flex-col md:flex-row flex gap-10 pb-10'>
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
            <div className='mt-10 overflow-x-auto flex-col md:flex-row flex gap-10 pb-6 md:pb-10'>
              {testimonials.map((client, idx) => (
                <ClientItem client={client} key={idx} />
              ))}
            </div>
            <p className='text-app-black-80 text-sm md:text-base leading-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            <a href="#" className='md:text-lg font-semibold text-app-black-100 mt-3 md:mt-4'>See more experience launches</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;

