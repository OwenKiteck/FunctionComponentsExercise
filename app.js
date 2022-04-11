
// 1
function GhostBusters(){
    return `Who you gonna call?`;
}


// 2
function Tagline(){
    return <h1>We're ready to believe you.</h1>
}

// 3
function Janine(){
    return (
        <div>
            <h2>I've quit better jobs than this.</h2>
            <h2>Ghostbusters, whaddya want?</h2>
        </div>
    )
}

// 4
function MassHysteria(){
    return (
        <div>
            <ol>
                <li>Fire and brimstone coming down from the skies! Rivers and seas boiling!</li>
                <li>Forty years of darkness! Earthquakes! Volcanoes!</li>
                <li>The dead rising from the grave!</li>
            </ol>
            <p>Human sacrifice! Dogs and cats, living together! Mass hysteria!</p>
        </div>
    )
}

// 5
function GhostBustersLogo(){
    return <img src="https://cdn.pixabay.com/photo/2016/07/13/18/41/ghostbusters-1515155_1280.jpg" />
}

// 6
function ToolsTalent(){
    const w = "We";
    return (
        <div>
            <h1>{w} had the tools.</h1>
            <h3>{w} had the talent.</h3>
        </div>
    )
}

    // 8 (BONUS)
    function DiceRoll() {
        const die1 = Math.floor(Math.random() * 6 + 1);
        const die2 = Math.floor(Math.random() * 6 + 1);
        // console.log(die1, die2);
        
        let snakeEyes = ``;
        (die1 === 1 && die2 === 1) ? (snakeEyes = `Snake Eyes!`) : (snakeEyes = `${die1} & ${die2}`);
        
        return <h1>{snakeEyes}</h1>
    }


// 7
function GhostBustersAll(){
    return (
        <div>
            <Tagline />
            <DiceRoll />
            <GhostBusters />
            <Janine />
            <MassHysteria />
            <GhostBustersLogo />
            <ToolsTalent />
        </div>
    )
}

ReactDOM.render(
    <GhostBustersAll />,
    document.getElementById(`root`)
)


