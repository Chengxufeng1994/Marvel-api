import React, { Component } from 'react';
import marvelapi from '../api/marvel';
import Loading from '../components/Loading'
import Nav from '../components/Nav';
import CharacterList from '../components/CharacterList/CharacterList';

const publicKey = '0cd61aaa37f71c2c71836dd6866b412d'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: null,
            loading: false,
        }
    }

    componentDidMount() {
        this.getMarvelHeros();
    }

    getMarvelHeros() {
        marvelapi.get(`/characters`, {
            params: {
                limit: '50',
                apikey: publicKey
            }
        })
            .then(res => res.data.data.results)
            .then(results =>
                this.setState({
                    characters: results,
                    loading: true,
                })
            )
    }

    handleButtonSubmit = async term => {
        this.setState({ loading: false })
        await marvelapi.get(`/characters`, {
            params: {
                nameStartsWith: term,
                limit: '12',
                apikey: publicKey
            }
        })
            .then(res => res.data.data.results)
            .then(results => this.setState({
                characters: results,
                loading: true,
            }))
    }

    render() {
        return (
            <div>
                <Nav handleButtonSubmit={this.handleButtonSubmit} />
                <div className="container">
                    <div className="row">
                        {this.state.loading ? this.state.characters.map(character =>
                            <CharacterList
                                key={character.id}
                                character={character}
                            />) : <Loading />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;