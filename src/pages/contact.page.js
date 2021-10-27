import React from 'react'
// import Common Header component
// import Common Footer component
// import Row, Col, Form etc property from "react-bootstrap" to create the form, row-col sections etc.
import { Row, Col, Form, Button, Table } from 'react-bootstrap'
import Header from '../components/header'
import Footer from '../components/footer'


export default class Contact extends React.Component {
  render() {
    return (
      <>


        {/* .... please include the common Header file to avoid reuse of the code.... */}
        {/* .... Code here for ther Contact-Us section .... */}
        {/* .... please include the common Footer file to avoid reuse of the code.... */}

<Header/>

        <div className="container">

          <Form>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Drop us a message</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3"  id="name" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Name *" />
                </Form.Group>

                <Form.Group className="mb-3" id="email" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Email *" />
                </Form.Group>

                <Form.Group className="mb-3" id="phone" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Phone *" />
                </Form.Group>
              </Col>
              <Col>

                <Form.Group className="mb-3" id="message" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>

              </Col>

            </Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="primary" type="submit" >
                Send
              </Button>
            </div>
          </Form>


         </div>
         
         
         <Footer />
         
      </>
    )
  }
}