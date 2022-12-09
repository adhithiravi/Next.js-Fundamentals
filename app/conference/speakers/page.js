import Link from "next/link";

async function fetchData() {
  const response = await fetch(
    `https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json`
  );

  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchData();

  return (
    <>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      <h2>
        <Link href="/conference">Back to Conference</Link>
      </h2>
      {data.speakers.map(({ id, name, bio }) => (
        <div key={id} style={{ padding: 5 }}>
          <h3>Speaker: {name}</h3>
          <h5>Bio: {bio}</h5>
        </div>
      ))}
    </>
  );
}
