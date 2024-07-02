import { useEffect, useState } from "react";
import Loader from "../../components/Loading/Loader";
import { Link } from "react-router-dom";
import axios from "axios";

function Projects() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage] = useState(10); 
  const [totalPages, setTotalPages] = useState(1); 
  const [error, setError] = useState(null);
  const [clients, setClients] = useState("");


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:5140/api/Project`
        );
        const data = await response.json();
        setProject(data?.result);
        console.log(data?.result)
                const clientIds = data.result.map(project => project.clientId);
        const uniqueClientIds = [...new Set(clientIds)];
        const clientDataPromises = uniqueClientIds.map(clientId =>
          axios.get(`http://localhost:5140/api/client/${clientId}`).then(res => ({ [clientId]: res.data.result  }))
        )
         const clientDataArray = await Promise.all(clientDataPromises);
         const clientData = clientDataArray.reduce(
           (acc, client) => ({ ...acc, ...client }),
           {}
         );
         console.log(clientData)
         setClients(clientData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage, projectPerPage]);
  
 


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="py110 bg">
      <div className="container">
        {/* Content */}
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-grid"
            role="tabpanel"
            aria-labelledby="nav-grid-tab"
            tabIndex={0}
          >
            <div className="row row-cols-1 row-cols-xl-5 row-cols-lg-3 row-cols-md-2">
              {project.map((item, index) => (
                <article className="col mb-4" key={index}>
                  <div className="swiperSlide">
                    <div className="serviceCard bg-white">
                      <div className="position-relative">
                        {/* <img src="./assets/service/1.png" height={180} className="viewCardImg w-100" alt="" /> */}
                        <Link
                          to={`/ProjectDetails/${item.id}`}
                          className="serviceCardBtn"
                        >
                          View
                        </Link>
                      </div>
                      <div className="serviceCardContent">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="serviceCardPrice fw-bold">
                              ${item.expectedBudget}
                            </h3>
                          </div>
                        </div>
                        <Link to={`/ProjectDetails/${item.id}`}>
                          <h3 className="serviceTitle fw-semibold">
                            {item.title}
                          </h3>
                        </Link>
                        {/* <div className="d-flex align-items-center serviceCardOwner">
                          <img className="serviceCardOwnerImg" alt="" />
                          <Link to="/" className="serviceCardOwnerName">
                            Nankathan
                          </Link>
                        </div> */}
                        <div className="d-flex align-items-center serviceCardOwner">
                          {clients[item.clientId] && (
                            <>
                              <img
                                src={clients[item.clientId].imageUrl}
                                className="serviceCardOwnerImg"
                                alt={clients[item.clientId].name}
                              />
                              <Link
                                to={`/profile/${clients[item.clientId].id}`}
                                className="serviceCardOwnerName"
                              >
                                {clients[item.clientId].name}
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-list"
            role="tabpanel"
            aria-labelledby="nav-list-tab"
            tabIndex={0}
          >
            {/* List View */}
          </div>
        </div>
        {/* Pagination */}
        {/* <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <nav aria-label="Page navigation example">
              <ul className="custom-pagination pagination">
                <li className="custom-page-item page-item">
                  <button
                    className="custom-page-link page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(5)].map((_, i) => (
                  <li
                    key={i}
                    className={`custom-page-item page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="custom-page-link page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li className="custom-page-item page-item">
                 
                  <button className="custom-page-link page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
      </div>
    </div>
  );
}

function Dropdown({ title, children }) {
  return (
    <div className="custom-dropdown dropdown">
      <button
        className="custom-dropdown-toggle dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="custom-dropdown-menu dropdown-menu">{children}</ul>
    </div>
  );
}

export default Projects;