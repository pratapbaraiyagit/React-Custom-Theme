import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from 'reactstrap'

const Buttons = (props) => {
    const { name, toggleModal } = props

    switch (name) {
        case "Read More":
            return (
                <Button className='text-white bg-dark mt-3 mb-3 px-5 p-2 rounded w-100'>{name}</Button>
            )

        case "Add New":
            return (
                <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                    <FaPlus /> Add New
                </Button>
            )
    }
}

export default Buttons