require("dotenv").config();

const Instagram = require("instagram-web-api");

const username = process.env.USERNAME_INSTAGRAM;
const password = process.env.PASSWORD_INSTAGRAM;

const client = new Instagram({ username, password });

async function getShortCode(photoURL) {
  photoURL = photoURL.replace("https://www.instagram.com/p/", "");
  const cutURL = photoURL.split("/");
  return cutURL[0];
}

//TODO: Example to extract shortcode
(async () => {
  const private_url =
    "https://www.instagram.com/p/CRkj2Q3rZ7lTmBy_J7wVZGyPyVDlWzRPTqr_B40/?utm_medium=copy_link";
  const shortcode = await getShortCode(private_url);
  await client.login();
  const media = await client.getMediaByShortcode({
    shortcode,
  });
  console.log(media.display_url);
})();
