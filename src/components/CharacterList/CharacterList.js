import React, { Component } from 'react';
import { Modal, Tabs, Tab } from 'react-bootstrap';

class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            tab: 'Comics'
        };
        const { character } = this.props;
        console.log(character)
        this.id = character.id;
        this.name = character.name;
        this.image = `${character.thumbnail.path}.${character.thumbnail.extension}`;
        this.description = !character.description.length ? 'Description not available.' :
            character.description.length > 150 ?
                character.description.substring(0, 150).split('').concat('...').join('') :
                character.description;
        this.fullDescription = !character.description.length ? 'Description not available.' :
            character.description;
        this.comics = character.comics.items;
        this.series = character.series.items;
        this.stories = character.stories.items;
        this.detail = character.urls.find(r => r.type === 'detail');
        this.wiki = character.urls.find(r => r.type === 'wiki');
        this.comicLink = character.urls.find(r => r.type === 'comiclink');
    }

    handleModal = (event) => {
        this.setState({ showModal: !this.state.showModal });
        console.log(this.state.showModal)
    }

    selectTab = (event) => {
        this.setState({ tab: event })
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="card mb-4 shadow-sm">
                    <img
                        alt={this.name}
                        className="card-img=top"
                        src={this.image}
                        width="100%"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.name}</h5>
                        <p className="card-text">
                            {this.description}
                        </p>
                        <button
                            type="button"
                            className="container btn btn-danger btn-lg"
                            onClick={this.handleModal}>
                            More Info
                        </button>
                        <Modal show={this.state.showModal} onHide={this.handleModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            alt={this.name}
                                            className="card-img=top"
                                            src={this.image}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <h4>Description</h4>
                                        <p>{this.fullDescription}</p>
                                        {this.detail &&
                                            <a target="_blank" className="btn-link btn-block"
                                                href={this.detail.url} rel="noopener noreferrer">
                                                Read more on Marvel Official Page</a>
                                        }
                                        {this.wiki &&
                                            <a target="_blank" className="btn-link btn-block"
                                                href={this.wiki.url} rel="noopener noreferrer">
                                                Read more on Marvel Universe Wiki</a>
                                        }
                                        {this.comicLink &&
                                            <a target="_blank" className="btn-link btn-block"
                                                href={this.comicLink.url} rel="noopener noreferrer">
                                                Read Comic Public Info</a>
                                        }
                                    </div>
                                </div>
                            </Modal.Body>
                            <Tabs
                                id="uncontrolled-tab-example"
                                activeKey={this.state.tab}
                                onSelect={this.selectTab}>
                                <Tab eventKey="Comics" title="Comics">
                                    {this.comics.length ?
                                        this.comics.map(comic => {
                                            return (
                                                <div className="badge badge-pill badge-danger">
                                                    {comic.name}
                                                </div>
                                            )
                                        }) :
                                        <p>No Comics Available.</p>
                                    }
                                </Tab>
                                <Tab eventKey="Series" title="Series">
                                    {this.series.length ?
                                        this.series.map(serie => {
                                            return (
                                                <div className="badge badge-pill badge-danger">
                                                    {serie.name}
                                                </div>
                                            )
                                        }) :
                                        <p>No Series Available.</p>
                                    }
                                </Tab>
                                <Tab eventKey="Stories" title="Stories">
                                    {this.comics.length ?
                                        this.comics.map(comic => {
                                            return (
                                                <div className="badge badge-pill badge-danger">
                                                    {comic.name}
                                                </div>
                                            )
                                        }) :
                                        <p>No Comics Available.</p>
                                    }
                                </Tab>
                            </Tabs>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterList