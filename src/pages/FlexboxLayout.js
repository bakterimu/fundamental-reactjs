import React from 'react'
import styled from 'styled-components'

export default function FlexboxLayout() {
  const Flex1 = styled.div`
    display : flex;
    gap: 3px;
    flex-direction: row;
  `;

  const FlexLayout = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    header{
      background-color: #ccc;
      font-size: 3rem;
    }

    main{
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    main article{
      background-color: #00c9f2;
      flex: 1;
    }

    main aside{
      background-color: #F9CF93;
    }

    footer{
      background-color: #ccc;
    }

    @media(min-width: 768px) {
      main {
      display: 80%;
      margin: 0 auto;
      flex-direction: row;
      }

      main aside{
        flex: 0 0 20%;
      }

      .leftSide{
        order: -1;
      }
    }
  `;

  return (
    <FlexLayout>
      <header>Header</header>
      <main>
        <article>main</article>
        <aside className='leftSide'>side left</aside>
        <aside className='rightSide'>side right</aside>
      </main>
      <footer>footer</footer>
      
      {/* <div style={{background: "yellow"}}>A</div>
      <div style={{background: "red"}}>B</div>
      <div style={{background: "grey"}}>C</div>
      <div style={{background: "green"}}>D</div>
      <div style={{background: "purple"}}>E</div> */}
    </FlexLayout>
  )
}
