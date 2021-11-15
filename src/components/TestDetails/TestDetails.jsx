import React, { useState } from 'react';

import s from './TestDetails.scss';
import { object } from 'prop-types';

import SingleQuestion from './SingleQuestion';
import MuptipleQuestion from './MuptipleQuestion';
import NumberQuestion from './NumberQuestion';

const Test = ({ data }) => {
  const setStartValues = questions => {
    const startValues = {};
    questions.forEach(answer => {
      startValues[answer.id] = false;
    });
    return startValues;
  };

  const [answers, setAnswers] = useState(setStartValues(data.questions));

  const handleChange = (id, isRight) => {
    setAnswers({ ...answers, [id]: isRight });
  };

  console.log('ANSWERS', answers);

  const renderType = question => {
    switch (question.question_type) {
      case 'single':
        return <SingleQuestion data={question} onChange={handleChange} />;
      case 'multiple':
        return <MuptipleQuestion data={question} onChange={handleChange} />;
      case 'number':
        return <NumberQuestion data={question} onChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className={s.root}>
      <div className={s.title}>{data.title}</div>
      <div className={s.questionList}>
        {data.questions.map((question, i) => (
          <div className={s.questionWrapper}>{renderType(question)}</div>
        ))}
      </div>
    </div>
  );
};

Test.propTypes = {
  data: object,
};

Test.defaultProps = {
  data: object,
};

export default Test;
