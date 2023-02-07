import classes from "./ShowMessage.module.css";
import Card from "../Card/Card";
import { Modal } from "react-bootstrap";

const ShowMessage = (props) => {
  const { showModal, modalHandler, message, isError, children } = props;

  if (isError) {
    return (
      <Modal show={showModal} onHide={modalHandler} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Card>
            <h1>{message}</h1>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={modalHandler} className="btn">
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={modalHandler} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Card>{children}</Card>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={modalHandler} className="btn">
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ShowMessage;
