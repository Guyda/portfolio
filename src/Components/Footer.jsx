import useTrigger from "../Hooks/useTrigger";

export default function Footer() {

  const f = useTrigger({trigger:'.footer-wrapper',start:'top bottom', toggleClass:'animate'});

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <div className="website-nav">website nav</div>
          <div className="social">social</div>
          <div className="copyright">©guyda.com 2023</div>
        </div>
        <div className="bg-warped"></div>
      </div>
    </footer>
  )
}