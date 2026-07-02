import { Link } from "react-router-dom";

export default function ShowCategories() {
  return (
    <>
      <>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Categories</h1>
        </div>
        {/* Single Page Header End */}
      </>

        <br /><br />
        <div className="text-end container">
        <Link to="/admin/categories/add"><button className="btn btn-sm btn-primary text-light">+Add Category</button></Link>
        </div>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>
      <br /><br />
    </>
  );
}
