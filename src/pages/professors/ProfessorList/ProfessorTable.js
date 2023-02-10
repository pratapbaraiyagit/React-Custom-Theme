import React, { useEffect, useState } from 'react'
import { FaFileExcel, FaFilePdf, } from 'react-icons/fa'
import { CSVLink } from "react-csv";
import autoTable from 'jspdf-autotable'
import ls from 'local-storage'

import useSortableData from '../../../utils/useSortableData';
import { professorFormValidate } from '../../../utils/validation';
import { exportProfessorPDF } from '../../../utils/exportPDF';

import { TableData } from '../../../common/Table/TableData';
import Delete from '../../../common/Delete/Delete';
import Pagination from '../../../common/Pagination/Pagination'
import TableHeader from '../../../common/Table/TableHeader';
import TableSearch from '../../../common/Table/TableSearch';
import Buttons from '../../../common/Button/Buttons';
import AddEditForm from '../../../common/Table/AddEditForm';

import '../index.css'

let PageSize = 10;

const ProfessorTable = () => {

    const [productData, setProductData] = useState([])
    const [paginatedData, setPaginatedData] = useState([])

    const [myProduct, setMyProduct] = useState({
        id: Date.now(),
        // image: [],
        productName: '',
        productCategory: '',
        productPrice: '',
        inStock: '',
        size: [],
        productDescription: ''
    })

    const [modal, setModal] = useState(false)

    const [editId, setEditId] = useState(null)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const [deleteId, setDeleteId] = useState(null)

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [searchedVal, setSearchedVal] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const toggleModal = () => setModal(!modal)
    const deleteClose = () => setDeleteOpen(!deleteOpen)

    const [toggleTable, setToggleTable] = useState(true)

    const { items, requestSort, sortConfig } = useSortableData(paginatedData)

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const onChangeInput = (e) => {
        setMyProduct({ ...myProduct, [e.target.name]: e.target.value })
    }

    // const getBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onload = () => resolve(reader.result);
    //         reader.onerror = error => reject(error);
    //         reader.readAsDataURL(file);
    //     });
    // }

    // const imageUpload = (e) => {
    //     // const file = e.target.files[0];
    //     // getBase64(file).then(base64 => {
    //     //     base64(myProduct.image)
    //     // })
    //     setMyProduct({
    //         ...myProduct,
    //         image: [getBase64(e.target.files[0]).then(base6 => { productData.image([base6]) })]
    //     })
    // }

    const onCheckBoxChange = (e) => {
        if (e.target.checked) {
            setMyProduct({ ...myProduct, size: [...myProduct.size, e.target.value], });
        } else {
            setMyProduct({ ...myProduct, size: myProduct.size.filter((element) => element !== e.target.value), });
        }
    }

    const getLocalStorage = () => {
        if (ls.get("productData")) {
            setProductData(ls.get("productData"))
        }
    }

    useEffect(() => {
        getLocalStorage()

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            onSubmitFrom()
        }
    }, [formErrors])

    const currentTableData = (() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const data = productData
        setPaginatedData(data.slice(firstPageIndex, lastPageIndex))
    })

    useEffect(() => {
        if (!modal) {
            Object.keys(formErrors).forEach((i) => formErrors[i] = '')
        }
        currentTableData()
        ls.set("productData", productData)
    }, [modal, productData, currentPage])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(professorFormValidate(myProduct))
        setIsSubmitting(true)
    }

    const onSubmitFrom = (e) => {
        if (editId !== null) {
            setProductData(productData.splice(productData.findIndex((element) => element.id === editId), 1, myProduct))
            ls.set("productData", productData)
            getLocalStorage()
            toggleModal()
            resetForm()
            // currentTableData()
            setEditId(null)
        } else {
            setProductData([...productData, myProduct])
            toggleModal()
            resetForm()
            // currentTableData()
        }
    }

    const onDelete = (id) => {
        setDeleteId(id)
        setDeleteOpen(true)
    }

    const onDeleteProduct = (id) => {
        productData.splice(productData.findIndex((element) => element.id === deleteId), 1)
        ls.set("productData", productData);
        setDeleteOpen(false)
        getLocalStorage();
    }

    const onEdit = (id) => {
        setEditId(id)
        setMyProduct(productData.filter((element) => element.id === id)[0])
        toggleModal()
    }

    const resetForm = () => {
        setMyProduct({
            id: Date.now(),
            productName: '',
            productCategory: '',
            productPrice: '',
            inStock: '',
            size: [],
            productDescription: ''
        })
    }

    const onCancel = () => {
        resetForm()
        toggleModal()
    }
    // useEffect(() => {
    //     getLocalStorage()
    // }, [])

    return (
        <div className='card shadow-sm px-2 me-3 bg-white rounded'>
            <TableHeader
                headerName=' All Professors'
                setToggleTable={setToggleTable}
                toggleTable={toggleTable}
            />

            {toggleTable && (
                <>
                    <div className='card-body'>
                        <div className='float-left d-flex'>
                            <Buttons name="Add New" toggleModal={toggleModal} />
                            <TableSearch setSearchedVal={setSearchedVal} />
                        </div>
                        <div className='float-right'>
                            <div className='p-3 me-2 float-left' >
                                <CSVLink className=' text-decoration-none' data={paginatedData}>
                                    <FaFileExcel size="35px" />
                                </CSVLink>
                            </div>
                            <div className='p-3 me-3 float-left' style={{ cursor: 'pointer' }}>
                                <FaFilePdf onClick={() => exportProfessorPDF(paginatedData)} size="35px" />
                            </div>
                            {/* <button className='float-right title-side-drop p-3 me-3 text-white' onClick={exportPDF}>Export to PDF</button> */}
                            <div className='d-flex float-right title-side-drop p-3 me-3 text-white'>
                                <div className='me-2'>
                                    <label>Show</label>
                                </div>
                                <div className='me-2 border-bottom'>
                                    <label>{productData?.length}</label>
                                </div>
                                <div>
                                    <label>entires</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12  overflow-auto">
                            <TableData
                                name="professorTable"
                                requestSort={requestSort}
                                getClassNamesFor={getClassNamesFor}
                                tableListingData={productData}
                                items={items}
                                searchedVal={searchedVal}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </div>
                        <div>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={productData?.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                </>
            )}

            <AddEditForm
                name="Add Professor Form"
                modal={modal}
                toggleModal={toggleModal}
                onCancel={onCancel}
                handleSubmit={handleSubmit}
                myFormData={myProduct}
                formErrors={formErrors}
                onChangeInput={onChangeInput}
                onCheckBoxChange={onCheckBoxChange}
            // imageUpload={imageUpload}
            />

            <Delete
                deleteOpen={deleteOpen}
                deleteClose={deleteClose}
                onDeleteProduct={onDeleteProduct}
            />
        </div>
    )
}

export default ProfessorTable