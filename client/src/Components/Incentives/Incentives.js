import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Incentives = (props) => {

    let notification = props.notification;
    let showModal = false;
    if (notification){
        showModal = true
    }

    

    return (
        <div className='rewards'>
            <Modal isOpen={showModal}>
          <ModalHeader>Purchase Confirmed</ModalHeader>
          <ModalBody>
            Your order is available at your local CVS. Keep conserving!
            <img src='/Assets/cvs.png'/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>props.return()} color="primary">Clear</Button>{' '}
          </ModalFooter>
        </Modal>
            <p>You've earned 40 points!</p>
            <div className="water-card">
            <div className='card-title'>
                 <p className="bold">Tide pods</p>
                <p className="bold value"> 30pts</p>
            </div>
        
                <img className="img-product" src="/Assets/tide-pods.webp"/>
                <Button onClick={()=>props.purchase()}>Claim it!</Button>
            </div>
            <div className="water-card">
            <div className='card-title'>

                <p className="bold">Cascade</p>
                <p className="bold value"> 25pts</p>
                </div>

                
                <img  className="img-product" src="/Assets/cascasde.png"/>
                <Button>Claim it!</Button>
            </div>
            <div className="water-card">
                <div className='card-title'>
                    <p className="bold">Dawn</p>
                    <p className="bold value"> 10pts</p>
                </div>
                <img className="img-product" src="/Assets/dawn.webp"/>
                <Button>Claim it!</Button>
            </div>

        </div>
    )
}
export default Incentives;