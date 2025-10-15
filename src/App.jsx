import { useState } from 'react'

import './App.css'

const topQBs2024 = [
  {name: "Joe Burrow", espnId: 3915511},
  {name: "Jared Goff", espnId: 3046779},
  {name: "Baker Mayfield", espnId: 3052587},
  {name: "Geno Smith", espnId: 15864},
  {name: "Sam Darnold", espnId: 3912547},
  {name: "Lamar Jackson", espnId: 3916387},
  {name: "Patrick Mahomes", espnId: 3139477},
  {name: "Aaron Rodgers", espnId: 8439},
  {name: "Justin Herbert", espnId: 4038941},
  {name: "Brock Purdy", espnId: 4361741},
  {name: "Kyler Murray", espnId: 3917315},
  {name: "Bo Nix", espnId: 4426338},
  {name: "Matthew Stafford", espnId: 12483},
  {name: "Josh Allen", espnId: 3918298},
  {name: "C.J. Stroud", espnId: 4432577},
  {name: "Jayden Daniels", espnId: 4426348},
  {name: "Kirk Cousins", espnId: 14880},
  {name: "Jordan Love", espnId: 4036378},
  {name: "Jalen Hurts", espnId: 4040715},
  {name: "Tua Tagovailoa", espnId: 4241479},
  {name: "Russell Wilson", espnId: 14881},
  {name: "Justin Fields", espnId: 4362887},
  {name: "Michael Penix Jr.", espnId: 4360423},
  {name: "Joe Flacco", espnId: 11252},
  {name: "Caleb Williams", espnId: 4431611},
  {name: "Daniel Jones", espnId: 3917792},
  {name: "Bryce Young", espnId: 4685720},
  {name: "Dak Prescott", espnId:2577417},
  {name: "Drake Maye", espnId: 4431452},
  {name: "Mac Jones", espnId: 4241464},
  {name: "Jaxson Dart", espnId: 4689114},
  {name: "Carson Wentz", espnId: 2573079},
  {name: "Jake Browning", espnId: 3886812},
  {name: "Cam Ward", espnId: 4688380},
  {name: "Dillon Gabriel", espnId: 4427238}
];

const topRecievers2025 = [
  { name: "Ja'Marr Chase", espnId: "4362628" },
  { name: "Jordan Addison", espnId: "4429205" },
  { name: "Quentin Johnston", espnId: "4429025"},
  { name: "Tyler Warren", espnId: "4431459"},
  { name: "Justin Jefferson", espnId: "4262921" },
  { name: "Brian Thomas Jr.", espnId: "4432773" },
  { name: "Drake London", espnId: "4426502" },
  { name: "Amon‑Ra St. Brown", espnId: "4374302" },
  { name: "Jerry Jeudy", espnId: "4241463" },
  { name: "Malik Nabers", espnId: "4595348" },
  { name: "Brock Bowers", espnId: "4432665" },
  { name: "CeeDee Lamb", espnId: "4241389" },
  { name: "Ladd McConkey", espnId: "4612826" },
  { name: "Trey McBride", espnId: "4361307" },
  { name: "Jaxon Smith‑Njigba", espnId: "4430878" },
  { name: "George Kittle", espnId: "3040151" },
  { name: "Garrett Wilson", espnId: "4569618" },
  { name: "Terry McLaurin", espnId: "3121422" },
  { name: "Courtland Sutton", espnId: "3128429" },
  { name: "A.J. Brown", espnId: "4047646" },
  { name: "Davante Adams", espnId: "16800" },
  { name: "Zay Flowers", espnId: "4429615" },
  { name: "Jakobi Meyers", espnId: "3916433" },
  { name: "Calvin Ridley", espnId: "3925357" },
  { name: "Nico Collins", espnId: "4258173" },
  { name: "Mike Evans", espnId: "16737" },
  { name: "Jameson Williams", espnId: "4426388" },
  { name: "D.K. Metcalf", espnId: "4047650" },
  { name: "Puka Nacua", espnId: "4426515" },
  { name: "DeVonta Smith", espnId: "4241478" },
  { name: "Keon Coleman", espnId: "4635008" },
  { name: "Tyreek Hill", espnId: "3116406" },
  { name: "Ricky Pearsall", espnId: "4428209" },
  { name: "Hollywood Brown", espnId: "4241372" }, 
  { name: "DeeBo Samuel", espnId: "3126486" },
  { name: "Keenan Allen", espnId: "15818" },
  { name: "Emeka Egbuka", espnId: "4567750" },
  { name: "Marvin Harrison Jr", espnId: "4432708"},
  { name: "Cooper Kupp", espnId: "2977187"},
  { name: "Tory Horton", espnId: "4597703"},
  { name: "Calvin Austin III", espnId: "4243389"},
  { name: "Jonnu Smith", espnId: "3054212"},
  { name: "George Pickens", espnId: "4426354"},
  { name: "Jake Fergosun", espnId : "4242355"},
  { name: "Michael Pittman Jr.", espnId: "4035687"},
  { name: "Tetairoa McMillan", espnId: "4685472"},
  { name: "Jaylen Waddle", espnId: "4372016"},
  { name: "Darren Waller", espnId: "2576925"},
  { name: "Wan'Dale Robinson", espnId: "4569587"},
  { name: "Evan Engram", espnId: "3051876"},
  { name: "Troy Franklin", espnId: "4431280" },
  { name: "Dallas Godert", espnId: "3121023"},
  { name: "Theo Johnson", espnId: "4429148"},
  { name: "Jahan Dotson", espnId: "4361409"}

]

