import React from 'react';
import Menu from './Menu';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';


const Layout = (props) => {
    return (
        <>
            <Menu />
            <Container fluid 
            className={`${props.containerClass} p-0`}
            style={props.containerStyle}>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout;
