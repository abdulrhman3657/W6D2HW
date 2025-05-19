import React from 'react'

function Navbar() {
  return (
    <div style={{height:"100vh"}}> 

        <nav style={{backgroundColor: "rgba(2, 2, 2, 0.3)"}} className="navbar navbar-dark">
            <div className="container-fluid">
                <button style={{color:"white"}} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="offcanvas offcanvas-start bg-dark offcanvas text-light" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-theme="dark">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body d-flex flex-column">
                        <button className='btn btn-primary'>View Booklet</button>

                        <hr />

                        {/* cards container */}
                        <div>
                            {/* card */}
                            <div className=''>
                                <img src="https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/6eDxJWXdHS88l75iyavOxy/44228eeeda81be38cad907de431d2730/Group_17.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/2cwkQqOfarbvwKrRArrm0q/95b7ce8c48bca3c6e62fab086a2c8431/image__6_.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/5lYdlk9aE4Gm5BXPrBUS9u/985f3ecfb29612e70dd4b51261907e69/woncer_garden.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/3ip6OxVwP8YhIKmTo2HF5B/1bcd099801ab242f6bd24b962f95e114/BLVD_Runway_logo__2.16.10_PM.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/5OziW71cfEHu2ZHlpZE9r4/3cc7ce289cb04c9593c7fecfa29c026f/dior.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/2x3IWScrpgS5qmSHdHO1ZZ/157d3b0ac07f573cb54838320cd3900a/logo_-_souq_alawaleen.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/5qWHe4Mz7dV7UMIm7FYBqO/542524ea5d3657532cc09ca05837a974/ZOO_LOGO_COLOR_1.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/6z0n8tKquAhrZ1x7fGIjch/09670cb1d007288951b014e9c60b390d/via_ryiadh_logo.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/CFFciZlqL3ZsM5ARaumIe/7460d0838b8db6972d35cd160c99cb9a/Logo-01.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/1rWTEO7FjOBMPvGdMdcHIv/6a131f379557983b8194e089286b534f/the_groves_3d_Gold.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                {/* <img width={"50px"} src="https://images.ctfassets.net/vy53kjqs34an/4DDmYgKKIek7m9wCAiTevw/dea1c4fbd8d0c50396716bbb8c2a363d/tawinia.png?fm=webp&w=1000&h=305" alt="" /> */}
                                <img src="https://images.ctfassets.net/vy53kjqs34an/5r8tSDwbIB3S1ahKWFvFib/761ec6260acec1e690a0e2da7e7b05dc/logo.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/29JmIZyaUXDTJZBNyRql1I/866b0fd369cfc49dfdf12e7dc01c78b5/Al_Hesn_Studios_Logo_new.png?fm=webp&fit=pad&w=100&h=100" alt="" />
                            </div>

                            <hr />

                            <div className='d-flex align-items-center justify-content-center'>
                                <img src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&w=55&h=55" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&w=55&h=55" alt="" />
                                <img src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&w=55&h=55" alt="" />
                            </div>

                        </div>

                    </div> 
                </div>

                <img src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110" alt="" />

                <div className='d-flex gap-3 align-items-center'>
                    <a className='text-light' href="">العربية</a>
                    <button className='btn btn-primary'>View Booklet</button>
                </div>
            </div>
        </nav>

        {/* cursor-pointer absolute -z-20 h-full w-full object-cover */}
        <video style={{position: "absolute", top: 0, width:"100%", height:"100vh", objectFit:"cover",  zIndex: -1}} playsInline disablepictureinpicture className="" autoPlay loop muted>
            <source src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4" type="video/mp4" />
        </video>

        <div style={{height:"75vh"}} className='d-flex align-items-end justify-content-around'>

            <h1 style={{fontSize:"70px"}} className='text-white w-50'>
                Welcome to Riyadh Season 2024
            </h1>


            <div className='d-flex align-items-center gap-3'>
                <a style={{textDecoration:"none", color:"white"}} href="">Explore</a>
                <button className='btn btn-primary'>Book tickets</button>
            </div>

        </div>

    
    </div>
  )
}

export default Navbar