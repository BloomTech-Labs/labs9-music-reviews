import React from 'react'
import PopularTracks from './Display/PopularTracks'
import Newest from './Display/Newest'
import { Container } from 'reactstrap'
import { withAuthorization } from '../Components/Session'

const HomePage = () => {
  return (
    <Container fluid style={{
      maxWidth: '1200px',
      padding: '7rem 0 1rem 0',
      fontFamily: 'Lato',
      fontSize: '1.2rem',
      marginBottom: '1rem',
      width: '100%'
    }}
    >
      <Newest />
      <PopularTracks />
    </Container>
  )
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(HomePage)
// export default HomePage
