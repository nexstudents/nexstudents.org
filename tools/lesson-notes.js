/* tools/lesson-notes.js - TEACHER NOTES: PER-STUDENT VIDEOS AND THE PIN (2026-10-12)
   ===============================================================================
   ROADMAP 92. Paul: lessons stop shipping YouTube videos; a parent adds them per
   student inside Teacher Notes, the Visual Panel plays the active student's, the
   bottom Retake goes away (the reset lives only in Teacher Notes), and opening
   Teacher Notes asks for the PIN unless the teacher turned that off.

   ONE DEFINITION FOR ALL FIVE ENGINES. The client code is a plain file
   (lesson-notes-client.js) and the styles are lesson-notes.css, both read off disk
   here, so no template literal ever has to carry them. lesson-footer.js appends the
   styles to footerCss() and the script to lessonFoot(), and every generator already
   fills those two slots; none of the five templates needed a new one.
   extract-lesson-assets.js lifts the identical script out to /assets/ like the rest. */
'use strict';
const fs = require('fs');
const path = require('path');

const read = (f) => fs.readFileSync(path.join(__dirname, f), 'utf8');

function notesCss() { return '\n' + read('lesson-notes.css'); }

/* 🚨 A script is closed by that tag and nothing else, so refuse a client file that
   contains one. Everything else in the file is inert text to the HTML parser. */
function notesScript() {
  const js = read('lesson-notes-client.js');
  if (/<\/script/i.test(js)) throw new Error('lesson-notes-client.js must not contain a closing script tag');
  return '<script>\n' + js + '\n</script>';
}

module.exports = { notesCss, notesScript };
