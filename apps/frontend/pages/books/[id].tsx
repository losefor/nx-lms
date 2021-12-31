import { Container, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function BookId() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Container maxW={"5xl"}>
      <Heading>Lorem ipsum dolor sit amet.</Heading>
      {/* <Document file="1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
    </Container>
  );
}
