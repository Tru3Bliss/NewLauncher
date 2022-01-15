import React from "react";

export const SplitedProgressBar = (props) => {
  const { className, percent } = props
  const FullPart = () => {
    return (
      <div className="w-1/5 h-full rounded-full bg-app-primary-100"></div>
    )
  }

  const PiecePart = (props) => {
    const { percent } = props
    return (
      <div className="w-1/5 rounded-full bg-app-gray-30">
        <div className="h-1 rounded-full bg-app-primary-100" style={{ width: `${percent}%` }}></div>
      </div>
    )
  }

  const EmptyPart = () => {
    return (
      <div className="w-1/5 h-full rounded-full bg-app-gray-30"></div>
    )
  }
  return (
    <div className="w-full gap-2 rounded-full h-1 flex">
      {Array.apply(null, Array(parseInt(percent / 20))).map((item, idx) => (
        <FullPart key={idx} />
      ))
      }
      <PiecePart percent={parseInt((percent % 20) * 5)} />
      {Array.apply(null, Array(4 - parseInt(percent / 20))).map((item, idx) => (
        <EmptyPart key={idx} />
      ))
      }
    </div>
  )
}