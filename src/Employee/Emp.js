import React, { Component } from "react";
import AddEmp from "./AddEditEmp";
class Emp extends Component {
  state = {
    addEditEmpFlag: false,
    isEdit: false
  };

  // isEdit = false; // render trigger son props and state as well (here props also working fine)

  editRecordId = 0;

  handleAddEmp = () => {
    // this.isEdit = false;
    this.setState(state => ({
      addEditEmpFlag: !state.addEditEmpFlag,
      isEdit: false
    }));
  };

  handleEditEmp = id => {
    // this.isEdit = true;
    this.editRecordId = id;
    this.setState({
      addEditEmpFlag: true,
      isEdit: true
    });
  };

  getEmpId = () => {
    // return this.isEdit
    return this.state.isEdit
      ? this.props.list.find(element => this.editRecordId === element.id)
      : this.props.list[this.props.list.length - 1].id;
  };

  render() {
    console.log("Emp - render method");
    const rowGroup = this.props.list.map(emp => {
      return (
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{emp.empName}</td>
          <td>{emp.salary}</td>
          <td>{emp.age}</td>
          <td>
            <button
              className="btn-primary btn-sm m-2"
              onClick={() => this.props.onDelete(emp.id)}
            >
              Delete
            </button>
            <button
              className="btn-primary btn-sm m-2"
              onClick={() => this.handleEditEmp(emp.id)}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="emp-info">
        <h3>Emp Details</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Emp Name</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rowGroup}</tbody>
        </table>
        <button onClick={this.props.onReset}>Reset</button>
        <button onClick={this.handleAddEmp}>
          {this.state.addEditEmpFlag ? "Hide Emp Details" : "Add New Emp"}
        </button>
        <hr />
        {this.state.addEditEmpFlag && (
          <AddEmp
            addCallback={this.props.onAdd}
            editCallback={this.props.onEdit}
            emp={this.getEmpId()}
            isEditEmp={this.state.isEdit}
            // isEditEmp={this.isEdit}
          />
        )}
      </div>
    );
  }
}

export default Emp;
