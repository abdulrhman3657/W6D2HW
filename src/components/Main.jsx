function Main() {
  return (
    <div className="text-light">
      <div className="row container">
        <div className="col-lg-6">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&amp;w=70&amp;h=70"
              width="70"
              height="70"
              alt="Watch Riyadh Season 2023 Recap"
              class="object-contain"
            ></img>
            <h3 class="my-4 text-white">Watch Riyadh Season 2023 Recap</h3>
            <button className="btn btn-outline-light">
              Watch more moments
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <video
            style={{ width: "100%" }}
            poster="https://images.ctfassets.net/vy53kjqs34an/5PcL5NRQvrljV31YLYi2UE/738df0fc1368a14eaec969afc8eb555a/Screenshot_2024-09-02_192441.png"
            playsInline
            disablepictureinpicture
            className="cursor-pointer aspect-[16/9]"
            controls
          >
            <source
              src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Main;
