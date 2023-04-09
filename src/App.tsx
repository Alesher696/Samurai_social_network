import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Friends} from "./Components/Friends/friends";
import {Music} from "./Components/Music/music";
import {Footer} from "./Components/Footer/Footer";
import {SubFooter} from "./Components/Footer/SubFooter";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/dialogsContainer";
import {UsersContainer} from "./Components/Users/usersContainer";
import {Nav} from "./Components/Nav/Nav";
import {ProfileContainer} from "./Components/Profile/profileContainer";



type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {


    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className='App-wrapper-content'>
                    <Routes>
                        <Route path={'/Samurai_social_network'} element={<Navigate to={'/profile'}/>}/>
                        <Route path='/dialogs'
                               element={<DialogsContainer/>}/>
                        <Route path='/profile/*'
                               element={<ProfileContainer/>}/>

                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                </div>
                <SubFooter/>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}


export default App;
