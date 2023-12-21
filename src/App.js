import React from 'react';
import './App.css';
import Name from '../src/image/Name.png'
import Capital from '../src/image/Capital.png'
import Language from '../src/image/Language.png'
import Religion from '../src/image/Religion.png'
import Popular from '../src/image/Popular.png'
import Currency from '../src/image/Currency.png'
import lib from '../src/image/lib.png'
import BCA from '../src/image/BCA.png'
import MCA from '../src/image/MCA.png'
import BDS from '../src/image/BDS.png'
import MBBS from '../src/image/MBBS.png'
import MD from '../src/image/MD.png'

function App() {
  return (
    <div className="App">
      <div className="highlight">
        <h1>Highlights about India</h1>
        <hr />
        <div className="pic-info">
          <div className="white-box">
            <div className="white-box-content">
              <div className='Head'>Name</div>
              <div>Republic of India</div>
            </div>
            <div className="white-box-content-pic">
              <img src={Name} alt='Name' />
            </div>
          </div>
          <div className="white-box">
            <div className="white-box-content">
              <div className='Head'>Capital</div>
              <div>Delhi</div>
            </div>
            <div className="white-box-content-pic">
              <img src={Capital} alt='Name' />
            </div>
          </div>
        </div>
        <div className="pic-info">
          <div className="white-box">
            <div className="white-box-content">
              <div className='Head'>Laguage</div>
              <div>Hindi, English and Many other regional <br /> languages </div>
            </div>
            <div className="white-box-content-pic">
              <img src={Language} alt='Name' />
            </div>
          </div>
          <div className="white-box">
            <div className="white-box-content">
              <div className='Head'>Religion</div>
              <div>Hindu, Islam, Sikhism, others</div>
            </div>
            <div className="white-box-content-pic">
              <img src={Religion} alt='Name' />
            </div>
          </div>
        </div>
        <div className="pic-info">
          <div className="white-box">
            <div className="white-box-content">
              <div className='Head'>Population</div>
              <div>136.64 Crores (2019) </div>
            </div>
            <div className="white-box-content-pic">
              <img src={Popular} alt='Name' />
            </div>
          </div>
          <div className="white-box">
            <div className="white-box-content">
              <div className='Head'>Currency</div>
              <div>Indian Ruppee (INR)</div>
            </div>
            <div className="white-box-content-pic">
              <img src={Currency} alt='Name' />
            </div>
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="head">
          <h1>Top Courses to Study in India</h1>
          <p>India has a profitable economy and a high academic system. As a result, it is a good choice for students to study india. Selecting the right course after the <br /> Intermediate is an important decision for students. Among all the courses, Engineering is on top of the list among Indian students. Candidates can search for <br />the best engineering Colleges in India and apply there easily <br /><br />
            There are so many undergraduate and postgraduate programs available in Engineering, Management, and Medical for students.</p>
        </div>
        <img src={lib} alt="lib" className='lib' />
        <div className="pic-row">
          <div className="content">
            <div className="course1">
              <h3>Computer Courses</h3>
              <div className='line'></div>
              <div className="crs">
                <img src={BCA} alt="bca" />
                <p>BCA</p>
              </div>
              <div className="crs">
                <img src={MCA} alt="bca" />
                <p>MCA</p>
              </div>
              <hr />
            </div>
            <br />
            <div className="course1">
              <h3>Medical Courses</h3>
              <div className='line'></div>
              <div className="crs">
                <img src={BDS} alt="bca" />
                <p>BDS</p>
              </div>
              <div className="crs">
                <img src={MBBS} alt="bca" />
                <p>MBBS</p>
              </div>
              <div className="crs">
                <img src={MD} alt="bca" />
                <p>MD/MS</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="content">
            <div className="course1">
              <h3>Computer Courses</h3>
              <div className='line'></div>
              <div className="crs">
                <img src={BCA} alt="bca" />
                <p>BCA</p>
              </div>
              <div className="crs">
                <img src={MCA} alt="bca" />
                <p>MCA</p>
              </div>
              <hr />
            </div>
            <br />
            <div className="course1">
              <h3>Medical Courses</h3>
              <div className='line'></div>
              <div className="crs">
                <img src={BDS} alt="bca" />
                <p>BDS</p>
              </div>
              <div className="crs">
                <img src={MBBS} alt="bca" />
                <p>MBBS</p>
              </div>
              <div className="crs">
                <img src={MD} alt="bca" />
                <p>MD/MS</p>
              </div>
              <hr />
            </div>
            <div className="course1">
              <h3>Medical Courses</h3>
              <div className='line'></div>
              <div className="crs">
                <img src={BDS} alt="bca" />
                <p>BDS</p>
              </div>
              <div className="crs">
                <img src={MBBS} alt="bca" />
                <p>MBBS</p>
              </div>
              <div className="crs">
                <img src={MD} alt="bca" />
                <p>MD/MS</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="scope">
        <div className="head">
          <div className="vertical-line"></div>
          <div className="heading">
            <h1>Career Scope For <br /> Students</h1>
          </div>
        </div>
        <p>There are lots of career scopes for students who completed their degrees in india. Students can choose any of the courses from different <br />programs in management, engineering, medical, etc. We have mentioned below the scope for students after completing the degree in <br />India from popular colleges of the country.</p>
        <div className="boxes">
          <div className="box">
            <div className="sub-box1">

            </div>
            <div className="sub-box2">
              <h3>Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati omnis fugit dolorem aperiam nulla praesentium nihil. Consequuntur harum, consequatur quaerat, eius vero, velit repudiandae quidem sunt vel illum dolorum!</p>
            </div>
          </div>
          <div className="box">
            <div className="sub-box1">

            </div>
            <div className="sub-box2">
              <h3>Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati omnis fugit dolorem aperiam nulla praesentium nihil. Consequuntur harum, consequatur quaerat, eius vero, velit repudiandae quidem sunt vel illum dolorum!</p>
            </div>
          </div>
          <div className="box">
            <div className="sub-box1">

            </div>
            <div className="sub-box2">
              <h3>Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati omnis fugit dolorem aperiam nulla praesentium nihil. Consequuntur harum, consequatur quaerat, eius vero, velit repudiandae quidem sunt vel illum dolorum!</p>
            </div>
          </div>
          <div className="box">
            <div className="sub-box1">

            </div>
            <div className="sub-box2">
              <h3>Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati omnis fugit dolorem aperiam nulla praesentium nihil. Consequuntur harum, consequatur quaerat, eius vero, velit repudiandae quidem sunt vel illum dolorum!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
