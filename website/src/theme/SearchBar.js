const React = require("react");

function performSearch(event) {
    if (event.keyCode === 13) {
        let query = document.getElementById('search_input_react').value;
        let searchUrl = `https://www.google.com/search?q=${query}+site%3Apointnetwork.github.io`;
        window.open(searchUrl,"_blank");
    }
}

 const SearchBar = props => {
   return (
     <div className="navbar__search">
       <input
         id="search_input_react"
         type="search"
         placeholder="Search"
         className="navbar__search-input"
         onKeyDown={performSearch}
       />
     </div>
   );
 };

 module.exports = SearchBar;