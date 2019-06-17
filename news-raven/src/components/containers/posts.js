import React from 'react';

const Posts = (props) => {
    const data = { ...props.data };
    const titles = [];
    Object.keys(data).map((key, index) => {
        return (titles[key] = (
          <div className="job" key={data[key].title}>
            <span>{data[key].title}</span>
          </div>
        ));
      });
    
      return <div className='container'>{titles}</div>;
}

export default Posts;