import React, { Component } from "react";
import employees from "./employees.json";
import Header from "./components/Header";
import Search from "./components/Search";
import TableRow from "./components/TableRow";
import TableHead from "./components/TableHead";


class App extends Component {
  state = {
    employees: employees,
    search: "",
    sortType: true,
  };

  // when any value is put into the target field, then what is rendered on the page changes.
  handleInputChange = (event) => {
    const { value } = event.target;
    console.log(event);

    this.setState({
      ...this.state,
      search: value,
    });
  };

  // a sorting function that sorts alphabetically first, then toggles between sort and reverse on click
  handleSort = () => {
    this.setState({
      employees: this.state.employees.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    });

    if (this.state.sortType === true) {
      this.state.sortType = false;
    } else {
      this.state.sortType = true;
      this.state.employees.sort().reverse();
    }
  };

  render() {
    return (
      <>
        <Header />
        <Search inputChange={this.handleInputChange} />
        <table className="container">
          <TableHead onSort={this.handleSort} />
          {this.state.employees
            .filter((item) =>
              item.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((person) => (
              <TableRow
                id={person.id}
                key={person.id}
                name={person.name}
                icon={person.image}
                phoneNumber={person.phoneNumber}
                email={person.email}
                DoB={person.DoB}
              />
            ))}
        </table>
      </>
    );
  }
}

export default App;
