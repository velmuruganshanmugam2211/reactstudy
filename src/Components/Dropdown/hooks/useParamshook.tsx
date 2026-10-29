import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../../../Components/Dropdown/hooks/useMemohook"
import UserProfile from "../../../Components/Dropdown/hooks/userefusestate"

function useParamshook() {
  return (
<div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
    </div>
  )
}

export default useParamshook