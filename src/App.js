import React, { useState } from "react";

export default function App() {
  const [skills, setSkills] = useState([{ skill: "JavaScript", level: 4 }])

  const [form, setForm] = useState({
    skill: "",
    level: "3"
  })

  function addSkill() {
    alert("ADD SKILL CLICKED");
  }

  function handleChange(event) {
// // make a copy of current state
//     const newState = {...form}
//     newState[event.target.name] = event.target.value
//     setForm(newState)
setForm({...form, [event.target.name]: event.target.value})
  }

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input name="skill" value={form.skill} onChange={handleChange}/>
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={form.level} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}

