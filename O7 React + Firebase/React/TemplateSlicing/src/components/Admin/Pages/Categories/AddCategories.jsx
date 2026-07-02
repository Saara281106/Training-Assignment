import { useState } from "react";
import CategoryService from "../../../../Services/CategoryService";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCategories() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      let payLoad = {
        name: name,
        description: description,
      };
      await CategoryService.add(payLoad);
      setLoading(false);
      toast.success("Category Added Successfully!")
      nav("/admin/categories")

      setName("");
      setDescription("");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Add Categories</h1>
        </div>
        {/* Single Page Header End */}
      </>

      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-lg-7 offset-2">
                
                {
                  loading ? <BeatLoader
                  color="#89C407"
                  loading={loading}
                  cssOverride={override}
                  size={40}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                /> : <form onSubmit={submit} className="">
                  <input
                    type="text"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <textarea
                    className="w-100 form-control border-0 mb-4"
                    rows={5}
                    cols={10}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />

                  <button
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}
