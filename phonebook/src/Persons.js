import React from 'react';

const Persons = ({ personsHandled }) => {
    const handlePersons = personsHandled.map((item) => {
        return (
            <h4 key={item.name}>
                {item.name} {item.number}
            </h4>
        );
    });

    return (
        <>
            {handlePersons}
        </>
    )
};

export default Persons;