
import {useCart} from "../../hooks/useCart";
// import bookGif from '/19-book-outline.gif'

import './flyingBook.scss'

/** @jsxImportSource @emotion/react */
import {css, keyframes} from "@emotion/react";

const FlyingBook = ({click, button}) => {
    const {cartPosition} = useCart()
    const buttonPosition = button.current ? {x:button.current.offsetLeft, y:button.current.offsetTop} : {x:0, y:0}
    const bounce = (cartPosition) && keyframes`
    
      0% {
        top: ${buttonPosition.y + 10}px;
        left: ${buttonPosition.x + 10}px;
      }
    
      100% {
        top: ${cartPosition.y + 10 || 0}px;
        left: ${cartPosition.x + 10 || 0}px;
        transform: scale(0.2);
        opacity: 0;
      }
    `
    return (
        <div className={click ? 'flying-book' : ' flying-book--none'} css={ click && css`animation: ${bounce} 1s linear infinite;`} >
            <img src='/19-book-outline.gif' alt="flying-book"/>
        </div>
    );
};

export default FlyingBook;