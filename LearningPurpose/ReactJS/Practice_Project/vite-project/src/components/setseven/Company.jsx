import React, { useEffect, useState } from 'react'
import { fakeCompanyFetch } from './fakeCompanyFetch';

const Company = () => {
    const [companies, setCompanies] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const fetchCompanyData = async () =>{
        try{
            const response = await fakeCompanyFetch('https://example.com/api/users');
            setCompanies(response.data)
            setFilteredCompanies(response.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCompanyData();
    },[])

    const handleCompany = (e) =>{
        const selectedCompany = e.target.value;
        if(selectedCompany === ''){
            setFilteredCompanies(companies)
        }else{
            const selectedCompanyList = companies.filter((c) => c.company === selectedCompany);
            setFilteredCompanies(selectedCompanyList)
        }
       
    }
  return (
    <React.Fragment>
        <h2>Company</h2>
        <select className='drop-down' onChange={handleCompany}>
            <option value=''>All Companies</option>
            {[...new Set(companies.map((c)=> c.company))].map((company, index) => (
                    <option key={index} value={company}>{company}</option>
                ))
            }
        </select>
        <div className='flex-box-container'>
            {
                filteredCompanies.map((c) =>(
                    <div className='flex-box'>
                        <p><b>Name - </b>{c.name}</p>
                        <p><b>Email - </b>{c.email}</p>
                        <p><b>Website - </b>{c.website}</p>
                        <p><b>Company - </b>{c.company}</p>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Company