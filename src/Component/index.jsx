import React, { Component } from 'react';
import HeroWidget from './widget/hero-widget';
import IndexList from './indexList';
import ActionIcon from './widget/action-icon-widget';
import HeroButton from './tools/HeroButton';
import Loading from './tools/Loading';
import Dashboard from './screen/dashboard';
import HeadingSection from './helper/headingSection';
import FooterSection from './helper/footerSection';

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid index'>
          <HeroWidget herotitle="TravelerMonk" />
          <HeadingSection />
          <div className='row'>
            <div className='col-lg-2 pt-2' style={{ borderRight: "1px solid #425F57", backgroundColor: "#425F57" }}>
              <IndexList />
            </div>
            <div className='col-lg-10 pt-2 px-4'>
              <Dashboard />
              {/* <h6 className='text-light display-5'>Welcome React Js</h6> */}
              <HeroButton />
              <ActionIcon />
              <Loading />
            </div>
          </div>
          <FooterSection />
        </div>
      </React.Fragment>
    )
  }
}

export default Index