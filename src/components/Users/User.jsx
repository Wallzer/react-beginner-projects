import React from 'react';

export const User = ({ id, email, firstName, lastName, avatar,setCount,count }) => {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <li>
      <div>
        <img className="avatar" src={avatar} alt="User" />
        <div>
          <h3>{firstName} {lastName}</h3>
          <p>
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
              <path d="..."/>
            </svg>
            {email}
          </p>
        </div>
      </div>

     <img
    className="action"
    onClick={() => {
      setIsToggled(!isToggled);
      if (!isToggled) {
        setCount(count + 1);
      } else {
        setCount(count - 1);
      }
      console.log(count);
    }}
    src={`/assets/${isToggled ? 'minus' : 'plus'}.svg`}
    alt="Action"
  />

    </li>
  );
};
