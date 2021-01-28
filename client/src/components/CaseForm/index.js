import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CASE } from '../../utils/mutations';
import { QUERY_CASES } from '../../utils/queries';

const CaseForm = () => {
    const [formState, setFormState] = useState({ caseTitle: '', caseSummary: '', caseDescription: '', caseStatus: 'Unsolved', caseStartDate: '' });
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
                <div class="form-floating mb-3">
                    <input
                        className="form-control"
                        placeholder="Enter a case title"
                        name='caseTitle'
                        type='text'
                        id='caseTitle'
                        value={formState.caseTitle}
                        onChange={handleChange}
                    />
                    <label for="caseTitle">Enter a case Title</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Enter a case summary"
                        name="caseSummary"
                        id="caseSummary"
                        value={formState.caseSummary}
                        onChange={handleChange}
                    >
                    </textarea>
                    <label for="caseSummary">Enter a case summary</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Enter a case description"
                        name="caseDescription"
                        id="caseDescription"
                        value={formState.caseDescription}
                        onChange={handleChange}
                    >
                    </textarea>
                    <label for="caseDescription">Enter a case description</label>
                </div>
                <div className="mb-3">
                    <select
                        className="form-select"
                        aria-label=".form-select-1"
                        name="caseStatus"
                        id="caseStatus"
                        onChange={handleChange}>
                            <option selected>Choose a status:</option>
                            <option value="Unsolved">Unsolved</option>
                            <option value="Solved">Solved</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        name="caseStartDate"
                        type="date"
                        id="caseStartDate"
                        value={formState.caseStartDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-grid ga-2 d-md-flex justify-content-md-end py-2">
                <button className='btn btn-dark btn-primary px-4' type='submit'>
                  Submit
                </button>
              </div>
            </form>
        </div>
      );
};

export default CaseForm;