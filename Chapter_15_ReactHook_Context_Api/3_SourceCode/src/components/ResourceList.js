import React, { useEffect, useState } from 'react';
import axios from "axios";


const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(res.data)
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource])

  return (
    <ul>
      {resources.map(record => (
        <li key={record}>{record.hasOwnProperty('name') ? record.username : record.title}</li>
      ))}
    </ul>
  );
  
}

export default ResourceList;