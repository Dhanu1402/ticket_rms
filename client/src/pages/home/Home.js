import LoginForm from '../../components/login/LoginForm';
import PassReset from '../../components/passReset/PassReset';
import './home.style.css';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [formLoad, setFormLoad] = useState('login');

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }

    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Fill up all the form!');
    }
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert('Invalid email!');
    }
  };

  return (
    <div className="entry-page bg-info">
      <div className="form-box">
        {formLoad === 'login' && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        )}

        {formLoad === 'reset' && (
          <PassReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
}
