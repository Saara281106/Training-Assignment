import "./pages.css";

export default function Enquiries() {
  return (
    <>
      <div className="container-fluid">
        <h1>CUSTOMER ENQUIRIES</h1>
        <table class="table table-hover">
          <thead>
            <tr className="table-danger">
              <th scope="col">Enquiry</th>
              <th scope="col">Costumer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-light">
              <th scope="row">1</th>
              <td>Neeraj</td>
              <td><a href="">neeraj@gmail.com</a></td>
              <td>Order Inquiry</td>
              <td>Pending</td>
            </tr>
            <tr className="table-light">
              <th scope="row">2</th>
              <td>Saara</td>
              <td><a href="">saara@gmail.com</a></td>
              <td>Product Availability</td>
              <td>Resolved</td>
            </tr>
            <tr className="table-light">
              <th scope="row">3</th>
              <td>Yuvansh</td>
              <td><a href="">yuvi@gmail.com</a></td>
              <td>Return Request</td>
              <td>Pending</td>
            </tr>
            <tr className="table-light">
              <th scope="row">...</th>
              <td>...</td>
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
