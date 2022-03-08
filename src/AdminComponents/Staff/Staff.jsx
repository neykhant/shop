import React from "react";
import Navbar from "../NavBar/NavBar";
import Style from "./Staff.module.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import * as Icons from "react-icons/fa";

const Staff = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>၀န်ထမ်းစာရင်းသွင်းရန်စာမျက်နှာ </h2>
            </div>
          </div>
{/* <span>OK</span> */}
          <Form>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="name" className="m-2 w-25">
                အမည်
              </Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="photo" className="m-2 w-25">
                ဓါတ်ပုံ
              </Label>
              <Input type="file" name="photo" id="photo" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="dob" className="m-2 w-25">
                မွေးသကရာဇ်
              </Label>
              <Input type="text" name="dob" id="dob" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="start_date_work" className="m-2 w-25">
                အလုပ်စ၀င်သောနေ့
              </Label>
              <Input type="text" name="start_date_work" id="start_date_work" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="phone" className="m-2 w-25">
                ဖုန်းနံပါတ်
              </Label>
              <Input type="number" name="phone" id="phone" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="salary" className="m-2 w-25">
                လခ
              </Label>
              <Input type="text" name="salary" id="salary" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="bank_account" className="m-2 w-25">
                ဘဏ်အကောင့်
              </Label>
              <Input type="number" name="bank_account" id="bank_account" />
            </FormGroup>
            <div className={Style.form__button_staff}>
              <Button color="primary" size="sm" style={{ marginLeft: 5, backgroundColor: '#9a4d3a', border: 'none' }}>
                <Icons.FaSave style={{ margin: 5 }} /> သိမ်းမည်
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Staff;
