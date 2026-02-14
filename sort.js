const path = './public/friends.json';
const file = Bun.file(path);

try {
  const json = await file.json();

  json.items.sort((a, b) => a.name.localeCompare(b.name));

  await Bun.write(path, JSON.stringify(json, null, 2));

  console.log('sorted');
} catch (error) {
  console.error("couldn't read friends.json");
  console.error(error.message);
}
