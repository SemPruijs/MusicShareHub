//TODO: revector this in to a json file
let streamingServices = ["Spotify", "Apple", "Youtube"];
let Images = ["./Images/Spotify.jpeg", "./Images/AppleMusic.jpeg", "./Images/youtube.jpeg"]
let ImagesAlt = ["Spotify logo", "Apple music logo", "Youtube logo"]


function generateLink(songName, platform) {
    let spotifyLink = "https://open.spotify.com/search/";
    let appleMusicLink = "https://music.apple.com/us/search?term=";
    let youtubeLink = "https://www.youtube.com/results?search_query=";

    spotifyLink += songName.replaceAll(/ /g,"%20");
    appleMusicLink += songName.replaceAll(/ /g,"%20");
    youtubeLink += songName.replaceAll(/ /g,"+");
    
    switch (platform) {
        case "Spotify":
            return spotifyLink;
        case "Apple":
            return appleMusicLink;
        case "Youtube":
            return youtubeLink;
    } 
}

// function GetUrlPutInInputField() {
//     const urlData = new URLSearchParams(window.location.search);
//     const urlInput = urlData.get("input");
//     if (urlInput != null) {
//         document.getElementById("inputField").value = urlInput;
//         DrawResults();
//     }
// }

function GetLink() {
    return "https://sempruijs.github.io/MusicShareHub/?input=" + document.getElementById("inputField").value;
}

function DrawResults() {
    ClearLinksContainer();
    let LinkContainer = document.getElementById("linksContainerForDivs");
    
    for (let i = 0; i < streamingServices.length; i++) {
        //Create container for link
        const container = document.createElement("div");
        container.className = "Container";
        LinkContainer.appendChild(container);
        
        //Create link
        const link = document.createElement("a");
        link.href = generateLink(document.getElementById("inputField").value.toString(), streamingServices[i]);
        link.id = streamingServices[i];
        container.appendChild(link);
        
        //Create image
        const image = document.createElement("img");
        image.src = Images[i];
        image.alt = ImagesAlt[i];
        link.appendChild(image);
    }
    
    // if (document.getElementById("inputField").value !== null) {
    //     window.location.href = GetLink();    
    // }
}

function ClearLinksContainer() {
    document.getElementById("linksContainerForDivs").innerHTML = "";
}

window.onload = function() {
    // GetUrlPutInInputField();
};