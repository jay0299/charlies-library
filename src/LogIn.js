import { useState } from 'react';

export function LogIn() {
  const [formType, setFormType] = useState('logIn');
  const [input, setInput] = useState({
    username: '',
    password: '',
    nickname: '',
  });

  const handleInputChange = (event) => {
    if (event.target.id === 'username') {
      setInput({ ...input, username: event.target.value });
    } else if (event.target.id === 'password') {
      setInput({ ...input, password: event.target.value });
    } else {
      setInput({ ...input, nickname: event.target.value });
    }
  };
  const handleClickEvent = () => {
    if (formType === 'logIn') {
      setFormType('signUp');
    } else {
      setFormType('logIn');
    }
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input
          id="username"
          type="text"
          onChange={handleInputChange}
          value={input.username}
          placeholder="Username"
        />
        <input
          id="password"
          type="text"
          onChange={handleInputChange}
          value={input.password}
          placeholder="Password"
        />
        {formType === 'logIn' ? null : (
          <input
            id="nickname"
            type="text"
            onChange={handleInputChange}
            value={input.nickname}
            placeholder="Nickname"
          />
        )}
        <button>{formType === 'logIn' ? 'Log In' : 'Sign Up'}</button>
      </form>
      <p onClick={handleClickEvent}>
        {formType === 'logIn' ? 'want to sign up?' : 'back to log in'}
      </p>
    </div>
  );
}
