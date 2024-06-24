import React from 'react';
import './contactUs.css'; // Assuming you have custom CSS for additional styling

const ContactUs = () => {
  return (
    <section style={styles.section}>
      <div className="container-fluid" style={styles.container}>
        <div className="row p-3" style={styles.row}>
          <div className="col-12 col-md-7" style={styles.leftColumn}>
            <p className="About" style={styles.heading}>
              Contact <span id="Us">Us</span>
            </p>
            <p className="message1" style={styles.message}>
              Have questions, feedback, or need assistance? We’re here to help! Feel free to reach out to us using the contact information provided below:
            </p>
            <div className="row " style={styles.twoboxrow}>
              <div className="col-12 col-md-5" style={styles.contactInfo}>
                <div className="between1">
                  <p><i className="fa-solid fa-phone" /> +91 0000000000</p>
                  <p><i className="fa-solid fa-envelope" /> support@mytradejournal.in</p>
                  <div className="font12" style={styles.socialIcons}>
                    <i className="fa-brands fa-square-twitter" style={styles.icon} />
                    <i className="fa-brands fa-square-instagram" style={styles.icon} />
                    <i className="fa-brands fa-linkedin" style={styles.icon} />
                    <i className="fa-brands fa-square-facebook" style={styles.icon} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 bet-two" style={styles.chatSection}>
                <div className="between2"  style={styles.between2}>
                  <p className="imgman" style={styles.imgman}>
                    <img src="img/Figure.png" alt="Figure" style={styles.image} />
                    <span id="fig1"><img src="img/Whatsapp.png" alt="WhatsApp" style={styles.image} /></span>
                  </p>
                  <div className="fig2" style={styles.fig2}>
                    Live Chat With <br />
                    <span className="exp" style={styles.expert}>Expert <i className="exp bi-arrow-down-right" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5" style={styles.rightColumn}>
            <div className="form2" style={styles.formContainer}>
              <p className="send" style={styles.send}>Send Your Message to us</p>
              <p className="put" style={styles.put}>Put up your query below</p>
              <div className="contactform" style={styles.contactForm}>
                <form>
                  <label className="form-title" style={styles.formTitle}>Name</label>
                  <input type="text" placeholder="Your full name" style={styles.input} />
                  <label className="form-title" style={styles.formTitle}>Email</label>
                  <input type="email" placeholder="me@company.com" style={styles.input} />
                  <label className="form-title" style={styles.formTitle}>Message</label>
                  <textarea style={{ ...styles.input, height: 100 }} placeholder="Your message..." />
                 <div className='btn-div'> <button className="butsubmit form-control" type="button" style={styles.button}>Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px',
    fontFamily: 'popins, sans-serif',
    color: '#333',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  leftColumn: {
    padding: '20px',
  },
  rightColumn: {
    padding: '20px',
  },
  heading: {
    // fontSize: '2rem',
    // marginBottom: '10px',
  },
  message: {
    marginBottom: '20px',
    color: 'gray',
    textAlign: 'center',
},
  contactInfo: {
    padding: '35px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  icon: {
    margin: '0 5px',
    fontSize: '30px',
  },
  chatSection: {
   padding: '35px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    // display: 'flex',
  },
  imgman: {
    display: 'flex',
    alignItems: 'center',
  },
  between2:{
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
  },
  twoboxrow:{
    display: 'flex',
    justifyContent:'space-around',
  },
  image: {
    maxWidth: '100%',
  },
  fig2: {
    textAlign: 'center',
    marginTop: '10px',
    fontWeight: 'bold',
  },
  expert: {
    display: 'inline-block',
    marginLeft: '5px',
  },
  formContainer: {
    padding: '20px',
    backgroundColor: '#1b1e31',
    borderRadius: '5px',
    // boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  send: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#FFFFFF',
    fontFamily: 'inter',
    textAlign: 'center',
        // font-weight: 700;
        // font-size: 32px;
        // line-height: 38.4px;
       
        
    
  },
  put: {
    marginBottom: '20px',
    color: 'gray',
    textAlign:'center',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    padding:'5%',
  },
  formTitle: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: 'gray',
  },
  input: {
    padding: '5px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    backgroundColor:'#f4f4f4',
  },
  button: {
    padding: '5px',
    backgroundColor: '#f4f4f4',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width:'50%',
    textAlign:'center',
  },
};

export default ContactUs;
