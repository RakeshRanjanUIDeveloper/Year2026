import { useState } from "react";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];
const TabSwitcher = () =>{
    const [activeId, setActiveId] = useState("home");
    const handleTabSwitcher = (tabId)=>{
        setActiveId(tabId)
    }
    return (
        <div>
            <h3>Tab Switcher</h3>
            {
                tabs.map((tab) =>(
                    <div key={tab.id}>
                        <h2 className={tab.id === activeId ? 'active' : ''} onClick={() =>handleTabSwitcher(tab.id)}>{tab.label}</h2>
                        {
                            activeId=== tab.id && <p>{tab.content}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}
export default TabSwitcher;