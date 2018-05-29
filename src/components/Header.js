import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const styles= {
  menu: {
    float:'left',
    width:'180px',
    fontFamily:'arial',
  },
  a:{
    display: 'block',
    background: '#bdbdbd',
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    marginBottom:'6px'
  },
};

const Header = ( { loggedIn } ) => (
    <div style={styles.menu}>
        <Link to="/" style={styles.a}>Home</Link>
        <Link to="/about" style={styles.a}>About</Link>
        <Link to="/contact" style={styles.a}>Contact</Link>
    </div>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Header );
