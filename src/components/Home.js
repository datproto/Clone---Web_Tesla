import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice';
import Section from './Section';

function Home() {

  const cars = useSelector(selectCars)

  return (
    <Container>
      {cars && cars.map((car, index) => (
        <Section
          key={index}
          id={`#${car.slug}`}
          title={car.name}
          description='Order Online for Touchless Delivery.'
          backgroundImg={`${car.slug}.jpg`}
          leftBtnText='Custom order'
          rightBtnText='Existing inventory'
        />
      ))}
      <Section
        title='Lower Cost Solar Panels in America'
        description='Money-back guarantee.'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less than a New Roof Plus Solar Panels.'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
      />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;

`