import React from 'react'

function VendorsAdd() {

    const sendData = (e) => {
        e.preventDefault();
        const data = new URLSearchParams(new FormData(e.target));

        fetch("http://localhost/api/vendors/create.php", {
            method: 'POST',
            body: data,
        })
            .then(raw => raw.text())
            .then(text => console.info(text));
    }
    return (
        <div className="text-right">
            <div className="card-header">
                <h2>إضافة مورد</h2>
            </div>
            <div className="card-body">
                <form onSubmit={sendData}>
                    <div className="form-group mb-4">
                        <label htmlFor="name" >الاسم</label>
                        <input type="text" required className="form-control" name="name" id="name" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="address">العنوان</label>
                        <input type="text" className="form-control" name="address" id="address" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="phone">رقم الهاتف</label>
                        <input type="text" className="form-control" name="phone" id="phone" />
                    </div>
                    <input type="submit" className="btn btn-primary" value="إضافة المورّد" />
                </form>
            </div>
        </div>
    )
}

export default VendorsAdd
