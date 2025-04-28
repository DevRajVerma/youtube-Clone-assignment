import Searchbar from "./Searchbar"

export const Appbar = () => {
    return (
        <div className="flex justify-between pl-3 pr-3 pt-1 pb-1">
            <div>
                YouTube
            </div>
            <div>
               <Searchbar />
            </div>
            <div>
                Signin
            </div>
   
        </div>
    )
}