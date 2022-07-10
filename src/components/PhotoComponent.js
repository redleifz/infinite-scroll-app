const PhotoComponent =({alt_descrition,urls:{regular}})=>{
    return(
        <div className="single-photo">
            
                <img src={regular} alt ={alt_descrition}></img>
        </div>
    )
}

export default PhotoComponent