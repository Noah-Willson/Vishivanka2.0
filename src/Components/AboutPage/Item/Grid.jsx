import React, { useState } from "react";
import Item from "./Item";
import './Grid.css'


const Grid = ({ elements }) => {


    const [currentPage, setCurrentPage] = useState(1);
    const elementsPerPage = 9;

    // Ensure elements is an array before attempting to slice it
    const currentElements = Array.isArray(elements) ? elements.slice((currentPage - 1) * elementsPerPage, currentPage * elementsPerPage) : [];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="information">
                <h2>Here is title</h2>
                <h4>
                    Here ll be all the info
                    about the page Lorem ipsum dolor sit
                     amet consectetur adipisicing elit. Incidunt 
                     voluptatum corrupti labore delectus cupiditate pariatur
                      perspiciatis amet! Vel earum magni suscipit totam 
                      consequuntur adipisci velit.
                </h4>
            </div>

            <div className="grid">


                {currentElements && currentElements.length > 0 ? (
                    currentElements.map((element, index) => (
                        <Item key={index} data={element} />
                    ))
                ) : (
                    <p>No elements to display.</p>
                )}
                {/* Pagination */}
                <div className="pagination">
                    {Array.from({ length: Math.ceil((elements?.length || 0) / elementsPerPage) }, (_, index) => (
                        <button id="paginationButton" key={index} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>

    );

}

export default Grid