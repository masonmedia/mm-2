import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function GithubData(props) {
    const [name, setName] = useState('');

    useEffect(() => {
        fetch("https://api.github.com/users/masonmedia")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setData(data);
        })

    },[])

    const setData = ({ name }) => {
        setName(name);
    }

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
