import React from 'react'
import HeadingCards from '../dashboard/HeadingCards/HeadingCards'
import CourseList from './CourseList/CourseList'

const Course = () => {
    return (
        <div className='bg-light rounded p-3 mb-3 pb-3'>
            <CourseList />
        </div>
    )
}

export default Course