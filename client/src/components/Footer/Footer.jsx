import React from "react";

export default function Footer() {
    return (    
    <>
        {/* <footer className="container-fluid px-0">
        <div className="row no-gutters g-min-height-80vh">
        
            <div className="col-lg d-flex g-bg-black-opacity-0_9 g-color-white-opacity-0_8">
            <div className="align-self-center g-pa-60">
                <div className="u-heading-v2-2--bottom g-brd-primary g-mb-30">
                <h2 className="u-heading-v2__title h1 g-color-white text-uppercase g-font-weight-600">Get in touch</h2>
                </div>

                <div className="lead g-font-weight-400 g-mb-40">
                <p>Aliquam dapibus quis sapien id pharetra. Vivamus iaculis est vitae libero tempus, in sollicitudin est consectetur porttitor iaculis pretium</p>
                </div>

                <address className="text-uppercase display-6">
                <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-baseline g-mb-10">
                    <i className="fa fa-map-marker g-color-primary g-mr-10"></i>
                    <p>Address:
                        <span className="g-color-white">25, Lorem Lis Street, Orange California, US</span>
                    </p>
                    </li>
                    <li className="d-flex align-items-baseline g-mb-10">
                    <i className="fa fa-phone g-color-primary g-mr-10"></i>
                    <p>Phone Number:
                        <span className="g-color-white">800 123 3456</span>
                    </p>
                    </li>
                    <li className="d-flex align-items-baseline g-mb-10">
                    <i className="fa fa-envelope g-color-primary g-mr-10"></i>
                    <p>Email:
                        <a className="g-color-white" href="mailto:inof@htmlstream.com">inof@htmlstream.com</a>
                    </p>
                    </li>
                    <li className="d-flex align-items-baseline">
                    <i className="fa fa-phone-square g-color-primary g-mr-10"></i>
                    <p>Tall Free:
                        <span className="g-color-white">800 123 3456</span>
                    </p>
                    </li>
                </ul>
                </address>
            </div>
            </div>
        
            <div className="col-lg g-min-height-400">
            <div id="gMap4" className="js-g-map h-100" data-type="custom" data-lat="40.674" data-lng="-73.946" data-zoom="12" data-title="Travel" data-styles="[
                    ['', '', [{'saturation':-100},{'lightness':51},{'visibility':'simplified'}]],
                    ['', 'labels', [{'visibility':'on'}]],
                    ['water', '', [{'color':'#bac6cb'}]]
                    ]" data-pin="true" data-pin-icon="../../../assets/img/icons/pin/green.png"><div style={{ height: '100%', width: '100%' }}><div style={{ overflow: 'hidden' }}></div></div></div>
            </div>
        
        </div>
        </footer> */}

<div style={{ width: '100%', padding: '0' }}>
  <footer style={{ 
    backgroundColor: 'var(--light-blue)', 
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '100%',
  }}>
    <div className="container" style={{ padding: '20px', maxWidth: '1200px' }}>
      <div className="row">
        {/* About Us Section */}
        <div className="col-lg-4 col-md-4 col-sm-12" style={{ marginBottom: '20px' }}>
          <h5 style={{ 
            color: 'var(--deep-teal)',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>
            About Us
          </h5>
          <p style={{ color: 'var(--warm-brown)' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
            ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
            repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="col-lg-4 col-md-4 col-sm-12" style={{ marginBottom: '20px' }}>
          <h5 style={{ 
            color: 'var(--deep-teal)',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>
            Quick Links
          </h5>
          <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <li>
              <a 
                href="#!" 
                style={{ 
                  color: 'var(--warm-brown)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.color = 'var(--aqua-blue)'}
                onMouseOut={e => e.target.style.color = 'var(--warm-brown)'}
              >
                Frequently Asked Questions
              </a>
            </li>
            <li>
              <a 
                href="#!" 
                style={{ 
                  color: 'var(--warm-brown)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.color = 'var(--aqua-blue)'}
                onMouseOut={e => e.target.style.color = 'var(--warm-brown)'}
              >
                Delivery
              </a>
            </li>
            <li>
              <a 
                href="#!" 
                style={{ 
                  color: 'var(--warm-brown)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.color = 'var(--aqua-blue)'}
                onMouseOut={e => e.target.style.color = 'var(--warm-brown)'}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#!" 
                style={{ 
                  color: 'var(--warm-brown)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={e => e.target.style.color = 'var(--aqua-blue)'}
                onMouseOut={e => e.target.style.color = 'var(--warm-brown)'}
              >
                Where we deliver?
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours Section */}
        <div className="col-lg-4 col-md-4 col-sm-12" style={{ marginBottom: '20px' }}>
          <h5 style={{ 
            color: 'var(--deep-teal)',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>
            Opening Hours
          </h5>
          <div style={{ color: 'var(--warm-brown)' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '10px',
              border: '1px solid var(--warm-brown)',
              padding: '5px'
            }}>
              <span>Mon - Fri:</span>
              <span>8am - 9pm</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              border: '1px solid var(--warm-brown)',
              padding: '5px'
            }}>
              <span>Sat - Sun:</span>
              <span>8am - 1am</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        textAlign: 'center',
        padding: '10px',
        backgroundColor: 'var(--deep-teal)',
        color: 'var(--light-blue)',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        width: '100%'
      }}
    >
      © {new Date().getFullYear()} Copyright:
      <a 
        href="https://mdbootstrap.com/"
        style={{ 
          color: 'var(--aqua-blue)',
          textDecoration: 'none',
          marginLeft: '5px'
        }}
      >
        MDBootstrap.com
      </a>
    </div>
  </footer>
</div>
    </>
)
};