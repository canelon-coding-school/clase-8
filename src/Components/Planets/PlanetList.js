import React, { Component } from 'react';
import axios from 'axios';
import { Dimmer, Loader, Table } from 'semantic-ui-react';

class PlanetList extends Component {
  state = {
    planets: [],
    pages: 0,
    nextPage: null,
  };

  componentDidMount() {
    this.getAllPlanets();
  }

  getAllPlanets = () => {
    axios.get('https://swapi.dev/api/planets')
      .then((response) => {
        this.setState({
          planets: response.data.results,
          pages: response.data.count,
          nextPage: null,
        })
      })
      .catch(er => console.log(er))
  };

  render() {
    const { planets } = this.state;

    if (planets.length === 0) {
      return (
        <Dimmer inverted active style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Loader inverted>Loading...</Loader>
        </Dimmer>
      );
    }

    return (
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
    );
  }
}

export default PlanetList;
