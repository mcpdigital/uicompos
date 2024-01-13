import React from "react";
import fs from "fs";
import pdf from "pdf-parse";
const PdfParse = () => {
  let dataBuffer = fs.readFileSync("./docs/test.pdf");
  console.log("LEU:", dataBuffer);
  pdf(dataBuffer).then(function (data: {
    numpages: number;
    numrender: number;
    info: string;
    metadata: any;
    version: any;
    text: string;
  }) {
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata);
    // PDF.js version
    console.log(data.version);
    // PDF text
    console.log(data.text);
  });

  return <div>PdfParse</div>;
};
