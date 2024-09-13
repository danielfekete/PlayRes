import React from 'react'

export default function About() {
  return (
    <div className="space-y-4 py-4 container">
      <div>
        <h2 className="text-2xl font-bold">Purpose of the Site</h2>
        <p>
          PlayRes was created to compile information for gamers on how specific games run with
          various performance settings on different consoles. The site focuses exclusively on the
          most important graphical settings. Often, I found myself watching multiple videos to get a
          comprehensive understanding of a game's graphical settings across different platforms.
          This site can also be helpful for those who are considering purchasing a console. With
          PlayRes, they can examine which console is the best choice for the games they plan to
          play.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold">What the Site Offers</h2>
        <ul>
          <li>
            Detailed Game Performance Metrics: Every game’s performance is analyzed on
            current-generation consoles, covering key details such as resolution, frame rate, HDR
            support, Ray Tracing, 3D audio, and much more.
          </li>
          <li>
            Search and Filter Features: Easily search for games based on specific features or tags,
            like "4K," "60 FPS," or "Ray Tracing."
          </li>
          <li>
            Regular Updates: The database is continuously updated with new games and performance
            data, ensuring the most accurate information is always available.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Future Plans</h2>
        <ul>
          <li>
            Platform Comparisons: See how a game performs side-by-side on different platforms,
            helping you make the best decision for your gaming setup.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Credits</h2>
        <p>
          This site wouldn’t have been possible without the inspiration from
          backwards-compatible.com, which gave the idea for creating PlayRes. The site also wouldn’t
          exist without the team at Digital Foundry, who analyze and compare game performance across
          various platforms. Finally, the site wouldn't be complete without the gaming community,
          who continually contribute to the database and help improve the site with their feedback.
        </p>
        <p>
          All console and platform icons are provided by{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            Flaticon
          </a>
          .
        </p>
        <ul>
          <li>
            <a href="https://www.flaticon.com/free-icons/sony" title="sony icons">
              Sony logo icon created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/xbox" title="xbox icons">
              Xbox logo icon created by Pixel perfect - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/nintendo" title="nintendo icons">
              Nintendo logo icon created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/playstation-5" title="playstation 5 icons">
              Playstation 5, Xbox Series X, Xbox Series S console icons created by BITQUBIT -
              Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/nintendo" title="nintendo icons">
              Nintendo Switch console icon created by magnemizer - Flaticon
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Get Involved</h2>
        <p>
          If you find any inaccuracies or omissions regarding a specific game, please let me know.
          If you notice a missing game from the list, use the "add games" feature to notify me. Any
          ideas or suggestions regarding the site are also warmly welcomed.
        </p>
      </div>
    </div>
  )
}
