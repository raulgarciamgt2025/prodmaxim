import logoDark from '@/assets/images/logo-dark.png'
import logo from '@/assets/images/logo-light.png'
import { currentYear } from '@/context/constants'
import Timer from './components/Timer'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ComingSoonPage = () => {
  return (
    <>
      <div className="auth-bg d-flex min-vh-100 justify-content-center align-items-center">
        <Row className=" g-0 justify-content-center w-100 m-xxl-5 px-xxl-4 m-3">
          <Col xl={4} lg={5} md={6}>
            <div className="mb-4 text-center">
              <Link to="/menu/dashboard" className="auth-brand">
                <img src={logoDark} alt="dark logo" height={26} className="logo-dark" />
                <img src={logo} alt="logo light" height={26} className="logo-light" />
              </Link>
              <h5 className="fw-semibold mt-2 lh-base">Responsive Admin &amp; Dashboard Template</h5>
            </div>
            <Card className=" overflow-hidden text-center p-xxl-4 p-3 mb-0">
              <div>
                <h3 className="fw-semibold mb-2">Coming Soon: Stay Tuned!</h3>
                <p className="text-muted mb-0">Something exciting is coming your way soon</p>
              </div>
              <Timer />
              <Row className=" justify-content-center">
                <Col className="col-12">
                  <div className="position-relative mb-3">
                    <form className="m-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control rounded border w-100 px-2 py-2"
                        placeholder="Enter Your Email"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary position-absolute top-50 translate-middle-y translate-middle-x end-0 fw-semibold me-1">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
              <p className="text-muted">Sign up now to get early launch notification of our launch date !</p>
              <p className="mt-3 mb-0">
                {currentYear}© Flacto - By
                <span className="fw-bold text-decoration-underline text-uppercase text-reset fs-12">Coderthemes</span>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ComingSoonPage
