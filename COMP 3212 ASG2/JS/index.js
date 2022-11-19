const genre = JSON.parse(genres);
const song = JSON.parse(songs);

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

function clearTable(tr)
{
    while(tr.hasChildNodes())
        {
            tr.removeChild(tr.firstChild);
        }
}
