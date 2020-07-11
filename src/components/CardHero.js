import React from 'react';
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import InternalPage from './InternalPage';


const CardHero = ({ heros }) => {

    // handleClick () = {

    // }

    return (
        <section className='container-card row d-flex justify-content-center'>
            {
                heros.map((item, index) => (
                    <div key={index} className="card col-8 col-sm-6 col-md-3 m-3 d-flex" style={{ width: '18rem', height: '28rem' }} >
                        <img src={item.image.url} className="align-self-center mt-3 rounded img-card" style={{ width: '60%', height: '30%' }} alt="..." />
                        <div className="card-body">
                            <h6 className="card-title font-name text-center ">{item.name}</h6>
                            <p className="card-text font-card"><strong>Publisher: </strong>{item.biography.publisher}</p>
                            <ul className='font-card'>
                                <h6 className="card-text text-center font-description"><strong>Description</strong></h6>
                                <li><strong>Full Name: </strong>{item.biography["full-name"]}</li>
                                <li><strong>Alignment: </strong>{item.biography.alignment}</li>
                                <li><strong>Race: </strong>{item.appearance.race}</li>
                            </ul>
                        </div>
                        <div className="card-footer d-flex flex-column">
                            <div className='mx-auto'>
                                <i><FaHeart className='icon-like' /></i>
                                <i><FaHeartBroken className='icon-dislike' /></i>
                            </div>
                            <div className='mx-auto'>
                                <Link className='more-info' to={`/${item.id}`} key={index}>
                                    <button className='btn btn-outline-warning'>More Information</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))
            }

        </section>


    )
}

export default CardHero;