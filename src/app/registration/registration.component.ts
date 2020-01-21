import { Component, OnInit } from "@angular/core";
import { Form } from "../data/form";
import Swal from "sweetalert2";

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

  stitle = "Are you sure you want to submit?";
  sconfirmButtonText = "Yes Submit it";
  sfire1 = "Add!";
  sfire2 = "You Are Now Registered!!!";

  constructor() {
    this.formdata = new Form();
  }

  ngOnInit() { }
  notify() {
    if (this.editing == true) {
      this.stitle = "Do you want to save changes?";
      this.sconfirmButtonText = "Yes Save it";
      this.sfire1 = "Changes has been saved!";
      this.sfire2 = "You're information is now updated!!!";
    } else {
      this.stitle = "Are you sure you want to submit?";
      this.sconfirmButtonText = "Yes Submit it";
      this.sfire1 = "Add!";
      this.sfire2 = "You Are Now Registered!!!";
    }
  }

  onSubmit() {
    this.notify();
    Swal.fire({
      title: this.stitle,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.sconfirmButtonText
    }).then(result => {
      if (result.value) {
        Swal.fire(this.sfire1, this.sfire2, "success");
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
      }
    });
    // alert("sjlifhg")
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
    for (let i = 0; i < this.dataArray.length; ++i) {
      if (this.dataArray[i].id == this.editId) {
        this.dataArray.splice(i, 1);
        //this.editing = false;
      }
    }
    this.onSubmit();
    this.editing = false;
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
