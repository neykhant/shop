import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./Staff.module.css";
import image from "../NavBar/profile.png";

const StaffTable = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className={Style.staff_list}>
              <h2>၀န်ထမ်းစာရင်:</h2>
            </div>
            <div>
              <Button color="success" size="sm">
                <Icons.FaPlusCircle style={{ margin: 5 }} />
                ထပ်ထည့်မည်
              </Button>
              <Button className="bg-danger bg-gradient" color="primary" size="sm" style={{ marginLeft: 5 }}>
                <Icons.FaSave style={{ margin: 5 }} /> စာရင်းထုတ်မည်
              </Button>
            </div>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>ဓါတ်ပုံ</th>
                <th>အမည်</th>
                <th>မွေးသကရာဇ်</th>
                <th>အလုပ်စ၀င်သောနေ့</th>
                <th>ဖုန်းနံပါတ်</th>
                <th>လခ</th>
                <th>ဘဏ်အကောင့်</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={image} width="60px" height="60px" alt="" />
                </td>
                <td>Mg Hla</td>
                <td>33/04/1999</td>
                <td>17/4/22</td>
                <td>09775645353</td>
                <td>200000</td>
                <td>25376655473893</td>
                <td>
                  <Button color="warning m-2" size="sm">
                    Edit
                  </Button>
                  <Button color="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={image} width="60px" height="60px" alt="" />
                </td>
                <td>Mg Hla</td>
                <td>33/04/1999</td>
                <td>17/4/22</td>
                <td>09775645353</td>
                <td>200000</td>
                <td>25376655473893</td>
                <td>
                  <Button color="warning m-2" size="sm">
                    Edit
                  </Button>
                  <Button color="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={image} width="60px" height="60px" alt="" />
                </td>
                <td>Mg Hla</td>
                <td>33/04/1999</td>
                <td>17/4/22</td>
                <td>09775645353</td>
                <td>200000</td>
                <td>25376655473893</td>
                <td>
                  <Button color="warning m-2" size="sm">
                    Edit
                  </Button>
                  <Button color="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
             
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default StaffTable;
