//TODO: revector this in to a json file
let streamingServices = ["Spotify", "Apple", "Youtube"];
let Images = ["./Images/Spotify.jpeg", "./Images/AppleMusic.jpeg", "./Images/youtube.jpeg"]
let ImagesAlt = ["Spotify logo", "Apple music logo", "Youtube logo"]



function generateLink(songName, platform) {
    
    var spotifyLink = "https://open.spotify.com/search/";
    var appleMusicLink = "https://music.apple.com/us/search?term=";
    var youtubeLink = "https://www.youtube.com/results?search_query=";
    
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

function DrawPage() {
    ClearLinksContainer();
    let LinkContainer = document.getElementById("linksContainerForDivs");
    
    for (let i = 0; i < streamingServices.length; i++) {
        //Create container for link
        var container = document.createElement("div");
        container.className = "Container";
        LinkContainer.appendChild(container);
        
        //Create link
        var link = document.createElement("a");
        link.href = generateLink(document.getElementById("inputField").value.toString(), streamingServices[i]);
        link.id = streamingServices[i];
        container.appendChild(link);
        
        //Create image
        var image = document.createElement("img");
        image.src = Images[i];
        image.alt = ImagesAlt[i];
        link.appendChild(image);
    }
}

function ClearLinksContainer() {
    document.getElementById("linksContainerForDivs").innerHTML = "";
}