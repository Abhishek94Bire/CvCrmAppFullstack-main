import React, { useContext } from 'react';
import { Button, Navbar, Nav, NavItem } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import CrmContext from '../contextProvider/CrmContext';

// This component displays the home page of this application
const Home = () => {
    const navigate = useNavigate();
    const {logoutMessage} = useContext(CrmContext);

  return (
    <div className='component-main-div'>
      <Navbar  expand="md" className='Navbar-class' fixed='top'>
          <Nav className="mr-auto" navbar style={{alignItems : "center"}}>
            <NavItem>
              <h6 style={{color:"white"}}>Customer Relationship Management</h6>
            </NavItem>
          </Nav>
          <Nav className='ml-auto' navbar style={{alignItems : "center"}}>
            <NavItem>
                <Button className='home-page-Button-class' color='primary' size='sm' onClick={() => navigate('/login')}>Login</Button>
            </NavItem>
            <NavItem>
                <Button className='home-page-Button-class' color='info' size='sm' onClick={()=>navigate('/signup')}>Signup</Button>
            </NavItem>
          </Nav>
    </Navbar>
      
    <p className='app-suggestion-p'><b style={{color : "blue"}}>The server of this application is deployed on a Render's free tier account</b>. Due to Render's <b style={{color : "blue"}}>"spinning down on idle"</b> issue, the server may (sometimes) take a little longer to start (when it is opened after a long time).</p>
    <p className='app-suggestion-p'>When you open this application's link for the <b style={{color : "blue"}}>first time</b>, please wait 15-30 seconds <b style={{color : "blue"}}>after submitting the requests for login, signup, or forgot password</b>.</p>
    <p className='app-suggestion-p'>If it takes much longer to respond <b style={{color : "blue"}}>(for the first time only)</b>, try closing and opening the app link one or two times.</p>
    <br />

        <h5 style={{color: "blue"}}>Welcome to CRM application </h5>
        <p className='blue-color-p-class'>(customer relationship management)</p>
        {/* A message will be displayed when an user logged out successfully */}
        <h5 style={{color : "green"}}>{logoutMessage}</h5>


        <br />

        {/* Application usage suggestions */}


        <h6>Instructions</h6>
            <p className='app-suggestion-p'><b style={{color : "blue"}}>Demo credentials</b> are given in the login page.</p>
        <div className='home-page-suggestion-flex'>
          <div className='home-page-suggestion-divs'>
            <ul>
              <li><p className='home-page-suggestion-p-red'><b>This page will monitor the localStorage (for access token) every 2 minutes. So, during login, signup, forgot-password operations, please fill the details in less than 2 minutes. Otherwise, it will reload the login page again.</b></p></li>
              <li><p className='home-page-suggestion-p-green'>For using pages which do not need authentcation, logout from your account first.</p></li>
            
              <li><p className='home-page-suggestion-p-red'>The "Forgot password" or "Reset password" link is given in the login page.</p></li>

              <li><p className='home-page-suggestion-p-green'>In this CRM application, the users will have different levels of access based on their role as given below.</p></li>

              <li><p className='home-page-suggestion-p-red'><b>Admin:</b> has access to perform CRUD operations on users, leads, and service requests.</p></li>
              <li><p className='home-page-suggestion-p-green'><b>Manager:</b> has access to perform create and read operations on users, and CRUD operations on leads and service requests.</p></li>
              <li><p className='home-page-suggestion-p-red'><b>Employee with rights:</b> has access to perform CRUD operations on leads and service requests.</p></li>
              <li><p className='home-page-suggestion-p-green'><b>Employee without rights:</b> has access to read leads and service requests.</p></li>
            </ul>
           

          </div>
          <div className='home-page-suggestion-divs'>
          <ul>
            <li><p className='home-page-suggestion-p-red'>The user during SIGNUP, should give valid and working email id. An account-activation link will be sent to the registered email id.</p></li>
            <li><p className='home-page-suggestion-p-green'>When Admin or Manager adds an user, then the user email (of the user who is being added by the manager or admin) need not be working email. That account will be activated without sending the account-activation link.</p></li>
            <li><p className='home-page-suggestion-p-red'>It is assumed that there can be multiple Admins and multiple managers.</p></li>
            <li><p className='home-page-suggestion-p-green'>So, when a new lead or service request is added, <b>this application will trigger an email to all the admins and managers.</b></p></li>
            <li><p className='home-page-suggestion-p-red'><b>A lead with status "Confirmed" is considered as a "Contact".</b></p></li>
            <li><p className='home-page-suggestion-p-green'><b>In the "View users" page, the users' details EXCLUDING the user (admin or manager) who is signed in  will be displayed.</b></p></li>
            <li><p className='home-page-suggestion-p-red'>The source code links of this application are given below.</p></li>

          </ul>           
          </div>

        </div>

<br />
        <div style={{textAlign:'left', fontSize : "small"}}>
          <ul>
            <li>Source code url: <a href="https://github.com/SkMdSufiyan/SufiyanCvCrmAppFullstack.git" target='_blank' rel="noopener noreferrer">https://github.com/SkMdSufiyan/SufiyanCvCrmAppFullstack.git</a></li>
          </ul>
        </div>


      <br />
      <br />
      <br />

    </div>
  )
}

export default Home;



