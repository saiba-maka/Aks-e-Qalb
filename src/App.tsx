
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Heart,
  Menu,
  Moon,
  Feather,
  Flower2,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import "./index.css";

const articles = [
  {
    category: "THE HUMAN REALITY",
    title: "Not Every Smile Means Someone Is Happy",
    description:
      "Sometimes the people who seem the happiest are carrying feelings they cannot explain.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
    color: "rose",
    read: "5 min read",
  },
  {
    category: "PSYCHOLOGY & FACTS",
    title: "Is Every Sad Feeling Depression?",
    description:
      "Understanding the difference between everyday sadness and clinical depression.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    color: "peach",
    read: "7 min read",
  },
  {
    category: "FAITH & REFLECTION",
    title: "The Meaning of Sabr During Difficult Times",
    description:
      "Exploring patience, hope and the strength of trusting Allah through hardship.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
    color: "cream",
    read: "6 min read",
  },
];

const topics = [
  {
    icon: Heart,
    number: "01",
    title: "The Human Reality",
    description:
      "Real emotions, unspoken struggles and the experiences that make us human.",
    link: "#human-reality",
    className: "topic-rose",
  },
  {
    icon: Brain,
    number: "02",
    title: "Understanding the Mind",
    description:
      "Psychology, research and facts that help us understand what happens within us.",
    link: "#psychology",
    className: "topic-peach",
  },
  {
    icon: Moon,
    number: "03",
    title: "Faith & Reflection",
    description:
      "Meaningful Islamic perspectives on emotions, hardship, hope and healing.",
    link: "#faith",
    className: "topic-cream",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reflection, setReflection] = useState("");

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-symbol">
            <Flower2 size={25} strokeWidth={1.3} />
          </span>
          <span className="brand-name">
            Aks-e-Qalb
            <small>عکسِ قلب</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#explore" onClick={closeMenu}>Explore</a>
          <a href="#psychology" onClick={closeMenu}>Psychology & Facts</a>
          <a href="#faith" onClick={closeMenu}>Faith & Reflection</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#resources" className="nav-cta" onClick={closeMenu}>
            Find Support <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={14} /> A SPACE FOR THE HUMAN HEART
          </span>

          <h1>
            A gentle place to
            <br />
            understand the
            <br />
            <em>things we feel.</em>
          </h1>

          <p className="hero-description">
            Some feelings are difficult to explain. Some struggles are
            difficult to share. Here, we explore the human experience
            through psychology, faith and the realities of life.
          </p>

          <div className="hero-actions">
            <a href="#explore" className="button-primary">
              Explore Aks-e-Qalb <ArrowRight size={17} />
            </a>
            <a href="#about" className="button-text">
              Discover our purpose
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Beyond What We Feel. Understanding What We Face.
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-image-frame">
            <img
              src="https://i.pinimg.com/originals/ab/4a/21/ab4a21893a678e5c59b7cd6371e274a6.jpg"
              alt="Soft pink flowers illuminated by gentle natural light"
            />
            <div className="image-overlay" />
            <div className="image-caption">
              <span>A moment to pause</span>
              <span>✳</span>
            </div>
          </div>

          <div className="floating-note">
            <Flower2 size={21} strokeWidth={1.3} />
            <span>
              Every heart
              <br />
              has a story.
            </span>
          </div>

          <div className="hero-star star-one">✳</div>
          <div className="hero-star star-two">✧</div>
        </div>

        <a href="#about" className="scroll-indicator" aria-label="Scroll down">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section section-padding" id="about">
        <div className="intro-decoration">❋</div>
        <span className="eyebrow">A LITTLE ABOUT US</span>
        <h2>
          Because understanding
          <br />
          <em>is where everything begins.</em>
        </h2>
        <p>
          Aks-e-Qalb is a space dedicated to mental health awareness,
          emotional understanding and human wellbeing. We bring together
          psychological knowledge, meaningful Islamic perspectives and
          real-life experiences to make difficult conversations a little
          easier.
        </p>
        <a href="#explore" className="text-link">
          Discover what we believe <ArrowUpRight size={16} />
        </a>
      </section>

      {/* EXPLORE TOPICS */}
      <section className="explore-section section-padding" id="explore">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE THE JOURNEY</span>
            <h2>
              Different perspectives.
              <br />
              <em>One human experience.</em>
            </h2>
          </div>
          <p>
            There is more than one way to understand what we feel.
            Explore the perspectives that bring us closer to ourselves.
          </p>
        </div>

        <div className="topic-grid">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <a
                href={topic.link}
                className={`topic-card ${topic.className}`}
                key={topic.number}
              >
                <div className="topic-top">
                  <span>{topic.number}</span>
                  <Icon size={27} strokeWidth={1.3} />
                </div>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
                <span className="topic-link">
                  Explore this space <ArrowUpRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* HUMAN REALITY */}
      <section className="human-section section-padding" id="human-reality">
        <div className="human-image">
          <img
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=85"
            alt="A peaceful, thoughtful moment"
          />
          <span className="image-label">THE HUMAN EXPERIENCE</span>
        </div>

        <div className="human-content">
          <span className="eyebrow">01 — THE HUMAN REALITY</span>
          <h2>
            Every heart
            <br />
            <em>carries a story.</em>
          </h2>
          <p>
            The pressure to succeed. The silence after a loss. The
            loneliness nobody notices. The exhaustion behind a smile.
          </p>
          <p>
            Our everyday experiences shape how we think, feel and live.
            Yet so many of these experiences remain unspoken.
          </p>
          <a href="#articles" className="button-outline">
            Read human stories <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* PSYCHOLOGY */}
      <section className="psychology-section section-padding" id="psychology">
        <div className="psychology-heading">
          <span className="eyebrow">02 — PSYCHOLOGY & FACTS</span>
          <h2>
            Understanding begins
            <br />
            <em>with knowledge.</em>
          </h2>
          <p>
            Let's move beyond assumptions and explore what psychology
            and research actually tell us about the human mind.
          </p>
        </div>

        <div className="knowledge-grid">
          <div className="knowledge-item">
            <Brain size={29} strokeWidth={1.3} />
            <h3>Understand emotions</h3>
            <p>Learn why we experience different emotions and how they affect us.</p>
          </div>
          <div className="knowledge-item">
            <BookOpen size={29} strokeWidth={1.3} />
            <h3>Explore the facts</h3>
            <p>Discover evidence-based knowledge without confusing myths.</p>
          </div>
          <div className="knowledge-item">
            <Sparkles size={29} strokeWidth={1.3} />
            <h3>Grow awareness</h3>
            <p>Recognise struggles and understand when support may be helpful.</p>
          </div>
        </div>

        <a href="#articles" className="text-link">
          Explore psychology articles <ArrowUpRight size={16} />
        </a>
      </section>

      {/* FAITH */}
      <section className="faith-section section-padding" id="faith">
        <div className="faith-decoration">✧</div>
        <div className="faith-content">
          <span className="eyebrow">03 — FAITH & REFLECTION</span>
          <h2>
            A little light
            <br />
            <em>for the heart.</em>
          </h2>
          <p>
            Faith can offer meaning, comfort and hope through life's
            difficult moments. Here, we explore Islamic teachings with
            care, authenticity and thoughtful reflection.
          </p>
          <div className="faith-words">
            <span>Sabr</span>
            <i>✧</i>
            <span>Rahmah</span>
            <i>✧</i>
            <span>Tawakkul</span>
          </div>
          <a href="#articles" className="button-primary">
            Explore faith & reflection <ArrowRight size={17} />
          </a>
        </div>
        <div className="faith-art">
          <div className="faith-circle">
            <div className="faith-circle-inner">
              <Moon size={43} strokeWidth={1} />
              <span>نور</span>
              <small>LIGHT</small>
            </div>
          </div>
          <span className="faith-art-caption">
            Finding hope, one reflection at a time.
          </span>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles-section section-padding" id="articles">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WORDS WORTH EXPLORING</span>
            <h2>
              Stories, facts
              <br />
              <em>and reflections.</em>
            </h2>
          </div>
          <p>
            Thoughtful reads to help you understand yourself,
            the people around you and the world within.
          </p>
        </div>

        <div className="article-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <a href="#resources" className="article-image">
                <img src={article.image} alt="" />
                <span className={`article-number ${article.color}`}>
                  0{index + 1}
                </span>
              </a>
              <div className="article-info">
                <div className="article-meta">
                  <span>{article.category}</span>
                  <small>{article.read}</small>
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href="#resources" className="article-link">
                  Read the story <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REFLECTION */}
      <section className="reflection-section section-padding" id="reflection">
        <div className="reflection-decoration">✳</div>
        <span className="eyebrow">A MOMENT WITH YOURSELF</span>
        <h2>
          Pause. Breathe.
          <br />
          <em>Listen to your heart.</em>
        </h2>
        <p>
          Sometimes, understanding begins with a simple question.
          Take a moment and reflect. There is no right or wrong answer.
        </p>

        <div className="reflection-box">
          <span className="reflection-label">TODAY'S REFLECTION</span>
          <h3>What is something you wish people understood about you?</h3>
          <textarea
            value={reflection}
            onChange={(event) => setReflection(event.target.value)}
            placeholder="Take your time. Write whatever comes to your heart..."
            rows={4}
          />
          <div className="reflection-bottom">
            <span>Your reflection stays in this page only.</span>
            <button
              className="reflection-clear"
              onClick={() => setReflection("")}
              disabled={!reflection}
            >
              Clear reflection
            </button>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="support-section section-padding" id="resources">
        <div className="support-icon">
          <Heart size={29} strokeWidth={1.3} />
        </div>
        <span className="eyebrow">BEYOND AWARENESS</span>
        <h2>
          You don't have to
          <br />
          <em>figure everything out alone.</em>
        </h2>
        <p>
          Learning about mental wellbeing is an important first step.
          If something feels overwhelming, reaching out to a qualified
          mental health professional can be another meaningful step.
          Seeking help is not a failure of faith or strength.
        </p>
        <a href="#footer" className="button-primary">
          Find your next step <ArrowRight size={17} />
        </a>
        <small>
          Aks-e-Qalb is an educational awareness platform, not a
          substitute for professional diagnosis, treatment or emergency care.
        </small>
      </section>

      {/* CLOSING */}
      <section className="closing-section">
        <Flower2 size={29} strokeWidth={1.2} />
        <h2>
          May you find understanding
          <br />
          <em>where you once found silence.</em>
        </h2>
        <p>With care, from Aks-e-Qalb.</p>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-symbol">
                <Flower2 size={25} strokeWidth={1.3} />
              </span>
              <span className="brand-name">
                Aks-e-Qalb
                <small>عکسِ قلب</small>
              </span>
            </a>
            <p>
              A space for understanding the mind, embracing human
              experiences and finding meaning through faith.
            </p>
          </div>

          <div className="footer-links">
            <h4>EXPLORE</h4>
            <a href="#human-reality">The Human Reality</a>
            <a href="#psychology">Psychology & Facts</a>
            <a href="#faith">Faith & Reflection</a>
            <a href="#articles">Articles</a>
          </div>

          <div className="footer-links">
            <h4>ABOUT</h4>
            <a href="#about">Our Purpose</a>
            <a href="#reflection">Self Reflection</a>
            <a href="#resources">Resources & Support</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aks-e-Qalb. Made with care.</span>
          <span>Beyond What We Feel. Understanding What We Face.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
