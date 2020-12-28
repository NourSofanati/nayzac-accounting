import React, { useState, useEffect } from 'react'
import {
    GridComponent,
    ColumnDirective,
    ColumnsDirective,
    Page,
    Filter,
    Inject,
    Toolbar,
    Edit,

} from '@syncfusion/ej2-react-grids';
import ill from './a.svg';
import {
    Link
} from "react-router-dom";
function Vendors() {
    const [vendors, setVendors] = useState([]);

    const fetchData = () => {
        fetch("http://localhost/api/vendors/get.php", {
            method: "GET"
        })
            .then(data => data.json())
            .then(jsonData => {
                setVendors(jsonData);
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="text-right">
            <div className="card-header">
                <h2>الموردين</h2>
            </div>
            <div className="card-body">
                <div className="d-flex w-50">
                    <Link className="btn btn-primary ml-3" to="/vendors/add">إضافة مورّد جديد</Link>
                    <div className="btn btn-primary">تصدير المورّدين كملف ايكسل</div>
                </div>
                <div className="text-center p-2 mb-4">
                    <img src={ill} alt="cart" height="175px" />
                </div>
                <GridComponent
                    dataSource={vendors}
                    allowFiltering={true}
                    allowPaging={true}
                    pageSettings={{ pageSize: 5 }}
                    toolbar={['Delete', 'Edit', 'Update', 'Cancel']}
                    editSettings={{
                        showDeleteConfirmDialog: true,
                        allowDeleting: true,
                        mode: 'Dialog',
                        showConfirmDialog: true,
                        allowEditing: true,
                        allowAdding: true,
                    }}
                    enableRtl={true}

                >
                    <ColumnsDirective>
                        <ColumnDirective field="id" headerText="الرقم التسلسلي" textAlign="Center" width="100" isPrimaryKey={true}></ColumnDirective>
                        <ColumnDirective field="name" headerText="اسم المورد" textAlign="Center" width="100" isIdentity={true}></ColumnDirective>
                        <ColumnDirective field="phone" headerText="رقم الهاتف" textAlign="Center" width="100"></ColumnDirective>
                        <ColumnDirective field="address" headerText="العنوان" textAlign="Center" width="100"></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Filter, Edit, Toolbar]} />
                </GridComponent>
            </div>
        </div >
    )
}

export default Vendors
