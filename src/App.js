import { useState, useEffect, useRef } from 'react';

function App() {

  const agentNames = {
    "Breach": "5f8d3a7f-467b-97f3-062c-13acf203c006",
    "Raze": "f94c3b30-42be-e959-889c-5aa313dba261",
    "KAY/O": "601dbbe7-43ce-be57-2a40-4abd24953621",
    "Skye": "6f2a04ca-43e0-be17-7f36-b3908627744d",
    "Cypher": "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
    "Sova": "ded3520f-4264-bfed-162d-b080e2abccf9",
    "Killjoy": "1e58de9c-4950-5125-93e9-a0aee9f98746",
    "Viper": "707eab51-4836-f488-046a-cda6bf494859",
    "Phoenix": "eb93336a-449b-9c1b-0a54-a891f7921d69",
    "Astra": "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
    "Brimstone": "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
    "Yoru": "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
    "Sage": "569fdd95-4d10-43ab-ca70-79becc718b46",
    "Reyna": "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
    "Omen": "8e253930-4c05-31dd-1b6c-968525494517",
    "Jett": "add6443a-41bd-e414-f6ad-e58d267f4e95"
  }

  const weaponNames = {
    "Breach": "5f8d3a7f-467b-97f3-062c-13acf203c006",
    "Raze": "f94c3b30-42be-e959-889c-5aa313dba261",
    "KAY/O": "601dbbe7-43ce-be57-2a40-4abd24953621",
    "Skye": "6f2a04ca-43e0-be17-7f36-b3908627744d",
    "Cypher": "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
    "Sova": "ded3520f-4264-bfed-162d-b080e2abccf9",
    "Killjoy": "1e58de9c-4950-5125-93e9-a0aee9f98746",
    "Viper": "707eab51-4836-f488-046a-cda6bf494859",
    "Phoenix": "eb93336a-449b-9c1b-0a54-a891f7921d69",
    "Astra": "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
    "Brimstone": "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
    "Yoru": "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
    "Sage": "569fdd95-4d10-43ab-ca70-79becc718b46",
    "Reyna": "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
    "Omen": "8e253930-4c05-31dd-1b6c-968525494517",
    "Jett": "add6443a-41bd-e414-f6ad-e58d267f4e95"
  }

  const [searchType, setSearchType] = useState("agents");
  const [objectName, setObjectName] = useState(agentNames);
  const [agentName, setAgentName] = useState("Raze");
  const [agentCard, setAgentCard] = useState([""]);
  const agentURL = "https://valorant-api.com/v1/" + searchType + "/" + objectName[agentName.charAt(0).toUpperCase() + agentName.slice(1)];
  const getAttribute = useRef(null);



  async function getAgent(url) {
    const result = await fetch(url);
    const data = await result.json();
    console.log([data]);
    return setAgentCard([data]);
  }

  useEffect(() => {
    getAgent(agentURL);
  }, [agentName]);


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleSearch = (e) => {

    setSearchType(getAttribute.current.value);
    /* switch((getAttribute.current.selectedOptions[0].getAttribute('data-obj'))
    {
      case "agentNames"
    }
    if((getAttribute.current.selectedOptions[0].getAttribute('data-obj'))
    {

    } */
    setObjectName(getAttribute.current.selectedOptions[0].getAttribute('data-obj'));
  }

  return (
    <div className="App">
      <div className="container">
        <div className="outer-overlay">
          <div className="header">
            <h1 id="head">vAlorant</h1>
            <h2 id="head2">Agent Stats</h2>
          </div>
          <div className="overlay">
            <div className="main-container">
              <div className="search">
                <select name="Search" id="search-drop" ref={getAttribute} onChange={(e) => { handleSearch(e) }}>
                  <option value="agents" data-obj="agentNames" selected>Agents</option>
                  <option value="weapon" data-obj="weaponNames">Weapon</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <form id="input-form" onSubmit={(e) => handleSubmit(e)}>
                  <input id="search-bar" type="text" placeholder="Name of the Agent" onChange={(e) => { setAgentName(e.target.value); }} value={agentName} />
                </form>
              </div>
              <div className="search-result">
                {agentCard[0].data ?
                  <div className="agent-info">
                    <div className="agent-looks">
                      <div id="display-icon">
                        <img src={agentCard[0].data.displayIcon != null ? agentCard[0].data.displayIcon : ""} />
                        <p>{agentCard[0].data.isPlayableCharacter != null ? "Playable Character" : ""}</p>
                      </div>
                      <div id="agent-name">
                        <p>{agentCard[0].data.displayName != null ? agentCard[0].data.displayName : ""}</p>
                      </div>
                    </div>
                    <div className="info-item">
                      {agentCard[0].data.description != null ? <p> {agentCard[0].data.description}</p> : ""}
                    </div>
                    <div className="info-item">
                      <p class="sub-heads">Roles</p>
                      {agentCard[0].data.role != null ? <img src={agentCard[0].data.role.displayIcon} /> : ""}
                      {agentCard[0].data.role != null ? <p><u>{agentCard[0].data.role.displayName}</u></p> : ""}
                      {agentCard[0].data.role != null ? <p>{agentCard[0].data.role.description}</p> : <p>No Role</p>}
                    </div>
                  </div>
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
