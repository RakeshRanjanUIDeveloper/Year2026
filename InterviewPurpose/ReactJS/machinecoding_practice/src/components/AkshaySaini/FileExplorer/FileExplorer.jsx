import React, { useState } from 'react'
import './style.css'
import List from './List';
import json from './data.json';

const FileExplorer = () => {
    const [data, setData] = useState(json);
  return (
    <React.Fragment>
        <h2>FileExplorer</h2>
        <List list={data} />
    </React.Fragment>
  )
}

export default FileExplorer