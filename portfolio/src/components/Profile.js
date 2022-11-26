import { useEffect,useState } from "react";


const Profile = ()=>{

  const [Result,setResult]=useState({});

  useEffect(()=>{
     
       async function fetchData(){
           const result = await fetch('https://api.github.com/users/lyev19');
           const profile = await result.json();

           if (profile){
               setResult(profile);
           }
       }
       fetchData();


  },[])

   console.log(Result);

    return(

      <div className="Profile-container">
           <div className="Profile-separator">
                    
                    </div>
          <div className="Profile-pic-container">
                <div className="Profile-pic">
                  <img className="Pic"src={Result.avatar_url} /></div> 
                <div className="Profile-description"> Lyev19</div> 
          </div>
          <div className="Profile-separator">
                    
          </div>
          <div className="Profile-info">
              <div className="Profile-text">
                Hello im a dev from Argentina im proficient in : 
                 
                  <ul className="Profile-list">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>mySql (relational databases in gral)</li>
                  </ul>

                 
                 
              </div>
          </div>
          <div className="Profile-separator">
                    
          </div>
      </div>

    )
}

export default Profile;