/* ─────────────────────────────────────────────────────────────────────────
   coding-units.js — Game Coding, an ELECTIVE under Extras › Electives. Godot 4
   with C#. 🚨 NOT a grade 7 class (Paul, 2026-10-13: "its not specifically a 7th
   grade class"). `grade: 7` below and `shelf.grades: [7]` on the lessons are an
   internal level marker the guards need; no page shows a grade.

   Paul, 2026-10-13: "lets start setting thing up for him to do coding" and
   "this is an elective inside NexStudents ... I want you to build unit one
   lessons ... put a full semester just like the year long lesson planner."
   It STARTS in the second semester (decided 2026-09-07); this is a head start.

   🚨 THE COURSE IS OURS. There is no textbook. The teaching ORDER comes from
   reading four YouTube courses on 2026-10-13 (Brackeys' Godot beginner
   tutorial, Microsoft's Godot C# Essentials, Arkade Games' C# Basics in Godot,
   Godot Basics' C# setup). Nothing was copied; their order and their warnings
   were used. Their video ids sit on each lesson's `videos`, for a parent to add.

   🚨 ONE GAME, BUILT UP ALL SEMESTER, OUR OWN DESIGN. Unit 1 is a clicker so he
   sees something work in the first week. Units 2 to 5 build a ROLLING-BALL
   PUZZLE seen from above: a physics ball steered with the arrow keys, walls,
   a goal hole, holes that reset it, switches, gates, keys, two levels. Paul,
   2026-10-13: "we don't need to make a reactor game ... kind of like a moving
   game ... a puzzle game with like a ball that moves around". (The reactor plan
   was dropped the same day.)

   36 lessons, 2 a week, 18 weeks → coding-plan.js. Every unit ends in a review.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

const GODOT7 = {
  grade: 7,
  name: "Game Coding",
  tool: "Godot 4 (.NET) with C#",
  units: [
    { n: 1, name: "Your First Game Window", lessons: [
      { title: "Set Up and Press Play", slug: "coding/set-up-and-press-play" },
      { title: "Nodes: A Number on the Screen", slug: "coding/nodes-a-number-on-the-screen" },
      { title: "Your First C# Script", slug: "coding/your-first-csharp-script" },
      { title: "Variables and Your First Click", slug: "coding/variables-and-your-first-click" },
      { title: "Your Own Methods: Down and Reset", slug: "coding/your-own-methods" },
      { title: "If and Else: Red Past 100", slug: "coding/if-and-else" },
      { title: "A Timer That Counts by Itself", slug: "coding/a-timer-that-counts" },
      { title: "Unit 1 Review: A Clicker From Scratch", slug: "coding/unit-1-review" },
    ]},
    { n: 2, name: "A Ball That Rolls", lessons: [
      { title: "A Ball Scene: RigidBody2D" },
      { title: "Seen From Above: Turning Off Gravity" },
      { title: "Arrow Keys: the Input Map" },
      { title: "Pushing the Ball: Forces" },
      { title: "Slowing Down by Itself: Damping" },
      { title: "Walls to Bounce Off" },
      { title: "Unit 2 Review: Steer the Ball" },
    ]},
    { n: 3, name: "The First Puzzle Room", lessons: [
      { title: "Designing a Room on Paper" },
      { title: "Building the Walls" },
      { title: "The Goal Hole: Area2D" },
      { title: "You Win! Signals From the Goal" },
      { title: "Holes That Send You Back" },
      { title: "A Timer on the Screen" },
      { title: "Your Best Time" },
      { title: "Unit 3 Review: A Room You Can Solve" },
    ]},
    { n: 4, name: "Puzzle Pieces", lessons: [
      { title: "A Switch That Opens a Gate" },
      { title: "A Key and a Locked Door" },
      { title: "Pieces You Make Once: Reusing Scenes" },
      { title: "Press R to Restart" },
      { title: "Building a Harder Room" },
      { title: "Fair or Too Hard? Testing a Puzzle" },
      { title: "Unit 4 Review: A Puzzle With Every Piece" },
    ]},
    { n: 5, name: "Finish It and Share It", lessons: [
      { title: "A Second Level: Changing Scenes" },
      { title: "A Main Menu" },
      { title: "Sounds for Rolling, Clicks and Winning" },
      { title: "Playtesting and Fixing Bugs" },
      { title: "Exporting Your Game" },
      { title: "Unit 5 Review: Show It Off" },
    ]},
  ],
};

module.exports = { GODOT7 };
