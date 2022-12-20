import { PropTypes } from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <FilterTitle>
            Find contacts by name
            <FilterInput type="text" value={value} onChange={onChange}/>
        </FilterTitle>
    );
};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};