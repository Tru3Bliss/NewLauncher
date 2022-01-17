import React, { useState, useEffect } from 'react'
import Accordion from '../../components/accordion';
import { CheckBox, ModernInput, SearchInput } from '../../components/input';
import { BadgeButton } from '../badge';

const FilterUnit = (props) => {
  const { option, filter, setFilter } = props
  const [keyword, setKeyword] = useState("")
  const fullOptions = option.options
  const [filtered, setFiltered] = useState([])
  const [checked, setChecked] = useState([])
  const [expand, setExpand] = useState(false)
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [error, setError] = useState(false)
  let clearFlag = false
  const limit = option.max_limit
  const handleCheck = (checkedOption, check) => {
    if (check) {
      if (filter.filter(e => e.name === checkedOption.name).length === 0)
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
    setMin("")
    setMax("")
  }

  useEffect(() => {
    if (!clearFlag) {
      setChecked([])
      fullOptions.map((item) => {
        filter.map((filteredItem) => {
          if (item.name === filteredItem.name) {
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

  useEffect(() => {
    setError(parseInt(min) > parseInt(max))
    console.log("min", min)
    console.log("max", max)
    if (min > 0 || max > 0) {
      setChecked([{
        name: option.name,
        min: min,
        max: max
      }
      ])
    }
  }, [min, max])

  return (
    <Accordion summary={
      <div className=''>
        <div className='flex items-center gap-2'>
          <p className='text-base font-semibold'>{option.name}</p>
          <BadgeButton count={checked.length} clear={clear} className={checked.length === 0 && "hidden"} />
        </div>
        <p className={`whitespace-nowrap overflow-hidden truncate text-sm text-app-gray-600 md:hidden ${checked.length === 0 && "hidden"}`}>{checked.map((item) => (item.name) + ", ")}</p>
      </div>} className="" subClassname={checked.length > 0 ? "h-19" : "h-12.6"} expand={expand} setExpand={setExpand}>
      <div className='flex flex-col gap-3'>
        {(option.type === 1 || option.type === 4) && <SearchInput placeholder={`Search ${option.name}`} keyword={keyword} setKeyword={setKeyword} />}
        {option.type !== 3 && <div className='flex flex-col divide-y divide-app-gray-100'>
          <div>
            <label className='text-xs'>{filtered.length > 0 ? filtered.length : "No"} project{filtered.length > 1 && "s"} found</label>
            <div className='flex flex-col gap-3 pt-2 pb-4'>
              {filtered.map((option, idx) => (
                <div className='flex gap-2 items-center' key={idx}>
                  <div className='px-0.6 items-center flex'>
                    <CheckBox label={option.name} onChange={handleCheck} option={option} checked={filter.filter(e => e.name === option.name).length > 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-3 py-4'>
            {option.options.map((option, idx) => (
              <div className='flex gap-2 items-center' key={idx}>
                <div className='px-0.6 items-center flex'>
                  <CheckBox label={option.name} onChange={handleCheck} option={option} checked={filter.filter(e => e.name === option.name).length > 0} />
                </div>
              </div>
            ))}
          </div>
        </div>}
        {
          option.type === 3 &&
          <div className='flex flex-col'>
            <div className='flex justify-between items-center gap-1 py-4'>
              <ModernInput label={"min." + option.name.split(" ")[option.name.split(" ").length - 1]} value={min} setValue={setMin} error={error} limit={limit} />
              <p className='text-4xl leading-1'>-</p>
              <ModernInput label={"max." + option.name.split(" ")[option.name.split(" ").length - 1]} value={max} setValue={setMax} error={error} limit={limit} />
            </div>
            {error && <p className='text-app-red text-xs pb-4'>Min value can't more than max value</p>}
          </div>
        }
      </div>
    </Accordion>
  )
}

export default FilterUnit