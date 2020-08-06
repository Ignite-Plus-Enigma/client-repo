import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "@front10/landing-page-book/dist/components/Footer";
import "@front10/landing-page-book/dist/components/Footer/style.css";

import "./Footer.css";

const sections = [
  {
    name: "GET INVOLVED",
    sections: [
      {
        name: "Donate",
        url: "https://www.samarthanam.org/donate/"
      },
      {
        name: "CSR",
        url: "https://www.samarthanam.org/csr/"
      },
      {
        name: "Volunteer",
        url: "https://www.samarthanam.org/volunteer-opportunities/"
      },
      {
        name: "Partner",
        url: "https://www.samarthanam.org/partner/"
      }
    ]
  },
  {
    name: "RELEVANT LINKS",
    sections: [
      {
        name: "Gallery",
        url: "https://www.samarthanam.org/galleries/"
      },
      {
        name: "Reports",
        url: "https://www.samarthanam.org/reports/"
      },
      {
        name: "Event",
        url: "https://www.samarthanam.org/events/"
      },
      {
        name: "Blog",
        url: "https://www.samarthanam.org/blogs/"
      }
    ]
  },
  {
    name: "WHERE WE ARE",
    sections: [
      {
        name: "India",
        url: "https://www.samarthanam.org/contact-us/"
      },
      {
        name: "America",
        url: "http://samarthanamusa.org/"
      },
      {
        name: "United Kingdom",
        url: "https://www.samarthanam.org/contact-us/"
      },
     
    ]
  }
];
export default function FooterComponent() {
  return (
    <div className="body">
      
      <Footer
        className='body'
        copyright="Target | Ignite+"
        sections={sections}
        socialUrl="https://www.samarthanam.org/"
        socials={["facebook", "linkedin", "google", "twitter", "youtube"]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FooterComponent />, rootElement);
