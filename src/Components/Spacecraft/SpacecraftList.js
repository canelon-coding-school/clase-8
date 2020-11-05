import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader, Pagination, Table } from 'semantic-ui-react';

const SpacecraftList = () => {
  const [ships, setShips] = useState([])
  const [pages, setPages] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [opacity, setOpacity] = useState(0.5)

  const getAllPlanets = useCallback(async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/starships/', {
        params: {
          page: activePage
        }
      })

      const { data } = response;

      setOpacity(1);
      setShips(data.results);
      setPages(data.count);
    } catch (e) {
      console.log(e)
    }
  }, [activePage]);

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
    const fetchData = async () => {
      await getAllPlanets();
    }
    fetchData();
    setOpacity(0.5);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllPlanets();
    }
    fetchData();
  }, [getAllPlanets]);

  return (
    <>
      {(ships.length === 0 && (
        <Dimmer inverted active style={{paddingTop: 20, paddingBottom: 20}}>
          <Loader inverted>Loading...</Loader>
        </Dimmer>
      ))}
      <div style={{ opacity }}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Manufacturer</Table.HeaderCell>
              <Table.HeaderCell>Passengers</Table.HeaderCell>
              <Table.HeaderCell>Cargo Capacity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {ships && ships.map((ship, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>{ship.name}</Table.Cell>
                <Table.Cell>{ship.manufacturer}</Table.Cell>
                <Table.Cell>{ship.passengers}</Table.Cell>
                <Table.Cell>{ship.cargo_capacity}</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
        {ships && (
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={2}
            totalPages={Math.ceil(pages / 10)}
            onPageChange={handlePaginationChange}
          />
        )}
      </div>
    </>
  )
}

export default SpacecraftList;
