import React from "react";
import { Box, Button, Container } from "@material-ui/core";
import Header from './header'
import Center from './center'

class Home extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Box>
                <Header></Header>
                <Center></Center>
            </Box>
        )
    }
}

export default Home