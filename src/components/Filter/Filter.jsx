import { PropTypes } from 'prop-types';
import { FilterTitle, FilterFind, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <FilterTitle>
            <FilterFind>Find contacts by name</FilterFind>
            <FilterInput type="text" value={value} onChange={onChange}/>
        </FilterTitle>
    );
};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};