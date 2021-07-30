export function getShortCode(photoURL) {
  photoURL = photoURL.replace("https://www.instagram.com/p/", "");
  const cutURL = photoURL.split("/");
  return cutURL[0];
}
