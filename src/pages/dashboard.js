import MapChart from "../components/mapChart";

const Dashboard = ()=>{
    
    return (
        <div className="row"> 
            <div className="col-md-9">

        <MapChart/>
            </div>
            <div className="col-md-3">
                <button className="btn btn-success">Click me</button>
            </div>
        </div>
      );

}

export default Dashboard;