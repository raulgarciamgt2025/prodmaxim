import error401Img from '@/assets/images/error/error-401.png'
import logoDark from '@/assets/images/logo-dark.png'
import logo from '@/assets/images/logo-light.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { currentYear, developedBy } from '@/context/constants'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error401Page = () => {
  return (
    <>
      <div className="auth-bg d-flex min-vh-100 justify-content-center align-items-center">
        <Row className=" g-0 justify-content-center w-100 m-xxl-5 px-xxl-4 m-3">
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6">
            <div className="mb-4 text-center">
              <Link to="/menu/dashboard" className="auth-brand mb-3">
                <img src={logoDark} alt="dark logo" height={24} className="logo-dark" />
                <img src={logo} alt="logo light" height={24} className="logo-light" />
              </Link>
              <h5 className="fw-semibold mt-2 lh-base">Responsive Admin &amp; Dashboard Template</h5>
            </div>
            <Card className=" overflow-hidden text-center p-xxl-4 p-3 mb-0">
              <div className="mx-auto text-center">
                <img src={error401Img} alt="error-401" className="mt-3 mb-2" height={230} />
                <h2 className="fw-bold mt-3 text-primary lh-base">Error Unauthorized ! </h2>
                <h4 className="fw-medium mt-2 mb-0 text-dark lh-base">Access to allowed only for registered user</h4>
                <p className="text-muted fs-15 mb-3">Sorry, but you are not authorized to view this page.</p>
                <Link to="/menu/dashboard" className="btn btn-primary">
                  Back To Home <IconifyIcon icon="tabler:home" className="ms-1" />
                </Link>
              </div>
              <p className="mt-3 mb-0">
                {currentYear} © Flacto - By <span className="fw-bold text-decoration-underline text-uppercase text-reset fs-12">{developedBy}</span>
              </p>
            </Card>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Error401Page
