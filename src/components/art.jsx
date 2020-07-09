import React from 'react';

export default class Art extends React.Component {
    render() {
        return(
            
        <section class="home_gallery_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>I also do artworks!</h2>
            <p>For more of my artworks, please follow my instagram account @alexowabisabi.</p>
          </div>
        </div>
        <div className="container">
          <div className="gallery_f_inner row imageGallery1">
            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img className="img-fluid" src="img/angellocsin.jpg" alt="" />
                  <a className="light" href="img/angellocsin.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                </div>
                <div className="g_item_text">
                  <p>medium: watercolor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img className="img-fluid" src="img/nana.jpg" alt="" />
                  <a className="light" href="img/nana.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                </div>
                <div className="g_item_text">
                  <p>medium: watercolor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img className="img-fluid" src="img/jet.jpg" alt="" />
                  <a className="light" href="img/jet.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                </div>
                <div className="g_item_text">
                  <p>medium: watercolor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand creative print">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img className="img-fluid" src="img/joker.jpeg" alt="" />
                  <a className="light" href="img/joker.jpeg"><img src="img/gallery/icon.png" alt="" /></a>
                </div>
                <div className="g_item_text">
                  <p>medium: watercolor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img className="img-fluid" src="img/drstrange.jpeg" alt="" />
                  <a className="light" href="img/drstrange.jpeg"><img src="img/gallery/icon.png" alt="" /></a>
                </div>
                <div className="g_item_text">
                  <p>medium: watercolor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
              <div className="h_gallery_item">
                <div className="g_img_item">
                  <img className="img-fluid" src="img/wonderwoman.jpg" alt="" />
                  <a className="light" href="img/wonderwoman.jpg"><img src="img/gallery/icon.png" alt="" /></a>
                </div>
                <div className="g_item_text">
                  <p>medium: watercolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        );
    }
}