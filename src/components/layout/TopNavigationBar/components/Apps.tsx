import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { splitArray } from '@/utils/array'
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { appData } from '../data'

const Apps = () => {
  const chunk_size = 3
  const appsChunks = splitArray(appData, chunk_size)

  return (
    <div className="topbar-item d-none d-sm-flex">
      <Dropdown align={'end'}>
        <DropdownToggle
          as={'button'}
          className="topbar-link drop-arrow-none"
          data-bs-toggle="dropdown"
          data-bs-offset="0,25"
          aria-haspopup="false"
          aria-expanded="false">
          <IconifyIcon icon="tabler:apps" className="fs-22" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end dropdown-menu-lg p-0">
          <div className="p-2">
            {(appsChunks || []).map((chunk, idx) => (
              <Row className="g-0" key={idx}>
                {(chunk || []).map((item, idx) => {
                  return (
                    <Col xs={4} key={idx}>
                      <a className="dropdown-icon-item" href="">
                        <img height={24} width={24} src={item.image} alt="slack" />
                        <span>{item.name}</span>
                      </a>
                    </Col>
                  )
                })}
              </Row>
            ))}
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default Apps
