const React = require("react");

function performSearch(event) {
    if (event.keyCode === 13) {
        let query = document.getElementById('search_input_react').value;
        let searchUrl = `https://www.google.com/search?q=${query}+site%3Apointnetwork.github.io`;
        window.open(searchUrl,"_blank");
    }
}

 const SearchBar = props => {
   //NOTE: hiding the search bar on the home page because the onKeyDown event does
   //not fire on home page of the built version - not sure why, maybe a conflict
   const divStyle = {
     visibility: window.location.pathname === '/' ? 'hidden' : 'inline',
   };

   return (
     <div className="navbar__search" style={divStyle}>
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