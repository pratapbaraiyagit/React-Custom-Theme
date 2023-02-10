import React from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap'

const TableSearch = ({
    setSearchedVal,

}) => {
    return (
        <div>
            <InputGroup className="py-2">
                <InputGroupText className="bg-transparent border-0 h-100">
                    <i className="fa fa-search me-2 fa-lg" aria-hidden="true" ></i>   Search:
                </InputGroupText>
                <Input onChange={(e) => setSearchedVal(e.target.value)} className="bg-transparent border-1 pl-0 py-2 h-100" />
            </InputGroup>
        </div>
    )
}

export default TableSearch