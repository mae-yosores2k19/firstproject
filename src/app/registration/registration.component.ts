import { Component, OnInit } from "@angular/core";
import { Form } from "../data/form";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  tempfname: String;
  templname: String;
  tempgender: String;
  tempage: Number;
  tempemail: String;
  tempdepartment: String;
  tempaddress: String;

  formdata: Form;
  tempID = 0;
  dataArray: Form[] = [];
  editing = false;
  editId: Number;
  hide = false;

  constructor() {
    this.formdata = new Form();
  }

  ngOnInit() {}

  onSubmit() {
    this.tempID = this.dataArray.length + 1;
    this.formdata = {
      id: this.tempID,
      fname: this.tempfname,
      lname: this.templname,
      gender: this.tempgender,
      age: this.tempage,
      email: this.tempemail,
      department: this.tempdepartment,
      address: this.tempaddress
    };
    this.dataArray.push(this.formdata);
    this.hide = true;
    this.tempfname = "";
    this.templname = "";
    this.tempgender = "";
    this.tempage = null;
    this.tempemail = "";
    this.tempdepartment = "";
    this.tempaddress = "";

    console.log("submitted", this.dataArray);
  }
  editParent(id) {
    this.dataArray.forEach(element => {
      if (element.id == id) {
        this.tempfname = element.fname;
        this.templname = element.lname;
        this.tempgender = element.gender;
        this.tempage = element.age;
        this.tempemail = element.email;
        this.tempdepartment = element.department;
        this.tempaddress = element.address;
        this.editing = true;
        this.editId = id;
      }
    });
    this.hide = false;
  }

  handleSaveRemove() {
    for (let i = 0; i < this.dataArray.length; ++i){
      if (this.dataArray[i].id == this.editId) {
        this.dataArray.splice(i, 1)
        this.editing = false;
      }
    };
    this.onSubmit()
  }
  handleAdd() {
    this.hide = false;
  }
}








// handleSaveNotRemove() {
  //   this.dataArray.forEach(element => {
  //     if (element.id == this.editId) {
  //       element.fname = this.tempfname;
  //       element.lname = this.templname;
  //       element.gender = this.tempgender;
  //       element.age = this.tempage;
  //       element.email = this.tempemail;
  //       element.department = this.tempdepartment;
  //       element.address = this.tempaddress;
  //       this.editing = false;
  //     }
  //   });
  //   this.hide = true;
  //   this.tempfname = "";
  //   this.templname = "";
  //   this.tempgender = "";
  //   this.tempage = "";
  //   this.tempemail = "";
  //   this.tempdepartment = "";
  //   this.tempaddress = "";
  // }