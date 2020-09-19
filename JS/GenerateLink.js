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
    let container = document.getElementById("linksContainer");

    let streamingServices = ["Apple", "Spotify", "Youtube"];

    for (let i = 0; i < streamingServices.length; i++) {
        var link = document.createElement("a");
        link.href = generateLink(document.getElementById("inputField").value.toString(), streamingServices[i]);
        link.innerHTML = streamingServices[i];
        container.appendChild(link);
    }
}