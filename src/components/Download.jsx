// structure for this was found by searching various informative websites

import SchreierResume from '../assets/SchreierResume.pdf';

export default function Download() {
  return (
    <div>
      <a
        href={SchreierResume}
        download="Resume-Schreier-Zachary"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download my resume here!</button>
      </a>
    </div>
  );
}