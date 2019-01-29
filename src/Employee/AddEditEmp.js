import React, { Component } from "react";
// defaultValue propery work with Props and state as well
// value property does not work with props, it always needs setState method to update value

class AddEmp extends Component {
  state = { comment: "comments here" }; // you can see reset button changes working with comment text changed (re-rendering components with state)

  getEmp = () => {
    let emp = {};
    if (!this.props.isEditEmp) {
      emp = { id: this.props.emp + 1, empName: "", salary: "", age: "" };
    } else {
      emp = this.props.emp;
    }
    return emp;
  };
  emp = this.getEmp();

  changeHandler = e => {
    console.log("changeHandler -- name", e.target.name);

    if (e.target.name === "comment") {
      this.setState({ comment: e.target.value }); // Async setState causing to get updated state value
      setTimeout(() =>
        console.log(
          "changeHandler -- Inside setTimeout ---",
          this.state.comment
        )
      );
      console.log("changeHandler -- after setState---", this.state.comment);
      return;
    }

    let changedProperty = { [e.target.name]: e.target.value };
    this.emp = { ...this.emp, ...changedProperty };
    console.log(this.emp);
  };
  onAdd = e => {
    console.log("add", e);
    this.props.addCallback(this.emp);
  };

  onEdit = e => {
    console.log("add", e);
    this.props.editCallback(this.emp);
  };

  onReset = e => {
    // e.preventDefault();
    // this.emp = { id: 0, empName: "", salary: "", age: "" };
    console.log("reset", this.emp);
  };

  render() {
    console.log("AddEditEmp - render method");

    const title = this.props.isEditEmp ? "Edit" : "Add";
    console.log(this.props.isEditEmp);
    return (
      <div className="add-emp-info">
        <h2> {title} Employee Details</h2>
        <form>
          <div>
            Id :{" "}
            <input
              name="id"
              type="text"
              defaultValue={this.emp.id}
              onChange={e => this.changeHandler(e)}
            />
          </div>
          <br />
          <div>
            Name :
            <input
              name="empName"
              type="text"
              defaultValue={this.emp.empName}
              onChange={e => this.changeHandler(e)}
            />
          </div>
          <br />
          <div>
            Salary :
            <input
              name="salary"
              type="text"
              defaultValue={this.emp.salary}
              onChange={e => this.changeHandler(e)}
            />
          </div>
          <br />
          <div>
            Age :
            <input
              type="text"
              name="age"
              defaultValue={this.emp.age}
              onChange={e => this.changeHandler(e)}
            />
          </div>
          <br />
          <div>
            Comments :
            <input
              type="text"
              name="comment"
              value={this.state.comment}
              onChange={e => this.changeHandler(e)}
            />
          </div>
          <br />
          <button type="button" onClick={e => this.onAdd(e)}>
            Submit
          </button>
          <button type="reset" onClick={this.onReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default AddEmp;
