import { useCallback, useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Formik } from "formik";

import "./Modal.css";

const conditionList = ["New", "Mint", "Broken"];

const areaSectionList = [
  { value: "M", label: "Master's Bedroom", 
    sections: [
      { value: "1", label: "Wooden Cabinet"}, 
      { value: "2", label: "Altar Cabinet" }, 
      { value: "3", label: "Clothing Cabinet  Top" }, 
      { value: "4", label: "Table & Drawer" }, 
      { value: "5", label: "Main Cabinet" }, 
    ]
  },

  { value: "O", label: "Office Bedroom", 
    sections: [
      { value: "1", label: "Workstation" }, 
      { value: "2", label: "Sewing Machine" }, 
      { value: "3", label: "Table & Drawer" }, 
      { value: "4", label: "Main Cabinet" }, 
    ]
  },

  { value: "S", label: "Storage & Stairs Area", 
    sections: [
      { value: "1", label: "Storage Area" }, 
      { value: "2", label: "Shoe Rack  Stairs" }, 
    ]
  },

  { value: "L", label: "Living Room", 
    sections: [
      { value: "1", label: "Shoe Rack" }, 
      { value: "2", label: "Radio Cabinet" }, 
      { value: "3", label: "Tv Cabinet" }, 
      { value: "4 ", label: "Altar" }, 
      { value: "5 ", label: "Cabinet" }, 
      { value: "6 ", label: "Stock Area" }, 
      { value: "7 ", label: "Computer & Glass Table Area" }, 
    ]
  },

  { value: "K", label: "Kitchen Area", 
    section: [
      { value: "1 ", label: "Stock Area" }, 
      { value: "2 ", label: "Drawers" }, 
      { value: "3 ", label: "Cabinets"}
    ]
  }
];



const ModalComponent = ({ inventories, insertItem }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(0);
  const [condition, setCondition] = useState(0);
  const [area, setArea] = useState("-");
  const [section, setSection] = useState(null);
  const [sectionLabel, setSectionLabel] = useState("-");

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
    setArea("")
    setSection(null);
    setSectionLabel("");
  };

  const insertItemCallback = useCallback(() => {
    if (clickFlag) {
      const nextState = inventories.concat({
        name: name,
        count: count,
        category: category,
        condition: condition,
        section: { value: area+section, label: sectionLabel }
      });
      insertItem(nextState);
    }

  }, [inventories, name, count, category, condition, area, section, clickFlag]);

  useEffect(() => {
    insertItemCallback(); //.then(() => console.log(inventories));
  }, [name, count, category, condition, area, section, sectionLabel, clickFlag]);

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
                
                {
                  conditionList.map((label, i) => {
                    return <option key={i} value={i}>{label}</option>;
                  })
                }
              </Form.Select>
            </Form.Group>


            {/* Area */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                name="section"
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              >
                
                <option value="0">-- Area --</option>
                {
                  areaSectionList.map((object, i) => {
                    return <option key={i} value={object.value}>{object.label}</option>;
                  })
                }
              </Form.Select>
            </Form.Group>


            {/* Section */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                name="section"
                onChange={(e) => {
                  setSection(e.target.value);
                  setSectionLabel(e.target.selectedOptions[0].text);
                }}
              >
                
                <option value="0">-- Section --</option>
                {
                  
                  areaSectionList.map((object) => {
                    if (object.value === area) {
                      return object.sections.map((object1, i) => {
                        return <option key={i} value={area + object1.value}>{object1.label}</option>;
                      })
                    }
                  })
                }
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
