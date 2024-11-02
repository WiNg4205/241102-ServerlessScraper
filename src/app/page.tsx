"use client"

export default async function Home() {
  const data = await fetch("https://cui62vu26d.execute-api.ap-southeast-2.amazonaws.com/default/OligarchyScraper");
  const companies = await data.json();
  return (
    <div>
      hello
      {companies}
    </div>
  );
}
