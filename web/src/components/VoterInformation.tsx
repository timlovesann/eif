import React, { Component, useEffect, useState } from 'react';

interface IVoterHeaderProps {
    stringProp: string;
}

const VoterInformation: React.FC<IVoterHeaderProps> = ({stringProp}) => {
    const [passedInStringPropValue, setPassedInStringPropValue] = useState<string>();
    useEffect(() => {
        setPassedInStringPropValue(stringProp);
    }, [stringProp]);
    return (
        <div>Voter Identification Number: {stringProp}</div>
    )
}

export default VoterInformation;