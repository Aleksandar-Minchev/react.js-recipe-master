import React from "react";

export default function Footer() {
    return (    
    <>
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
                Welcome to Recipe Master, a place where creativity and culinary passion collide! We are very happy to welcome you here, where you may explore a world of flavors and find recipes that can improve your culinary skills. A diversified team of genuine chefs and enthusiastic amateur recipe writers came together to create our website, which is a unique combination of creativity and skill.
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