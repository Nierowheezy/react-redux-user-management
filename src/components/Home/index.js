import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, deletUser } from "../../redux/actions/userActions";
import { BsThreeDots } from "react-icons/bs";
import Loader from "../utils/Loader/Loader/Loader";
import Modal from "../utils/Modal/Modal";

const Home = (props) => {
  const { users, getUsers, deletUser, loading } = props;

  const [userId, setUserId] = useState(null);
  const [sortType, setSortType] = useState("asc");

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteClick = (id) => {
    deletUser(id);
  };

  const sortedUsers = users.sort((a, b) => {
    const isReversed = sortType === "asc" ? 1 : -1;
    return isReversed * a.username.localeCompare(b.name);
  });

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-12 mx-auto my-4">
          <div className="card">
            <div className="card-header bg-dark text-white  d-flex flex-row  align-items-center justify-content-between p-0 m-0">
              <span className="ml-4" style={{ fontSize: "2rem" }}>
                <BsThreeDots />
              </span>
              <p className="mt-3">Dashboard</p>
              <p></p>
            </div>
            <div className="card-body">
              <h1>Dashboard</h1>
              <button
                type="button"
                onClick={() => setSortType(!sortType)}
                className="btn btn-primary mb-4"
              >
                Sort By Username
              </button>
              <Modal
                title={"Delete"}
                bodyText={"Do you want to delete this user"}
                action={"Delete"}
                onDeleteClick={onDeleteClick}
                userId={userId}
              />
              <div className="card text-center">
                <div className="card-header">
                  <div className="d-flex flex-row justify-content-between">
                    <p>User list</p>
                    <Link to="/add" className="btn btn-primary">
                      Add new
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  {users?.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="table-header">
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {users?.length > 0 ? (
                            sortedUsers?.map((user, id) => (
                              <tr key={id}>
                                <td>{id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address?.city}</td>
                                <td>
                                  <Link
                                    to={`/edit/${user.id}`}
                                    className="btn btn-sm btn-warning mr-1"
                                  >
                                    Edit
                                  </Link>

                                  <button
                                    type="button"
                                    onClick={() => setUserId(user.id)}
                                    className="btn btn-sm btn-danger"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>{!users && <SkeletonUsers />}</tr>
                          )}
                        </tbody>
                      </table>
                      {/* <div class="d-flex justify-content-center">
                        <nav aria-label="Page navigation">
                          <ul class="pagination">
                            <li class="page-item">
                              <a class="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div> */}
                    </div>
                  ) : (
                    <>
                      <p>
                        Oops! No users users found, add a new user thanks 😢
                      </p>
                    </>
                  )}
                </div>
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
  loading: state.users.loading,
});

export default connect(mapStateToProps, { getUsers, deletUser })(Home);
