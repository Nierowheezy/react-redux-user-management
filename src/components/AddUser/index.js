import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../../redux/actions/userActions";

const AddUser = ({ users, addUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = users.filter((user) =>
      user.email === email ? user : null
    );

    if (!email || !name || !username || !city) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }

    const data = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 0,
      email,
      username,
      name,
      address: {
        city: city,
      },
    };

    addUser(data);
    toast.success("User added successfully!!");
    history.push("/");
  };

  // const handleCancel = () => {
  //   if (window.confirm(`you will be redirected to the home page continue?`)) {
  //     history.push("/");
  //   }
  // };

  return (
    <div className="container my-5">
      {/* <button
        className="btn btn-dark ml-auto my-5"
        onClick={() => history.push("/")}
      >
        Go back
      </button> */}

      <div className="card">
        <div className="card-header text-center bg-dark text-white">
          Dashboard
        </div>
        <div className="card-body">
          <h1 className="p-4">Dashboard</h1>
          <div className="card">
            <div className="card-header">Form</div>
            <div className="card-body">
              <div className="col-md-12 mx-auto p-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                      Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                      Username
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                      City
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group d-flex justify-content-end my-2">
                    <button
                      type="button"
                      className="btn btn-outline-danger mr-4"
                      onClick={() => history.push("/")}
                    >
                      cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { addUser })(AddUser);
