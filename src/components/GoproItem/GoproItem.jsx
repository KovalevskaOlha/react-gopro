import PropTypes from 'prop-types'; // ES6
import { goProData } from '../../data/goproData';

// export const GoproItem = (data) => {
//    return <li>
//         <h3>{data.info.title}</h3>
//         <p>{data.info.price}</p>
//         <img src={data.info.photo} alt={data.info.title}/>
//     </li>
// }

// деструктуризація даних  в пропсах
export const GoproItem = ({ info, test }) => {
  console.log(test);
  const { title, price, photo } = info;
  return (
    <li>
      <h3>{title}</h3>
      <p>{price}</p>
      <img src={photo} alt={title} />
    </li>
  );
};

goProData.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  photo: PropTypes.string,
  test: PropTypes.string,
}
