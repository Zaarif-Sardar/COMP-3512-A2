const genre = JSON.parse(genres);
const artist = JSON.parse(artists);
const url = "https://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php";


document.addEventListener("DOMContentLoaded", function() {
fetch(url)
.then(resp => resp.json())
.then(song2 => { 

    
    
       al = document.querySelector("#artistS").appendChild(makeSelectA(artist));
        gl = document.querySelector("#genreS").appendChild(makeSelectG(genre));
        
        const t = document.querySelector("table");

        let reset = document.querySelector('#resetFilters');
        reset.addEventListener("click", function() 
        {
            document.querySelector("form").reset();
        });

        for(s of song2)
        {
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
            console.log(s.title);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            t.appendChild(tr);
            td1.setAttribute('data-id',s.song_id);
            td2.setAttribute('data-id',s.song_id);
            td3.setAttribute('data-id',s.song_id);
            td4.setAttribute('data-id',s.song_id);
            td5.setAttribute('data-id',s.song_id);
            
        }
        console.log(td1.getAttribute('data-id'));
        
        
        function populateTable(song2)
        {    
            
        
            for(s of song2)
            {
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
                console.log(s.title);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                t.appendChild(tr);
                td1.setAttribute('data-id',s.song_id);
                td2.setAttribute('data-id',s.song_id);
                td3.setAttribute('data-id',s.song_id);
                td4.setAttribute('data-id',s.song_id);
                td5.setAttribute('data-id',s.song_id);
                tr.setAttribute('data-id',s.song_id);
            }


        }
            
        const liButton = document.querySelectorAll("#songTr");
        
// When user clicks a song from the table
        for (let li of liButton) {
            li.addEventListener('click', function(e) {
               let aside = document.querySelector('#somethingView');
                aside.classList.toggle('hidden');
                let songview = document.querySelector("#songView");
                songview.classList.toggle('hidden');
                let playlist = document.querySelector("#playlist");
                playlist.classList.toggle('hidden');
                let closeView1 = document.querySelector("#closeView1");
                closeView1.classList.toggle('hidden');


           


                let songClickedId = e.target.getAttribute('data-id');
                
                console.log(e.target.nodeName);
                console.log(songClickedId);
                const songFound = song2.find(song => song.song_id == songClickedId);
                console.log(songFound);

                 document.querySelector("div h2").textContent = songFound.title;
                 let artType = artist.find(a => a.name == songFound.artist.name);
                 console.log(artType);
                 document.querySelector("p").textContent ='By: ' + songFound.artist.name + ' - ' + artType.type;
                 document.querySelector("#gyd").textContent = 'Genre:'+ songFound.genre.name +  ' Duration: ' + (songFound.details.duration/60).toFixed(0) + 'm' + (songFound.details.duration%60).toFixed(0) + 's';

                 

                 createSongDetails(songFound);
        }

        )}
    // When user wants to close single view page
        closeView1.addEventListener('click', function() {
            playlist.classList.toggle('hidden');
            let songview = document.querySelector("#songView");
            songview.classList.toggle('hidden');
            let aside = document.querySelector('#somethingView');
            aside.classList.toggle('hidden');
            closeView1.classList.toggle('hidden');

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

        }
        
        )

           // When user wants to close playlist view page
           closeView2.addEventListener('click', function() {
            playlist.classList.toggle('hidden');
            playlistView.classList.toggle('hidden');
            let aside = document.querySelector('#somethingView');
            aside.classList.toggle('hidden');
            closeView2.classList.toggle('hidden');

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



                
                      

        }

        // credits button showing group members names and hides after 5seconds
        document.querySelector('#credits').addEventListener("mouseover", function() {
            popup.classList.toggle("hidden");
            setTimeout(function () { 
            popup = document.querySelector('#popup');
            popup.classList.toggle("hidden");
            }, 5000);
        });
        
    function deleteTableData(song2)
    {
        console.log(song2);
        for(let i = 1; i <= song2.length; i++)
        {
             t.deleteRow(1);
        }
    }

const btns = document.querySelector("#titleBtn");
    btns.addEventListener("click", function(){
       
       const sortedTitle = song2.sort((a,b) => a.title < b.title? -1:1);
        deleteTableData(song2);
       
       populateTable(sortedTitle);
    });

    const btns2 = document.querySelector("#artistBtn");
    btns2.addEventListener("click", function(){
       const sortedArtist = song2.sort((a,b) => a.artist.name < b.artist.name? -1:1);
       deleteTableData(song2);
       
       populateTable(sortedArtist);
       
    });

    
    const btns3 = document.querySelector("#genreBtn");
    btns3.addEventListener("click", function(){
       const sortedGenre = song2.sort((a,b) => a.genre.name < b.genre.name? -1:1);
       console.log(sortedGenre);
       deleteTableData(song2);
       populateTable(sortedGenre);
       
    });

    const btns4 = document.querySelector("#popBtn");
    btns4.addEventListener("click", function(){
       const sortedPop = song2.sort((a,b) => 
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
       deleteTableData(song2);
       populateTable(sortedPop.reverse());
       
    });

    const btns5 = document.querySelector("#yearBtn");
    btns5.addEventListener("click", function(){
        console.log(song2);
       const sortedYear = song2.sort((a,b) => 
      { if(a.year < b.year)
       {
        return -1;
       }
       if (a.year > b.year)
       {
        return 1;
       }
       
    });
       deleteTableData(song2);
       populateTable(sortedYear.reverse());
       
    });


function makeSelectA(artistz) {
    const select = document.createElement("select");
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
    for (let g of genrez) {
        const option = document.createElement("option");
        option.textContent = g.name;
        option.setAttribute("g.name", g.id);
        select.appendChild(option);
    }
    return select;
}

        });



const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
e.preventDefault();

let title =  document.getElementById('title').value
console.log(title);

});

});








