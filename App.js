import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Women</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Children</a></li>
            <li><a className="dropdown-item" href="#">Boys</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Girls</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="d-grid gap-2 ">
<h2>Shipping and Payment</h2>
<button type="button" class="btn btn-primary" >Login</button>
<button type="button" class="btn btn-secondary">Sign Up</button>

<h1>Shipping Information</h1>
<button type="button" class="btn btn-primary" >Email</button>
<button type="button" class="btn btn-secondary">Address</button>
<br></br>
<button type="button" class="btn btn-primary">First name</button>
<button type="button" class="btn btn-secondary">City</button>
<br></br>
<button type="button" class="btn btn-primary">Last name</button>
<button type="button" class="btn btn-secondary">Postal Code/Zip</button>
<br></br>
<button type="button" class="btn btn-primary">Phone number</button>
<button type="button" class="btn btn-secondary">Poland</button>
</div>
<br></br>
<h2>Payment Method</h2>

<button type="button" class="btn btn-primary">PayPal    </button>
<button type="button" class="btn btn-secondary">VISA    </button>
<button type="button" class="btn btn-primary">Mastercard         </button>
<br></br>
<button type="button" class="btn btn-secondary">Creditcard</button>
<button type="button" class="btn btn-primary">DISCOVER</button>
<button type="button" class="btn btn-secondary">DEBIT CARD</button>

<h2>Delivery Methods</h2>
<button type="button" class="btn btn-primary">IN POST  $20.00 </button>
<button type="button" class="btn btn-secondary">DPD  $12.00 </button>

<br></br>
<button type="button" class="btn btn-secondary">DNL   $15.00</button>
<button type="button" class="btn btn-primary">FEDeX   $10.00</button>


<h2>Yours Cart</h2>
<p> 
   Tshirts <br></br>
  Summer Vibes    $89.99</p>

  <p> 
   Basic Slim<br></br>
   Fit T-Shirts     $69.99</p>

   <button type="button" class="btn btn-primary">Total Cost  $169.98 </button>
   <p> 
   From free shipping!</p>

   <button type="button" class="btn btn-secondary">Continue Shopping</button>
   <button type="button" class="btn btn-primary">PROCEED TO PAYMENT</button> 

   <p>Go Back</p>

    </>
  );
}

export default App;
