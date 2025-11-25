import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
    
      <header className="bg-dark text-white position-relative">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <a className="navbar-brand" href="#">
            <img src="/download.png" alt="Omnifood Logo" height="100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#food-delivery">Food Delivery</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#how-it-works">How it works</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#our-cities">Our Cities</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#sign-up">Sign Up</a>
    </li>
  </ul>
</div>

        </nav>
        <div className="container text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4 fw-bold">
            Goodbye junk food.<br />
            Hello super healthy meals.
          </h1>
          <div className="mt-4">
            <a href="#" className="btn btn-warning btn-lg me-3">I’m hungry</a>
            <a href="#" className="btn btn-outline-warning btn-lg">Show me more</a>
          </div>
        </div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
            zIndex: -1,
          }}
        ></div>
      </header>

     
     <section id="food-delivery" className="py-5 bg-light">
  <div className="container text-center mb-5">
    <h2 className="mb-4">Get food fast — not fast food.</h2>
    <p className="lead">
      Hello, we’re Omnifood, your new premium food delivery service. We know
      you’re always busy. No time for cooking. So let us take care of that,
      we’re really good at it, we promise!
    </p>
  </div>
  <div className="container">
    <div className="row text-center g-4">
      <div className="col-md-3 text-center">
  <i className="ion-leaf icon-big"></i>
  <h5>100% organic</h5>
  <p>All ingredients are fresh, organic, and sourced locally.</p>
</div>



      <div className="col-md-3">
        <i className="bi bi-infinity fs-1 text-warning mb-2"></i>
        <h5>Up to 365 days/year</h5>
        <p>Never cook again! Our subscription plans include up to 365 days/year coverage.</p>
      </div>
      <div className="col-md-3">
        <i className="bi bi-clock fs-1 text-warning mb-2"></i>
        <h5>Ready in 20 minutes</h5>
        <p>Your meals delivered in less than 20 minutes, fresh & healthy.</p>
      </div>
    

      <div className="col-md-3">
        <i className="bi bi-bag fs-1 text-warning mb-2"></i>
        <h5>Order anything</h5>
        <p>Choose from over 100 delicious meals, whatever you feel like.</p>
      </div>
    </div>
  </div>
