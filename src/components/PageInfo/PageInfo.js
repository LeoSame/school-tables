import React from 'react';
import { useSelector } from 'react-redux';
import { getSchoolboySelector, getColumnSelector, getIsLoadingSelector } from '../../store/selectors';
import './PageInfo.css';

const PageInfo = () => {
  const schoolBoy = useSelector(getSchoolboySelector);
  const columnLessons = useSelector(getColumnSelector);
  const isLoading = useSelector(getIsLoadingSelector);
  let columnMaxSumm = null;

  if (!isLoading) {
    columnMaxSumm = Array.from(columnLessons.Items).sort((a, b) => {
      const firstArr = a.Title.split('/');
      const lastArr = b.Title.split('/');

      if (+firstArr[0] + +firstArr[1] >= +lastArr[0] + +lastArr[1]) {
        return -1;
      }
      return 1;
    });
  }

  return (
    <div className='page__container'>
      <h3>Кількість учнів у класі: {!isLoading && schoolBoy.Quantity}</h3>
      <h3>Об’єкт в якому сума цифр найбільша: {!isLoading && columnMaxSumm[0].Title}</h3>

      <p>
        Інноваційні технології швидко увійшли в усі галузі нашого життя. В зв’язку з цим виникає нагальна потреба
        використання комп’ютерної техніки під час вивчення багатьох дисциплін шкільного курсу. Адже щоденно змінюється
        екологічна ситуація в світі, законодавство, природа, погода. Інформація, подана в підручнику, перетворюється в
        застарілу ще під час видання підручника. Вивчення окремих дисциплін чи окремих тем з використанням інноваційних
        технологій, комп’ютерної техніки та найсвіжішої інформації, взятої з мережі Internet, – один із способів
        оптимізації та урізноманітнення навчально-виховального процесу.
      </p>
    </div>
  );
};

export default PageInfo;
