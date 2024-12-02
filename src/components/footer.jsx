export default function Footer() {
  return (
    <footer>
      <p>Alex Funk - 2024</p>   
      <div className="footerButtons">
        <button
          className="github"
          onClick={() => {
            window.open("https://github.com/DAlexFunk");
          }}
        ></button>
        <button
          className="linkedin"
          onClick={() => {
            window.open("https://www.linkedin.com/in/dalexfunk");
          }}
        ></button>
      </div>
    </footer>
  );
}
