import './App.css';
import PhotoComponent from './components/PhotoComponent';
import {useEffect, useState} from "react"


function App() {

  const apiKey = `NcbOE45BFUuhK5YUvmxHr76KNDmFYZtE_R69PeAcoqc`
  const [page,setPage] = useState(1)
  const [photos,setPhotos] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  const fetchImage = async()=>{
      setIsLoading(true)
       try{
        const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
        const response = await fetch(apiUrl)
        const data =  await response.json()
        setPhotos((oldData)=>{
          return [...oldData,...data]
        }) 
       } catch (error){
        console.log("error")
       }
       setIsLoading(false)
  }

  useEffect(()=>{
    fetchImage()
    // eslint-disable-next-line 
  },[page])

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
       if(window.innerHeight+window.scrollY>document.body.offsetHeight-500 && !isLoading){
        setPage((oldPage)=>{
          return oldPage+1
        })
       }
    })
    return ()=>window.removeEventListener('scroll',event)
    // eslint-disable-next-line 
  },[])

  return (
    <main>
      <h1>Infinite Scroll Photo | Unsplash API</h1>
        <section className='photos'>
          <div className='display-photo' >
            {photos.map((data,index)=>{
              return <PhotoComponent key={index} {...data} />
            })}
          </div>
        </section>
    </main>
  );
}

export default App;
