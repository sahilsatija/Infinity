import React, { useState, useEffect } from "react";

function AutoComplete() {
  const [state, SetState] = useState({
    filteredData: [],
    isShow: false,
    userInput: "",
    userData: [],
  });

  const API_URL = "https://searchcode.com/api/codesearch_I/?q=";

  useEffect(() => {
    const fetchData = async() => {
        try {
            const response = await fetch(`${API_URL}`);
            const data = await response.json();
            SetState(prevState => ({ ...prevState, userData: data.results, isShow: true }))
        }catch(err){
            console.log('err', err)
        }
      }
      fetchData();
      
  }, [])

  const handleClick = (e) => {
    SetState({...state, userInput: e.target.innerText, filteredData: [] })
  }

  const renderSuggestions = () => {
    const { filteredData, userInput, isShow } = state;

    let suggestionsList;
    if(userInput && isShow) {
        if(filteredData.length){
            suggestionsList = filteredData.map((data) => (
                <div key={data.id}>
                  <li style={{display: 'block', textDecoration: 'none'}} onClick={handleClick}>{data.name}</li>
                </div>
            ))
        }
        } else {
            suggestionsList = (
                <div>No Suggestions Found</div>
           )
        
    }
    return suggestionsList;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const { userData } = state;
    SetState(prevState => ({...prevState, userInput: value }));
    if(value.length > 0){
        const regex = new RegExp(`^${value}`, "i");
        
        const filters = userData.filter(item => regex.test(item.name.toLowerCase()))
        
        SetState(prevState => ({...prevState, filteredData: filters }))
    }
  }

  return (
      <>
      <div style={{textAlign: 'center'}}>
      <div>Custom AutoComplete</div>
      <input type="text" onChange={handleChange} placeholder="Search" value={state.userInput} />
      {renderSuggestions()} 
      </div>
      </>
  )
}

export default AutoComplete;
