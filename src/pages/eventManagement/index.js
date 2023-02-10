import React from 'react'
import HeadingCards from '../dashboard/HeadingCards/HeadingCards'
import Calender from './Calendar/Calender'

const EventManagement = () => {
    return (
        <div className='bg-light rounded p-3 mb-3 pb-3'>
            <Calender />
        </div>
    )
}

export default EventManagement