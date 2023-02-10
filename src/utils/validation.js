
export const professorFormValidate = (values) => {
    let errors = {}

    if (!values.productName) {
        errors.productName = "Please Enter Product name"
    }
    if (!values.productDescription) {
        errors.productDescription = "Please Enter Description"
    }
    if (!values.productPrice) {
        errors.productPrice = "Please Enter Product Price"
    }
    if (!values.inStock) {
        errors.inStock = "Please Select Anyone"
    }
    if ((values.size).length === 0) {
        errors.size = "Please Select Cloth Size"
    }

    return errors
}

export const studentFormValidate = (values) => {
    let errors = {}

    if (!values.studentName) {
        errors.studentName = "Please Enter Student Name"
    }
    if (!values.studentDepartment) {
        errors.studentDepartment = "Please Enter Student Department"
    }
    if (!values.studentMobile) {
        errors.studentMobile = "Please Enter Student Mobile"
    }
    if (!values.admissionDate) {
        errors.admissionDate = "Please Select Admission Date"
    }
    return errors
}

export const studentSportFormValidate = (values) => {
    let errors = {}

    if (!values.sportStudentName) {
        errors.sportStudentName = "Please Enter Student Name"
    }
    if (!values.sportAssignCoach) {
        errors.sportAssignCoach = "Please Enter Sport Assign Coach"
    }
    if (!values.sportStudentDate) {
        errors.sportStudentDate = "Please Select Date"
    }
    if (!values.sportStudentTime) {
        errors.sportStudentTime = "Please Select Time"
    }
    return errors
}