const topRunningBacks2025 = [
  { rank: 1, name: "Derrick Henry", espnId: 3043078 },
  { name: "Cam Skattebo", espnId: 4696981 },
  { name: "Quinshon Judkins", espnId: 4685702 },
  { rank: 2, name: "Saquon Barkley", espnId: 3929630 },
  { rank: 3, name: "Bijan Robinson", espnId: 4430807 },
  { rank: 4, name: "Jahmyr Gibbs", espnId: 4429795 },
  { rank: 5, name: "Christian McCaffrey", espnId: 3117251 },
  { rank: 6, name: "Josh Jacobs", espnId: 4047365 },
  { rank: 7, name: "Bucky Irving", espnId: 4596448 },
  { rank: 8, name: "De’Von Achane", espnId: 4429160 },
  { rank: 9, name: "Ashton Jeanty", espnId: 4890973 },
  { rank: 10, name: "Jonathan Taylor", espnId: 4242335 },
  { rank: 11, name: "Kyren Williams", espnId: 4430737 },
  { rank: 12, name: "James Cook", espnId: 4379399 },
  { rank: 13, name: "Chase Brown", espnId: 4362238 },
  { rank: 14, name: "Kenneth Walker III", espnId: 4567048 },
  { rank: 15, name: "James Conner", espnId: 3045147 },
  { rank: 16, name: "Joe Mixon", espnId: 3116385 },
  { rank: 17, name: "Breece Hall", espnId: 4427366 },
  { rank: 18, name: "Omarion Hampton", espnId: 4685382 },
  { rank: 19, name: "Alvin Kamara", espnId: 3054850 },
  { rank: 20, name: "D’Andre Swift", espnId: 4430741 },
  { rank: 21, name: "RJ Harvey", espnId: 4568490 },
  { rank: 22, name: "David Montgomery", espnId: 4035538 },
  { rank: 23, name: "Brian Robinson Jr.", espnId: 4241474 },
  { rank: 24, name: "Tony Pollard", espnId: 3916148 },
  { rank: 25, name: "Javonte Williams", espnId: 4361579 },
  { rank: 26, name: "Jordan Mason", espnId: 4360569 },
  { rank: 27, name: "Isiah Pacheco", espnId: 4361529 },
  { rank: 28, name: "Chuba Hubbard", espnId: 4241416 },
  { rank: 29, name: "Tank Bigsby", espnId: 4429013 },
  { rank: 30, name: "Rhamondre Stevenson", espnId: 4569173 },
  { rank: 31, name: "Rachaad White", espnId: 4697815 },
  { rank: 32, name: "Jaylen Warren", espnId: 4569987 },
  { rank: 33, name: "Najee Harris", espnId: 4241457 },
  { rank: 34, name: "Zach Charbonnet", espnId: 4426385 },
  { rank: 35, name: "Tyler Allgeier", espnId: 4373626 },
  { rank: 36, name: "Nick Chubb", espnId: 3128720 },
  { rank: 37, name: "J. K. Dobbins", espnId: 4241985 },
  { rank: 38, name: "Tyjae Spears", espnId: 4428557 },
  { rank: 39, name: "Ray Davis", espnId: 4429501 },
  { rank: 40, name: "Trey Benson", espnId: 4429275 },
  { rank: 41, name: "Austin Ekeler", espnId: 3068267 },
  { rank: 42, name: "Braelon Allen", espnId: 4685247 },
  { rank: 43, name: "Jaydon Blue", espnId: 4685279 },
  { rank: 44, name: "Rico Dowdle", espnId: 4038815 },
  { rank: 45, name: "Aaron Jones", espnId: 3042519 },
  { rank: 46, name: "Jacory Croskey-Merritt", espnId: 4575131 },
  { rank: 47, name: "Woody Marks",espnId: 4429059 }
];

