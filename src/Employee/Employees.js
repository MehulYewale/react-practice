import React, { Component } from "react";
import Emp from "./Emp";
import empList from "./emp-list-data";

class Employees extends Component {
  state = {
    empList: [...empList]
  };

  handleDelete = id => {
    this.state.empList.splice(
      this.state.empList.findIndex(emp => id === emp.id),
      1
    );
    console.log("handleDelete", this.state.empList);
    //this.setState(this.state);  // this may fails if many state updatation call async
    this.setState(state => state);

    // Wrong way
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });

    // correct way
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
  };

  handleReset = () => {
    console.log("handleReset", this.state.empList);
    this.setState({ empList: [...empList] });
  };

  handleAdd = emp => {
    const arrayIndex = this.state.empList.findIndex(
      element => element.id === emp.id
    );
    if (arrayIndex > -1) {
      // this.state.empList[arrayIndex] = emp; //warning of state mutating
      let list = [...this.state.empList];
      list[arrayIndex] = emp;
      this.setState({ empList: [...list] });
      console.log("Record Updated");
    } else {
      this.state.empList.push(emp); //will update state object but doesn't trigger render method to apply changes
      this.setState({ empList: [...this.state.empList] }); // calls render method to updatable view
      console.log("Record Added");
    }
  };

  render() {
    console.log("Employee - render method");

    return (
      <React.Fragment>
        <header>Employees Base Comp</header>
        <Emp
          list={this.state.empList}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </React.Fragment>
    );
  }
}

export default Employees;
