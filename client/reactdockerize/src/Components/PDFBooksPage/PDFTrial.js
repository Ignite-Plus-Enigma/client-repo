import React, { PureComponent } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/entry.webpack";


import book from "./book.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDFTrial extends PureComponent {
  state = {
    numPages: null,
    pageNumber: 1,
    rotate: 0,
    scale: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

   handleNextPage=()=>{
    var currentPage = this.state.pageNumber;
    this.setState({
      pageNumber:currentPage+1
    })
  }
  handlePrevious=()=>{
    var currentPage = this.state.pageNumber;
    this.setState({
      pageNumber:currentPage-1
    })
  }

  render() {
    const { pageNumber, numPages, scale, rotate } = this.state;

    
    return (
      <div>
      <button onClick={this.handleNextPage}> next</button>
      <button onClick={this.handlePrevious}>prev</button>
       <p>
          Page {pageNumber} of {numPages}
        </p>
        <Document
          className="custom-class-name-1 custom-class-name-2"
          file={book}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
       
      </div>
    );
  }
}