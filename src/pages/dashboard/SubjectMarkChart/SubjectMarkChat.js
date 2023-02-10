import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from 'chart.js'
// import { Line } from 'react-chartjs-2'
import TableHeader from '../../../common/Table/TableHeader'
import charts from '../../../assets/Dashboard/charts.png'

import '../index.css'

const SubjectMarkChat = () => {
    const [modal, setModal] = useState(false)
    const [toggleTable, setToggleTable] = useState(true)

    const toggleModal = () => setModal(!modal)

    // const data = {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //     datasets: [
    //         {
    //             // label: "First dataset",
    //             data: [500, 400, 500, 400, 250, 125],
    //             fill: true,
    //             borderColor: "#147AD6"
    //         },
    //         {
    //             // label: "Second dataset",
    //             data: [375, 500, 275, 400, 250, 0],
    //             fill: false,
    //             borderColor: "#EC6666"
    //         }
    //     ]
    // };

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
    );

    return (
        <div className='pt-2 card-group mt-3'>
            <div className=' card shadow-sm px-2 me-3 bg-white rounded'>
                <TableHeader
                    headerName='Subject Mark’s Chart'
                    setToggleTable={setToggleTable}
                    toggleTable={toggleTable}
                />
                {toggleTable && (
                    <div className='card-body'>
                        <div className="col-md-12 overflow-auto">
                            {/* <Line data={data} style={{ height: "400px" }} /> */}
                            <img src={charts} width="95%" />
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default SubjectMarkChat