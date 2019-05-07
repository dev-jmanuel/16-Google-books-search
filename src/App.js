import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
// import BookCard from "./components/BookCard";
import Footer from "./components/Footer";

class App extends Component {

  // render components
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        {/* <Wrapper>
          {this.state.employee.map(employee => (
            <BooksCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              imageClick={this.imageClick}
            />
          ))}
        </Wrapper> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
