import { useCallback, useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Formik } from "formik";

import "./Modal.css";

// let fieldMap = { "Name": "", "Count": 0, "Category": "", "Condition": "", "Section": "" };   //textbox, incrementor, dropdown, dropdown, dropdown
let fieldMap = { name: "", count: 0, category: "", condition: "", section: "" }; //textbox, incrementor, dropdown, dropdown, dropdown

const ModalComponent = ({ inventories, insertItem }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(0);
  const [condition, setCondition] = useState(0);
  const [section, setSection] = useState("");

  const [clickFlag, setClickFlag] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setClickFlag(false);
    setName("");
    setCount(0);
    setCategory(0);
    setCondition(0);
    setSection("-");
  };

  // let fieldMap = { name: "", count: 0, category: "", condition: "", section: "" };   //textbox, incrementor, dropdown, dropdown, dropdown

  const insertItemCallback = useCallback(() => {
    if (clickFlag) {
      const nextState = inventories.concat({
        name: name,
        count: count,
        category: category,
        condition: condition,
        section: section,
      });
      insertItem(nextState);
    }
  }, [inventories, name, count, category, condition, section, clickFlag]);

  useEffect(() => {
    insertItemCallback(); //.then(() => console.log(inventories));
  }, [name, count, category, condition, section, clickFlag]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New
      </Button>

      {/* <Formik
        initialValues={{ name: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => ( */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                // value={values.name}
                onChange={(e) => {
                  setName(e.target.value);
                  //   handleChange();
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Count</Form.Label>
              <Form.Control
                type="text"
                name="count"
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                name="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="0">-- Category --</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                name="condition"
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
              >
                <option value="0">-- Condition --</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                name="section"
                onChange={(e) => {
                  setSection(e.target.value);
                }}
              >
                <option value="0">-- Section --</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            // disabled={isSubmitting}
            onClick={() => {
              handleClose();
              setClickFlag(true);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* )}
       </Formik> */}
    </>
  );
};

export default ModalComponent;
