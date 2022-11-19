const genre = JSON.parse(genres);
const song = JSON.parse(songs);
const artist = JSON.parse(artists);


forms = document.querySelector("form").appendChild(makeSelectA(artist));
forms2 = document.querySelector("form").appendChild(makeSelectG(genre));

const t = document.querySelector("table");

const tr = document.createElement("tr");

function populateTable(songz)
{    

    for(s of songz)
    {
        const tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
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
}

    

const btns = document.querySelector("#titleBtn");
    btns.addEventListener("click", function(){
        clearTable(tr);
       const sortedTitle = song.sort((a,b) => a.title < b.title? -1:1);
       console.log(sortedTitle);
       
       populateTable(sortedTitle);
       
    });

    const btns2 = document.querySelector("#artistBtn");
    btns2.addEventListener("click", function(){
        clearTable(tr);
       const sortedArtist = song.sort((a,b) => a.artist.name < b.artist.name? -1:1);
       console.log(sortedArtist);
       
       populateTable(sortedArtist);
       
    });


    const btns3 = document.querySelector("#genreBtn");
    btns3.addEventListener("click", function(){
        clearTable(tr);
       const sortedGenre = song.sort((a,b) => a.genre.name < b.genre.name? -1:1);
       console.log(sortedGenre);
       
       populateTable(sortedGenre);
       
    });



function clearTable(tr)
{
    while(tr.hasChildNodes())
        {
            tr.removeChild(tr.firstChild);
        }
}


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





