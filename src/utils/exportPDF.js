import jsPDF from "jspdf";

export const exportSportStudentPDF = (paginatedData) => {
    console.log('paginatedData', paginatedData)
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Sport Student List";
    const headers = [["Student Name", "Assigned Coach", "Date", "Time"]];

    const data = paginatedData?.map(elt => [elt?.sportStudentName, elt?.sportAssignCoach, elt?.sportStudentDate, elt?.sportStudentTime]);

    let content = {
        startY: 50,
        head: headers,
        body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(title + ".pdf")
}

export const exportProfessorPDF = (paginatedData) => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Product Table";
    const headers = [["Product Name", "Product Description", "Product Category", "Product Price", "Size", "InStock"]];

    const data = paginatedData?.map(elt => [elt?.productName, elt?.productDescription, elt?.productCategory, elt?.productPrice, elt?.size, elt?.inStock]);

    let content = {
        startY: 50,
        head: headers,
        body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(title + ".pdf")
}