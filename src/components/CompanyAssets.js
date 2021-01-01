import React, { useEffect, useState, fetch } from 'react'

function CompanyAssets() {
    const [count, setCount] = useState("a");
    const [data, setData] = useState([]);
    const increaseCount = () => {
        setCount(count + "a");
    }

    useEffect(() => {
        getPartners();
    }, []);


    const sendData = (e) => {
        const data = new URLSearchParams(new FormData(e.target));
        fetch("http://localhost/api/company/partners/shares.php",
            {
                method: 'POST',
                body: data,
            }
        )
            .then(raw => raw.text())
            .then(json => console.log(json));
    }

    const getPartners = () => {
        fetch("http://localhost/api/company/partners/get.php",
            {
                method: 'GET',
            }
        )
            .then(raw => raw.json())
            .then(json => setData(json));
    }

    return (
        <div className="text-right">
            <div className="card-header">
                <h2>إضافة الإفتتاحية</h2>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="partner[]">الشريك:</label>
                        <select name="partner[]" className="form-control">
                            {data.map(d => (<option value={d.id}>{d.name}</option>))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor=""></label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompanyAssets
