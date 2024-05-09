import { useContext, useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { MyContext } from '../MyContext';

function ModalAlert() {
  const {show, setShow, alert} = useContext(MyContext);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <>


      <MDBModal open={show} onClose={handleClose} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>PostApp Say's</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>{alert}</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn  onClick={handleClose}>
                ok
              </MDBBtn>
              {/* <MDBBtn>Save changes</MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalAlert;