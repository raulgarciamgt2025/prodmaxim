import error403Img from '@/assets/images/error/error-403.png'
import logoDark from '@/assets/images/logo-dark.png'
import logo from '@/assets/images/logo-light.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { currentYear, developedBy } from '@/context/constants'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error403Page = () => {
  return (
    <>
      <div className="auth-bg d-flex min-vh-100 justify-content-center align-items-center">
        <Row className="row g-0 justify-content-center w-100 m-xxl-5 px-xxl-4 m-3">
          <Col xl={4} lg={5} md={6}>
            <div className="mb-4 text-center">
              <Link to="/menu/dashboard" className="auth-brand mb-3">
                <img src={logoDark} alt="dark logo" height={26} className="logo-dark" />
                <img src={logo} alt="logo light" height={26} className="logo-light" />
              </Link>
              <h5 className="fw-semibold mt-2 lh-base">Responsive Admin &amp; Dashboard Template</h5>
            </div>
            <Card className=" overflow-hidden text-center p-xxl-4 p-3 mb-0">
              <div className="mx-auto text-center">
                <img src={error403Img} alt="error 403 img" height={250} />
                <h2 className="fw-bold mt-3 text-primary lh-base">Access Denied !</h2>
                <h4 className="fw-medium mt-2 text-dark lh-base">You don&apos;t have permission to access on this server</h4>
                <p className="text-muted mb-3">
                  You are not authorized to view this page. If you think this is a mistake, please contact support for assistance.
                </p>
                <Link to="/menu/dashboard" className="btn btn-primary">
                  Back to Home <IconifyIcon icon="tabler:home" className="ms-1" />
                </Link>
              </div>
              <p className="mt-3 mb-0">
                {currentYear} © Flacto - By <span className="fw-bold text-decoration-underline text-uppercase text-reset fs-12">{developedBy}</span>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Error403Page
