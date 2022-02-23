import fetch from 'node-fetch'
const term = "2022-T1"
import { RootObject } from './TimetableResponse'

const urlFor = course => `https://timetable.csesoc.unsw.edu.au/api/terms/2022-T1/courses/${course}`
const getTimetable = (course) => fetch(urlFor(course)).then(r => r.json() as Promise<RootObject>)

let labToClass: { [code: string]: number[] } = {}

getTimetable`COMP6441`.then(j => {
    console.log(j);
    j.classes.filter(c => c.activity === 'Laboratory').forEach((c) => {
        labToClass[c.section] = [...(labToClass[c.section] ?? []), c.classID]
    })

    console.log(labToClass);
})
// fetch(timetableURL`COMP6441`)