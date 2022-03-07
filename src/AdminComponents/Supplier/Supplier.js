import React, { useState } from "react";
import "./Supplier.css";
import Navbar from "../NavBar/NavBar";
import Style from "./Supplier.module.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import * as Icons from "react-icons/fa";

function Supplier() {
  // const [code, setCode] = useState("");
  // const [name, setName] = useState("");
  // const [company, setCompany] = useState("");
  // const [phone, setPhone] = useState("");
  // const [other, setOther] = useState("");

  // const handleSubmit = () => {
  //   console.log("code", code);
  //   console.log("name", name);
  //   console.log("company", company);
  //   console.log("phone", phone);
  //   console.log("other", other);
  // };

  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="mb-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>Supplier အချက်အလက်များသွင်းရန်စာမျက်နှာ</h2>
            </div>
          </div>

          <Form>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="code" className="m-2 w-25">
                ကုတ်
              </Label>
              <Input type="number" name="code" id="code" />
            </FormGroup>

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="name" className="m-2 w-25">
                အမည်
              </Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="company_name" className="m-2 w-25">
                ကုမဏီအမည်
              </Label>
              <Input type="text" name="company_name" id="company_name" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="phone" className="m-2 w-25">
                ဖုန်းနံပါတ်
              </Label>
              <Input type="number" name="phone" id="phone" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="other" className="m-2 w-25">
                အခြား
              </Label>
              <Input type="text" name="other" id="other" />
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
}

export default Supplier;
