import React, { Component } from 'react';
import Enzyme from "enzyme";
import { shallow } from 'enzyme';
import { Row, Col, Form, Button, Table } from 'react-bootstrap'


import Header from './components/header'
import Footer from './components/footer'
import LandingPage from './pages/landing.page'
import ViewAppointment from './pages/viewAppointment.page';
import ContactUs from './pages/contact.page';

import write from 'write';

let data =[]


import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });



/* :::::::::::::::: HEADER COMPONENT TESTS ::::::::::::::::::::::: */



describe("Testing of component <Header />:", () => {
  let wrapper
  false;
  beforeAll(() => {
    wrapper = shallow(<Header />);
    
  })
  wrapper
  
  afterAll(() => {
    console.log('::::: RUNNING HEADER COMPONENT TESTS :::::')
  })

  const writeFn = (testData) => {
    data.push(testData)
    write.sync('header_test_report.txt', JSON.stringify(data), { newline: true})
  }

  it('Should header present ::', () => { 
    let data = {Should_header_Present : false}
    data.Should_header_Present = false
    expect(wrapper.find('header').length).toBe(1)
    data.Should_header_Present = true
    writeFn(data)
  })


  it('Should nav present ::', () => {
    expect(wrapper.find('nav').length).toBe(1)
    writeFn({Should_nav_Present : true})
  })



  it('Should img tag present ::', () => {
    expect(wrapper.find('.header-logo').length).toBe(1)
    expect(wrapper.find('img').length).toBe(1)
    writeFn({Should_img_Present : true})

  })

  it('Should div present ::', () => {
    expect(wrapper.find('div').length).toBe(1)
    writeFn({Should_div_Present : true})

  })


  it('Should Link present ::', () => {
    expect(wrapper.find('Link').length).toBe(5)
    writeFn({Should_Links_Present : true})

  })


  it('Should ul present ::', () => {
    expect(wrapper.find('ul').length).toBe(1)
    writeFn({Should_ul_Present : true})


  })

  it('Should Link present ::', () => {
    expect(wrapper.find('li').length).toBe(4)
    writeFn({Should_li_Present : true})

  })

  it('Should home nav present ::', () => {
    expect(wrapper.find(".home").length).toBe(1);
    expect(wrapper.text().includes("Home")).toBe(true);
    writeFn({Should_Include_Home_nav : true})

  })

  it('Should View Appointment nav present ::', () => {
    expect(wrapper.find(".view-appointment").length).toBe(1);
    expect(wrapper.text().includes("View Appointment")).toBe(true);
    writeFn({Should_Include_View_Appointment_nav : true})

  })

  it('Should Place Appointment nav present ::', () => {
    expect(wrapper.find(".place-appointment").length).toBe(1);
    expect(wrapper.text().includes("Place Appointment")).toBe(true);
    writeFn({Should_Include_Place_Appointment_nav : true})

  })

  it('Should Contact Us nav present ::', () => {
    expect(wrapper.find(".contact-us").length).toBe(1);
    expect(wrapper.text().includes("Contact Us")).toBe(true);
    writeFn({Should_Include_Contact_Us_nav : true})

  })

})


/* :::::::::::::::: FOOTER COMPONENT TESTS ::::::::::::::::::::::: */



