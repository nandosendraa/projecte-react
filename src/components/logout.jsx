import React from 'react';
import { importAll } from './images';
import { Navigate, useNavigate } from "react-router-dom";
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default function Logout() {
    localStorage.clear();
    Navigate('/');
    return (
        <h1>S'esta tancant la sessio</h1>
    )
}