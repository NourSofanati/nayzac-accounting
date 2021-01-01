import React, { useState } from 'react'

function CreateCompany() {
    let [partnersCount, setpartnersCount] = useState("a");
    const increasePartners = (e) => {
        setpartnersCount(partnersCount + "a");
    }
    const sendData = (e) => {
        e.preventDefault();
        const data = new URLSearchParams(new FormData(e.target));

        fetch("http://localhost/api/company/partners/create.php", {
            method: 'POST',
            body: data,
        })
            .then(raw => raw.text())
            .then(text => console.info(text));
    }
    return (
        <div className="text-right">
            <div className="card-header">
                <h2>إنشاء شركة اشخاص</h2>
            </div>
            <div className="card-body">
                <form onSubmit={sendData}>
                    {
                        partnersCount.split('').map((p, i) => (<div className="form-group" key={i} >
                            <label htmlFor="opening_account[]">اسم الشريك</label>
                            <input type="text" name="opening_accounts[]" className="form-control" />
                        </div>))
                    }
                    <div className="btn btn-primary rounded-pill " onClick={increasePartners}>إضافة شريك اخر</div>

                    <hr></hr>
                    <input type="submit" value="إفتتاح الشركة" className="btn btn-primary rounded-pill " />
                </form>
            </div>
        </div>
    )
}

export default CreateCompany