</section>


    
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-3">
            {[1,2,3,4,5,6,7,8].map((num) => (
              <div key={num} className="col-md-3">
                <img
  src={`/${num}.jpg`}
  alt={`Meal ${num}`}
  className="img-fluid rounded shadow-sm img-hover"
/>

              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="how-it-works" className="py-5">
        <div className="container text-center mb-4">
          <h2>How it works - Simple as 1, 2, 3</h2>
        </div>
        <div className="container row align-items-center g-4">
          <div className="col-md-6 text-center">
            <img 
  src="/app-iPhone.png" 
  alt="App-iPhone" 
  className="img-fluid" 
  style={{ width: "200px", height: "auto" }}
/>

          </div>
          <div className="col-md-6">
            {[1,2,3].map((step) => (
              <div key={step} className="d-flex mb-4">
                <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center me-3" style={{width:'50px', height:'50px', fontWeight:'bold'}}>{step}</div>
                <p className="mb-0">
                  {step === 1 && "Choose the subscription plan that best fits your needs and sign up today."}
                  {step === 2 && "Order your delicious meal using our mobile app or website. Or call us!"}
                  {step === 3 && "Enjoy your meal after less than 20 minutes. See you next time!"}
                </p>
              </div>
            ))}
            <div className="mt-3">
              <a href="#"><img src="/download-app.png" alt="Apple" className="me-2" height="50"/></a>
              <a href="#"><img src="/download-app-android.png" alt="Android" height="50"/></a>
            </div>
          </div>
        </div>
      </section>

     
<section id="our-cities" className="py-5 bg-light">
  <div className="container text-center mb-4">
    <h2>We're currently in these cities</h2>
  </div>
  <div className="container row g-4 text-center">
    {[
      {name:'Lisbon', img:'lisbon-3.jpg', eaters:'1600+', chefs:'60+', twitter:'@omnifood_lx'},
      {name:'San Francisco', img:'san-francisco.jpg', eaters:'3700+', chefs:'160+', twitter:'@omnifood_sf'},
      {name:'Berlin', img:'berlin.jpg', eaters:'2300+', chefs:'110+', twitter:'@omnifood_berlin'},
      {name:'London', img:'london.jpg', eaters:'1200+', chefs:'50+', twitter:'@omnifood_london'}
    ].map((city, idx) => (
      <div key={idx} className="col-md-3">
        <div className="city-img-container position-relative overflow-hidden rounded mb-2">
          <img src={`/${city.img}`} alt={city.name} className="img-fluid img-hover" />
          <div className="city-overlay d-flex align-items-center justify-content-center">
            <h5 className="text-white m-0">{city.name}</h5>
          </div>
        </div>
        <p><i className="bi bi-person-fill me-1"></i>{city.eaters} happy eaters</p>
        <p><i className="bi bi-star-fill me-1"></i>{city.chefs} top chefs</p>
        <p><i className="bi bi-twitter me-1"></i>{city.twitter}</p>
      </div>
    ))}
  </div>
</section>


     
      <section className="py-5">
        <div className="container text-center mb-4">
          <h2>Our customers can't live without us</h2>
        </div>
        <div className="container row g-4">
          {[
            {name:'Alberto Duncan', img:'customer-1.jpg', text:'Omnifood is just awesome! I just launched a startup…'},
            {name:'Joana Silva', img:'customer-2.jpg', text:'Inexpensive, healthy and great-tasting meals…'},
            {name:'Milton Chapman', img:'customer-3.jpg', text:'I was looking for a quick and easy food delivery service…'}
          ].map((customer, idx) => (
            <div key={idx} className="col-md-4">
              <div className="border rounded p-3 h-100">
                <blockquote className="blockquote mb-0">
                  {customer.text}
                  <footer className="blockquote-footer mt-2">
                    <img src={`/${customer.img}`} alt={customer.name} className="rounded-circle me-2" height="40"/>
                    {customer.name}
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <section className="py-5 bg-light">
        <div className="container text-center mb-4">
          <h2>Start eating healthy today</h2>
        </div>
        <div className="container row g-4">
          {[
            {plan:'Premium', price:'399$', perMeal:'13.30$', items:['1 meal every day','Order 24/7','Access to newest creations','Free delivery'], type:'full'},
            {plan:'Pro', price:'149$', perMeal:'14.90$', items:['1 meal 10 days/month','Order 24/7','Access to newest creations','Free delivery'], type:'ghost'},
            {plan:'Starter', price:'19$', perMeal:'19$', items:['1 meal','Order from 8 am to 12 pm','No dessert','Free delivery'], type:'ghost'}
          ].map((plan, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{plan.plan}</h5>
                  <h2 className="text-warning">{plan.price} <small>/ meal</small></h2>
                  <p className="text-muted">That’s only {plan.perMeal} per meal</p>
                  <ul className="list-unstyled">
                    {plan.items.map((item, i) => (
                      <li key={i}><i className={`bi ${item==='No dessert'?'bi-x':'bi-check'}-circle me-2 text-warning`}></i>{item}</li>
                    ))}
                  </ul>
                  <a href="#" className={`btn btn-${plan.type} w-100 mt-2`}>Sign up now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <section id="sign-up" className="py-5">
        <div className="container text-center mb-4">
          <h2>We're happy to hear from you</h2>
        </div>
        <div className="container">
          <form>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" required/>
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required/>
              </div>
            </div>
            <div className="mb-3">
              <select className="form-select">
                <option>Friend</option>
                <option>Website</option>
                <option>Facebook</option>
                <option>Advertisement</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="newsletter" defaultChecked />
              <label className="form-check-label" htmlFor="newsletter">Yes, Please</label>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Send it!</button>
          </form>
        </div>
      </section>

    
      <footer className="bg-dark text-warning py-4">
        <div className="container d-flex justify-content-between flex-wrap">
          <ul className="list-unstyled d-flex mb-2">
            <li className="me-3"><a href="#" className="text-warning text-decoration-none">About Us</a></li>
            <li className="me-3"><a href="#" className="text-warning text-decoration-none">Blog</a></li>
            <li className="me-3"><a href="#" className="text-warning text-decoration-none">Press</a></li>
            <li className="me-3"><a href="#" className="text-warning text-decoration-none">iOS App</a></li>
            <li><a href="#" className="text-warning text-decoration-none">Android App</a></li>
          </ul>
          <ul className="list-unstyled d-flex mb-2">
            <li className="me-3"><a href="#"><i className="bi bi-facebook"></i></a></li>
            <li className="me-3"><a href="#"><i className="bi bi-twitter"></i></a></li>
            <li className="me-3"><a href="#"><i className="bi bi-google"></i></a></li>
            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
          </ul>
        </div>
        <div className="text-center mt-3 text-muted">
          &copy; 2025 Omnifood. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
