const genre = JSON.parse(genres);
const song = JSON.parse(songs);
const artist = JSON.parse(artists);

document.addEventListener("DOMContentLoaded", function() {
al = document.querySelector("#artistS").appendChild(makeSelectA(artist));
gl = document.querySelector("#genreS").appendChild(makeSelectG(genre));

const t = document.querySelector("table");

populateTable(song);


function populateTable(song)
{    

    for(s of song)
    {
        const tr = document.createElement("tr");
        tr.setAttribute("id", "songTr")
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
    }
    
const liButton = document.querySelectorAll("#songTr");

for (let li of liButton) {
    li.addEventListener('click', function(e) {
       let aside = document.querySelector('aside');
        aside.classList.toggle("hidden");
        alert("test");
    }
)}


}
const liButton = document.querySelectorAll("#songTr");

for (let li of liButton) {
    li.addEventListener('click', function(e) {
       let aside = document.querySelector('aside');
        aside.classList.toggle("hidden");
        alert("test");
    }
)}
    function deleteTableData(song)
    {
        console.log(song);
        for(let i = 1; i <= song.length; i++)
        {
             t.deleteRow(1);
        }
    }

const btns = document.querySelector("#titleBtn");
    btns.addEventListener("click", function(){
       
       const sortedTitle = song.sort((a,b) => a.title < b.title? -1:1);
        deleteTableData(song);
       
       populateTable(sortedTitle);
    });

    const btns2 = document.querySelector("#artistBtn");
    btns2.addEventListener("click", function(){
       const sortedArtist = song.sort((a,b) => a.artist.name < b.artist.name? -1:1);
       deleteTableData(song);
       
       populateTable(sortedArtist);
       
    });

    
    const btns3 = document.querySelector("#genreBtn");
    btns3.addEventListener("click", function(){
       const sortedGenre = song.sort((a,b) => a.genre.name < b.genre.name? -1:1);
       console.log(sortedGenre);
       deleteTableData(song);
       populateTable(sortedGenre);
       
    });

    const btns4 = document.querySelector("#popBtn");
    btns4.addEventListener("click", function(){
        console.log(song);
       const sortedPop = song.sort((a,b) => 
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
       deleteTableData(song);
       populateTable(sortedPop.reverse());
       
    });

    const btns5 = document.querySelector("#yearBtn");
    btns5.addEventListener("click", function(){
        console.log(song);
       const sortedYear = song.sort((a,b) => 
      { if(a.year < b.year)
       {
        return -1;
       }
       if (a.year > b.year)
       {
        return 1;
       }
       
    });
       deleteTableData(song);
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

