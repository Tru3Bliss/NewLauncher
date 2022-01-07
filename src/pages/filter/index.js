import React, { useState } from 'react';
import Layout from '../../layout/layout';
import backIcon from '../../assets/icons/ic_back.svg';
import { useNavigate } from 'react-router-dom';
import { StandardButton } from '../../components/button';

const FilterPage = () => {
  const[count, setCount] = useState(0)
  const handleClear = () => { }
  let navigate = useNavigate()
  const handleBack = () => {
    navigate("/");
  }
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
      <div>
        <div></div>
        <div className='px-4 py-3'>
        <StandardButton className="w-full h-12.5">
          <p className='text-base font-semibold'>View {count} Launches</p>
        </StandardButton>
        </div>
      </div>
    </Layout>)
}


export default FilterPage;