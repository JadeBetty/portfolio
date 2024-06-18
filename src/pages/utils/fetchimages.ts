// export async function fetchImgurImages() {
//   const names = [];
//   const urlArray = (await import("../../../imageslist.json")).images;
//   urlArray.forEach((url) => {
//     const parts = url.split("/");
//     const targetPart = parts.find((part) => part.includes(".jpeg"));
//     const splitTarget = targetPart.split(".");
//     names.push(splitTarget);
//   });

//   for (const name of names) {
//     const response = await fetch(`https://api.imgur.com/3/image/${name}`, {
//       headers: {
//         Authorization: `Client-ID ${import.meta.env.clientid}`,
//       },
//     });

//     const data = await response.json();
//     console.log(data)
//     return data;
//   }
// }
