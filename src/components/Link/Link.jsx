
import PropTypes from 'prop-types';

const Link = ({route}) => {

    return (
       
        <li className="mr-4 hover:bg-orange-400 px-6  hover:text-white text-center"><a  href={route.path}>{route.name}</a></li>
       


    );
};
Link.propTypes={
    route: PropTypes.object
}

export default Link;