import React from 'react';

export const Success = ({ count,setResult,results,setInvites}) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={()=>{setResult(!results);
      setInvites([])}} className="send-invite-btn">Назад</button>
    </div>
  );
};
