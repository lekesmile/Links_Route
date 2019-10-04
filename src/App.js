import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}


const Product = ({match}) => {
  return(
    <div>
    <h1>Product</h1>

    <ul>
      <li>
        <Link to={`${match.url}/product1`}>Product1</Link>
      </li>
        <li>
          <Link to={`${match.url}/product2`}>Product2</Link>
        </li>
        <li>
          <Link to={`${match.url}/product3`}>Product3</Link>
        </li>
    </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {' '}
            <h3> I cliecked that link {match.params.name} </h3>
          </div>
        )}
      />

      <Route path={`${match.url}/:name`}> </Route>
    </div>
  )
}

const Projuct = ()=>{
  return(
    <h3>Pro page {} </h3>
  )
}

const Nav = () => {
  return (
    <div className="primary">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  )
}



const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

