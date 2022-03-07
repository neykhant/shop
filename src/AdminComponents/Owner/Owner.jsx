import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import Style from "./Owner.module.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import * as Icons from "react-icons/fa";

const Owner = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="mb-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>လုပ်ငန်းရှင်မှပစ္စည်:ထုတ်သုံးခြင်း</h2>
            </div>
          </div>

          <Form>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="code" className="m-2 w-25">
              ပစ္စည်:ကုတ်
              </Label>
              <Input type="number" name="code" id="code" />
            </FormGroup>

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="name" className="m-2 w-25">
              ပစ္စည်:အမည်
              </Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="phone" className="m-2 w-25">
              အရေအတွက်
              </Label>
              <Input type="number" name="phone" id="phone" />
            </FormGroup>
            

            <div className={Style.form__button_staff}>
              <Button
                color="primary"
                size="md"
                style={{
                  marginLeft: 5,
                  backgroundColor: "#9a4d3a",
                  border: "none"
                }}
              >
                <Icons.FaSave style={{ margin: 5 }} /> သိမ်းမည်
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Owner