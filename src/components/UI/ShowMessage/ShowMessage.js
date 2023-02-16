import Card from "../Card/Card";
import { Modal } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import LoadingForm from "../LoadingForm/LoadingForm";

const ShowMessage = (props) => {
  const { showModal, modalHandler, message, typeMessage, children } = props;

  if (typeMessage === "ERROR") {
    return (
      <Modal show={showModal} onHide={modalHandler} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Card>
            <h1>{message}</h1>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton
            type="button"
            className="btn"
            onClickEvent={modalHandler}
          >
            Close
          </CustomButton>
        </Modal.Footer>
      </Modal>
    );
  }
  if (typeMessage === "FORM") {
    return (
      <Modal show={showModal} onHide={modalHandler} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <CustomButton
            type="button"
            className="btn"
            onClickEvent={modalHandler}
          >
            Close
          </CustomButton>
        </Modal.Footer>
      </Modal>
    );
  }
  if (typeMessage === "LOADING") {
    return (
      <Modal show={showModal} size="lg" centered>
        <Modal.Body>
          <LoadingForm />
        </Modal.Body>
      </Modal>
    );
  }
};

export default ShowMessage;
