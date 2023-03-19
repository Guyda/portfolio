export default function Home(){

  return (
    <div className="home">

      <section className="intro">
        <div class="logo">
          <span class="wrapper">
            <span class="bracket open">&lt;</span>
            <span class="word">Guyda</span>   
            <span class="bracket close">/&gt;</span>
          </span>
        </div>
      </section>

      <section className="section">
        <div className="block-content">
          <div className="mark" aria-hidden="true">&lt;/&gt;</div>
          <h2 className="headline">Crafting the web from top to bottom, <br/>one click at a time.</h2>
          <p>As a full-stack web developer, I bring a unique combination of technical and creative skills to the table, allowing me to create dynamic and engaging websites that meet the needs of both users and clients.</p>
        </div>
        <div className="ledge dark"></div>
      </section>

      <section className="section half-height">
        <div className="block-content">
          <button>View Selected Work</button>
        </div>
      </section>
    
    </div>
  )
}