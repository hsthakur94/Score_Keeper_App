let score = 0;
let wicket = 0;
let hit = 0;
const ballWiseRes = [];
let inputRef  = React.createRef();

function addScore(num){
   hit = num;
    rootElement.render(<App />);
}
function addWicket(){
   hit = "W";
    rootElement.render(<App />);
    }

const ScoreKeeper = ()=>{
    return (
        <>
        <h2>Score Keeper</h2>
        <h3>Score : {score}/{wicket}</h3>
        <div>
        <button onClick = {()=> addScore(0)}>0</button>
        <button onClick = {()=> addScore(1)}>1</button>
        <button onClick = {()=> addScore(2)}>2</button>
        <button onClick = {()=> addScore(3)}>3</button>
        <button onClick = {()=> addScore(4)}>4</button>
        <button onClick = {()=> addScore(5)}>5</button>
        <button onClick = {()=> addScore(6)}>6</button>
        <button onClick = {addWicket}>wicket</button>
        </div>
        </>
    );
}

 const DisplayRes = () => (
    <div>
        {ballWiseRes.map((res,index) => (
        <>
        
        {index % 6 == 0 ? <br/> : null}
        <span key = {index}>{res === 0 ? <strong>.</strong> : res}&nbsp;&nbsp;</span>
        </>
        ))}
        
    </div>
 );
 
 function handleSubmit(event){
    if(hit == "W" && wicket !== 10){
        wicket += 1;
    }
    else if(wicket !== 10) {
        score += hit;
    }
    event.preventDefault();
    ballWiseRes.unshift(
        <span>{`${hit}, ${inputRef.current.value}`}</span>
    );
    hit = 0;
    inputRef.current.value = "";
    rootElement.render(<App />);
 }
            
    const Form = () => {
        return <form onSubmit = {handleSubmit}>
                <input value = {hit}/><br/>

                <input ref = {inputRef} placeholder ="add a comment.."/><br/>
                {/* ref is an attribute */}

                <button>Submit</button>
            </form>
    }

        function App(){
        return (
            <><hr/>  

            <ScoreKeeper/><br/>           
            <Form/>
            {ballWiseRes.map((res,index)=> (
            <p>{res}</p> ))}   
            <hr/>
            </>
        );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);