import React, { useState } from 'react';
import Layout from '../../layout/layout';
import backIcon from '../../assets/icons/ic_back.svg';
import { useNavigate } from 'react-router-dom';
import { StandardButton } from '../../components/button';
import { filterOptions } from './options';
import FilterUnit from './filterunit';
import Accordion from '../../components/accordion';
import { BadgeButton, FilterBadge } from '../../components/badge';

const FilterPage = () => {
  const [count, setCount] = useState(0)
  const [filter, setFilter] = useState([])
  const handleClear = () => { }
  let navigate = useNavigate()
  const handleBack = () => {
    navigate("/");
  }
  console.log(filter.length)
  return (
    <Layout page="Filter">
      <div className='justify-between items-center flex h-16 px-4'>
        <div className='flex items-center gap-4'>
          <div onClick={handleBack}>
            <img src={backIcon} alt='back' />
          </div>
          <span className='text-xl font-semibold'>Filter</span>
        </div>
        <button className='capitalize text-sm text-app-primary-100 font-semibold'>clear all</button>
      </div>
      <div className='' style={{ height: "calc(100vh - 64px)" }}>
        <div className='flex flex-col divide-y divide-app-gray-100'>
          {filter.length !== 0 &&
            <Accordion summary={<div className=''><div className='flex items-center gap-2'><p className='text-base font-semibold'>Selected Filter</p><BadgeButton count={filter.length} clear={handleClear} className={filter.length === 0 && "hidden"} /></div></div>} className="" subClassname={filter.length > 0 ? "h-19" : "h-12.6"} >
              <div className='flex flex-wrap gap-1 pb-4'>
                {filter.map((item, idx)=>(<FilterBadge key={idx}>{item}</FilterBadge>))}
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
            <p className='text-base font-semibold'>View {count} Launches</p>
          </StandardButton>
        </div>
      </div>
    </Layout>)
}


export default FilterPage;