import React from 'react'
import ColorHelper from '../helper/colorHelper';
function Dashboard() {
  return (
    <div className="container-fluid">
      <section>
        <ColorHelper />
        <div className="row">
          <div className="col-12 mt-3 mb-1">
            <h5 className="text-uppercase">Minimal Statistics Cards</h5>
            <p>Statistics on minimal cards.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-pencil-alt text-info fa-3x"></i>
                  </div>
                  <div className="text-end">
                    <h3>278</h3>
                    <p className="mb-0">New Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="far fa-comment-alt text-warning fa-3x"></i>
                  </div>
                  <div className="text-end">
                    <h3>156</h3>
                    <p className="mb-0">New Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-chart-line text-success fa-3x"></i>
                  </div>
                  <div className="text-end">
                    <h3>64.89 %</h3>
                    <p className="mb-0">Bounce Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-map-marker-alt text-danger fa-3x"></i>
                  </div>
                  <div className="text-end">
                    <h3>423</h3>
                    <p className="mb-0">Total Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-danger">278</h3>
                    <p className="mb-0">New Projects</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-rocket text-danger fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-success">156</h3>
                    <p className="mb-0">New Clients</p>
                  </div>
                  <div className="align-self-center">
                    <i className="far fa-user text-success fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-warning">64.89 %</h3>
                    <p className="mb-0">Conversion Rate</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-chart-pie text-warning fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-info">423</h3>
                    <p className="mb-0">Support Tickets</p>
                  </div>
                  <div className="align-self-center">
                    <i className="far fa-life-ring text-info fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-info">278</h3>
                    <p className="mb-0">New Posts</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-book-open text-info fa-3x"></i>
                  </div>
                </div>
                <div className="px-md-1">
                  <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-warning">156</h3>
                    <p className="mb-0">New Comments</p>
                  </div>
                  <div className="align-self-center">
                    <i className="far fa-comments text-warning fa-3x"></i>
                  </div>
                </div>
                <div className="px-md-1">
                  <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "35%" }} aria-valuenow="35"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-success">64.89 %</h3>
                    <p className="mb-0">Bounce Rate</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-mug-hot text-success fa-3x"></i>
                  </div>
                </div>
                <div className="px-md-1">
                  <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "60%" }} aria-valuenow="60"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-danger">423</h3>
                    <p className="mb-0">Total Visits</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-map-signs text-danger fa-3x"></i>
                  </div>
                </div>
                <div className="px-md-1">
                  <div className="progress mt-3 mb-1 rounded" style={{ height: "7px" }}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "40%" }} aria-valuenow="40"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Dashboard;