import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";

const styles= {
  wrapper:{
    maxWidth:'1000px',
    margin:'auto',
  },
  heading:{
    width:'100%',
    fontFamily:'arial',
    textAlign:'center',
    marginBottom:'20px',
  },
  container: {
    float:'left',
    width:'500px',
    fontFamily:'arial',
    marginLeft:'50px',
  },
};

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to Employee SSR!",
        };
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <h1 style={styles.heading}>{ this.state.title }</h1>
                <Header />
                <div style={styles.container}>
                <Switch>
                    { routes.map( route => <Route key={ route.path } { ...route } /> ) }
                </Switch>
                </div>
            </div>
        );
    }
}

export default Layout;
