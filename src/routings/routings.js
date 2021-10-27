import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from '../pages/contact.page'
import ViewAppointment from '../pages/viewAppointment.page'
import PlaceAppointment from '../pages/placeAppointment.page'
import Landing from '../pages/landing.page'
import Header from '../components/header'
import Footer from '../components/footer'

export default class Routings extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/appointment/view" component={ViewAppointment} />
                        <Route exact path="/appointment/place" component={PlaceAppointment} />
                    </Switch>
                    <Footer />
                </Router>
            </>
        )
    }
}