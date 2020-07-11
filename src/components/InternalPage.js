import React, { Component } from 'react';
import { Link } from "react-router-dom";

class InternalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accesstoken: '10206736336202621',
            heros: [],
            idHero: props.match.params.id
        }
    }

    componentDidMount() {
        let token = this.state.accesstoken
        let id = this.state.idHero
        console.log(id)
        fetch(`https://www.superheroapi.com/api.php/${token}/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let heros = []
                heros.push(data)
                this.setState({
                    heros: heros
                })
            }
            )
            .catch(error => console.error(error))

    }

    render() {
        const heros = this.state.heros
        return (
            <section className='container-fluid'>
                {
                    heros.map((item, index) => (
                        <div key={index} className='d-flex flex-column'>
                            <div className="card-header d-flex justify-content-around">
                                <h1 className='title-name'>{item.name}</h1>
                                <Link to='/'><button className='btn btn-outline-warning'>Volver</button></Link>
                            </div>
                            <div className="d-flex flex-column m-3">
                                <div className="d-flex">
                                    <img src={item.image.url} className="img-card mt-1 aling-self-center" style={{ width: '40%', height: '20%' }} alt="..." />
                                    <ul className='description mt-1'>
                                        <h4 className="font-description text-center  "><strong>Biography</strong></h4>
                                        <li><strong>Full Name: </strong>{item.biography["full-name"]}</li>
                                        <li><strong>Aliases: </strong>{item.biography.aliases}</li>
                                        <li><strong>Alter Egos: </strong>{item.biography["alter-egos"]}</li>
                                        <li><strong>Place of Birth: </strong>{item.biography["place-of-birth"]}</li>
                                        <li><strong>Alignment: </strong>{item.appearance.alignment}</li>
                                    </ul>
                                </div>
                                <div className='d-flex flex-column mt-3'>
                                    <div>
                                        <ul className='description'>
                                            <h4 className="font-description text-center"><strong>Apperence and Work</strong></h4>
                                            <li><strong>Gender: </strong>{item.appearance.gender}</li>
                                            <li><strong>Race: </strong>{item.appearance.race}</li>
                                            <li><strong>Height: </strong>{item.appearance.height}</li>
                                            <li><strong>Weight: </strong>{item.appearance.weight}</li>
                                            <li><strong>Eye Color: </strong>{item.appearance["eye-color"]}</li>
                                            <li><strong>Hair Color: </strong>{item.appearance["hair-color"]}</li>
                                            <li><strong>Occupation: </strong>{item.work.occupation}</li>
                                            <li><strong>Base: </strong>{item.work.base}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        )
    }

}


export default InternalPage;