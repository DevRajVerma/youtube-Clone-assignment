import Barwithicon from "./Barwithicon"
import Line from "./Line"

function Leftbar() {
  return (
    <div className="w-30 max-sm:hidden">
      <Barwithicon/>
      <Barwithicon/>

      <Barwithicon/>
      <Line/>
      <Barwithicon/>
      <Barwithicon/>
      <Barwithicon/>
      <Line/>
      <Barwithicon/>
      <Barwithicon/>
    </div>
  )
}

export default Leftbar
