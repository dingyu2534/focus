import { Box } from "@material-ui/core";
import React from "react";

class Header extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render(){
        return (
            <Box width="100%" height="400px" style={{background: '#3f51b5', color: '#fff'}}>
                Focus
            </Box>
        )
    }
}

export default Header