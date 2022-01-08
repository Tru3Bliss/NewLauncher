import React, { useState, useEffect } from 'react'
import Accordion from '../../components/accordion';
import { BadgeButton } from '../../components/badge';
import { CheckBox, SearchInput } from '../../components/input';

const FilterUnit = (props) => {
  const { option, filter, setFilter } = props
  const [keyword, setKeyword] = useState("")
  const fullOptions = option.options
  const [filtered, setFiltered] = useState([])
  const [checked, setChecked] = useState([])
  const [checkedIndex, setCheckedIndex] = useState([])
  const handleCheck = (id, check, idx) => {
    if (check) {
      if (filter.filter(e => e === id).length === 0)
        setFilter(filter => [...filter, id])
      if (checked.filter(e => e === id).length === 0)
        setChecked(checked => [...checked, id])
      if (idx !== undefined && checkedIndex.filter(e => e === idx).length === 0)
        setCheckedIndex(checkedIndex => [...checkedIndex, idx])
    }
    else {
      setChecked(checked.filter(e => e !== id))
      setFilter(filter.filter(e => e !== id))
      if (idx !== undefined) {
        setCheckedIndex(checkedIndex.filter(e => e !== idx))
      }
    }
  }

  const clear = () => {
    for(let i = checked.length; i>=0; i--){
      setFilter(filter.filter(e => e !== checked[i]))
    }
    setChecked([])
    setCheckedIndex([])
  }

  useEffect(() => {
    console.log(filter)
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
    <Accordion summary={<div className=''><div className='flex items-center gap-2'><p className='text-base font-semibold'>{option.title}</p><BadgeButton count={checked.length} clear={clear} className={checked.length === 0 && "hidden"} /></div><p className={`whitespace-nowrap overflow-hidden truncate text-sm text-app-gray-600 ${checked.length === 0 && "hidden"}`}>{checkedIndex.map((idx) => (option.options[idx].name) + ", ")}</p></div>} className="" subClassname={checked.length > 0 ? "h-19" : "h-12.6"} >
      <div className='flex flex-col gap-3'>
        <SearchInput placeholder={`Search ${option.title}`} keyword={keyword} setKeyword={setKeyword} />
        <div className='flex flex-col divide-y divide-app-gray-100'>
          <div>
            <label className='text-xs'>{filtered.length > 0 ? filtered.length : "No"} {option.unit}{filtered.length > 1 && "s"} found</label>
            <div className='flex flex-col gap-3 pt-2 pb-4'>
              {filtered.map((option, idx) => (
                <div className='flex gap-2 items-center' key={idx}>
                  <div className='px-0.6 items-center flex'>
                    <CheckBox label={option.name} onChange={(id, check) => handleCheck(id, check)} id={option.id} checked={checked.filter(e => e === option.id).length > 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3 py-4'>
            {option.options.map((option, idx) => (
              <div className='flex gap-2 items-center' key={idx}>
                <div className='px-0.6 items-center flex'>
                  <CheckBox label={option.name} onChange={(id, check) => handleCheck(id, check, idx)} id={option.id} checked={checked.filter(e => e === option.id).length > 0} />
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