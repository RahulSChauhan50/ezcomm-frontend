import React, { Component } from "react";
import { MdDownload } from "react-icons/md";
import FileViewer from "react-file-viewer";
import { Document, Page, pdfjs } from "react-pdf";
import "./docViewer.css";

class DocxViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPages: 5,
      currentPage: 1,
    };
  }
  onError(e) {
    console.log(e, "error in file-viewer");
  }
  render() {
    return (
      <div className="docxview">
        <div>
          <FileViewer
            fileType={"docx"}
            filePath={this.props.uri}
            onError={this.onError}
          />
        </div>
        <a className="downloadbtn" href={this.props.uri}>
          <MdDownload size="25px" color="#0d6efd" />
        </a>
      </div>
    );
  }
}

class PdfViewer extends Component {
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
            file={this.props.uri}
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
        <a className="downloadbtn" href={this.props.uri}>
          <MdDownload size="25px" color="#0d6efd" />
        </a>
      </div>
    );
  }
}

class DocumentViewer extends Component {
  render() {
    return this.props.fileType === "pdf" ? (
      <PdfViewer uri={this.props.uri} />
    ) : (
      <DocxViewer uri={this.props.uri} />
    );
  }
}

export const GoogleDocView = (props) => {
  return (
    <div className="pdfview">
      <iframe
        src={
          "https://docs.google.com/viewer?url=" + props.uri + "&embedded=true"
        }
        title="file"
        width="100%"
        height="600"
      ></iframe>
    </div>
  );
};

export default DocumentViewer;
