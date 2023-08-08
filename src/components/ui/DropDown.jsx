import React from 'react'

const DropDown = (props) => {
  return (
    <li className="mb-4">
              <select
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                className="border w-full rounded-full px-4 py-2 bg-gray-200 bg-opacity-20 backdrop-blur"
              >
                {props.default && <option value="">Default</option>}
                {props.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </li>
  )
}

export default DropDown