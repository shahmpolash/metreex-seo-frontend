import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ReportSeo = () => {
  const { id } = useParams();
  const [website, setWebsite] = useState([]);

  useEffect(() => {
    fetch(`https://e-commerce-seo-server.onrender.com/website/${id}`)
      .then((res) => res.json())
      .then((data) => setWebsite(data));
  }, [id]);
  const downloadPDF = () => {
    // You can fetch the PDF link from your website data
    const pdfLink = website.pdfLink;

    if (pdfLink) {
      // Create an anchor element to trigger the download
      const link = document.createElement("a");
      link.href = pdfLink;
      link.download = "seo_report.pdf";
      link.click();
    } else {
      alert("PDF not available");
    }
  };

  return (
    <>
      <div
        class="container mt-5 payment-setting"
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <div class="row">
          <div class="col">
            <h3>SEO Report Dashboard</h3>
            <table class="table table-bordered custom-table">
              <tbody>
                <tr key={website._id}>
                  <th>Email:</th>
                  <td>{website.email}</td>
                </tr>
                <tr>
                  <th>Website:</th>
                  <td>{website.website}</td>
                </tr>
                <tr>
                  <th>Meta Description:</th>
                  <td>{website.metaDescription}</td>
                </tr>
                <tr>
                  <th>Mobile Friendly:</th>
                  <td>{website.mobileFriendly}</td>
                </tr>
                <tr>
                  <th>Page Load Speed:</th>
                  <td>{website.pageLoadSpeed}</td>
                </tr>
                <tr>
                  <th>SSL:</th>
                  <td>{website.ssl}</td>
                </tr>
                <tr>
                  <th>Sitemap:</th>
                  <td>{website.sitemap}</td>
                </tr>
                <tr>
                  <th>Broken Links:</th>
                  <td>{website.brokenLinks}</td>
                </tr>
                <tr>
                  <th>UX (User Experience):</th>
                  <td>{website.ux}</td>
                </tr>
                <tr>
                  <th>Backlinks:</th>
                  <td>{website.backlinks}</td>
                </tr>
                <tr>
                  <th>Images Optimization:</th>
                  <td>{website.img}</td>
                </tr>
              </tbody>
            </table>
            <div className="row mb-0">
              <div className="col">
                {website.pdfLink && (
                  <button
                    type="button"
                    className="btn btn-md btn-primary tra-black-hover"
                    onClick={downloadPDF}
                  >
                    <span>View PDF</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportSeo;
