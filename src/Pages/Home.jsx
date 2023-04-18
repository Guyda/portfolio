import useTrigger from "../Hooks/useTrigger";

export default function Home(){

  const t = useTrigger({trigger:'.ledge',start:'top 66%', toggleClass:'animate'});

  return (
    <div className="home">

      <section className="intro">
        <div className="logo">
          <span className="wrapper">
            <span className="bracket open">&lt;</span>
            <span className="word">Guyda</span>   
            <span className="bracket close">/&gt;</span>
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