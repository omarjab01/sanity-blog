import React from 'react'

const Tag = ({ tag }) => {
  switch (tag) {
    case 'Javascript':
      var style = "bg-yellow-200 text-black"
      break;
    case 'Php':
      var style = "bg-purple-200 text-black"
      break;
    default:
      break;
  }


  return (
    <div className={`${style} px-3 py-1 w-fit rounded-full text-xs`}>{tag}</div>
  )

}

export default Tag