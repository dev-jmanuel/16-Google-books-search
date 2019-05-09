import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";
import book from "./books-test.json";

class App extends Component {

  state = {
    book
  }

  // render components
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <Wrapper>
          {this.state.book.map(book => (
            <BookCard
              id={book.id}
              key={book.id}
              title={book.title}
              author={book.author}
              image={book.image}
              summary={book.summary}
            />
          ))}
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
