import s from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttonsWrapper}>
      {options.map(el => {
        return (
          <button
            className={s.button}
            key={el}
            type="button"
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
