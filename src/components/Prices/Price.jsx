

import PropTypes from 'prop-types'

import Features from '../Featires/Features';

const Price = ({opction}) => {

   const  { name, price, features,} = opction;
       


    return (
        <div className='bg-green-500 rounded-md p-5 text-white text-center flex flex-col'>
            <h2>
                <span className='text-2xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4  className='text-3xl my-6'>{name}</h4>
          <div className='pl-6 flex-grow'>
            {
                features.map((features, index) => <Features key={index} features={features}></Features>)
            }
          </div>
          <button className='mt-4  bg-orange-300 p-2 px-3 rounded-sm text-black border-none font-bold hover:bg-orange-600 hover:text-white w-full'>buy now</button>
          </div>
    );
};

Price.propTypes = {
    opction: PropTypes.object
}

export default Price;