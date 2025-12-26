import React, { useEffect, useState } from 'react'
import { fakeCompanyResourcesFetch } from './fakeCompanyResourcesFetch';

const CompanyResources = () => {
    const [allCompanyResources, setAllCompanyResources] = useState([]); // Original data
    const [filterCompanyResource, setFilterCompanyResource] = useState([]); // Filter data

    useEffect(() =>{
        const fetchCompanyResourceData = async () =>{
            try {
                const response = await fakeCompanyResourcesFetch('https://example.com/api/users');
                if(response.status === 200){
                    setAllCompanyResources(response.data)
                    setFilterCompanyResource(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchCompanyResourceData()
    }, []);

    const uniqueCompanies = [...new Set(allCompanyResources.map((c) => c.company))];

    const handleCompanyName  = (company) =>{
        if(company === 'all'){
            setFilterCompanyResource(allCompanyResources)
        }else{
            const filterData = allCompanyResources.filter((c) => c.company === company);
            setFilterCompanyResource(filterData);
        }
    }
    
  return (
    <React.Fragment>
    <label htmlFor='company'>All Companies</label>
        {
            <select onChange={(e) => handleCompanyName(e.target.value)}>
            <option value="all">All</option>
            {
                uniqueCompanies.map((company, index) => (
                    <option value={company}>{company}</option>
                ))
            }
                
            </select>
        }
        <div className='company-resources'>
        {
            filterCompanyResource.map((cr) => (
                <div className='company-resource'>
                    <p><b>Resource :</b> {cr.name}</p>
                    <p><b>Email : </b>{cr.email}</p>
                    <a><b>Website : </b>{cr.website}</a>
                    <p><b>Company : </b>{cr.company}</p>
                </div>
            ))
        }
        </div>
    </React.Fragment>
  )
}

export default CompanyResources