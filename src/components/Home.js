import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

const styles= {
  unlist: {
    listStyle:'none',
    padding:'0',
    width:'100%',
  },
  list: {
    display:'inline-block',
    width:'48%',
    verticalAlign:'top',
    marginBottom:'20px',
  },
};

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.circuits.length <= 0 ) {
            this.props.fetchData( );
        }
    }

    render( ) {
        const { circuits } = this.props;

        return (
            <div>
                <h2>2018 Employee Calendar</h2>
                <ul style={styles.unlist}>
                    { circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } style={styles.list} >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    circuits: state.data,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
