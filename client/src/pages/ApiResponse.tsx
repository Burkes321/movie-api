import React from 'react';

interface IApiResponse {
    response: any;
}

const ApiResponse: React.FC<IApiResponse> = ({ response }) => {
    if (!response) {
        return null;
    }

    return (
        <div>
            <div>
                Title: {response.Title}
            </div>
            <div>
                Released: {response.Released}
            </div>
            <div>
                Revenue: {response.BoxOffice}
            </div>
            <div>
                MetaScore: {response.Metascore}
            </div>
        </div>
    )
}

export default ApiResponse;