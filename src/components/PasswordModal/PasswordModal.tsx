import React, { ChangeEvent, useCallback, useState } from 'react';

import GlobalInput from '../ElementsAndActions/GlobalInput/GlobalInput';
import StatusBar from '../ElementsAndActions/StatusBar/StatusBar';

import { getRandomId } from '../../helpers/mainHelpers';

import s from './PasswordModal.module.scss';

const PasswordForm = () => {
  const [password, setPassword] = useState('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const checkPasswordComplexityHandler = useCallback(() => {
    if (!password.length) return ['', '', ''];

    const isPasswordShort = checkIsPasswordShort(password);

    if (isPasswordShort) return [s.red_col, s.red_col, s.red_col];

    const isPasswordEasy = checkIsPasswordEasy(password);

    if (isPasswordEasy) return [s.red_col, '', ''];

    const isPasswordMiddle = checkIsPasswordMiddle(password);

    if (isPasswordMiddle) return [s.yellow_col, s.yellow_col, ''];

    const isPasswordComplex = checkIsPasswordComplex(password);

    if (isPasswordComplex) return [s.green_col, s.green_col, s.green_col];
  }, [
    password,
    checkIsPasswordShort,
    checkIsPasswordEasy,
    checkIsPasswordMiddle,
    checkIsPasswordComplex,
  ]);

  const classesArr = checkPasswordComplexityHandler();

  return (
    <div className={s.password_modal}>
      <h1>Check your password</h1>
      <GlobalInput
        label='Password'
        inputProps={{
          placeholder: 'Select your password...',
          value: password,
          onChange: inputHandler,
          name: 'password',
        }}
        wrpClName={s.custom_input}
      />
      <h2 className={s.second_title}>Status blocks</h2>
      <div className={s.status_bar_wrp}>
        {classesArr?.map((cl) => (
          <StatusBar customStatusCl={cl} key={getRandomId()} />
        ))}
      </div>
    </div>
  );
};

const passwordMinLength = 8;

const onlyLetters = /^\p{L}+$/u;
const onlyNumbers = /^[0-9]+$/;
const onlySymbols = /^[^a-zA-Z0-9]+$/;

const lettersAndSymbols = /^(?=.*[a-zA-Z\u00C0-\u017F])(?=.*[^a-zA-Z0-9]).*$/;
const lettersAndNumbers = /^(?=.*[a-zA-Z\u00C0-\u017F])(?=.*[0-9]).*$/;
const numbersAndSymbols = /^(?=.*[0-9])(?=.*[^a-zA-Z0-9]).*$/;

const lettersAndNumbersAndSymbols =
  /^(?=.*[a-zA-Z\u00C0-\u017F])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/;

const checkIsPasswordShort = (password: string) =>
  Boolean(password.length < passwordMinLength);

const checkIsPasswordEasy = (password: string) => {
  if (
    onlyLetters.test(password) ||
    onlyNumbers.test(password) ||
    onlySymbols.test(password)
  )
    return true;

  return false;
};

const checkIsPasswordMiddle = (password: string) => {
  if (
    (lettersAndSymbols.test(password) ||
      lettersAndNumbers.test(password) ||
      numbersAndSymbols.test(password)) &&
    !onlyLetters.test(password) &&
    !onlyNumbers.test(password) &&
    !onlySymbols.test(password) &&
    !lettersAndNumbersAndSymbols.test(password)
  )
    return true;

  return false;
};

const checkIsPasswordComplex = (password: string) => {
  if (
    lettersAndSymbols.test(password) &&
    lettersAndNumbers.test(password) &&
    numbersAndSymbols.test(password)
  )
    return true;

  return false;
};

export default PasswordForm;
