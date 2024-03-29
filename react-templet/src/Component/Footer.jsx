
// import from 'bootstrap-icons-react';
// import { Facebook, Twitter, Instagram, Broadcast, Eyeglasses } from 'bootstrap-icons-react';


import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, like sending the data to a server
    console.log(formData);
  };

  return (
    <>
      <div className='container text-center mt-5'>

        <div className='bg-dark text-white row'>

          <div className='float-start w-25 mt-5'>
            <h5 className="footer-title fw-light">Our address</h5>
            <p className='Ole  text-secondary fst-italic'>Ole Deviks vei 10,<br />Oslo, 0666 Norway.</p>
            <button type="button" class="btn btn-outline-success text-success1">VIEW ON MAP</button><br />
            <img className='image-size mt-3' src="https://conluo.no/wp-content/uploads/2020/10/conluofacebook2.png" alt="" />
            <p className='Ole mt-2 text-secondary fst-italic'>conluo trtt trtyyju ersbmu kiofd fgyt tyrdb</p>
            <img className='image-size2' src="https://lunsjpadora.no/assets/images/Certificate-Logos.png" alt="" />
          </div>
          <div className='float-left w-50 bg-secondarye form-templet-content'>
            <div className='form-templet'>
              <h5 className='text-success1 mb-3 '>Fill in the form below <br /> to experience the flavors of <br /> Lunsj Pa Dora for free</h5>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className='mb-2 text-success1' type="submit">Submit</button>
                <div>TRY THELUNSJ PA DORA EXPERIENCE</div>
              </form>
              {/* </div><br /> */}
              <h6 className='mt-4 pt-3 text-light'>If you'd like to talk to our sales team immediately, contact</h6>
              <div>
                <div className='float-stasrt'><span className='text-success'>Sebastion Fredsted</span> <br />sebastian@conlue.nox</div>
                {/* <div className='float-ends'>Caroline Borge <br />sebastian@conlue.no <br />tif: 478 38 920</div> */}
              </div>
          </div>
          </div>
          <div className='float-end w-25 mt-3 pe-3'>
            <h5 className="footer-title fw-light">Contact Us</h5>
            <p className='Ole  text-secondary fst-italic'>lunsjpadora@conluno.no<br />tif: 40 00 13 15</p>
            <button type="button" class="btn btn-outline-success text-success1">SEND A MESSAG</button><br />
            <img className='image-size mt-1' src="https://conluo.no/wp-content/uploads/2020/10/conluofacebook2.png" alt="" />
            <p className='Ole mt-1 text-secondary fst-italic'>conluo trtt trtyyju ersbmu kiofd fgyt tyrdb</p>
            {/* <img className='image-size2' src="https://lunsjpadora.no/assets/images/Certificate-Logos.png" alt="" /> */}
            <div className='icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter-x ms-4" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram ms-4" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-broadcast-pin ms-4" viewBox="0 0 16 16">
                <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-eyeglasses ms-4" viewBox="0 0 16 16">
                <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
              </svg>
              {/* <Facebook />
              <Twitter />
              <Instagram />
              <Broadcast />
              <Eyeglasses /> */}
                {/* <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-broadcast"></i>
                <i class="bi bi-eyeglasses"></i> */}
            </div>
          </div>
        </div>
        <div className='bg-black'>Copyright Lorem ipsum dolor sit amet consectetur adipisicing elit.?</div>

      </div>
    </>
  );
};

export default Footer;