describe("Testing of component <Footer />:", () => {
  let wrapper
  false;
  beforeAll(() => {
    wrapper = shallow(<Footer />);
    
  })
  wrapper
  
  afterAll(() => {
    console.log('::::: RUNNING AFTER FOOTER COMPONENT TESTS :::::')
  })

  const writeFn = (testData) => {
    data.push(testData)
    write.sync('footer_test_report.txt', JSON.stringify(data), { newline: true})
  }

  it('Should footer present ::', () => {
    expect(wrapper.find('footer').length).toBe(1)
    writeFn({Should_footer_Present : true})
  })

  it('Should footer-logo present ::', () => {
    expect(wrapper.find('.footer-logo').length).toBe(1)
    expect(wrapper.find('img').length).toBe(1)
    writeFn({Should_Logo_Present : true})
  })


  it('Should div present ::', () => {
    expect(wrapper.find(".footer-top").length).toBe(1);
    expect(wrapper.find('div').length).toBe(5)
    writeFn({Should_div_Present : true})

  })

  it('Should Link present ::', () => {
    expect(wrapper.find('Link').length).toBe(5)
    writeFn({Should_links_Present : true})

  })


  it('Should ul present ::', () => {
    expect(wrapper.find('ul').length).toBe(2)
    writeFn({Should_ul_Present : true})
  })

  it('Should Link present ::', () => {
    expect(wrapper.find('li').length).toBe(8)
    writeFn({Should_li_Present : true})
  })


  it('Should View Appointment nav present ::', () => {
    expect(wrapper.find(".view-appointment").length).toBe(1);
    expect(wrapper.text().includes("View Appointment")).toBe(true);
    writeFn({Should_Include_View_Appointment_nav : true})

  })

  it('Should Place Appointment nav present ::', () => {
    expect(wrapper.find(".place-appointment").length).toBe(1);
    expect(wrapper.text().includes("Place Appointment")).toBe(true);
    writeFn({Should_Include_Place_Appointment_nav : true})

  })

  it('Should Contact Us nav present ::', () => {
    expect(wrapper.find(".contact-us").length).toBe(1);
    expect(wrapper.text().includes("Contact Us")).toBe(true);
    writeFn({Should_Include_contact_Us_nav : true})

  })





  it('Should View Useful Links Link present ::', () => {
    expect(wrapper.find(".useful-links").length).toBe(1);
    expect(wrapper.text().includes("Useful Links")).toBe(true);
    writeFn({Should_Include_Useful_Links : true})

  })

  it('Should Place Company fax link present ::', () => {
    expect(wrapper.find(".company-fax").length).toBe(1);
    expect(wrapper.text().includes("Company fax")).toBe(true);
    writeFn({Should_Include_Company_Fax_Link : true})
  })

  it('Should Fitness Tracker Link present ::', () => {
    expect(wrapper.find(".fitness-tracker").length).toBe(1);
    expect(wrapper.text().includes("Fitness Tracker")).toBe(true);
    writeFn({Should_Include_Fitness_Tracker_Link : true})
  })

  it('Should Copyright present ::', () => {
    expect(wrapper.find(".copyright").length).toBe(1);
    expect(wrapper.text().includes("&copy2021 Copyright Fitness Tracker")).toBe(true);
    writeFn({Should_Include_Copyright : true})
  })


  it('Should Company Address Link present ::', () => {
    expect(wrapper.find(".company-address").length).toBe(1);
    expect(wrapper.text().includes("Company address")).toBe(true);
    writeFn({Should_Include_Company_Address_Link: true})

  })

  it('Should Company Email Link present ::', () => {
    expect(wrapper.find(".company-email").length).toBe(1);
    expect(wrapper.text().includes("Company email")).toBe(true);
    writeFn({Should_Include_Company_Email_Link : true})

  })

  it('Should Company Phone Link present ::', () => {
    expect(wrapper.find(".company-phone").length).toBe(1);
    expect(wrapper.text().includes("Company phone")).toBe(true);
    writeFn({Should_Include_Company_Phone : true})
  })


  it('Should Company Fax Link present ::', () => {
    expect(wrapper.find(".company-fax").length).toBe(1);
    expect(wrapper.text().includes("Company fax")).toBe(true);
    writeFn({Should_Include_Company_Fax : true})
  })

})




/* :::::::::::::::: LANDING PAGE COMPONENT TESTS ::::::::::::::::::::::: */




describe("Testing of component <LanndingPage />:", () => {
  let wrapper
  false;
  beforeAll(() => {
    wrapper = shallow(<LandingPage />);
    
  })
  wrapper
  
  afterAll(() => {
    console.log('::::: RUNNING AFTER LANDING PAGE COMPONENT TESTS :::::')
  })

  const writeFn = (testData) => {
    data.push(testData)
    write.sync('landing_page_test_report.txt', JSON.stringify(data), { newline: true})
  }

  it('Should include <Header /> Component present ::', () => {
    expect(wrapper.find('Header').length).toBe(1)
    expect(wrapper.find(Header).dive().find('header').length).toBe(1);
    writeFn({Should_header_component_Present : true})
  })


  it('Should include <Footer /> Component present ::', () => {
    expect(wrapper.find('Footer').length).toBe(1)
    expect(wrapper.find(Header).dive().find('footer').length).toBe(1);
    writeFn({Should_footer_component_Present : true})
  })


  it('Should div present ::', () => {
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find(".container").length).toBe(1);
    writeFn({Should_div_Present : true})
  })

})


/* :::::::::::::::: VIEW APPOINTMENT COMPONENT TESTS ::::::::::::::::::::::: */



