export default function Footer() {
    return (    
    <>
    <div className="shortcode-html">
  <footer className="container-fluid px-0">
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
      {/* <div className="col-lg g-min-height-400">
        <div id="gMap4" className="js-g-map h-100" data-type="custom" data-lat="40.674" data-lng="-73.946" data-zoom="12" data-title="Travel" data-styles="[...]" data-pin="true" data-pin-icon="../../../assets/img/icons/pin/green.png">
          <div style={{ height: '100%', width: '100%' }}>
            <div style={{ overflow: 'hidden' }}></div>
          </div>
        </div>
      </div> */}
    </div>
  </footer>
</div>
    </>
)
};