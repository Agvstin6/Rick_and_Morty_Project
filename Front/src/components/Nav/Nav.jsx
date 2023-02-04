import SearchBar from "./SearchBar";
import titulo from "./titulo.svg.png"
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import { useState } from "react";


const Nav = ({ onSearch, randomSearch }) => {
    const [exist, setExist]=useState(false)
    const handler = () => {
        setExist(true)
    }
    return (
        <>
        <div className={styles.navDiv}>
            <Link to='/'><button className={styles.buttonNavs}>✖</button></Link>
            <Link to='about'><button className={styles.buttonNavs}>ℹ️</button></Link>
            <Link to='home'><button className={styles.buttonNavs}>🏠</button></Link>
            <Link to='favorites'><button className={styles.buttonNavs}>🖤</button></Link>
            <img src={titulo} alt="titulo" />
            <button className={styles.buttonRandom} onClick={randomSearch} onClickCapture={handler}>⤭</button>
            <SearchBar onSearch={onSearch} onClick={handler}/>
        </div>
        {
            !exist
            ? <div>
             <span className={styles.spanOp}>¡Comienza a renderizar tus personajes favoritos acá!</span>
             <img className={styles.imagen}  src="https://64.media.tumblr.com/019868a6c30305c8fbb30873c31cf29e/tumblr_pangc7CsH21ronhn5o1_1280.gif" alt="" />
             </div>
            : <></> 
            
        }
        </>
    )
};

export default Nav;