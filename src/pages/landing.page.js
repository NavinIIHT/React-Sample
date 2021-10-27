import React from 'react'
import { Link } from "react-router-dom"
import Header from '../components/header'
import Footer from '../components/footer'
import { Row, Col, Form, Button, Table } from 'react-bootstrap'

export default class Landing extends React.Component {
  render() {
    return (
      <>

        <div className="container">

          <Form>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Drop us a message</h2>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Name *" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Name *" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Name *" />
                </Form.Group>
              </Col>
              <Col>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>

              </Col>

            </Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </div>
          </Form>


<br/>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>

      </>
    )
  }
}