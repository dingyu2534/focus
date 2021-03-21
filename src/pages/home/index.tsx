import React from "react";
import { Button } from "@material-ui/core";

class Home extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>Focus</h1>
                <Button variant="contained" color="primary">Start</Button>
            </>
        )
    }
}

export default Home