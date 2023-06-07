import { useEffect } from "react"


const useTitle = title =>{
    useEffect(() =>{
        document.title = `Jungle Toy | ${title}` ;
    },[title])
}

export default useTitle;