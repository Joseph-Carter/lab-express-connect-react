import React, { useState } from 'react';

const CaptainLogsNewForm = () => {
    const [log, setNewLog] = useState({
        name: "",
        url: "",
        category: "",
        isFavorite: false,
        description: "",
      });
    
      const handleTextChange = (event) => {
        setNewLog({ ...log, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setNewLog({ ...log, isFavorite: !log.isFavorite });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
      };
      return (
        <div className="NewForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={log.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Website Name"
              required
            />
            <label htmlFor="url">URL:</label>
            <input
              id="url"
              type="text"
              pattern="http[s]*://.+"
              required
              value={log.url}
              placeholder="http://"
              onChange={handleTextChange}
            />
            <label htmlFor="category">Category:</label>
            <input
              id="category"
              type="text"
              name="category"
              value={log.category}
              placeholder="entertainment, inspirational, etc."
              onChange={handleTextChange}
            />
            <label htmlFor="isFavorite">Favorite:</label>
            <input
              id="isFavorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.isFavorite}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={log.description}
              onChange={handleTextChange}
              placeholder="Why did you bookmarked this site?"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      );
}

export default CaptainLogsNewForm;
