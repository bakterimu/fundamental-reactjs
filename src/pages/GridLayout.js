import React from 'react'
import styled from 'styled-components'

export default function GridLayout() {
  const Grid1 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-template-rows: 100px 150px;
    gap: 10px;
  `

  const Grid2 = styled.div`
    display: grid;
    grid-template-areas: 
      "header header header"
      "aside main main"
      "footer footer footer"
      "me me me"
      ;
  `

  return (
    <Grid2>
      <div style={{gridArea: "header",background: "yellow"}}>Header</div>
      <div style={{gridArea: "aside",background: "red"}}>Sidebar</div>
      <div style={{gridArea: "main",background: "grey"}}>Main</div>
      <div style={{gridArea: "footer",background: "green"}}>Footer</div>
      <div style={{gridRowStart: 4,gridColumnStart:2, gridColumnEnd: 3,background: "blue"}}>Me</div>
      {/* <div style={{background: "yellow"}}>A</div>
      <div style={{background: "red", width: "50px", height: "50px"}}>B</div>
      <div style={{background: "grey", width: "50px", height: "50px"}}>C</div>
      <div style={{background: "green", width: "50px", height: "50px"}}>D</div> */}
    </Grid2>
  )
}
