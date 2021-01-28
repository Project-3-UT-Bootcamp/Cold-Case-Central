import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CASE } from '../../utils/mutations';
import { QUERY_CASES } from '../../utils/queries';

const CaseForm = () => {
    const [formState, setFormState] = useState({ caseTitle: '', caseDescription: '', caseStatus: 'Unsolved', caseStartDate: '' });
    const [addCase, { error }] = useMutation(ADD_CASE, {
        update(cache, { data: { addCase } }) {
            const { cases } = cache.readQuery({ query: QUERY_CASES });

            cache.writeQuery({
                query: QUERY_CASES,
                data: { cases: [addCase, ...cases] }
            });
        }
    });

    // update state based on for input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addCase({
                variables: { ...formState }
            });
        } catch(e) {
            console.error(e);
        }
    }
    return (
        <div>
            <h3>Enter the case information:</h3>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                        placeholder="Enter a case Title"
                        name='caseTitle'
                        type='text'
                        id='caseTitle'
                        value={formState.caseTitle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea 
                        placeholder="Enter a case description"
                        name="caseDescription"
                        id="caseDescription"
                        value={formState.caseDescription}
                        onChange={handleChange}
                    >
                    </textarea>
                </div>
                <div>
                    <select
                        name="caseStatus"
                        id="caseStatus"
                        onChange={handleChange}>
                            <option selected value="Unsolved">Unsolved</option>
                            <option value="Solved">Solved</option>
                    </select>
                </div>
                <div>
                    <input 
                        name="caseStartDate"
                        type="date"
                        id="caseStartDate"
                        value={formState.caseStartDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
      );
};

export default CaseForm;