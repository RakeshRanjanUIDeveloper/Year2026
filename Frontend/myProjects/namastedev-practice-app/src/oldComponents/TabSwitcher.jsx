import React from 'react'

const tabs = [
    {id:"home", label: "Home", content:"Welcome to the Home tab!"},
    {id:"profile", label: "Profile", content:"This is your Profile tab."},
    {id:"settings", label: "Settings", content:"This is your Settings tab."},
]
const TabSwitcher = () => {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <div className="tabSwitcher">
        <h1>Tab Switcher</h1>
        <div className='tab-buttons'>
            {
                tabs.map((tab)=> (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={tab.id === activeTab ? "active" : ""}>{tab.label}</button>
                ))
            }
        </div>
        <div className='tab-content'>
            {
                tabs.map((tab) =>(
                    <div key={tab.id} className={tab.id === activeTab ? "active" : "inactive"}>{tab.content}</div>
                ))
            }
        </div>
    </div>
  )
}

export default TabSwitcher