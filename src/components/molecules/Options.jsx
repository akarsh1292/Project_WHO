import React from 'react'
import "./Options.css"
import Option from '../atoms/Option'

const Options = ({ OptionsForQ = [] }) => {

   return (
      <div className='Options'>
         {
            OptionsForQ.map((option, index) => {
               if (option.type === "image") {
                  return <Option
                     key={index}
                     index={index}
                     OptionId={option.id}
                     Value={option.content} />
               } else {
                  return <Option
                     key={index}
                     index={index}
                     OptionId={option.id}
                     Value={option.content} />
               }
            })
         }
      </div>

   )
}

export default Options