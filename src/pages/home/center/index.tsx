import { Container } from '@material-ui/core'
import React from 'react'

class Center extends React.Component {
    constructor(props: any){
        super(props)
    }

    
    render() {
        return (
            <Container maxWidth={false} style={{width: '95%', height: '1200px', background: 'white', boxShadow: '0px 5px 5px #888888', marginTop: '-50px',
            borderRadius: '5px', marginBottom: '50px'}}>
                
            </Container>
        )
    }
}

export default Center