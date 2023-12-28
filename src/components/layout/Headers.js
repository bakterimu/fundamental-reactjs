import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default function Headers() {
const Hero = styled.div`
  background: url("../../belanjaeuy.png") center right;
  background-size: cover;
  color: #FFF;
  font-size: 20px;
  text-align: center;
  display: grid;
  grid-template-columns: 10px 2fr 10px;
  grid-template-rows: .5fr 1fr 20px;
  grid-gap: 20px;

  img{
    margin: auto;
    padding-top: 1rem;
    grid-column: 2/3;
    grid-row: 1/2;
    height: 165px;
  }

  article{
    grid-column: 2 / 3;
    grid-row: 2/3;
  }

  article p {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    color: white;
  }

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  button {
    background-color: #FFF;
    border-radius: 4px;
    border: #FFF;
    color: #2abadf;
    font-size: 1rem;
    padding: 5px 10px;
    margin: .75rem auto 0;
    cursor: pointer;
  }
`

  return (
    <Hero>
      <img src='../../logo512.png' alt='belanjaonline'/>
      <article>
        <h2>Welcome to eshopay</h2>
        <p>Make your life easier euyyy, beli dong ahh!!</p>
        <button>Getting started<FontAwesomeIcon icon={faAngleDoubleRight}/></button>
      </article>
    </Hero>
  )
}
