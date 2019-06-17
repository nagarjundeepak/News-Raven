import React from 'react';

const Posts = (props) => {
    const data = { ...props.data };
    console.log(data[0]);
    const titles = [];
    Object.keys(data).map((key, index) => {
        return (titles[key] = (
          <div className="job" key={data[key].title}>
            <img alt='' src={data[key].urlToImage} />
            <span>{data[key].title}</span>
            <a href={data[key].url} target='_blank'>read more</a>
          </div>
        ));
      });
    
      return <div className='container'>{titles}</div>;
}

export default Posts;