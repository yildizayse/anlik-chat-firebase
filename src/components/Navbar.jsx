import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const {currentUser,logout} =UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (

    <div className="bg-neutral z-10 text-neutral-content"> 
        <div className="containerWrap flex justify-between">  
  <a className="btn btn-ghost normal-case text-xl">Canlı Sohbet Uygulaması</a>
  {currentUser ? <button onClick={handleLogout}>Çıkış Yap</button> : ""}
</div>
    </div>
  )
}

export default Navbar