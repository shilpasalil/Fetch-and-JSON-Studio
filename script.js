// TODO: add code here
window.addEventListener("load", function(event){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      //  console.log(response);
      response.json().then(function(json) {
        const destination = document.getElementById('container');
        let sortedAstronauts = [];
        //json.sort((a,b) => (a.hoursInSpace>b.hoursInSpace) ?1 :-1)
        json.sort(function(a,b){
            if(a.hoursInSpace>b.hoursInSpace){
                return 1;
            }else{
                return -1;
            }
        })

        
        /*for(let astronautIndex in json){
            if(sortedAstronauts.length<1){
            sortedAstronauts.push(json[astronautIndex]);
            }else{
                if(sortedAstronauts[astronautIndex].hoursInSpace>sortedAstronauts[astronautIndex-1].hoursInSpace){

                }
            }

        }*/

        for(astronautIndex in json){
            console.log(json[astronautIndex]);
            destination.innerHTML += `<div class='astronaut'>
                <div class="bio">
                    <h3>${json[astronautIndex].firstName} ${json[astronautIndex].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[astronautIndex].hoursInSpace}</li>
                        <li id="astronaut${astronautIndex}">Active: ${json[astronautIndex].active}</li>
                        <li>Skills: ${json[astronautIndex].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[astronautIndex].picture}>
                </div>
             ` 
            if(json[astronautIndex].active === true){
                let astronautActive = `astronaut${astronautIndex}`;
                let astronautActiveId = document.getElementById(astronautActive);
                astronautActiveId.style.color = "green";

            }
        }
      destination.innerHTML+=`<p>astronaut count:${json.length}</p>`  
     /* for(let astronautIndex in response){
          console.log(response[astronautIndex]);
      }*/
    })
})
})