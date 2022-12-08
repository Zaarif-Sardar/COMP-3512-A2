const genre = JSON.parse(genres);
const artist = JSON.parse(artists);
const url = "https://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php";


document.addEventListener("DOMContentLoaded", function() {
const value = localStorage.getItem("songz");
if(!value)
{
fetch(url)
.then(resp => resp.json())
.then(song2 => { 

    const jsonData = JSON.stringify(song2);
    localStorage.setItem("songz",jsonData);
    const data = JSON.parse(jsonData);
    processSongs(data);
    
});
}
else
{
    const data = JSON.parse(value);
    processSongs(data); 
}
function processSongs(data){
    playlistData = []; 
    addToPlaylist = [];
    al = document.querySelector("#artistS").appendChild(makeSelectA(artist));
     gl = document.querySelector("#genreS").appendChild(makeSelectG(genre));
     
     const t = document.querySelector("table");
     const t2 = document.querySelector("#table2");

     let reset = document.querySelector('#resetFilters');
     reset.addEventListener("click", function() 
     {
         document.querySelector("form").reset();
         
     });
     const sortedTitle = data.sort((a,b) => a.title < b.title? -1:1);
     populateTable(sortedTitle,'ADD',t);
     
     function deleteTableData(data)
 {
     console.log(data);
     for(let i = 1; i <= data.length; i++)
     {
          t.deleteRow(1);
     }
 }
 const liButton = document.querySelectorAll("#songTr");

 const btns0 = document.querySelector("#titleBtn");
 btns0.addEventListener("click", function(){
     clearBtn();
    btns0.style.background = '#CBC3E3';
    const sortedTitle = data.sort((a,b) => a.title < b.title? -1:1);
     deleteTableData(data);
    
     populateTable(sortedTitle,"ADD",t);
 });

 const btns1 = document.querySelector("#artistBtn");
 btns1.addEventListener("click", function(){
     clearBtn();
     btns1.style.background = '#CBC3E3';
    const sortedArtist = data.sort((a,b) => a.artist.name < b.artist.name? -1:1);
    deleteTableData(data);// maybe change
    
    populateTable(sortedArtist,"ADD",t);
    
 });

 
 const btns2 = document.querySelector("#genreBtn");
 btns2.addEventListener("click", function(){
     clearBtn();
     btns2.style.background = '#CBC3E3';
    const sortedGenre = data.sort((a,b) => a.genre.name < b.genre.name? -1:1);
    console.log(sortedGenre);
    deleteTableData(data);
    populateTable(sortedGenre,"ADD",t);
    
 });

 const btns3 = document.querySelector("#popBtn");
 btns3.addEventListener("click", function(){
     clearBtn();
     btns3.style.background = '#CBC3E3';
    const sortedPop = data.sort((a,b) => 
   { if(a.details.popularity < b.details.popularity)
    {
     return -1;
    }
    if (a.details.popularity > b.details.popularity)
    {
     return 1;
    }
    
 });
    console.log(sortedPop);
    deleteTableData(data);
    populateTable(sortedPop.reverse(),"ADD",t);
    
 });

 const btns4 = document.querySelector("#yearBtn");
 btns4.addEventListener("click", function(){
     clearBtn();
     btns4.style.background = '#CBC3E3';
     console.log(data);
    const sortedYear = data.sort((a,b) => 
   { if(a.year < b.year)
    {
     return -1;
    }
    if (a.year > b.year)
    {
     return 1;
    }
    
 });
   deleteTableData(data);
   populateTable(sortedYear.reverse(),"ADD",t);
 });

 function populateTable(stuff,option,table)
 {    
     
 
     for(s of stuff)
     {
        addBtn = document.createElement("button");
        addBtn.setAttribute('type','button');
        addBtn.setAttribute('id', option+'Btn');
        addBtn.setAttribute('data-id',s.song_id);
        addBtn.textContent = option;
         var tr = document.createElement("tr");
          tr.setAttribute("id", "songTr");
         td1 = document.createElement("td");
         td2 = document.createElement("td");
         td3 = document.createElement("td");
         td4 = document.createElement("td");
         td5 = document.createElement("td");
         td1.textContent = s.title;
         td2.textContent = s.artist.name;
         td3.textContent = s.year;
         td4.textContent = s.genre.name;
         td5.textContent = s.details.popularity;
         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.appendChild(td3);
         tr.appendChild(td4);
         tr.appendChild(td5);
         tr.appendChild(addBtn);

         table.appendChild(tr);
         td1.setAttribute('data-id',s.song_id);
         td2.setAttribute('data-id',s.song_id);
         td3.setAttribute('data-id',s.song_id);
         td4.setAttribute('data-id',s.song_id);
         td5.setAttribute('data-id',s.song_id);
         tr.setAttribute('data-id',s.song_id);
     }


 
}
     // When user clicks a song from the table to add 
     
     t.addEventListener('click', function(e) {
        const addDiv = document.querySelector('#popUp')
           console.log(e.target.nodeName);
        if(e.target && e.target.nodeName == 'BUTTON' && e.target.textContent == 'ADD')
        {
            let song_id = e.target.getAttribute('data-id');
            const songFound = data.find(song => song.song_id == song_id);
            console.log(songFound);
            playlistData.push(songFound);
            populateTable(playlistData,"REMOVE",t2);
            playlistData = [];
            addDiv.classList.toggle("hidden2");

            setTimeout(function () { 
                popup = document.querySelector('#popup');
                addDiv.classList.toggle("hidden2");
                }, 1000);

        }
       
        if(e.target && e.target.nodeName == 'TD'){
        let aside = document.querySelector('#somethingView');
         aside.classList.toggle('hidden');
         let songview = document.querySelector("#songView");
         songview.classList.toggle('hidden');
         const playlist = document.querySelector("#playlist");
         playlist.classList.toggle('hidden');
         let closeView1 = document.querySelector("#closeView1");
         closeView1.classList.toggle('hidden');
         let sHeader = document.querySelector('#sHeader');
         let siHeader = document.querySelector('#siHeader');
         let pHeader = document.querySelector('#pHeader');
         sHeader.classList.toggle('hidden');
         siHeader.classList.toggle('hidden');


         let songClickedId = e.target.getAttribute('data-id');
         

         console.log(songClickedId);
         const songFound = data.find(song => song.song_id == songClickedId);
         console.log(songFound);

          document.querySelector("div h2").textContent = songFound.title;
          let artType = artist.find(a => a.name == songFound.artist.name);
          console.log(artType);
          document.querySelector("p").textContent ='By: ' + songFound.artist.name + ' - ' + artType.type;
          document.querySelector("#gyd").textContent = 'Genre:'+ songFound.genre.name +  ' Duration: ' + (songFound.details.duration/60).toFixed(0) + 'm' + (songFound.details.duration%60).toFixed(0) + 's';

          

          createSongDetails(songFound);}
     
 });
 /*Code for playlist table.  */
 t2.addEventListener('click', function(e) {
    
    if(e.target && e.target.nodeName == 'BUTTON' && e.target.textContent == 'REMOVE')
    {
        let song_id = e.target.getAttribute('data-id');

        console.log(playlistData);

        songToDel = playlistData.indexOf(song_id);




        for (let p of playlistData) {
            console.log("hello");
        }
        console.log(songToDel);
        t2.deleteRow(songToDel);
        //const songFound = playlistData.find(song => song.song_id == song_id);
       // playlistData = playlistData.filter(song => song.song_id !== songFound.song_id);
       // console.log(playlistData);
        //deleteTableData(playlistData,t2);
        //populateTable(playlistData,"REMOVE",t2);
        
    

    }

    if(e.target && e.target.nodeName == 'TD'){
    
     let songview = document.querySelector("#songView");
     songview.classList.toggle('hidden');
    
     
     let siHeader = document.querySelector('#siHeader');
     let pHeader = document.querySelector('#pHeader');
     siHeader.classList.toggle('hidden');
     pHeader.classList.toggle('hidden');
     let closeView1 = document.querySelector("#closeView1");
         closeView1.classList.toggle('hidden');



     let songClickedId = e.target.getAttribute('data-id');
     
     console.log(e.target.nodeName);
     console.log(songClickedId);
     const songFound = data.find(song => song.song_id == songClickedId);
     console.log(songFound);

      document.querySelector("div h2").textContent = songFound.title;
      let artType = artist.find(a => a.name == songFound.artist.name);
      console.log(artType);
      document.querySelector("p").textContent ='By: ' + songFound.artist.name + ' - ' + artType.type;
      document.querySelector("#gyd").textContent = 'Genre:'+ songFound.genre.name +  ' Duration: ' + (songFound.details.duration/60).toFixed(0) + 'm' + (songFound.details.duration%60).toFixed(0) + 's';

      

      createSongDetails(songFound);}
 
});


 // When user wants to close single view page
     closeView1.addEventListener('click', function() {
         playlist.classList.toggle('hidden');
         let songview = document.querySelector("#songView");
         songview.classList.toggle('hidden');
         let aside = document.querySelector('#somethingView');
         aside.classList.toggle('hidden');
         closeView1.classList.toggle('hidden');
         sHeader.classList.toggle('hidden');
         siHeader.classList.toggle('hidden');
         

     }
 
     
     )

     // When user clicks playlist button
     playlist.addEventListener('click', function() {
         playlist.classList.toggle('hidden');
         let aside = document.querySelector('#somethingView');
         aside.classList.toggle('hidden');
         let playlistView = document.querySelector('#playlistView');
         playlistView.classList.toggle('hidden');
         let closeView2 = document.querySelector("#closeView2");
         closeView2.classList.toggle('hidden');
         sHeader.classList.toggle('hidden');
         pHeader.classList.toggle('hidden');

     }
     
     )

        // When user wants to close playlist view page
        closeView2.addEventListener('click', function() {
         playlist.classList.toggle('hidden');
         playlistView.classList.toggle('hidden');
         let aside = document.querySelector('#somethingView');
         aside.classList.toggle('hidden');
         closeView2.classList.toggle('hidden');
         sHeader.classList.toggle('hidden');
         pHeader.classList.toggle('hidden');

     }
        )



     function createSongDetails(songs)
     {
                 li0 = document.querySelector('#detail0');
                  li1 = document.querySelector('#detail1');
                  li2 = document.querySelector('#detail2');
                  li3 = document.querySelector('#detail3');
                  li4 = document.querySelector('#detail4');
                  li5 = document.querySelector('#detail5');
                  li6 = document.querySelector('#detail6');
                  li7 = document.querySelector('#detail7');

              
                  li1.textContent = ("BPM: " + songs.details.bpm);
                  li2.textContent = ("Energy: " + songs.analytics.energy);
                  li3.textContent = ("Danceability: " + songs.analytics.danceability);
                  li4.textContent = ("Liveness: " + songs.analytics.liveness);
                  li5.textContent = ("Valence: " + songs.analytics.valence);
                  li6.textContent = ("Acousticness: " + songs.analytics.acousticness);
                  li7.textContent = ("Speechiness: " + songs.analytics.speechiness);
                  li0.textContent = ("Popularity: " + songs.details.popularity);

                  let chartStatus = Chart.getChart("myChart"); 
                  if (chartStatus != undefined) {
                  chartStatus.destroy();
                      }


                const ctx = document.getElementById('myChart');
               const oldChart = new Chart(ctx, {
                  type: 'radar',
                  data: {
                    labels: ['energy', 'danceability', 'liveness', 'valence', 'acousticnes', 'speechiness'],
                    fontColor: ['#FFFFFF'],
                    datasets: [{
                      label: 'Radar Chart',
                      backgroundColor: 'rgba(00, 255, 00, 0.1)',
                      borderColor: 'rgb(255, 99, 132)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      Color: '#000000',
                      pointHoverBorderColor: 'rgb(255, 99, 132)',
                      data: [songs.analytics.energy, songs.analytics.danceability, songs.analytics.liveness, songs.analytics.valence, songs.analytics.acousticness, songs.analytics.speechiness],
                      borderWidth: 2,

                    }]
                  }



                });


   }

     // credits button showing group members names and hides after 5seconds
     document.querySelector('#credits').addEventListener("mouseover", function() {
         popup.classList.toggle("hidden");
         setTimeout(function () { 
         popup = document.querySelector('#popup');
         popup.classList.toggle("hidden");
         }, 5000);
     });
     
 function deleteTableData(data)
 {
     console.log(data);
     for(let i = 1; i <= data.length; i++)
     {
          t.deleteRow(1);
     }
 }
 function clearBtn()
 {
     const btns = document.querySelectorAll(".btn");

     for(let btn of btns)
     {
         btn.style.background = '#5D6AA8';
     }
 }




 function makeSelectA(artistz) {
    const select = document.createElement("select");
    select.setAttribute("id", "artistSelect");
    for (let a of artistz) {
        const option = document.createElement("option");
        option.textContent = a.name;
        option.setAttribute("a.name", a.id);
        select.appendChild(option);
    }
    return select;
   }
   
   function makeSelectG(genrez) {
    const select = document.createElement("select");
    select.setAttribute("id", "genreSelect");
    for (let g of genrez) {
        const option = document.createElement("option");
        option.textContent = g.name;
        option.setAttribute("g.name", g.id);
        select.appendChild(option);
    }
    return select;
   }
   
   
   
   
   // form search functions
   const form = document.querySelector('form')
   const radioButtons = document.querySelectorAll('input[name="s_type"]');
   form.addEventListener("submit", (e) => {
       e.preventDefault();
       let selectedButton;
       for (const radioButton of radioButtons) {
           if (radioButton.checked) {
               selectedButton = radioButton.value;
           }
        console.log(selectedButton);
       }
   
       //if searching with title
       if(selectedButton == 'title'){
           search = document.querySelector("#titleSearch");
           searchInput = search.value.toLowerCase();

           deleteTableData(data)
           const searchFiltered = [];

                let filtered = data.filter(function(e)  {
                    return Object.values(e).some((value) => {
                        return value.toString().toLowerCase().includes(searchInput);
                    });
                });



                populateTable(filtered,"ADD",t);
            }


        
        
        
       
   
   
       //if searching with artist and select box
       else if (selectedButton == 'artist') {
           select = document.querySelector("#artistSelect");
           console.log(select.value);
           artistInput = select.value;
   
           deleteTableData(data);
           const artistFiltered = [];
   
   
           for (d of data) {
               if (artistInput == d.artist.name) {
                   artistFiltered.push(d);
               }
           }
           populateTable(artistFiltered,"ADD",t);
       }
   
       // if searching with genre and select box
        else if (selectedButton == 'genre') {
           select = document.querySelector("#genreSelect");
           console.log(select.value);
           genreInput = select.value;
   
           deleteTableData(data);
           const genreFiltered = [];
   
           for (d of data) {
               if (genreInput == d.genre.name) {
                   genreFiltered.push(d);
               }
           }
       populateTable(genreFiltered,"ADD",t);
       }
   
    });
     
   
}
        });
