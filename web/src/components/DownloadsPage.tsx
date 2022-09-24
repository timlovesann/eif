import { response } from "express";
import { ChangeEvent, useState } from "react";
import { Redirect } from "react-router-dom";
import DownloadService from "../services/DownloadService";

export interface IDownloadRequest {
    qvf: string;
    countyName: string;
    jurisdictionName: string;
}
export const DownloadsPage: React.FC = () => {
  const initialDownloadRequestState = {
    qvf: '',
    countyName: '',
    jurisdictionName: ''
  };
  const [redirect, setRedirect] = useState(null);
  const [downloadRequest, setDownloadRequest] = useState<IDownloadRequest>(initialDownloadRequestState);
  const [submitted, setSubmitted] = useState(false);  
  const [requestId, setRequestId] = useState(null);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDownloadRequest({ ...downloadRequest, [name]: value });
  };  

  function saveDownloadRequest() : void {
    var data = {
      qvf: downloadRequest.qvf,
      countyName: downloadRequest.countyName,
      jurisdictionName: downloadRequest.jurisdictionName
    };    

    DownloadService.createDownloadRequest(downloadRequest)
      .then((response: any) => {
        setDownloadRequest({
          qvf: response.data.qvf,
          countyName: response.data.countyName,
          jurisdictionName: response.data.jurisdictionName
        });
        setRequestId(response.data.request_id);
      setSubmitted(true);
    })
    .catch(e => {
      if(e.response.status === 403) {
        setRedirect("/login");
      }
    })
  }

  function newDownloadRequest() :void {
    setDownloadRequest(initialDownloadRequestState);
    setSubmitted(false);
  }
  if(redirect) {
    return <Redirect to={redirect} />
  } else {  
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>Download Request queued successfully. <br /> <br /> Your request confirmation number is: {requestId}</h4>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="QVF"
                required
                onChange={handleInputChange}
                value={downloadRequest.qvf}
                name="qvf"
              />
            </div>
            <div className="form-group">
              <label htmlFor="countyName">County Name</label>
              <input
                type="text"
                className="form-control"
                id="countyName"
                required
                onChange={handleInputChange}
                value={downloadRequest.countyName}
                name="countyName"
              />
            </div>            
            <button onClick={saveDownloadRequest} className="btn btn-success">
              Submit
            </button>                   
          </div>
        )}
      </div>
    );
  }
}

export default DownloadsPage;