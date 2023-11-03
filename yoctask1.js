import React, { useState } from "react";
import "./styles.css";

export default function App() {
const [query, setQuery] = useState("");
const [data, setData] = useState(null);

const search = () => {
if (!query) {
setData(null);
return;
}
fetch(
`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=y1ZFwiomdYKWy80gtSxU4iEdv165yeOD&rating=G`
)
.then((response) => response.json())
.then((json) => {
setData(json.data);
});
};

return (
<div className="App">
<h1>Search GIF</h1>
<div>
<form
onSubmit={(e) => {
e.preventDefault();
search();
}}
>
<input value={query} onChange={(e) => setQuery(e.target.value)} />{" "}
<input type="submit" value="Search" />
</form>
</div>

{data && (
<div>
<h2>Results</h2>

<ul>
{data.map((d) => (
<li key={d.id}>
<img src={d.images.fixed_width.url} alt={d.title} />
</li>
))}
</ul>
</div>
)}
</div>
);
}
  
