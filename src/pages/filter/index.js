import React, { useState } from 'react';
import Layout from '../../layout/layout';
import backIcon from '../../assets/icons/ic_back.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { StandardButton } from '../../components/button';
import { filterOptions } from './options';
import FilterUnit from './filterunit';
import Accordion from '../../components/accordion';
import { BadgeButton, FilterBadge } from '../../components/badge';

const FilterPage = () => {
  const location = useLocation()
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState(location.state?.filter)
  const [expand, setExpand] = useState(false)
  const handleClear = () => {
    setFilter([])
  }
  let navigate = useNavigate()
  const handleBack = () => {
    navigate("/", {
      state: {
        filter: filter
      }
    });
  }
  const handleRemove = (item) => {
    setFilter(filter.filter(e => e !== item))
  }
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='justify-between items-center flex h-16 px-4 text-app-black-100'>
        <div className='flex items-center gap-4'>
          <div onClick={handleBack}>
            <img src={backIcon} alt='back' />
          </div>
          <span className='text-xl font-semibold'>Filter</span>
        </div>
        <button className='capitalize text-sm text-app-primary-100 font-semibold cursor-pointer' onClick={() => { setFilter([]) }}>clear all</button>
      </div>
      <div className='overflow-y-auto text-app-black-100 h-full flex-1 flex flex-col' >
        <div className='flex flex-col divide-y divide-app-gray-100 flex-1'>
          {filter.length !== 0 &&
            <Accordion summary={
              <div className=''>
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
          {
            filterOptions.map((option, idx) => (
              <FilterUnit option={option} key={idx} filter={filter} setFilter={setFilter} />
            ))
          }
        </div>
        <div className='px-4 py-3'>
          <StandardButton className="w-full h-12.5">
            <p className='text-base font-semibold'>View {parseInt(Math.random() * 100)} Launches</p>
          </StandardButton>
        </div>
      </div>
    </div>)
}


export default FilterPage;