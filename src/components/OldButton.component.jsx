'use client';

import propTypes from 'prop-types';
import LoadingSpinner from './utilities/LoadingSpinner.component';

const Button = ({id, altText, className, onClick, buttonText, isLoading}) => {
  return (
    <button id={id} alt={altText} className={className + ' z-50'} onClick={onClick}>
      {isLoading && (
        <LoadingSpinner />
      )}
      {!isLoading && (
        <div className='col-span-1 h-5 w-5 text-black justify-evenly'></div>
        )}
      <div className='col-auto'>
      {buttonText}
      </div>
    </button>
  );
};

Button.propTypes = {
  id: propTypes.string.isRequired,
  className: propTypes.string,
  onClick: propTypes.func.isRequired,
  buttonText: propTypes.string.isRequired,
  isLoading: propTypes.bool.isRequired,
};

export default Button;