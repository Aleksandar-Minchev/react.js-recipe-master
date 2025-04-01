export default function Contacts() {
    return(
        <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-intro">
        If you have any questions, feel free to reach out to us:
      </p>
      
      <div className="contact-details">
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <span className="contact-text">
            recipemaster@abv.bg
          </span>
        </div>
        
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <span className="contact-text">
            +359 899 55 55 92
          </span>
        </div>
        
        <div className="contact-item">
          <span className="contact-label">Address:</span>
          <span className="contact-text">
            78 Alexander Malinov St, Sofia, Bulgaria
          </span>
        </div>
      </div>
    </div>
    );
}