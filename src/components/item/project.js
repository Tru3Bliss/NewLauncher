import React,{ useState } from "react";
import { BASE_URL } from "../api";
import UnitItem from "./unit";
import ImgIcon from '../../assets/icons/ic_img.svg';
import WhatsappIcon from '../../assets/icons/ic_whatsapp.svg';
import DummyImg from '../../assets/images/dummy.png';
import { StatusBadge, UnitBadge } from "../badge";
const ProjectItem = (props) => {
  const { project, className } = props
  const [loadstatus, setLoadStatus] = useState(0)
  const [devLoadStatus, setDevLoadStatus] = useState(0)
  const [projectImg, setProjectImg] = useState(project.project_image_path)
  return (
    <div className="flex flex-col border-app-gray-30 rounded-lg border divide-y divide-app-gray-30">
      <div className="flex flex-col md:flex-row">
        <div className="md:h-46 w-full md:w-60 relative text-white">
          {loadstatus === 2 ? <img src={DummyImg} alt={project.project_image_alt} className="md:h-46 w-full md:w-60 rounded-t-lg rounded-r-none" />
            : <img src={BASE_URL+project.project_image_path} alt={project.project_image_alt} className={`md:h-46 w-full md:w-60 rounded-t-lg rounded-r-none ${loadstatus === 3 && "hidden"}`} onLoad={() => { if (loadstatus != 2) setLoadStatus(1) }} onError={() => setLoadStatus(2)} />}
          <div className="px-2 py-1 bg-app-primary-100 absolute top-2 left-2 rounded-md text-xs">{project.project_category}</div>
          <div className="bg-app-transparent rounded-md flex gap-1 px-2 py-1 absolute bottom-2 left-2 w-max ">
            <img src={ImgIcon} alt="img" />
            <p>12</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 gap-2 py-3">
          <div className="flex gap-1 flex-wrap whitespace-nowrap">
            <StatusBadge>Upcoming Launch</StatusBadge>
            <StatusBadge>From 22nd Dec 2022</StatusBadge>
            <StatusBadge>Indicative Prices</StatusBadge>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-xl font-semibold">{project.project_name}</p>
            <p className="text-app-black-80 text-sm">{project.project_address}</p>
          </div>
          <div className="flex gap-4 text-app-black-60 text-sm whitespace-nowrap truncate">
            <p>{project.marketsegment_name}</p>
            <p className="capitalize">{project.region_name === "central region" && project.subregion_name !== null ? project.subregion_name : project.region_name}</p>
            {project.subregion_name !== "null" && <p>{project.subregion_name}</p>}
            <p>{project.district_code}</p>
          </div>
          <div className="flex gap-2 text-sm text-app-black-60">
            <p>{project.mrt_dist}m to</p>
            <div className="flex text-xs">
              {project.line_code.split(",").map((code, idx) => (
                <div className="items-center flex justify-center px-1" style={{ backgroundColor: project.line_color.split(",")[idx], color: project.line_text_color.split(",")[idx] }} key={idx}>
                  {code}{project.station_number.split(",")[idx]}
                </div>
              ))}
            </div>
            <p>{project.station_name}</p>
          </div>
          <div className="flex font-bold text-sm gap-4">
            <p>{project.top}</p>
            <p>{project.tenure_name}</p>
          </div>
          <div className="flex gap-1 flex-wrap whitespace-nowrap">
            <UnitBadge>Total: 450 units</UnitBadge>
            <UnitBadge>Available: 150 units</UnitBadge>
            <UnitBadge>Sold: 300 units</UnitBadge>
          </div>
        </div>
      </div>
      <div className="divide-y-2 divide-app-gray-30">
        {project.units.map((unit, idx) => (
          <UnitItem unit={unit} key={idx} />
        ))}
      </div>
      <div className="flex justify-between tiny:h-17 items-center px-5 tiny:flex-row flex-col py-2 tiny:py-0 gap-2 tiny:gap-0">
        <div className="flex gap-2 w-full">
          {devLoadStatus === 2 ? <img src={DummyImg} alt="developer" className="w-10 h-10 rounded-full" />
            : <img src={BASE_URL+project.dev_logo_path} alt="developer" className={`rounded-full w-10 h-10 ${devLoadStatus === 3 && "hidden"}`} onLoad={() => { if (devLoadStatus != 2) setDevLoadStatus(1) }} onError={() => setDevLoadStatus(2)} />}
          {/* <img src={project.dev_logo_path} alt="developer" className="rounded-full w-10 h-10"/> */}
          <div className="flex flex-col gap-1 w-3/5">
            <p className="text-sm text-app-black-100 truncate">{project.developer_name}</p>
            <p className="text-app-black-60 text-xs whitespace-nowrap">+1 Developer</p>
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0 w-full tiny:w-max">
          <div className="text-center items-center justify-center text-sm font-semibold border rounded-md px-1 md:px-4 md:flex hidden">{project.phone_number}</div>
          <div className="tiny:w-18 text-center items-center justify-center flex md:hidden text-sm font-semibold border rounded-md px-1 md:px-4 text-app-primary-100 border-app-primary-100 w-full">Call Sales</div>
          <a href={project.whatsapp_link} className="bg-app-primary-100 px-1 md:px-3 md:py-2 py-1 rounded-md w-8 h-7 md:w-11 md:h-9 items-center flex justify-center flex-shrink-0">
            <img src={WhatsappIcon} alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem