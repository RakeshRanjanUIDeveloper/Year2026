const Image = ({img,cap}) => {
  return (
    <figure>
        <img src={img} style={{width:'200px'}} />
        <figcaption>{cap}</figcaption>
    </figure>
  )
}

export default Image