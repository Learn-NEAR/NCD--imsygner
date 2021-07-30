const Instagram = require("instagram-web-api");
//const { username, password } = {process.env};
const username = "chinos_love29@hotmail.com";
const password = "j29s6a93";
const client = new Instagram({ username, password });

function getPublicURL(shortcode) {
  client.login().then(() => {
    const media = client.getMediaByShortcode({
      shortcode,
    });
    console.log(media.display_url);
  });
}
modules.export = getPublicURL;

//https://www.instagram.com/p/CRkj2Q3rZ7lTmBy_J7wVZGyPyVDlWzRPTqr_B40/?utm_medium=copy_link
