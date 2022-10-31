// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
const data = [{
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        prodName: "Random",
        _id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        prodName: "Bawaal",
        _id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        prodName: "Happy man",
        _id: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        prodName: "Title 4",
        _id: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt molestias a nostrum assumenda qui quis dolorem quasi sint praesentium porro quo expedita sunt vero neque, quod veniam iste laboriosam?",
    },
];

function App() {
    const title = "How are You";
    return ( 
    <div className = 'container' >
        <h1> { title } </h1> 
        <br/>
        <div className = 'row'>
            {data.map((val,i)=>{
                return(
                <div className="col-12 col-sm-6 col-md-4">
                    <Card values={val}/>
                </div> 
                );   
            })}
        </div> 
        <h> Hello World Hello Yash Saransh Chauhan </h>  
        </div>   
    );
}
export default App;