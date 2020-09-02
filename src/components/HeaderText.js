import SampleWallpapers from "./SampleWallpapers"
import SearchBar from "./SearchBar"

function HeaderText() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel Heros</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <SearchBar />
        <SampleWallpapers/>
      </div>
    </header>

  )
}

export default HeaderText
