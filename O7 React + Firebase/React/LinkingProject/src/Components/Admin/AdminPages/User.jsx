import "./pages.css";

export default function User() {
  return (
    <>
      <div className="container-fluid">
        <h1>USERS</h1>
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">User ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
            </tr >
          </thead>
          <tbody>
            <tr className="table-warning">
              <th scope="row">U1</th>
              <td>Saara</td>
              <td><a href="mailto:saara@gmail.com">saara@gmail.com</a></td>
              <td>Active</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">U2</th>
              <td>Siya</td>
              <td><a href="mailto:saara@gmail.com">siya@gmail.com</a></td>
              <td>Active</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">U3</th>
              <td>Smriti</td>
              <td><a href="mailto:saara@gmail.com">smriti@gmail.com</a></td>
              <td>Inactive</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">...</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
