import React, { useEffect , useState} from 'react'
import axios from 'axios'

const Home = () => {

  const[token,setToken]=useState("");
  const[project,setProject] = useState([]);
  const[task,setTask] = useState([]);
  const[status,setStatus] = useState([])
  const[team,setTeam] = useState([])
  const[loading,setLoading]= useState(false)
  
  const projects = async () => {
    try {
      await axios.get("http://localhost:8080/projects",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,
          
        },
        
      })
      .then((res) => {
        // console.log(res.data[0].name)
        setProject(res.data)
        setLoading(true)
      });
    } catch (err) {
      console.log(err);
    }
  };

  const projectTasks = async () => {
    try {
      await axios.get("http://localhost:8080/taskassigned",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,
          
        },
        
      })
      .then((res) => {
        // console.log(res.data[0].empname)
        
        setTask(res.data)
        setLoading(true)

      });
    } catch (err) {
      console.log(err);
    }
  };

  const projectStatus = async () => {
    try {
      await axios.get("http://localhost:8080/projectstatus",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,
          
        },
        
      })
      .then((res) => {
        // console.log(res.data[0].empname)
        
        setStatus(res.data);
        setLoading(true)
        

      });
    } catch (err) {
      console.log(err);
    }
  };

  const projectTeam = async () => {
    try {
      await axios.get("http://localhost:8080/jirateam",{
        headers: {
          'Content-Type': 'application/json',
          "Authorization":token,
          
        },
        
      })
      .then((res) => {
       setTeam(res.data);
       setLoading(true)

      });
    } catch (err) {
      console.log(err);
    }
  };
  

const currentUser = async () => {
  try {
    await axios.get("http://localhost:8080/user")
    .then((res) => {
      if(res.data.accessToken === undefined && res.data.accessToken ===""){
        setToken(false)
      }
      setToken(res.data.accessToken)
      // console.log(res)
      console.log("Token: "+ res.data.accessToken)
    });
  } catch (err) {
    console.log(err);
  }
};

useEffect(()=>{
  currentUser();
 
},[])


  setTimeout(()=>{
    projects();
    projectTasks();
    projectTeam();
    projectStatus();
  
  },1000)


  return (
    <div className='components'>
      {loading?
       (<><h4>JIRA DASHBOARD</h4>
       <div className="container-fluid">
         <div className="row dashboard-row">
             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
               <h4>Projects</h4>
              {loading ? project.map((val,index)=>{
                  return(
                    <>
                    <hr />
                    <p>Project Name: {val.name}, <br></br> Project ID: {val.projectId}, <br></br> Project Issue: {val.issueDate}, <br></br>  Project Deadline: {val.deadline}</p>
                    </>
                  )
                }) : (
                  <p>Loading</p>
              )}
             </div>
             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
             <h4>Team</h4>
             {loading? team.map((val,index)=>{
                return(
                  <>
                  <hr />
                  <p>Team Name: {val.teamName}, <br></br> Team ID: {val.teamId}, <br></br> Team Members: {val.teamMembers}</p>
                  </>
                )
              }): <p>Loading...</p>}
             </div>
            
         </div>
         <div className="row dashboard-row">
         <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
             <h4>Task Assigned</h4>
             {loading? task.map((val,index)=>{
                return(
                  <>
                  <hr />
                  <p>Employee Name: {val.empname}, <br></br> Email: {val.projectId}, <br></br>Project ID: {val.projectId}<br></br> Project Assigned: {val.assignedDate}, <br></br>  Project Deadline: {val.deadline}</p>
                  </>
                )
              }): <p>Loading...</p>}
             </div>
            
             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
             <h4>Project Status</h4>
             {loading? status.map((val,index)=>{
                return(
                  <>
                  <hr />
                  <p>Project Name: {val.projectname}, <br></br> Project ID: {val.projectId}, <br></br> Industry: {val.industry} <br></br> Completed: {val.completedDate}, <br></br>  Completed By: {val.completedBy}</p>
                  </>
                )
              }): <p>Loading...</p>}
             </div>
            
         </div>
         <div className="row dashboard-row">
             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
               <h4>Projects</h4>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, incidunt commodi architecto reprehenderit iure unde necessitatibus odit sint cum! Neque, dicta excepturi corporis voluptatibus tempore distinctio inventore fugit totam est.</p>
             </div>
             <div className="col-xs-12 col-sm-6 col-md-6 dashboard-col">
             <h4>Task Assigned</h4>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, incidunt commodi architecto reprehenderit iure unde necessitatibus odit sint cum! Neque, dicta excepturi corporis voluptatibus tempore distinctio inventore fugit totam est.</p>
 
             </div>
             
         </div>
       </div></>): <p>Loading</p> 
      }
    </div>
  )
}

export default Home