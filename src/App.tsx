import React, {useEffect} from 'react';
import './App.css';
import {Friends} from "./Components/Friends/friends";
import {Music} from "./Components/Music/music";
import {Footer} from "./Components/Footer/Footer";
import {SubFooter} from "./Components/Footer/SubFooter";
import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/dialogsContainer";
import {UsersContainer} from "./Components/Users/usersContainer";
import {Nav} from "./Components/Nav/Nav";
import {ProfileContainer} from "./Components/Profile/profileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {RightNavPanel} from "./Components/Nav/rightNavPanel/RightNavPanel";
import {Login} from "./Components/Login/Login";
import {useAppDispatch, useAppSelector} from "../src/hooks/hooks";
import {initializeAppTC} from "../src/redux/app-reducer";


type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {

  const [activeButton, setActiveButton] = React.useState(true)
  const dispatch = useAppDispatch()
  const app = useAppSelector(state => state.app)

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])
if(!app.isInitialized){
  return <Navigate to={'/login'}/>
}else

  return (
      <div className="App">
        <HeaderContainer setActiveButton={setActiveButton} activeButton={activeButton}/>
        <Nav activeButton={activeButton}/>
        <RightNavPanel/>
        <Routes>
          <Route path={'/Samurai_social_network'} element={<Navigate to={'/profile/2'}/>}/>
          <Route path='/dialogs' element={<DialogsContainer/>}/>
          <Route path='/profile/:profileId?' element={<ProfileContainer/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <SubFooter/>
        <Footer/>
      </div>
  );
}


export default App;
