import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navigation from '../_components/navigation-component';
import Footer from '../_components/footer-component';

export function Home(props) {
  return (
    <div>
      <Navigation />
      <div className="wrap">
        <h1 className="underlined underlined--gradient">Learn to read music</h1>
        <p>Lorem ispum dolor sit amet</p>
        <Link
          aria-label="Learn to read music now button"
          to="/signup"
          className="btn"
        >
          Sign Up Today
        </Link>
      </div>
      <section className="body">
        <div className="overview">
          <p>copy explaining how it works...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Home);
