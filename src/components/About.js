import React from 'react'

export default function About(props) {
  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">About TextUtils</h1>

    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <p className="lead text-center">
          TextUtils is a versatile utility tool designed to empower users with text manipulation capabilities,
          offering a seamless experience in transforming and managing textual content.
          With an intuitive interface and a wide array of features, TextUtils simplifies the process of manipulating
          text according to various formatting preferences.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h2>Key Features:</h2>

        <ul>
          <li>
            <strong>Text Case Transformation:</strong> TextUtils provides a comprehensive set of options for transforming text cases to meet specific requirements.
            Users can effortlessly convert text to:
            <ul>
              <li>UPPERCASE</li>
              <li>lowercase</li>
              <li>Sentence case</li>
              <li>camelCase</li>
              <li>PascalCase</li>
              <li>snake_case</li>
            </ul>
          </li>

          <li>
            <strong>Space Management:</strong> Eliminate the hassle of dealing with extra spaces in your text.
            TextUtils includes a space management feature that efficiently removes unnecessary spaces, ensuring a clean and well-formatted result.
          </li>

          <li>
            <strong>Copy and Clear Functions:</strong> TextUtils enhances user convenience by offering essential functionalities like copying and clearing text.
            Quickly duplicate your formatted text for use in other applications or clear the content with a single click to start fresh.
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h2>How TextUtils Works:</h2>

        <ol>
          <li>
            <strong>Case Transformation:</strong> Choose from the provided options to transform your text instantly.
            Whether you need your text in uppercase for emphasis or in camel case for programming, TextUtils has you covered.
          </li>

          <li>
            <strong>Space Management:</strong> Utilize the space management feature to clean up text and remove excess spaces between words,
            resulting in a more polished and readable output.
          </li>

          <li>
            <strong>Copy and Clear:</strong> Easily copy the formatted text to your clipboard for immediate use in other applications.
            Alternatively, clear the text area to begin a new text manipulation session.
          </li>
        </ol>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h2>Why Choose TextUtils?</h2>

        <ul>
          <li>
            <strong>User-Friendly Interface:</strong> TextUtils offers an intuitive and user-friendly interface,
            making it accessible to users of all skill levels.
          </li>

          <li>
            <strong>Efficient Text Manipulation:</strong> Save time and effort by using TextUtils for quick and precise text transformations.
          </li>

          <li>
            <strong>Versatile Functionality:</strong> Whether you're a writer, programmer, or general user, TextUtils caters to a wide range of text formatting needs.
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <p className="text-center">
          Enhance your text editing experience with TextUtils – the go-to utility tool for manipulating text with ease.
          Download or use TextUtils online to streamline your text formatting tasks today!
        </p>
      </div>
    </div>
  </div>
  )
}
