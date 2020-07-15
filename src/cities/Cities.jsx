import React from "react"
import ReactDOM from "react-dom"

export class Cities extends React.Component{
    state={
        cityName: "",
        cityUrl: "",
        addedCities:[]
    };
    nameHandle = (e) => {
        this.setState({
            cityName: e.target.value,
        });
    }
    urlHandle = (e) => {
        this.setState({
            cityUrl: e.target.value,
        });
    }
    add = (e) => {
        e.preventDefault();
        
        const newCity = {cityName:this.state.cityName,cityUrl:this.state.cityUrl,likes:0}
        const newArr = this.state.addedCities;
        newArr.push(newCity);
        this.setState({
            addedCities:newArr,
        })
        function Card(props){
            return(
            <div>
                <h1>{props.cityName}</h1>
               <img src={props.cityUrl} alt=""/>
               <br/>
               <button onClick={props.addLike} >Like</button> 
                <p>likes:{props.likes}</p>
            </div>
            )  
    }
    const currentCityIndex = this.state.addedCities.findIndex((city)=>{
return city.cityName === this.state.cityName
    })
        
        ReactDOM.render(<Card cityName={this.state.addedCities[currentCityIndex].cityName} cityUrl={this.state.addedCities[currentCityIndex].cityUrl} likes={this.state.addedCities[currentCityIndex].likes} addLike={()=>{
            this.addLike(this.state.addedCities[currentCityIndex]);
        }} />,document.getElementById('container'));

     }
     addLike = (city) => {
        const newArr = this.state.addedCities;
        console.log(newArr);
       const cityIndex = newArr.findIndex((addedCity)=>{
            return addedCity.cityName === city.cityName;
        })
        
        newArr[cityIndex].likes += 1;
        this.setState({
            addedCities:newArr
        })
    }

    render(){
     
        return(
            <div>
                <h1>City book</h1>
         <form >
             <input onChange={this.nameHandle} type="text" id="nameOfCity" placeholder='City name' />
             <br/>
             <input onChange={this.urlHandle} type="text" id="cityImg" placeholder='City image' />
             <br/>
             <button onClick={this.add} >Add</button>
         </form>
         <div id="container" ></div>
         </div>
        )       
}

}

