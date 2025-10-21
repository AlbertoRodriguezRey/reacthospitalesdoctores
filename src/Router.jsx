import React, { Component, use } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuHospitales from './components/MenuHospitales'
import Home from './components/Home'
import Doctores from './components/Doctores'
import CreateHospital from './components/CreateHospital'

export default class Router extends Component {
    render() {
        function DoctoresElement() {
            let {idhospital} = useParams();
            return <Doctores idhospital={idhospital} />
        }
        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/doctores/:idhospital' element={<DoctoresElement />} />
                    <Route path='/create' element={<CreateHospital />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
