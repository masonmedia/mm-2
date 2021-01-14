import React from 'react';
import Menu from './Menu';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import SEO from './SEO';


const Layout = (props) => {
    return (
        <div className="fade-in">
            <SEO />
            <Menu />
            <main>
                <Container fluid 
                className={`${props.containerClass} p-0 m-0`}
                style={props.containerStyle}>
                    {props.children}
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
