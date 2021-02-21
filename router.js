import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import RoleForm from "../pages/RoleForm";
import FormSignUp from "../pages/FormSignUp";
import FormSignIn from "../pages/FormSignIn";
import ChatBox from "../components/Chat/ChatBox";
import Profile from "../pages/UserProfile";
import DetailRS from "../pages/DetailRS";
import DetailBooking from "../pages/DetailBooking";
import ListRS from "../pages/ListRS";
import TestPage from "../pages/TestPage";
import NotFound from "../pages/404";
import Clinic from '../pages/ClinicProfile.jsx'
import DoctorProfile from '../pages/DoctorProfile'
import AppointmentHistory from '../pages/appointmentHistory'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user" exact>
          <Profile />
        </Route>
        <Route path="/signup" exact>
          <RoleForm />
        </Route>
        <Route path="/chat" exact>
          <ChatBox />
        </Route>
        <Route path="/signup/form" exact>
          <FormSignUp />
        </Route>
        <Route path="/login" exact>
          <FormSignIn />
        </Route>
        <Route path="/detailrs/:id" exact>
          <DetailRS />
        </Route>
        <Route path="/detailbooking/:id" exact>
          <DetailBooking />
        </Route>
        <Route path="/listrs" exact>
          <ListRS />
        </Route>
        <Route path="/test" exact>
          <TestPage />
        </Route>
        <Route path="/clinicprofile" exact>
          <Clinic />
        </Route>
        <Route path="/doctorprofile" exact>
          <DoctorProfile />
        </Route>
        <Route path="/AppointmentHistory" exact>
          <AppointmentHistory />
        </Route>
        <Route path="*" >
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
