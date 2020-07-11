import React, { Component } from 'react';
import Header from './Header';
import CardHero from './CardHero';



class SuperHero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accesstoken: '10206736336202621',
            heros: [],
            idHero: 1
        }
    }

    componentDidMount() {
        let token = this.state.accesstoken
        let id = this.state.idHero
        for (let index = 0; index < 9; index++) {

            fetch(`https://www.superheroapi.com/api.php/${token}/${id}`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    let heros = this.state.heros
                    heros.push(data)
                    this.setState({
                        heros: heros
                    })
                }
                )
                .catch(error => console.error(error))

            id++
        }

        this.setState({
            idHero: id
        })
        console.log(this.state.heros)

    }

    nextPage = () => {
        let token = this.state.accesstoken
        let id = this.state.idHero
        console.log(id)
        for (let index = 0; index < 9; index++) {

            fetch(`https://www.superheroapi.com/api.php/${token}/${id}`)
                .then(response => response.json())
                .then(data => {
                    let id = this.state.idHero
                    let heros = []
                    if ((id - 1) % 9 !== 0) {
                        heros = this.state.heros
                    }
                    heros.push(data)
                    id++
                    this.setState({
                        heros: heros,
                        idHero: id
                    })
                }
                )
                .catch(error => console.error(error))

            id++
            console.log(id)
        }
        // console.log(this.state.heros)
    }

    render() {
        return (
            <div className='d-flex flex-column aling-items-center'>
                <Header/>
                <button className='btn btn-outline-danger m-3 aling-self-center' style={{ width: '30%'}} onClick={this.nextPage}>NEXT</button>
                <CardHero heros={this.state.heros} />
                <button className='btn btn-outline-danger m-3 aling-self-center' style={{ width: '30%'}} onClick={this.nextPage}>NEXT</button>
                <footer className='m-3 text-center text-muted' style={{ height: '50px'}}>by Tatiana Ochoa Bautista 2020</footer>
            </div>
        )
    }
}

export default SuperHero;