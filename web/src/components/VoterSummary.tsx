import React, { Component, useEffect, useState } from 'react';
import { VoterType } from '../types/voter.type';

export interface IVoterData {
    voterDataProp: {
        last_name: string;
        first_name: string;
        county_name: string;
    }
}

const VoterSummary: React.FC<IVoterData> = ({voterDataProp}) => {
    const [voterSummary, setVoterSummary] = useState<{last_name, first_name, county_name}>();
    useEffect(() => {
        setVoterSummary(voterDataProp);
    }, [voterDataProp]);    
    return (
        <div>
            First Name: { voterDataProp.first_name }<br/>
            Last Name: { voterDataProp.last_name}<br/>
            County Name: { voterDataProp.county_name }
        </div>

    );
}

export default VoterSummary;