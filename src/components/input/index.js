import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FaDown, HidePass, ShowPass, SvgInfo } from '../svg'

export const Input = (props) => {
  const { value, setValue, type, placeholder, className } = props
  return (
    <input className={`outline-none rounded-full px-4 py-2 border ${className}`} type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export const VerifyInput = (props) => {
  const { className, title, value, setValue, type, send, target, autoSend } = props
  let timer
  const [status, setStatus] = useState(0) //0 get code 1:sent, 2:resned, 3:error valid
  const [statusMsg, setStatusMsg] = useState(type === "email" ? "Enter the 6-digit code sent to " + target : "Unable to receive your verification code?Try")
  useEffect(() => {
    if (value.length !== 6) {
      setStatus(3)
      if (value.length === 0) {
        setStatusMsg("Enter validation code.")
      }
      else {
        setStatusMsg("Please enter a 6-digit verification code.")
      }
    }
    else {
      setStatusMsg(type === "email" ? "Enter the 6-digit code sent to " + target : "Unable to receive your verification code?Try")
    }
  }, [value, type, target])

  useEffect(()=>{
    if(autoSend){
      setStatus(1)
    }
  },[autoSend])
  const handleSend = () => {
    if (timer !== undefined)
      clearTimeout(timer);
    setStatus(1)
    send()
    timer = setTimeout(() => {
      setStatus(2)
    }, 60000);
  }
  useEffect(() => {
    setStatus(0)
    setStatusMsg(type === "email" ? "Enter the 6-digit code sent to " + target : "Unable to receive your verification code?Try")
  }, [type, target])
  return (
    <div className={`${className}`}>
      <p className='text-sm text-app-gray-600 leading-8'>{title}</p>
      <div className={`flex border ${status === 3 && value.length !== 6 ? 'border-red-600' : 'hover:border-app-yellow'} rounded-md px-3 justify-between items-center h-12`}>
        <input value={value} onChange={(e) => setValue(e.target.validity.valid ? e.target.value : value)} type="text" pattern="[0-9]*" className='outline-none w-1/2' maxLength={6} />
        <p className={`${status !== 1 && "hidden"} flex text-sm text-app-gray-200 gap-2 whitespace-nowrap`} data-tooltip-target="tooltip-default">Verification code sent <SvgInfo /></p>
        <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
          Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className={`${status === 1 && "hidden"} text-sm text-app-yellow-dark font-medium cursor-pointer`} onClick={handleSend}>{status === 0 ? "Get Code" : "Resend Code"}</div>
      </div>
      <div className='flex flex-col mt-1 mb-5 text-xs'>
        <p className={`${status === 3 && value.length !== 6 ? "text-red-600" : "text-app-gray-200"}  `}>{statusMsg}<a href="/" className={`${type !== "phone" && "hidden"} text-app-yellow-dark`}>Voice SMS</a></p>
        <a className={`text-app-yellow-dark ${status !== 2 && "hidden"}`} href='/'>Not receiving code?</a>
      </div>
    </div>
  )
}

VerifyInput.propTypes = {
  send: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  target: PropTypes.string
}

VerifyInput.defaultProps = {
  send: () => { },
  type: "email",
  target: "vam***@veb65.com",
}

export const InputUnit = (props) => {
  const { className, label, value, setValue, type, error, errormsg } = props
  const [passShow, setPassShow] = useState(false)
  const [inputType, setInputType] = useState(type)
  const toggleShow = () => {
    setPassShow(!passShow)
    setInputType(passShow ? "password" : "text")
  }

  return (
    <div className={`${className}`}>
      <p className='mb-1 text-app-gray-600'>{label}</p>
      <div className={`flex rounded-md border hover:border-app-yellow h-12 items-center ${error && "border-red-600"}`}>
        <input className='outline-none w-full px-3 rounded-md h-full' value={value} onChange={(e) => setValue(e.target.value)} type={inputType} required />
        <div className={`${type !== "password" && "hidden"} cursor-pointer mr-2`} onClick={toggleShow}>
          <ShowPass className={`${!passShow && "hidden"}`} />
          <HidePass className={`${passShow && "hidden"}`} />
        </div>
      </div>
      <p className={`text-red-600 ${!error && "hidden"}`}>{errormsg}</p>
    </div>
  )
}

InputUnit.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
}


export const InputPhone = (props) => {
  const { className, label, value, setValue, openDlg, error, errormsg, selected } = props
  return (
    <div className={`${className}`}>
      <p className='mb-1 text-app-gray-600'>{label}</p>
      <div className='flex gap-2'>
        <div className={`rounded-md border hover:border-app-yellow h-12 w-25 flex-shrink-0 cursor-pointer items-center flex justify-around ${error && "border-red-600"}`} onClick={openDlg}>
          <div className='flex gap-2'>
            <div className="w-4 h-4">
              <img src={`http://purecatamphetamine.github.io/country-flag-icons/1x1/${selected.code}.svg`} alt="flag" className="rounded-full" />
            </div>
            <p className='text-xs text-app-gray-600 font-medium'>+{selected.mobileCode}</p>
          </div>
          <FaDown className="w-4 h-4 text-app-gray-600" />
        </div>
        <div className={`flex rounded-md border hover:border-app-yellow h-12 items-center w-full ${error && "border-red-600"}`}>
          <input className='outline-none w-full px-3 rounded-md h-full' pattern="[0-9]*" value={value} onChange={(e) => setValue(e.target.validity.valid ? e.target.value : value)} type={"text"} maxLength={13} />
        </div>
      </div>
      <p className={`text-red-600 ${!error && "hidden"}`}>{errormsg}</p>
    </div>
  )
}

InputPhone.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  openDlg: PropTypes.func
}

InputPhone.defaultProps = {
  openDlg: () => { },
}
