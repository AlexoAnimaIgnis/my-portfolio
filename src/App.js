import React from 'react';
import './App.css';
import Introduction from './components/introduction';
import AboutPage from './components/about';
import WorkTimeline from './components/work-timeline';
import Footer from './components/footer';
import Art from './components/art';

function App() {
  return (  
      <div>  
        {/* <header class="header_area">
          <MainMenu></MainMenu>
        </header> */}
        <section class="home_banner_area">
          <Introduction></Introduction>
        </section>
        <section class="welcome_area p_120">
          <AboutPage></AboutPage>
        </section>
        <section class="mytabs_area p_120">
          <WorkTimeline></WorkTimeline>
        </section>
        <Art></Art>
        <footer className="footer_area p_120">
          <Footer></Footer>
        </footer>
      </div>
  );
}

export default App;
