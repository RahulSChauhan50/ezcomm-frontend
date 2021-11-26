import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { MdDownload } from "react-icons/md";
import "./pdfViewer.css";
class pdfViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPages: 0,
      currentPage: 1,
    };
  }
  onPdfLoadSucces = (page) => {
    this.setState({ currentPage: 1, numberOfPages: page.numPages });
  };
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }
  render() {
    return (
      <div className="pdfview">
        <div>
          <Document
            file={
              // "https://cors-anywhere.herokuapp.com/" +
              // "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf"
              this.props.pdfLink
            }
            onLoadSuccess={this.onPdfLoadSucces}
            onLoadError={(e) => console.log(e)}
          >
            <Page height={645} pageNumber={this.state.currentPage} />
          </Document>
          <div className="navpaging">
            <nav aria-label="...">
              <ul className="pagination">
                {Array.apply(0, Array(this.state.numberOfPages)).map(
                  (val, ind) => (
                    <li
                      className={
                        this.state.currentPage === ind + 1
                          ? "page-item active"
                          : "page-item"
                      }
                      aria-current="page"
                      key={ind}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => this.setState({ currentPage: ind + 1 })}
                      >
                        {ind + 1}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
        <a
          className="downloadbtn"
          href={
            "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf"
          }
        >
          <MdDownload size="25px" color="#0d6efd" />
        </a>
      </div>
    );
  }
}

export default pdfViewer;
