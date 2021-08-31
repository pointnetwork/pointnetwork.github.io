import React from "react";

 const SearchBar = props => {
    function performSearch(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            let query = document.getElementById('search_input_react').value;
            let searchUrl = `https://www.google.com/search?q=${query}+site%3Apointnetwork.github.io`;
            window.open(searchUrl,"_blank");
        }
    }

   return (
     <div className="navbar__search" key="search-box">
       <input
         id="search_input_react"
         type="search"
         placeholder="Search"
         aria-label="Search"
         className="navbar__search-input"
         onKeyUp={performSearch}
       />
     </div>
   );
 };

 export default SearchBar;