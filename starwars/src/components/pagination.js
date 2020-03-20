import React, {useEffect, useState} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from "axios";

const Paginat = () => {
const [page, setPage] = useState([])
const [previous, setPrevious] = useState('')

useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => setPage(response.data))
    .then(err => console.log(err))
},[])



  return (
    <Pagination size="lg" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first href="https://swapi.co/api/people/1/" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href={page.previous} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="https://swapi.co/api/people/1">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default Paginat;