function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./movies.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className = "container-fluid" id="heading">
            <h1>Horror Films</h1>
        </div>
        <div className="container" id="movieContainer">   
            {loaded && data.movies.map((movie,i) => <Movie data={movie} key={i}/>)}
        </div>        
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
