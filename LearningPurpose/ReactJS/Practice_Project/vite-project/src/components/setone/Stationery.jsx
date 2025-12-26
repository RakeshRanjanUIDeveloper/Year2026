const Stationery = ({header, items}) => {
  return (
    <div>
        <h2>{header}</h2>
        <ul>
            {
                items.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Stationery