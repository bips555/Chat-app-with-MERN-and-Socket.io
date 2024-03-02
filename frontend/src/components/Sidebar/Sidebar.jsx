import Conversations from "./Conversations.jsx"
import Logoutbutton from "./Logoutbutton.jsx"
import SearchInput from "./SearchInput.jsx"
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3 "></div>
      <Conversations />
      <Logoutbutton/>
    </div>
  )
}

export default Sidebar

/*
import Conversations from "./Conversations.jsx"
import SearchInput from "./SearchInput.jsx"
const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3 "></div>
      <Conversations />
      <LogoutButton/>
    </div>
  )
}

export default Sidebar

*/