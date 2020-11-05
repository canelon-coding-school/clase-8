import React, { Component } from 'react';
import axios from 'axios';
import { Dimmer, Loader, Pagination, Table } from 'semantic-ui-react';

class PlanetList extends Component {
  state = {
    planets: [],
    pages: 0,
    activePage: 1,
    opacity: 0.5,
  };

  componentDidMount() {
    this.getAllPlanets();
  }

  addOpacity = () => this.setState({ opacity: 0.5 });

  removeOpacity = () => this.setState({ opacity: 1 });

  handlePaginationChange = (e, { activePage }) => {
    this.setState({activePage}, this.getAllPlanets);
    this.addOpacity();
  };

  getAllPlanets = () => {
    axios.get('https://swapi.dev/api/planets/', {
      params: {
        page: this.state.activePage
      }
    })
      .then((response) => {
        this.removeOpacity();
        this.setState({
          planets: response.data.results,
          pages: response.data.count,
          activePage: 1,
        })
      })
      .catch(er => console.log(er))
  };

  render() {
    const { opacity, planets } = this.state;

    if (planets.length === 0) {
      return (
        <Dimmer inverted active style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Loader inverted>Loading...</Loader>
        </Dimmer>
      );
    }

    return (
      <div style={{ opacity }}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Diameter</Table.HeaderCell>
              <Table.HeaderCell>Terrain</Table.HeaderCell>
              <Table.HeaderCell>Gravity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {planets && planets.map((planet, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{planet.name}</Table.Cell>
                <Table.Cell>{planet.diameter}</Table.Cell>
                <Table.Cell>{planet.terrain}</Table.Cell>
                <Table.Cell>{planet.gravity}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
        {planets && (
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={2}
            totalPages={this.state.pages / 10}
            onPageChange={this.handlePaginationChange}
          />
        )}
      </div>
    );
  }
}

export default PlanetList;
