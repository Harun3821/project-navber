

import PropTypes from 'prop-types'
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({features}) => {

  

    return (
        <div>
            <p className='flex items-center text-[12px]'><AiFillCheckCircle className='mr-2'></AiFillCheckCircle>{features}</p>
        </div>
    );
};

Features.propTypes = {
    opction: PropTypes.string
}


export default Features;