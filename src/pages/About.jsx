import '../styles/about.css'

function About() {
  return (
    <section className="about-page" aria-label="About Clover">
      <div className="about-left">
        <div className="about-circle-stack">
          <div className="about-arc-css" aria-hidden="true">
            <span className="arc-char arc-1">A</span>
            <span className="arc-char arc-2">B</span>
            <span className="arc-char arc-3">O</span>
            <span className="arc-char arc-4">U</span>
            <span className="arc-char arc-5">T</span>
            <span className="arc-char arc-gap arc-6">&nbsp;</span>
            <span className="arc-char arc-7">U</span>
            <span className="arc-char arc-8">S</span>
          </div>

          <article className="about-circle" aria-label="Welcome message">
            <div className="about-circle-copy">
              <h2>WELCOME - WE ARE REALLY GLAD YOU ARE HERE.</h2>
              <p>
                Whether you are feeling stressed, curious, bored, overwhelmed, or just killing
                time, this space is for you. You do not need to have a reason or a label to be
                here. If you are looking for support, great. If you are just here to explore,
                play a few calming games, or see what this is about, that is awesome too. Think
                of this as a low-pressure space to pause, reset, and check in with yourself, no
                matter where you are.
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="about-right">
        <p>
          Our platform connects clients, therapists, and guests in one shared space designed
          to feel simple and supportive. Clients can book sessions, track thoughts or feelings
          between appointments, and reflect on them with their therapist during sessions.
          Therapists get a clearer picture of what has been happening in real time. And if you
          are here as a guest, you can still check in, explore mood-based tools, and play
          gentle games suggested by AI to help you calm down, focus, or unwind. This is not
          about forcing therapy; it is about making mental health support feel more accessible,
          flexible, and human, whether you are all in or just testing the waters.
        </p>
      </div>
    </section>
  )
}

export default About
