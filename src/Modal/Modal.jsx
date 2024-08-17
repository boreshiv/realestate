import Modal from 'react-bootstrap/Modal';
import PropertyDetails from '../components/PropertyDetails';

function PropertyModal(props) {
    return (
        <Modal
            // size="lg"
            show={props.open}
            onHide={props.onClose}
            aria-labelledby="example-modal-sizes-title-lg"
            centered
            contentClassName="property-container"
            dialogClassName="dialog-container"
        >
            <Modal.Body>
                <PropertyDetails />
            </Modal.Body>
        </Modal>
    );
}

export default PropertyModal;