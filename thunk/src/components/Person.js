import React from "react";
import { connect, useSelector } from "react-redux";
import { getPerson } from "../actions/index";
import logo from "../../pictures/loading.gif";

// https://randomuser.me/api/

const Person = (props) => {
  const { getPerson, person, error, isFetching } = props;

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return (
      <div>
        <img src={logo} />
        <h2>Fetching person for ya!</h2>
      </div>
    );
  }

  return (
    <>
      <div>
        <h2>
          Say Hi to: {person.name.first} {person.name.last}
        </h2>
        <img src={person.picture.large} />
      </div>
      <button onClick={() => getPerson()}>Get new person</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPerson })(Person);
