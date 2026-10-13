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

   🚨 ONE GAME, BUILT UP ALL SEMESTER. Unit 1 is a clicker so he sees something
   move in the first week. Units 2 to 5 turn it into a REACTOR CONTROL SIM,
   because Kolten designed one already (Claude wrote that code; he did not).
   Nuclear is his current interest, and heat, rods and coolant are real
   feedback-loop thinking. Planes are not gone; the same skills make a flight
   panel later.

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
    { n: 2, name: "Things That Change Over Time", lessons: [
      { title: "Every Frame: _Process and Delta" },
      { title: "Whole Numbers and Decimals: int and float" },
      { title: "Keys on the Keyboard: the Input Map" },
      { title: "A Heat Meter: the Progress Bar" },
      { title: "Numbers You Set in the Inspector: [Export]" },
      { title: "Keeping a Number in Range: Clamp" },
      { title: "Unit 2 Review: The Heat Meter" },
    ]},
    { n: 3, name: "Building the Reactor", lessons: [
      { title: "Designing the Reactor on Paper" },
      { title: "A Scene for Each Part" },
      { title: "Control Rods: the Slider" },
      { title: "Heat Rises When the Rods Come Out" },
      { title: "The Coolant Pump" },
      { title: "The Feedback Loop" },
      { title: "Finding Other Nodes: GetNode" },
      { title: "Unit 3 Review: A Reactor That Runs" },
    ]},
    { n: 4, name: "Warnings, Meltdown and Score", lessons: [
      { title: "Warning Lights: Color From Code" },
      { title: "The Alarm: Playing a Sound" },
      { title: "Meltdown: Game Over" },
      { title: "Try Again: Restarting the Scene" },
      { title: "Keeping Score: Time Survived" },
      { title: "Saving the High Score" },
      { title: "Unit 4 Review: Win, Lose and Warnings" },
    ]},
    { n: 5, name: "Finish It and Share It", lessons: [
      { title: "A Main Menu: Changing Scenes" },
      { title: "Easy, Normal and Hard" },
      { title: "Playtesting and Fixing Bugs" },
      { title: "Your Own Feature" },
      { title: "Exporting Your Game" },
      { title: "Unit 5 Review: Show It Off" },
    ]},
  ],
};

module.exports = { GODOT7 };