describe("Testing of component <ViewAppointment />:", () => {
  let wrapper
  false;
  beforeAll(() => {
    wrapper = shallow(<ViewAppointment />);
    
  })

  wrapper
  
  afterAll(() => {
    console.log('::::: RUNNING AFTER VIEW APPOINTMENT COMPONENT TESTS :::::')
  })

  const writeFn = (testData) => {
    data.push(testData)
    write.sync('landing_page_test_report.txt', JSON.stringify(data), { newline: true})
  }

  it('Should include <Header /> Component present ::', () => {
    expect(wrapper.find('Header').length).toBe(1)
    expect(wrapper.find(Header).dive().find('header').length).toBe(1);
    writeFn({Should_header_component_present : true})
  })


  it('Should include <Footer /> Component present ::', () => {
    expect(wrapper.find('Footer').length).toBe(1)
    expect(wrapper.find(Header).dive().find('footer').length).toBe(1);
    writeFn({Should_footer_component_present : true})
  })


  it('Should div present ::', () => {
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find(".container").length).toBe(1);
    writeFn({Should_div_present : true})
  })

  it('Should <Table> present ::', () => {
    expect(wrapper.find(Table).length).toBe(1)
    writeFn({Should_Table_present : true})
  })

  it('Should <thead> present ::', () => {
    expect(wrapper.find("thead").length).toBe(1)
    writeFn({Should_Table_thead_present : true})
  })

  it('Should <tbody> present ::', () => {
  expect(wrapper.find("tbody").length).toBe(1)
    writeFn({Should_Table_tbody_present : true})
  })

  it('Should Table <th> present ::', () => {
    expect(wrapper.find("th").length).toBe(10)
    writeFn({Should_Table_th_present : true})
  })

  it('Should include S.No ::', () => {
    expect(wrapper.text().includes("S.No")).toBe(true);
    writeFn({"Should include s.no" : true})
  })

  it('Should include Name ::', () => {
    expect(wrapper.text().includes("Name")).toBe(true);
    writeFn({"Should include Name" : true})
  })

  it('Should include Phone ::', () => {
    expect(wrapper.text().includes("Phone")).toBe(true);
    writeFn({"Should include Phone" : true})
  })

  it('Should Include Email ::', () => {
    expect(wrapper.text().includes("Email")).toBe(true);
    writeFn({"Should include Email" : true})
  })


  it('Should Include Age ::', () => {
    expect(wrapper.text().includes("Age")).toBe(true);
    writeFn({"Should include Age" : true})
  })


  it('Should Include Complete Address ::', () => {
    expect(wrapper.text().includes("Complete Address")).toBe(true);
    writeFn({"Should include Complete Address" : true})
  })


  it('Should Include Trainer Preference ::', () => {
    expect(wrapper.text().includes("Trainer Preference")).toBe(true);
    writeFn({"Should include Trainer Preference" : true})
  })

  it('Should Include Physio Required ::', () => {
    expect(wrapper.text().includes("Physio Required")).toBe(true);
    writeFn({"Should include Physio Required" : true})
  })


  it('Should Include Physio Required ::', () => {
    expect(wrapper.text().includes("Physio Required")).toBe(true);
    writeFn({"Should include Physio Required" : true})
  })


  it('Should Include Package::', () => {
    expect(wrapper.text().includes("Package")).toBe(true);
    writeFn({"Should include Package" : true})
  })




  it('Should Include Total Amount::', () => {
    expect(wrapper.text().includes("Total Amount")).toBe(true);
    writeFn({"Should Total Amount" : true})
  })

})




/* :::::::::::::::: CONTACT US COMPONENT TESTS ::::::::::::::::::::::: */



describe("Testing of component <ContactUs />:", () => {
  let wrapper
  false;
  beforeAll(() => {
    wrapper = shallow(<ContactUs />);
    
  })

  wrapper
  
  afterAll(() => {
    console.log('::::: RUNNING AFTER CONTACT US COMPONENT TESTS :::::')
  })

  const writeFn = (testData) => {
    data.push(testData)
    write.sync('contact_us_test_report.txt', JSON.stringify(data), { newline: true})
  }

  it('Should include <Header /> Component present ::', () => {
    expect(wrapper.find('Header').length).toBe(1)
    expect(wrapper.find(Header).dive().find('header').length).toBe(1);
    writeFn({Should_header_component_Present : true})
  })


  it('Should include <Footer /> Component present ::', () => {
    expect(wrapper.find('Footer').length).toBe(1)
    expect(wrapper.find(Footer).dive().find('footer').length).toBe(1);
    writeFn({Should_footer_component_Present : true})
  })

  it('Should <Row> present ::', () => {
    expect(wrapper.find(Row).length).toBe(1)
    writeFn({Should_Row_Present : true})
  })


  it('Should <Col> present ::', () => {
    expect(wrapper.find(Col).length).toBe(2)
    writeFn({Should_Col_Present : true})
  })


  it('Should <Form> present ::', () => {
    expect(wrapper.find(Form).length).toBe(1)
    writeFn({Should_Form_Present : true})
  })

  it('Should text present drop message text::', () => {
    expect(wrapper.text().includes("Drop us a message")).toBe(true);
    writeFn({Should_Include_Drop_Message_Text : true})
  })

  it('Should <Form.Group> present ::', () => {
    expect(wrapper.find(Form.Group).length).toBe(4)
    writeFn({Should_Form_Group_Present : true})
  })

  it('Should <Form.Control> present ::', () => {
    expect(wrapper.find(Form.Control).length).toBe(4)
    writeFn({Should_Form_Control_Present : true})
  })

  it('Should <Button> present ::', () => {
    expect(wrapper.find(Button).length).toBe(1)
    writeFn({Should_Button_Present : true})
  })

  it('Should <Button> include Send ::', () => {
    expect(wrapper.text(Button).includes("Send")).toBe(true);
    writeFn({Should_Button_Text_Present : true})
  })  

})