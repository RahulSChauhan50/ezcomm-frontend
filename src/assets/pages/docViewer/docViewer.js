import React, { Component } from "react";
import { MdDownload } from "react-icons/md";
import FileViewer from "react-file-viewer";
import "./docViewer.css";

class DocumentViewer extends Component {
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
      <div className="pdfview">
        <div>
          <FileViewer
            fileType={"docx"}
            filePath={this.props.uri}
            onError={this.onError}
          />
          {/* <div className="navpaging">
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
                        // onClick={() => this.setState({ currentPage: ind + 1 })}
                      >
                        {ind + 1}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div> */}
        </div>
        <a className="downloadbtn" href={this.props.uri}>
          <MdDownload size="25px" color="#0d6efd" />
        </a>
      </div>
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
