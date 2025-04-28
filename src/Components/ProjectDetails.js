import React from 'react';
import './ProjectDetails.css'; // Use the same CSS class names for styling
import { FaBalanceScale, FaCartPlus, FaYoutube } from 'react-icons/fa';

const ProjectDetails = () => {
  return (
    <div className="row project-detail-container mr-0">
      <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'row', alignItemst: 'center', justifyContent: 'space-around'}}>
      <div className="col-md-6 project-detail-image">
        <img
          src="https://storage.googleapis.com/byprogrammers/image/train-ticket-booking-app.png"
          alt="Train Ticket Booking App"
          style={{width: '50%'}}
        />
      </div>

      <div className="col-md-6 project-detail-desc">
        <h1 style={{color: 'black'}}>Train Ticket Booking App</h1>
        <h3>REACT NATIVE</h3>
        <p>( 7 screens )</p>

        <div className="license-container">
          <FaBalanceScale className="fa-lg" />
          <p className="license">License (EULA)</p>
        </div>

        <div className="project-detail-btn-container">
          <div>
            <a
              href="https://shop.byprogrammers.com/project/train-ticket-booking-app/dl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project-detail-btn">
                <FaCartPlus />
                {' '}
                Buy (USD 14.00)
              </button>
            </a>
          </div>

          <a
            href="https://youtu.be/tiHQ3mkYLgE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="project-detail-yt-btn">
              <FaYoutube className="fa-lg" />
              {' '}
              Watch on YouTube
            </button>
          </a>
        </div>

        <div className="project-detail-note-container">
          <p>
            Note: By purchasing this source code, you'll be invited to a Discord private
            channel via an email within 24 hours where you can ask us any questions
            related to this particular project.
          </p>
        </div>
      </div>
      </div>
      <div className="row pl-3 pr-3 project-detail-info-container">
      <div className="pt-3 info">
        <div className="info-item-container">
          <i className="fas fa-code-branch fa-lg"></i>
          <h6 className="info-item">Version</h6>
          <h6 className="ml-auto info-item">2.0.0</h6>
        </div>

        <div className="mt-3 horizontal-line"></div>

        <div className="info-item-container">
          <i className="fas fa-cog fa-lg"></i>
          <h6 className="info-item">CLI</h6>
          <h6 className="ml-auto info-item">React Native CLI</h6>
        </div>

        <div className="mt-3 horizontal-line"></div>

        <div className="info-item-container">
          <i className="fas fa-upload fa-lg"></i>
          <h6 className="info-item">Released</h6>
          <h6 className="ml-auto info-item">Nov 01, 2023</h6>
        </div>

        <div className="mt-3 horizontal-line"></div>

        <div className="info-item-container">
          <i className="far fa-edit fa-lg"></i>
          <h6 className="info-item">Updated</h6>
          <h6 className="ml-auto info-item">Nov 18, 2023</h6>
        </div>

        <div className="mt-3 horizontal-line"></div>

        <div className="info-item-container">
          <i className="fas fa-sticky-note fa-lg"></i>
          <h6 className="info-item">Release Note</h6>
          <h6 className="ml-auto info-item view-release-note">View</h6>
        </div>
      </div>

      <div className="screenshot">
        {[
          { title: "Onboarding 1", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_537.png" },
          { title: "Onboarding 2", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_538.png" },
          { title: "Onboarding 3", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_539.png" },
          { title: "Welcome", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_543.png" },
          { title: "Login", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_544.png" },
          { title: "Forgot Password", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_545.png" },
          { title: "Otp", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_546.png" },
          { title: "Register", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_547.png" },
          { title: "Success", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_548.png" },
        ].map((item, index) => (
          <div className="screenshot-item" key={index}>
            <h6>{item.title}</h6>
            <img
              src={item.src}
              alt={item.title}
              className="project-screenshot"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectDetails;



// import React from 'react';
// import './ProjectDetails.css'; // optional if you want to separate CSS

// const ProjectDetailInfo = () => {
//   return (
//     <div className="row pl-3 pr-3 project-detail-info-container">
//       <div className="pt-3 info">
//         <div className="info-item-container">
//           <i className="fas fa-code-branch fa-lg"></i>
//           <h6 className="info-item">Version</h6>
//           <h6 className="ml-auto info-item">2.0.0</h6>
//         </div>

//         <div className="mt-3 horizontal-line"></div>

//         <div className="info-item-container">
//           <i className="fas fa-cog fa-lg"></i>
//           <h6 className="info-item">CLI</h6>
//           <h6 className="ml-auto info-item">React Native CLI</h6>
//         </div>

//         <div className="mt-3 horizontal-line"></div>

//         <div className="info-item-container">
//           <i className="fas fa-upload fa-lg"></i>
//           <h6 className="info-item">Released</h6>
//           <h6 className="ml-auto info-item">Nov 01, 2023</h6>
//         </div>

//         <div className="mt-3 horizontal-line"></div>

//         <div className="info-item-container">
//           <i className="far fa-edit fa-lg"></i>
//           <h6 className="info-item">Updated</h6>
//           <h6 className="ml-auto info-item">Nov 18, 2023</h6>
//         </div>

//         <div className="mt-3 horizontal-line"></div>

//         <div className="info-item-container">
//           <i className="fas fa-sticky-note fa-lg"></i>
//           <h6 className="info-item">Release Note</h6>
//           <h6 className="ml-auto info-item view-release-note">View</h6>
//         </div>
//       </div>

//       <div className="screenshot">
//         {[
//           { title: "Onboarding 1", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_537.png" },
//           { title: "Onboarding 2", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_538.png" },
//           { title: "Onboarding 3", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_539.png" },
//           { title: "Welcome", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_543.png" },
//           { title: "Login", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_544.png" },
//           { title: "Forgot Password", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_545.png" },
//           { title: "Otp", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_546.png" },
//           { title: "Register", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_547.png" },
//           { title: "Success", src: "https://storage.googleapis.com/byprogrammers/product_image/train-ticket-booking-app_548.png" },
//         ].map((item, index) => (
//           <div className="screenshot-item" key={index}>
//             <h6>{item.title}</h6>
//             <img
//               src={item.src}
//               alt={item.title}
//               className="project-screenshot"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetailInfo;
