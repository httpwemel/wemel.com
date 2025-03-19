const socialButtons = document.getElementsByClassName("Social-Link")
const desktopButtons = document.getElementsByClassName("Desktop-Link")

for (let socialButton of socialButtons)
{
    socialButton.addEventListener("click", () => redirectSocial(socialButton.ariaLabel))
}

for (let desktopButton of desktopButtons)
{
    desktopButton.addEventListener("click", () => redirectInternal(desktopButton.innerHTML))
}

function redirectInternal(value){
    window.location.href = value + ".html";
}

function redirectSocial(ariaLabel){
    switch(ariaLabel){
        case "tiktok":
            window.location.href = "https://" + ariaLabel + ".com/@httpwemel";
            break;
        case "youtube":
            window.location.href = "https://" + ariaLabel + ".com/@wemelkuan";
            break;
        case "linkedin":
            window.location.href = "https://" + ariaLabel + ".com/in/wemel";
            break;
        case "bluesky":
            window.location.href = "https://bsky.app/profile/wemel.swifties.social";
            break;
        default:
            window.location.href = "https://" + ariaLabel + ".com/httpwemel";
            break;
    }
}


