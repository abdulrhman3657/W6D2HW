

function Cards() {
  return (
    <div className="text-light">

      <h1 className="p-3 m-3">14 Zones to Explore</h1>

      {/* cards */}
      <div>

          <img width={"500vh"} height={"400vh"} src="https://images.ctfassets.net/vy53kjqs34an/14DUIlTcHUbI5BXufzpwWy/36e1e391f3b2ea884fc58223c737c616/KV-Webook-Sizes_1280x1280.jpg?fm=webp&fit=crop&w=1280&h=1280"/>

          {/* style={{position:"absolute", top:0, translate:"50%"}} */}
          <div style={{position:"absolute", top:"25%", left:"15%"}} className="">
            <div className="d-flex flex-column gap-3">
              <img width={"10%"} height={"20%"}  src="https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png?fm=webp&fit=pad&w=140&h=140"/>
              <img width={"10%"} height={"20%"}  src="https://images.ctfassets.net/vy53kjqs34an/3rth2yenJlvYpm0TM6eXoq/ddb4f053ec4183b88a4f0a59b4f72d2e/stc.png?fm=webp&fit=crop&w=1182&h=591"/>
            </div>
          </div>

    </div>
  )
}

export default Cards