import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { updateUser } from "../../redux/actions/userActions";

const EditUser = ({ users, updateUser }) => {
  const { id } = useParams();
  const history = useHistory();

  const currentUser = users.find((user) => user.id === parseInt(id));

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setUsername(currentUser.username);
    setEmail(currentUser.email);
    setCity(currentUser.address?.city);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkUserEmailExists = users.filter((user) =>
      user.email === email && user.id !== currentUser.id ? user : null
    );

    const checkUserUsernameExists = users.filter((user) =>
      user.username === username && user.id !== currentUser.id ? user : null
    );

    const checkUserCityExists = users.filter((user) =>
      user.city === city && user.id !== currentUser.id ? user : null
    );

    if (email === "" || username === "" || name === "" || city === "") {
      return toast.warning("Please fill in all fields!!");
    }

    if (checkUserUsernameExists.length > 0) {
      return toast.error("This username already exists!!");
    }
    if (checkUserEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkUserCityExists.length > 0) {
      return toast.error("This city already exists!!");
    }

    const data = {
      name,
      username,
      email,
      city,
    };

    updateUser(currentUser.id, data);
    toast.success("User updated successfully!!");
    history.push("/");
  };

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
                {currentUser ? (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control"
                          value={name}
                          placeholder={"Name"}
                          onChange={(e) => setName(e.target.value)}
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
                          value={username}
                          placeholder={"Username"}
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
                          value={email}
                          placeholder={"Email"}
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={city}
                          placeholder={"City"}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group d-flex justify-content-end my-2">
                      <button type="submit" className="btn btn-success">
                        Update User
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger ml-4"
                        onClick={() => history.push("/")}
                      >
                        cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <h1 className="text-center">No User Found</h1>
                )}
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

export default connect(mapStateToProps, { updateUser })(EditUser);
