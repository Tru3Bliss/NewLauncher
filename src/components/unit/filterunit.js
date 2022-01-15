import React, { useState, useEffect } from 'react'
import Accordion from '../../components/accordion';
import { CheckBox, SearchInput } from '../../components/input';
import { BadgeButton } from '../badge';

const FilterUnit = (props) => {
  const { option, filter, setFilter } = props
  const [keyword, setKeyword] = useState("")
  const fullOptions = option.options
  const [filtered, setFiltered] = useState([])
  const [checked, setChecked] = useState([])
  const [expand, setExpand] = useState(false)
  let clearFlag = false
  const handleCheck = (checkedOption, check) => {
    if (check) {
      if (filter.filter(e => e.id === checkedOption.id).length === 0)
        setFilter(old => [...old, checkedOption])
    }
    else {
      setFilter(filter.filter(e => e !== checkedOption))
    }
  }

  const clear = () => {
    clearFlag = true
    setFilter(filter.filter(e => checked.filter(item => item === e).length === 0))
    setChecked([])
    clearFlag = false
  }

  useEffect(() => {
    if (!clearFlag) {
      setChecked([])
      fullOptions.map((item) => {
        filter.map((filteredItem) => {
          if (item.id === filteredItem.id) {
            setChecked(old => [...old, filteredItem])
          }
        })
      })
    }
  }, [filter])

  useEffect(() => {
    if (keyword.length === 0) {
      setFiltered([])
    }
    else {
      let buffer = []
      buffer = fullOptions.filter(e => e.name.includes(keyword))
      setFiltered(buffer)
    }
  }, [keyword])


  return (
    <Accordion summary={
      <div className=''>
        <div className='flex items-center gap-2'>
          <p className='text-base font-semibold'>{option.title}</p>
          <BadgeButton count={checked.length} clear={clear} className={checked.length === 0 && "hidden"} />
        </div>
        <p className={`whitespace-nowrap overflow-hidden truncate text-sm text-app-gray-600 ${checked.length === 0 && "hidden"}`}>{checked.map((item) => (item.name) + ", ")}</p>
      </div>} className="" subClassname={checked.length > 0 ? "h-19" : "h-12.6"} expand={expand} setExpand={setExpand}>
      <div className='flex flex-col gap-3'>
        <SearchInput placeholder={`Search ${option.title}`} keyword={keyword} setKeyword={setKeyword} />
        <div className='flex flex-col divide-y divide-app-gray-100'>
          <div>
            <label className='text-xs'>{filtered.length > 0 ? filtered.length : "No"} {option.unit}{filtered.length > 1 && "s"} found</label>
            <div className='flex flex-col gap-3 pt-2 pb-4'>
              {filtered.map((option, idx) => (
                <div className='flex gap-2 items-center' key={idx}>
                  <div className='px-0.6 items-center flex'>
                    <CheckBox label={option.name} onChange={handleCheck} option={option} checked={filter.filter(e => e.id === option.id).length > 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3 py-4'>
            {option.options.map((option, idx) => (
              <div className='flex gap-2 items-center' key={idx}>
                <div className='px-0.6 items-center flex'>
                  <CheckBox label={option.name} onChange={handleCheck} option={option} checked={filter.filter(e => e.id === option.id).length > 0} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Accordion>
  )
}

export default FilterUnit