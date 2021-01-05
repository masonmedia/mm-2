import React from 'react';
import { Button } from 'react-bootstrap';
import ProjectModal from '../components/ProjectModal';

  export default function Test() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <ProjectModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
