import React from 'react'

import PHP from '../../../assets/CouserList/php.png'
import Android from '../../../assets/CouserList/android.png'
import AspNet from '../../../assets/CouserList/aspnet.png'
import flutter from '../../../assets/CouserList/flutter.png'
import JavaScript from '../../../assets/CouserList/javascript.png'
import UiUx from '../../../assets/CouserList/uiux.png'
import Buttons from '../../../common/Button/Buttons'

const CourseList = () => {

    const Data = [
        {
            name: 'PHP Development Course',
            img: PHP,
            like: '505',
            date: 'November 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },
        {
            name: 'Asp.net Development Course',
            img: AspNet,
            like: '505',
            date: 'March 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },
        {
            name: 'UI/UX Development Course',
            img: UiUx,
            like: '505',
            date: 'March 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },
        {
            name: 'JavaScript Development',
            img: JavaScript,
            like: '505',
            date: 'March 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },
        {
            name: 'Android Development Course',
            img: Android,
            like: '505',
            date: 'March 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },
        {
            name: 'Flutter Development Course',
            img: flutter,
            like: '505',
            date: 'March 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },
        {
            name: 'Asp.net Development Course',
            img: AspNet,
            like: '505',
            date: 'March 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },
        {
            name: 'PHP Development Course',
            img: PHP,
            like: '505',
            date: 'March 01',
            month: '8 Months',
            username: 'John cart',
            studentNumber: 'Student 300+',
        },

    ]

    return (
        <div className='p-3 me-3 rounded'>
            <h4>All Courses</h4>
            <div className='card-group'>
                {Data?.map((val, i) => (
                    <div key={i} className=' bg-white rounded-4 border pb-3 me-4 mt-4 p-4 '  >
                        <div className=' text-center'>
                            <img src={val?.img} alt='' width="100%" />
                        </div>
                        <div className='card-body'>
                            <div className='mt-3'>
                                <div className='float-left'>
                                    <h6 style={{ textAlign: 'justify' }}>{val?.name}</h6>
                                </div>
                                <div className='float-right' style={{ color: '#3F8DFD' }} >
                                    <i className="fa fa-heart-o me-1"></i>
                                    <p className='float-right'>{val?.like}</p>
                                </div><br /><br />
                            </div>
                            <div className='mt-2'>
                                <label className=''>{val?.date}</label>
                            </div><br /><br />
                            <div className='text-center'>
                                <div className='float-left me-3'>
                                    <i className="fa fa-clock-o fs-4" style={{ color: '#2351DE' }}></i>
                                    <br />
                                    <label>{val?.month}</label>
                                </div>
                                <div className='float-left me-3'>
                                    <i className="fa fa-user-o fs-4" style={{ color: '#BB4ECB' }}></i>
                                    <br />
                                    <label>{val?.username}</label>
                                </div>
                                <div className='float-left'>
                                    <i className="fa fa-user-o fs-4" style={{ color: '#E252BE' }}></i>
                                    <br />
                                    <label>{val?.studentNumber}</label>
                                </div>
                            </div>
                        </div>
                        <div className='text-center'>
                            <Buttons name='Read More' />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default CourseList