function App() {
  const [output, setOutput] = useState("");
  const [playerInput, setPlayerInput] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedStat, setSelectedStat] = useState("");
  const [result, setResult] = useState("");
  const [lineValue, setLineValue] = useState("");
  const [margin, setMargin] = useState("");

  // Define stat options for each position
  const statOptions = {
    qb: [
      {value: "completions", label: "Completions"},
      { value: "passingAttempts", label: "Passing Attempts" },
      { value: "passYards", label: "Pass Yards" },
      { value: "passTDs", label: "Pass Touchdowns" },
      { value: "rushTDs", label: "Rush Touchdowns"},
      { value: "interceptions", label: "Interceptions" },
      { value: "rushYards", label: "Rush Yards" },
    ],
    wr: [
      { value: "recYards", label: "Receiving Yards" },
      { value: "receptions", label: "Receptions" },
      { value: "recTDs", label: "Receiving Touchdowns" },
      { value: "Rush + Rec Yds", label: "Rush + Rec Yds"},
      { value: "Rush + Rec Tds", label: "Rush + Rec Tds"}
    ],
    rb: [
      { value: "rushYards", label: "Rush Yards" },
      { value: "rushTDs", label: "Rush Touchdowns" },
      { value: "recYards", label: "Receiving Yards" },
      { value: "receptions", label: "Receptions" },
      { value: "Rush + Rec Yds", label: "Rush + Rec Yds"},
      { value: "Rush + Rec Tds", label: "Rush + Rec Tds"}
    ],
    te: [
      { value: "recYards", label: "Receiving Yards" },
      { value: "receptions", label: "Receptions" },
      { value: "recTDs", label: "Receiving Touchdowns" },
      { value: "Rush + Rec Yds", label: "Rush + Rec Yds"},
      { value: "Rush + Rec Tds", label: "Rush + Rec Tds"}
    ],
  };


  const handleSubmit = async () => {
    if (!selectedPosition || !selectedStat || !playerInput.trim()) {
      setOutput("Please select a position, stat, and enter a player name.");
      setResult("");
      return;
    }
    if (selectedPosition === 'qb' || selectedPosition === 'rb' || selectedPosition === 'wr' || selectedPosition === 'te') {
      let playerArr;
      let statLabelArr;
      if (selectedPosition === 'qb') {
        playerArr = topQBs2024;
        statLabelArr = statOptions.qb;
      } else if (selectedPosition === 'rb') {
        playerArr = topRunningBacks2025;
        statLabelArr = statOptions.rb;
      } else if (selectedPosition === 'wr' || selectedPosition === 'te') {
        playerArr = topRecievers2025;
        statLabelArr = statOptions[selectedPosition];
      }
      const player = playerArr.find(q => q.name.toLowerCase() === playerInput.trim().toLowerCase());
      if (!player) {
        setOutput(`${selectedPosition.toUpperCase()} not found.`);
        setResult("");
        return;
      }
      try {
        let margin = 0;
        // const nflStartDate = new Date('2025-09-09');
        // const today = new Date();
        // const diffDays = Math.floor((today - nflStartDate) / (1000 * 60 * 60 * 24));
        // const week = diffDays >= 0 ? Math.floor(diffDays / 7) + 1 : 0;

        const playerResponse = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${player.espnId}/splits?season=2025`);
        const playerData = await playerResponse.json();

        let statValue = null;
        if (selectedPosition === 'qb') {
          if (selectedStat === 'passYards') {
            statValue = playerData.splitCategories[0].splits[0].stats[2];
            // margin = 35;
          } else if (selectedStat === 'passTDs') {
            statValue = playerData.splitCategories[0].splits[0].stats[5];
            // margin = .21;
          } else if (selectedStat === 'rushTDs') {
            statValue = playerData.splitCategories[0].splits[0].stats[13];
            // margin = .13
          } else if (selectedStat === 'interceptions') {
            statValue = playerData.splitCategories[0].splits[0].stats[6];
            // margin = .17
          } else if (selectedStat === 'rushYards') {
            statValue = playerData.splitCategories[0].splits[0].stats[11];
            // margin = 5;
          } else if (selectedStat === 'completions') {
            statValue = playerData.splitCategories[0].splits[0].stats[0];
            // margin = 2.7;
          } else if (selectedStat === 'passingAttempts') {
            statValue = playerData.splitCategories[0].splits[0].stats[1];
            // margin = 6;
          }
        } else if (selectedPosition === 'rb') {
          if (selectedStat === 'rushYards') {
            statValue = playerData.splitCategories[0].splits[0].stats[1];
            // margin = 25;
          } else if (selectedStat === 'rushTDs') {
            statValue = playerData.splitCategories[0].splits[0].stats[3];
            // margin = .22;
          } else if (selectedStat === 'recYards') {
            statValue = playerData.splitCategories[0].splits[0].stats[6];
            // margin = 15;
          } else if (selectedStat === 'receptions') {
            statValue = playerData.splitCategories[0].splits[0].stats[5];
            // margin = 2;
          } else if (selectedStat === 'Rush + Rec Yds'){
            let rushYds = playerData.splitCategories[0].splits[0].stats[1];
            let recYds = playerData.splitCategories[0].splits[0].stats[6];
            statValue = parseInt(rushYds, 10) + parseInt(recYds, 10);
          } else if (selectedStat === 'Rush + Rec Tds') {
            let rushTds = playerData.splitCategories[0].splits[0].stats[3];
            let recTds = playerData.splitCategories[0].splits[0].stats[8];
            statValue = parseInt(rushTds, 10) + parseInt(recTds, 10);
          }
        } else if (selectedPosition === 'wr' || selectedPosition === 'te') {
          if (selectedStat === 'recYards') {
            statValue = playerData.splitCategories[0].splits[0].stats[1];
            // margin = 25;
          } else if (selectedStat === 'receptions') {
            statValue = playerData.splitCategories[0].splits[0].stats[0];
            // margin = 2
          } else if (selectedStat === 'recTDs') {
            statValue = playerData.splitCategories[0].splits[0].stats[3];
            // margin = .21;
          } else if (selectedStat === 'Rush + Rec Yds'){
            let recYds = playerData.splitCategories[0].splits[0].stats[1];
            let rushYds = playerData.splitCategories[0].splits[0].stats[6];
            statValue = parseInt(rushYds, 10) + parseInt(recYds, 10);
          } else if (selectedStat === 'Rush + Rec Tds') {
            let rushTds = playerData.splitCategories[0].splits[0].stats[8];
            let recTds = playerData.splitCategories[0].splits[0].stats[3];
            statValue = parseInt(rushTds, 10) + parseInt(recTds, 10);
          }
        }
        let goodStat;
        if (isNaN(statValue)){
          let statNoComma = statValue.replace(/,/g, "");
           goodStat = parseFloat(statNoComma)
        }
        else {
          goodStat = statValue
        }
        const totalStats = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${player.espnId}/stats?season=2025`)
        const statsJson = await totalStats.json();
        const categories = statsJson.categories;
        const passingCategory = categories.find(cat => cat.name === "passing");
        const gpIndex = passingCategory.labels.indexOf("GP"); // should be 0
        const weeksPlayed = passingCategory.statistics.find(stat => stat.season.year === 2025).stats[gpIndex];




            const statPerGame = goodStat / weeksPlayed;
            console.log(weeksPlayed)
            let totalDeviation = 0;
            for (let i=0; i < weeksPlayed; i++) {
              const weeklyData  = await fetch(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/${player.espnId}/gamelog?season=2025`);
              const weeklyJson = await weeklyData.json();
              let weekStat = 0;

              if (selectedPosition === 'qb') {
          if (selectedStat === 'passYards') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[2];
          } else if (selectedStat === 'passTDs') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[5];
          } else if (selectedStat === 'rushTDs') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[14];
          } else if (selectedStat === 'interceptions') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[6];
          } else if (selectedStat === 'rushYards') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[12];
          } else if (selectedStat === 'completions') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[0];
          } else if (selectedStat === 'passingAttempts') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[1];
          }
        } else if (selectedPosition === 'rb') {
          if (selectedStat === 'rushYards') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[1];
          } else if (selectedStat === 'rushTDs') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[3];
          } else if (selectedStat === 'recYards') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[7];
          } else if (selectedStat === 'receptions') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[5];
          } else if (selectedStat === 'Rush + Rec Yds') {
             let rushYds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[1];
             let recYds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[7];
             weekStat = parseInt(rushYds, 10) + parseInt(recYds, 10);
          } else if (selectedStat === 'Rush + Rec Tds') {
             let rushTds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[3];
             let recTds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[9];
             weekStat = parseInt(rushTds, 10) + parseInt(recTds, 10);
          }
        } else if (selectedPosition === 'wr' || selectedPosition === 'te') {
          if (selectedStat === 'recYards') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[2];
          } else if (selectedStat === 'receptions') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[0];
          } else if (selectedStat === 'recTDs') {
             weekStat = weeklyJson.seasonTypes[0].categories[0].events[i].stats[4];
          } else if (selectedStat == 'Rush + Rec Yds') {
             let rushYds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[7];
             let recYds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[2];
             weekStat = parseInt(rushYds, 10) + parseInt(recYds, 10);
          }else if (selectedStat === 'Rush + Rec Tds') {
             let rushTds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[10];
             let recTds = weeklyJson.seasonTypes[0].categories[0].events[i].stats[4];
             weekStat = parseInt(rushTds, 10) + parseInt(recTds, 10);
          }
        }
              totalDeviation += Math.abs((weekStat - statPerGame) ** 2);
            }
            
            const varience = Math.sqrt(totalDeviation / weeksPlayed);
            margin = (1.5 * (varience / Math.sqrt(weeksPlayed)));

            // team rankings 
          
            setMargin(margin);
            setOutput(`${player.name} - ${statLabelArr.find(opt => opt.value === selectedStat).label} per game: ${statPerGame}`);


            
        // Compare with line and set recommendation
        const lineNum = parseFloat(lineValue);
        if (!isNaN(lineNum)) {
          if (statPerGame >= lineNum + margin) {
            setResult('Over');
          } else if (statPerGame <= lineNum - margin) {
            setResult('Under');
          } else {
            setResult('Dont Bet (Push)');
          }
        } else {
          setResult('');
        }
      } catch (error) {
        setOutput(`Error fetching ${selectedPosition.toUpperCase()} data.`);
        setResult("");
      }
    } else {
      setOutput("Stat lookup for this position is not implemented yet.");
      setResult("");
    }
  };

  return (
    <>
    <div className={result === 'Over' ? 'overBackground' : result === 'Under' ? 'underBackground' : ''}>
      <p className="text-center m-1 fw-bold text-decoration-underline titleTop">Parlay Help</p>
      <p className='text-center m-1 fw-bold'>An API project by Brody Boyd</p>
  <div className="container-flex everything" style={{ display: 'flex', width: '98vw', gap: '0', padding: '0', margin: '0' }}>
  <div className='leftSide'>
    <div className='first3Cards'>
  <div className="card border-3 border-black p-3 text-center TopCard positionCard" >
          <p className='boxTitle'>Position</p>
          
          <label htmlFor='qb' className='option rad-label'> 
            <input type='radio' className='rad-input' id='qb' name='position' value='qb' checked={selectedPosition === 'qb'} onChange={() => { setSelectedPosition('qb'); setSelectedStat(""); }} />
            <div class="rad-design"></div>
            <div class="rad-text">Quarterback</div>
          </label><br />
          <label htmlFor='wr' className='option rad-label'>
            <input type='radio' id='wr' className='rad-input' name='position' value='wr' checked={selectedPosition === 'wr'} onChange={() => { setSelectedPosition('wr'); setSelectedStat(""); }} />
            <div class="rad-design"></div>
            <div class="rad-text">Wide Reciever</div>
          </label><br />
          <label htmlFor='rb' className='option rad-label'>
            <input type='radio' id='rb' name='position' className='rad-input' value='rb' checked={selectedPosition === 'rb'} onChange={() => { setSelectedPosition('rb'); setSelectedStat(""); }} />
            <div class="rad-design"></div>
            <div class="rad-text">Running Back</div>
          </label><br />
          <label htmlFor='te' className='option rad-label'>
            <input type='radio' id='te' name='position' className='rad-input' value='te' checked={selectedPosition === 'te'} onChange={() => { setSelectedPosition('te'); setSelectedStat(""); }} />
            <div class="rad-design"></div>
            <div class="rad-text">Tight End</div>
          </label><br />
        </div>
  <div className="card border-3 border-black p-3 text-center TopCard statCard" >
          <p className='boxTitle'>Stat</p>
          {selectedPosition && statOptions[selectedPosition] ? (
            statOptions[selectedPosition].map(option => (
              <div key={option.value}>
                <label htmlFor={option.value} className='rad-label'>
                <input type="radio" id={option.value} name="stat" className='rad-input' value={option.value} checked={selectedStat === option.value} onChange={() => setSelectedStat(option.value)}/>
                <div class="rad-design"></div>
                <div class="rad-text">{option.label}</div>
                </label>
              </div>
            ))
          ) : (
            <p>Please select a position to see relevant stats.</p>
          )}
        </div>
  <div className="card border-3 border-black p-3 text-center TopCard lineCard" >
          <p className='lineTitle'>Player/Line</p>
          <br />
          <input class="c-checkbox" type="checkbox" id="checkbox"></input>
          <div class="c-formContainer">
            <form class="c-form" action="">
              <input class="c-form__input" required onChange={e => setLineValue(e.target.value)}></input>
              <label class="c-form__toggle" for="checkbox" data-title="Enter Line"></label>
            </form>
          </div>
          <br />
          <br />
          <input class="c-checkbox" type="checkbox" id="checkbox2"></input>
          <div class="c-formContainer">
            <form class="c-form" action="">
              <input class="c-form__input" type='text' value={playerInput} onChange={e => setPlayerInput(e.target.value)} placeholder="Type player name..."list="player-list"></input>
              <label class="c-form__toggle" for="checkbox2" data-title="Enter Player"></label>
            </form>
          </div>
          <datalist id="player-list">
            {selectedPosition === 'qb' && topQBs2024.map(player => (
              <option key={player.espnId} value={player.name} />
            ))}
            {(selectedPosition === 'rb') && topRunningBacks2025.map(player => (
              <option key={player.espnId} value={player.name} />
            ))}
            {(selectedPosition === 'wr' || selectedPosition === 'te') && topRecievers2025.map(player => (
              <option key={player.espnId} value={player.name} />
            ))}
          </datalist>
          <br/>
          <button id='button' onClick={handleSubmit}>
            <div class="button-outer">
            <div class="button-inner">
              <span>Submit</span>
            </div>
          </div>
          </button>          
          </div>
        </div>
        <div className='card border-3 border-black recordBox'>
        <h1 className='text-center recordTitle'>Record</h1>
        <div className='m-3 text-center'>
          <p className='weekTitle'>Overall: 26-31</p>
          <p className='weekTitle'>Last Week: 4-7</p>
        </div>
        <div className="container-flex recordWeeks" >
        <div className='card border-black text-center  m-3 week'>
          <h2 className='m-2 weekTitle'>Week 3 Bets</h2>
          <p className='bet missBet'>Josh Allen Over 233.5 pass yards</p>
          <p className='bet missBet'>De'Von Achane over 39.5 rec yards</p>
          <p className='bet hitBet'>Daniel Jones over 210.5 pass yards</p>
          <p className='bet missBet'>Jordan Love over 1.5 pass Tds</p>
          <p className='bet missBet'>Justin Herbert over 19.5 rush yards</p>
        </div>
        <div className='card border-black text-center m-3 week'>
          <h2 className='m-2 weekTitle'>Week 4 Bets</h2>
          <p className='bet missBet'>JSN over 81.5 Yds</p>
          <p className='bet hitBet'>Kyler Murray over 28.5 Rush yds</p>
          <p className='bet hitBet'>James Cook over 0.5 Td</p>
          <p className='bet hitBet'>Jonnu Smith Under 28.5 yds</p>
          <p className='bet missBet'>Trey Mcbride Under 6.5 Receptions</p>
          <p className='bet missBet'>Justin Jefferson Under 5.5 Receptions</p>
          <p className='bet missBet'>D.K. Metcalf Under 4.5 Receptions</p>
          <p className='bet hitBet'>Puka Nacua Over 7.5 Receptions</p>
          <p className='bet hitBet'>Joe Flacco Under 1.5 Pass Tds</p>
          <p className='bet missBet'>Michael Penix Under 1.5 Pass Tds</p>
          <p className='bet hitBet'>Daniel Jones Over 206.5 Pass yds</p>
          <p className='bet hitBet'>Daniel Jones Under 1.5 Pass Tds</p>
          <p className='bet missBet'>Daniel Jones Under .5 Int</p>
          <p className='bet hitBet'>Jonathon Taylor Over 15.5 Rec Yards</p>
          

        </div>
        <div className='card border-black text-center m-3 week'>
          <h2 className='m-2 weekTitle'>Week 5 Bets</h2>
          <p className='bet hitBet'>Jerry Jeudy under .5 Td</p>
          <p className='bet missBet'>Puka Nacua Over 97.5 rec yards</p>
          <p className='bet hitBet'>Puka Nacua Over 8.5 receptions</p>
          <p className='bet missBet'>Daniel Jones over 229.5 pass yds</p>
          <p className='bet missBet'>Daniel Jones under 1.5 pass td</p>
          <p className='bet hitBet'>Tua Tagovaiola over 1.5 rush yds</p>
          <p className='bet hitBet'>Garrett Wilson over 60.5 rec yds</p>
          <p className='bet hitBet'>Jonathon Taylor over 14.5 rec yds</p>
          <p className='bet missBet'>Dak prescott over 34.5 pass att</p>
          <p className='bet missBet'>Jordan Addison over 42.5 rec yds</p>
          <p className='bet missBet'>Quentin Johnston over 64.5 Rec yds</p>
          <p className='bet hitBet'>J.K. Dobbins Over 53.5 rush yds</p>
          <p className='bet missBet'>Jaxson Dart under 174.5 pass yds</p>
          <p className='bet missBet'>Jaylen Hurts under 191.5 pass yds</p>
          <p className='bet missBet'>Jake Browning under 216.5 pass yds</p>
          <p className='bet hitBet'>Drake Maye Over 221.5 pass yds</p>
          <p className='bet hitBet'>Nick Chubb over 34.5 rush yds</p>
          <p className='bet hitBet'>Woody Marks under 54.5 rush yds</p>
          <p className='bet missBet'>Carson Wentz over 1.5 pass tds</p>
          <p className='bet missBet'>Jaylen Waddle Under 56.5 rec yds</p>
          <p className='bet missBet'>Darren Waller Under 28.5 rec yds</p>
          <p className='bet missBet'>Justin Fields Under 26.5 pass att</p>
          <p className='bet missBet'>Jake Browning under 33.5 pass att</p>
          <p className='bet hitBet'>Geno Smith Over .5 int</p>
          <p className='bet hitBet'>Justin Fields Under .5 int</p>
          <p className='bet hitBet'>Jake browning over .5 int</p>
          <p className='bet hitBet'>Jayden Daniels under .5 int</p>
          <p className='bet '></p>
          </div>
          <div className='card border-black text-center  m-3 week'>
          <h2 className='m-2 weekTitle'>Week 6 Bets</h2>
          <p className='bet hitBet'>Saquon Barkley Under 85.5 rush yds</p>
          <p className='bet hitBet'>Theo Johnson Under 30.5 rec yds</p>
          <p className='bet missBet'>J.K. Dobbins over 70.5 rush yds</p>
          <p className='bet missBet'>Garret Wilson over 56.5 rec yds</p>
          <p className='bet missBet'>Javonte Williams over .5 rush+rec TD</p>
          <p className='bet missBet'>Jaylen Warren Under 48.5 Rush yds </p>
          <p className='bet missBet'>Tony Pollard over 54.5 rush yds</p>
          <p className='bet hitBet'>Chase Brown Under 45.5 rush yds</p>
          <p className='bet hitBet'>Jordan Love over 8.5 Rush yds</p>
          <p className='bet missBet'>Saquon Barkley Over 2.5 Receptions</p>
          <p className='bet missBet'>Garret Wilson Over 4.5 Receptions</p>
          <p className='bet '></p>
          <p className='bet '></p>
          <p className='bet '></p>
          <p className='bet '></p>
          <p className='bet '></p>
          <p className='bet '></p>
          <p className='bet '></p>
          </div>
      </div>
      <div className="container-flex recordWeeks" >
        <div className='card border-black text-center  m-3 week'>
          <h2 className='m-2 weekTitle'>Week 7 Bets</h2>
          <p className='bet'>none placed</p>
        </div>
        <div className='card border-black text-center  m-3 week'>
          <h2 className='m-2 weekTitle'>Week 8 Bets</h2>
          <p className='bet'>none placed</p>
        </div>
        <div className='card border-black text-center  m-3 week'>
          <h2 className='m-2 weekTitle'>Week 9 Bets</h2>
          <p className='bet'>none placed</p>
          </div>
          <div className='card border-black text-center m-3 week'>
          <h2 className='m-2 '>Week 10 Bets</h2>
          <p className='bet'>none placed</p>
          </div>
      </div>
      </div>
      </div>
      
        <div className={`card border-3 border-black p-3 text-center reccomendationCard TopCard ${result === 'Over' ? 'takeOver' : result === 'Under' ? 'takeUnder' : 'DontBet'}`}>
          <p className=' recommendation'>Recommendation</p>
          <br />
          
           <p id='recResult' className={result === 'Over' ? 'hit' : result === 'Under' ? 'miss' : 'recResult'}>{result}</p>
          
          <br/>
          <a href="https://www.espn.com/nfl/stats/team/_/view/defense/table/passing/sort/netTotalYards/dir/desc" target="_blank" rel="noopener noreferrer">Team defense stats</a>
          <h2 className='m-3'>Result</h2>
          <p id='output'>{output}</p>
          <br/>
          <p>margin of error is: {margin}</p>
          <br/>
          <hr/>
          <p>*When using players who have come in for very few snaps in some games, stats may be slightly flawed</p>
          <p>Formulas Used</p>
          <h5>Margin of Error (MOE)</h5>
          <p><strong>Formula:</strong></p>
          <p>MOE = z × (s / √n)</p>

          <h5>Confidence Interval (CI)</h5>
          <p><strong>Formula:</strong></p>
          <p>CI = x̄ ± MOE</p>

          <h5>Variable Definitions:</h5>
          
            <strong>MOE:</strong> Margin of Error
            <strong>z:</strong> z-score corresponding to the desired confidence level (using 70% confidence level, z = 1.70)
            <strong>s:</strong> Sample standard deviation of the QB's passing yards
            <strong>n:</strong> Number of games in the sample
            <strong>x̄:</strong> Sample mean (average) passing yards per game
          
        </div>
      </div>
      
      </div>
    </>
  );
}

export default App
