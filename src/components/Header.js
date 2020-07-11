import React from 'react';
import Lottie from 'react-lottie';
import animation from '../14644-superhero.json';

const Header = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation
    }
    return (
        <div className='header'>
            <ul className='title'>
                <div className='title-hero'>
                    <li className='letter letter-s'>S</li>
                    <li className='letter letter-u'>U</li>
                    <li className='letter letter-p'>P</li>
                    <li className='letter letter-e'>E</li>
                    <li className='letter letter-r'>R</li>
                    <li className='letter letter-h'>H</li>
                    <li className='letter letter-ee'>E</li>
                    <li className='letter letter-rr'>R</li>
                    <li className='letter letter-o'>O</li>
                    <li className='letter letter-ss'>S</li>
                </div>
                <div className='title-and'>
                    <li className='letter letter-s'>a</li>
                    <li className='letter letter-u'>n</li>
                    <li className='letter letter-p'>d</li>
                </div>
                <div className='title-villians'>
                    <li className='letter letter-e'>V</li>
                    <li className='letter letter-r'>I</li>
                    <li className='letter letter-h'>L</li>
                    <li className='letter letter-ee'>L</li>
                    <li className='letter letter-rr'>I</li>
                    <li className='letter letter-o'>A</li>
                    <li className='letter letter-ss'>N</li>
                    <li className='letter letter-r'>S</li>
                </div>
            </ul>
            <div className='animation'>
                <Lottie options={defaultOptions} />
            </div>

        </div>

    )
}

export default Header;